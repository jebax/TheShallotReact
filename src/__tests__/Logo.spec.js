import React from 'react'
import { shallow } from 'enzyme'
import Logo from '../components/Logo'

describe('<Logo />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<Logo />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders an image', () => {
    expect(wrapper.find('img').length).toEqual(1)
  })
})
