import React from 'react'
import PropTypes from 'prop-types'
import ArticleImage from './ArticleImage'
import Headline from './Headline'

const ArticlePreview = ({ id, imageUrl, headline, url }) => {
  return(
    <div
      className='articlePreview'
    >
      <ArticleImage
        imageUrl={imageUrl}
      />
      <br />
      <Headline
        id={id}
        headline={headline}
        url={url}
      />
    </div>
  )
}

ArticlePreview.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default ArticlePreview
