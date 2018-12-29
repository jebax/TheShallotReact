import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SummaryText = ({ sentences }) => {
  const loadSummaryBody= (() => {
    if (sentences.length === 0) {
      return (
        <span
          className='loading-text'
        >
          Loading summary...
        </span>
      )
    } else {
      return sentences.map((sentence, index) => {
        return (
          <p
            className='summary-sentence'
            key={index}
          >
            {sentence}
          </p>
        )
      })
    }
  })()

  return (
    <article
      className='summary-text'
    >
      {loadSummaryBody}
    </article>
  )
}

SummaryText.propTypes = {
  sentences: PropTypes.array.isRequired
}

export default SummaryText
