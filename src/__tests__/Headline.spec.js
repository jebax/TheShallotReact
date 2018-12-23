import React from 'react'
import { shallow } from 'enzyme'
import Headline from '../components/Headline'

describe('<Headline />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<Headline />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a headline wrapper', () => {
    expect(wrapper.find('#headline-wrapper').length).toEqual(1)
  })

  it('renders a headline', () => {
    expect(wrapper.find('#headline').length).toEqual(1)
  })
})
