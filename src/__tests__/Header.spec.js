import React from 'react'
import { shallow } from 'enzyme'
import Header from '../components/Header'

describe('<App />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<Header />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a header', () => {
    expect(wrapper.find('header').length).toEqual(1)
  })

  it('renders the Title', () => {
    expect(wrapper.find('Title').length).toEqual(1)
  })

  it('renders the Logo', () => {
    expect(wrapper.find('Logo').length).toEqual(1)
  })
})
