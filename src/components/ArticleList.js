import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config.js'
import ArticlePreview from './ArticlePreview'

export default class ArticleList extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get(config.guardianUrl).then(response => {
      console.log(response)
      this.setState(prevState => ({
        articles: response.data.response.results
      }))
    })
  }

  displayPreview = (article, index) => {
    return (
      <article
        key={index}
      >
        <ArticlePreview
          id={index}
          imageUrl={article.fields.thumbnail}
          headline={article.webTitle}
          url={article.webUrl}
        />
      </article>
    )
  }

  render() {
    return (
      <div
        id='article-list'
      >
        {this.state.articles.map((article, index) => {
          return this.displayPreview(article, index)
        })}
      </div>
    )
  }
}
