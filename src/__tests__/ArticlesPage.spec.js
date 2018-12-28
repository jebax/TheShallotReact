import React from 'react'
import { shallow } from 'enzyme'
import ArticlesPage from '../components/ArticlesPage'

describe('<ArticlesPage />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<ArticlesPage />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('loads the ArticleList', () => {
    expect(wrapper.find('ArticleList').length).toEqual(1)
  })
})
