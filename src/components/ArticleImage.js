import React from 'react'
import PropTypes from 'prop-types'

const ArticleImage = ({ imageUrl }) => {
  return (
    <figure
      className='image-wrapper'
    >
      <img
        alt=''
        className='article-image'
        src={imageUrl}
      />
    </figure>
  )
}

ArticleImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default ArticleImage
