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
