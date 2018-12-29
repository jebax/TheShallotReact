import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config'
import PropTypes from 'prop-types'
import Title from './Title'
import SummaryHeadline from './SummaryHeadline'
import SummaryText from './SummaryText'

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

  render() {
    return (
      <div>
        <SummaryHeadline
          headline={this.props.location.state.headline}
          url={this.props.location.state.url}
        />
        <SummaryText
          sentences={this.state.sentences}
        />
      </div>
    )
  }
}

ArticleSummary.propTypes = {
  location: PropTypes.object.isRequired
}
