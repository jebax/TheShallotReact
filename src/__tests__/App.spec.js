import React from 'react'
import { shallow } from 'enzyme'
import App from '../components/App'

describe('<App />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the Header component', () => {
    expect(wrapper.find('Header').length).toEqual(1)
  })

  it('renders the main element', () => {
    expect(wrapper.find('main').length).toEqual(1)
  })

  it('renders two Routes', () => {
    expect(wrapper.find('Route').length).toEqual(2)
  })
})
