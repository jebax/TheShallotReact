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
      { description: 'Title1', url: 'Url1', urlToImage: 'Img1' },
      { description: 'Title2', url: 'Url2', urlToImage: 'Img2' },
      { description: 'Title3', url: 'Url3', urlToImage: 'Img3' },
    ]
    let response = { data: { articles: articles } }
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
    expect(axios.get).toHaveBeenCalledWith(
      `${config.newsUrl}the-guardian-uk&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    )
  })

  it('renders number of article previews based on API response number', () => {
    expect(wrapper.find('ArticlePreview').length).toEqual(articles.length)
  })

  it('renders the SourceSelector', () => {
    expect(wrapper.find('SourceSelector').length).toEqual(1)
  })

  it('fetches from the correct API url when changing SourceSelector', () => {
    const selector = wrapper.find('SourceSelector')

    const event = { target: { value: 'testUrl' } }

    selector.props().changeFunction(event)

    expect(axios.get).toHaveBeenCalledTimes(2)
    expect(axios.get).toHaveBeenCalledWith(
      `${config.newsUrl}${event.target.value}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    )
  })
})
