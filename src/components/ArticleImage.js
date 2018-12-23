import React, { Component } from 'react'

export default class ArticleImage extends Component {
  render() {
    return (
      <figure
        className='image-wrapper'
      >
        <img className='article-image' src={this.props.imageUrl} />
      </figure>
    )
  }
}
