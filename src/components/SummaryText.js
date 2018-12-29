import React from 'react'
import PropTypes from 'prop-types'

const SummaryText = ({ sentences }) => {
  const summaryBody= (() => {
    if (sentences.length === 0) {
      return (
        <span
          className='loadingText'
        >
          Loading summary...
        </span>
      )
    } else {
      return sentences.map((sentence, index) => {
        return (
          <p
            className='summarySentence'
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
      className='summaryText'
    >
      {summaryBody}
    </article>
  )
}

SummaryText.propTypes = {
  sentences: PropTypes.array.isRequired
}

export default SummaryText
