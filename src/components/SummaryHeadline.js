import React from 'react'
import PropTypes from 'prop-types'

const SummaryHeadline = ({ headline, url }) => {
  return (
    <a
      className='summary-headline'
      href={url}
    >
      {headline}
    </a>
  )
}

SummaryHeadline.propTypes = {
  headline: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default SummaryHeadline
