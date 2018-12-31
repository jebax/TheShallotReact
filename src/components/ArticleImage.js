import React from 'react'
import PropTypes from 'prop-types'

const ArticleImage = ({ imageUrl }) => {
  return (
    <img
      alt=''
      className='articleImage'
      src={imageUrl}
    />
  )
}

ArticleImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
}

export default ArticleImage
