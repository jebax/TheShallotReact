import React, { Component } from 'react'
import ArticleImage from './ArticleImage'
import Headline from './Headline'

export default class ArticlePreview extends Component {
  render() {
    return(
      <div
        className='article-preview'
      >
        <ArticleImage />
        <Headline />
      </div>
    )
  }
}
