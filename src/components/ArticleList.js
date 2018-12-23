import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config.js'

export default class ArticleList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get(config.guardianUrl).then(response => {
      console.log(response.data.response.results)
      this.setState({
        articles: response.data.response.results
      })
    })
  }

  render() {
    return (
      <div
        id='article-list'
      >
      </div>
    )
  }
}
