import React from 'react'
import { shallow } from 'enzyme'
import axios from 'axios'
import ArticleSummary from '../components/ArticleSummary'
import { config } from '../config'

jest.mock('axios')

describe('<ArticleSummary />', () => {
  var wrapper

  beforeAll(() => {
    axios.get.mockResolvedValue({})
    const location = {
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
    expect(wrapper.find('a').length).toEqual(1)
  })

  it('has a link based on its state', () => {
    const link = wrapper.find('a')

    expect(link.text()).toEqual('TestHeadline')
    expect(link.props().href).toEqual('TestUrl')
  })

  it('makes a request to the correct API with the related URL', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(`${config.aylienUrl}TestUrl`, {
      headers: {}
    })
  })
})
