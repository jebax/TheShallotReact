import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Headline = ({ id, headline, url }) => {
  return (
    <Link
      to={{
        pathname: `articles/${id}`,
        state: {
          headline: headline,
          id: id,
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
  headline: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Headline
