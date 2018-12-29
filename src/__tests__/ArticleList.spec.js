import React from 'react'
import axios from 'axios'
import { shallow } from 'enzyme'
import ArticleList from '../components/ArticleList'
import { config } from '../config'

jest.mock('axios')
jest.useFakeTimers()

describe('<ArticleList />', () => {
  var wrapper
  var articles

  beforeAll(() => {
    articles = [
      { webTitle: 'Title1', webUrl: 'Url1', fields: { thumbnail: 'Img1' } },
      { webTitle: 'Title2', webUrl: 'Url2', fields: { thumbnail: 'Img2' } },
      { webTitle: 'Title3', webUrl: 'Url3', fields: { thumbnail: 'Img3' } }
    ]
    let response = { data: { response: { results: articles } } }
    axios.get.mockResolvedValue(response)
    wrapper = shallow(<ArticleList />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the article list wrapper', () => {
    expect(wrapper.find('#articleList').length).toEqual(1)
  })

  it('fetches information from the correct API url when mounted', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(config.guardianUrl)
  })

  it('renders number of article previews based on API response number', () => {
    expect(wrapper.find('ArticlePreview').length).toEqual(articles.length)
  })
})
