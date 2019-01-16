import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config.js'
import SourceSelector from './SourceSelector'
import ArticlePreview from './ArticlePreview'

export default class ArticleList extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    if (!sessionStorage.currentProvider) {
      sessionStorage.setItem('currentProvider', 'bbc-news')
    }

    axios.get(
      `${config.newsUrl}${sessionStorage.currentProvider}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    )
    .then(response => {
      this.setState({ articles: response.data.articles })
    })
  }

  handleChange = event => {
    sessionStorage.setItem('currentProvider', event.target.value)

    axios.get(
      `${config.newsUrl}${sessionStorage.currentProvider}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    )
    .then(response => {
      this.setState({ articles: response.data.articles })
    })
  }

  render() {
    return (
      <div
        id='articleList'
      >
        <SourceSelector
          changeFunction={this.handleChange}
        />

        {this.state.articles.map((article, index) => {
          return (
            <ArticlePreview
              key={index}
              id={index}
              imageUrl={article.urlToImage}
              headline={article.title}
              url={article.url}
            />
          )
        })}
      </div>
    )
  }
}
