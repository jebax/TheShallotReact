import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleImage from './ArticleImage'
import Headline from './Headline'

export default class ArticlePreview extends Component {
  render() {
    return(
      <div
        className='article-preview'
      >
        <ArticleImage
          imageUrl={this.props.imageUrl}
        />
        <Headline
          headline={this.props.headline}
        />
      </div>
    )
  }
}

ArticlePreview.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
