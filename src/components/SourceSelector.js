import React, { Component } from 'react'

export default class SourceSelector extends Component {
  state = {
    selected: 'BBC News'
  }

  handleChange = (event) => {
    this.setState({
      selected: event.target.value
    })
  }

  render() {
    return (
      <select
        value={this.state.selected}
        onChange={this.handleChange}
      >
        <option
          value='bbc-news'
        >
          BBC News
        </option>
        <option
          value='2'
        >
          2
        </option>
      </select>
    )
  }
}
