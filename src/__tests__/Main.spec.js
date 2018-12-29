import React from 'react'
import { shallow } from 'enzyme'
import Main from '../components/Main'
import ArticleList from '../components/ArticleList'

describe('<Main />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<Main />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the Title', () => {
    expect(wrapper.find('Title').length).toEqual(1)
  })

  it('renders the main element', () => {
    expect(wrapper.find('main').length).toEqual(1)
  })

  it('renders two Routes', () => {
    expect(wrapper.find('Route').length).toEqual(2)
  })
})
