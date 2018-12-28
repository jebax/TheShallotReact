import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SummaryText extends Component {
  loadSummaryBody = () => {
    if (this.props.sentences.length === 0) {
      return (
        <span
          className='loading-text'
        >
          Loading summary...
        </span>
      )
    } else {
      return this.props.sentences.map((sentence, index) => {
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
  }

  render() {
    return (
      <article
        className='summary-text'
      >
        {this.loadSummaryBody()}
      </article>
    )
  }
}

SummaryText.propTypes = {
  sentences: PropTypes.array.isRequired
}
