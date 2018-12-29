import React from 'react'
import { shallow, mount } from 'enzyme'
import axios from 'axios'
import ArticleSummary from '../components/ArticleSummary'
import { config } from '../config'

jest.mock('axios')
jest.useFakeTimers()

describe('<ArticleSummary />', () => {
  var wrapper
  var location
  var response

  beforeAll(() => {
    response = {
      data: {
        sentences: ['One', 'Two', 'Three', 'Four', 'Five']
      }
    }
    axios.get.mockResolvedValue(response)

    location = {
      state: {
        id: 0,
        headline: 'TestHeadline',
        url: 'TestUrl'
      }
    }
    wrapper = shallow(<ArticleSummary location={location} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('has a link to an article', () => {
    expect(wrapper.find('SummaryHeadline').length).toEqual(1)
  })

  it('makes a request to the correct API with the related URL', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(`${config.aylienUrl}TestUrl`, {
      headers: {
        'X-AYLIEN-TextAPI-Application-Key': process.env.REACT_APP_AYLIEN_KEY,
        'X-AYLIEN-TextAPI-Application-ID': process.env.REACT_APP_AYLIEN_ID
      }
    })
  })

  it('renders the SummaryText', () => {
    expect(wrapper.find('SummaryText').length).toEqual(1)
  })

  it('has a summary headline based on its state', () => {
    const secondWrapper = mount(<ArticleSummary location={location} />)
    const link = secondWrapper.find('SummaryHeadline')

    expect(link.text()).toEqual('TestHeadline')
    expect(link.props().url).toEqual('TestUrl')
  })

  it('displays a "loading" message if there are no sentences loaded', () => {
    let emptyResponse = {
      data: {
        sentences: []
      }
    }
    axios.get.mockResolvedValue(emptyResponse)

    const secondWrapper = mount(<ArticleSummary location={location}/>)
    const summaryText = secondWrapper.find('.summaryText')

    expect(summaryText.text()).toEqual('Loading summary...')
  })
})
