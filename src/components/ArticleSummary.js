import React, { Component } from 'react'
import axios from 'axios'

export default class ArticleSummary extends Component {
  render() {
    return (
      <a
        href={this.props.location.state.url}
      >
        {this.props.location.state.headline}
      </a>

    )
  }
}
