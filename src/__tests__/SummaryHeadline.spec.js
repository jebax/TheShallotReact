import React from 'react'
import { shallow } from 'enzyme'
import SummaryHeadline from '../components/SummaryHeadline'

describe('<SummaryHeadline />', () => {
  var wrapper
  var headline

  beforeAll(() => {
    wrapper = shallow(
      <SummaryHeadline
        headline='TestHeadline'
        url='TestUrl'
      />
    )

    headline = wrapper.find('.summary-headline')
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('loads the correct headline', () => {
    expect(headline.text()).toEqual('TestHeadline')
  })

  it('links to the correct url', () => {
    expect(headline.props().href).toEqual('TestUrl')
  })
})
