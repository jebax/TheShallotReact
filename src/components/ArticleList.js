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
    axios.get(
      `${config.newsUrl}the-guardian-uk&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    )
    .then(response => {
      this.setState(prevState => ({
        articles: response.data.articles
      }))
    })
  }

  handleChange = event => {
    axios.get(
      `${config.newsUrl}${event.target.value}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    )
    .then(response => {
      this.setState(prevState => ({
        articles: response.data.articles
      }))
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
              headline={article.description}
              url={article.url}
            />
          )
        })}
      </div>
    )
  }
}
