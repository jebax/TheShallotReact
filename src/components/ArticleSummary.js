import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config'
import PropTypes from 'prop-types'
import SummaryHeadline from './SummaryHeadline'

export default class ArticleSummary extends Component {
  state = {
    sentences: []
  }

  componentDidMount() {
    axios.get(`${config.aylienUrl}${this.props.location.state.url}`, {
      headers: {
        'X-AYLIEN-TextAPI-Application-Key': process.env.REACT_APP_AYLIEN_KEY,
        'X-AYLIEN-TextAPI-Application-ID': process.env.REACT_APP_AYLIEN_ID
      }
    })
    .then(response => {
      this.setState(prevState => ({sentences: response.data.sentences}))
    })
  }

  loadSummaryBody = () => {
    if (this.state.sentences.length === 0) {
      return (
        <span
          className='loading-text'
        >
          Loading summary...
        </span>
      )
    } else {
      return this.state.sentences.map((sentence, index) => {
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
      <div>
        <SummaryHeadline
          headline={this.props.location.state.headline}
          url={this.props.location.state.url}
        />
        <article
          className='summary-text'
        >
          {this.loadSummaryBody()}
        </article>
      </div>
    )
  }
}

ArticleSummary.propTypes = {
  location: PropTypes.object.isRequired
}
