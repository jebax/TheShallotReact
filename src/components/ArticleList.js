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
      console.log(response)
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
