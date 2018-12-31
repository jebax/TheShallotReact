import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Headline = ({ id, imageUrl, headline, url }) => {
  return (
    <Link
      to={{
        pathname: `articles/${id}`,
        state: {
          headline: headline,
          id: id,
          imageUrl: imageUrl,
          url: url
        }
      }}
      className='headline'
    >
      {headline}
    </Link>
  )
}

Headline.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Headline
