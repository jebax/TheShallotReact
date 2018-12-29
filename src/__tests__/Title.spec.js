import React from 'react'
import { shallow } from 'enzyme'
import Title from '../components/Title'

describe('<Title />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<Title />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('has a link to the home page in the title', () => {
    const link = wrapper.find('Link')
    expect(link.props().id).toEqual('shallotTitle')
    expect(link.props().to).toEqual({ pathname: '/' })
  })
})
