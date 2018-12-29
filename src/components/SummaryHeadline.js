import React from 'react'
import PropTypes from 'prop-types'

const SummaryHeadline = ({ headline, url }) => {
  return (
    <a
      className='summaryHeadline'
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
