import React from 'react'
import { shallow } from 'enzyme'
import ArticleList from '../components/ArticleList'

describe('<ArticleList />', () => {
  var wrapper

  beforeAll(() => {
    wrapper = shallow(<ArticleList />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the article list wrapper', () => {
    expect(wrapper.find('#article-list').length).toEqual(1)
  })
})
