import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({ headline }) => {
  return (
    <span className='headline-wrapper'>
      <h2 className='headline'>{headline}</h2>
    </span>
  )
}

Headline.propTypes = {
  headline: PropTypes.string.isRequired
}

export default Headline
