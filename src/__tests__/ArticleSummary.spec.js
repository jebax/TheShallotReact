import React from 'react'
import { shallow } from 'enzyme'
import ArticleSummary from '../components/ArticleSummary'

describe('<ArticleSummary />', () => {
  var wrapper

  beforeAll(() => {
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
})
