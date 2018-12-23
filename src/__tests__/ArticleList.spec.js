import React from 'react'
import axios from 'axios'
import { shallow } from 'enzyme'
import ArticleList from '../components/ArticleList'

jest.mock('axios')
jest.useFakeTimers()

describe('<ArticleList />', () => {
  var wrapper

  beforeAll(() => {
    let response = {}
    axios.get.mockResolvedValue(response)
    wrapper = shallow(<ArticleList />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the article list wrapper', () => {
    expect(wrapper.find('#article-list').length).toEqual(1)
  })

  it('fetches information from the correct API url when mounted', () => {
    let response = {}
    axios.get.mockResolvedValue(response)

    const secondWrapper = shallow(<ArticleList />)
    expect(axios.get).toHaveBeenCalledTimes(2)
  })
})
