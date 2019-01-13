import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SourceSelector extends Component {
  state = {
    selected: 'BBC News'
  }

  handleChange = event => {
    this.setState({
      selected: event.target.value
    })
    this.props.changeFunction(event)
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
          value='the-guardian-uk'
        >
          The Guardian
        </option>
      </select>
    )
  }
}

SourceSelector.propTypes = {
  changeFunction: PropTypes.func.isRequired
}
