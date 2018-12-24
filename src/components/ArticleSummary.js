import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config'

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
      console.log(response)
      this.setState(prevState => ({sentences: response.data.sentences}))
    })
  }

  render() {
    return (
      <div>
        <a
          className='summary-headline'
          href={this.props.location.state.url}
        >
          {this.props.location.state.headline}
        </a>
        <article
          className='summary-text'
        >
        {this.state.sentences.map((sentence, index) => {
          return (
            <p
              className='summary-sentence'
              key={index}
            >
              {sentence}
            </p>
          )
        })}
        </article>
      </div>
    )
  }
}
