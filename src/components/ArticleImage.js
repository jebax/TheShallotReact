import React from 'react'

const ArticleImage = ({imageUrl}) => {
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

export default ArticleImage
