import React from 'react'
import { shallow, mount } from 'enzyme'
import SourceSelector from '../components/SourceSelector'

describe('<SourceSelector />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(
      <SourceSelector
        changeFunction={() => {}}
      />
    )
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a select element', () => {
    expect(wrapper.find('select').length).toEqual(1)
  })

  it('should have multiple select options', () => {
    const selector = wrapper.find('select')

    selector.simulate('click')
    expect(wrapper.find('option').length).toBeGreaterThan(1)
  })

  it('should default to BBC News, and have BBC as first option', () => {
    const selector = wrapper.find('select')

    expect(selector.props().value).toEqual('BBC News')

    selector.simulate('click')

    const firstOption = wrapper.find('option').first()
    expect(firstOption.text()).toEqual('BBC News')
  })

  it('changes its value correctly', () => {
    const selector = wrapper.find('select')
    selector.simulate('change', { target: { value: 'RandomOption' } })

    expect(wrapper.find('select').props().value).toEqual('RandomOption')
  })

  it('executes its change function when changed', () => {
    const mountedWrapper = mount(
      <SourceSelector
        changeFunction={jest.fn()}
      />
    )

    const selector = mountedWrapper.find('select')
    selector.simulate('change', { target: { value: 'RandomOption' } })

    expect(mountedWrapper.props().changeFunction).toHaveBeenCalledTimes(1)
  })
})
