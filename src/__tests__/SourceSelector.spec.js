import React from 'react'
import { shallow } from 'enzyme'
import SourceSelector from '../components/SourceSelector'

describe('<SourceSelector />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<SourceSelector />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a select element', () => {
    expect(wrapper.find('select').length).toEqual(1)
  })
})
