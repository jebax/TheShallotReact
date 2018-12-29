import React from 'react'
import PropTypes from 'prop-types'

const ArticleImage = ({ imageUrl }) => {
  return (
    <figure
      className='imageWrapper'
    >
      <img
        alt=''
        className='articleImage'
        src={imageUrl}
      />
    </figure>
  )
}

ArticleImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default ArticleImage
