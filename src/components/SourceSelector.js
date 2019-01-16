import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SourceSelector extends Component {
  state = {
    selected: 'BBC News'
  }

  handleChange = event => {
    const index = event.target.selectedIndex
    const selected = event.target[index].text

    this.setState({ selected: selected })
    this.props.changeFunction(event)
  }

  render() {
    return (
      <select
        selected={this.state.selected}
        onChange={this.handleChange}
        className='sourceSelector'
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
        <option
          value='financial-times'
        >
          Financial Times
        </option>
        <option
          value='google-news'
        >
          Google News
        </option>
        <option
          value='national-geographic'
        >
          National Geographic
        </option>
        <option
          value='techradar'
        >
          TechRadar
        </option>
        <option
          value='time'
        >
          Time
        </option>
        <option
          value='vice-news'
        >
          Vice News
        </option>
        <option
          value='wired'
        >
          Wired
        </option>
      </select>
    )
  }
}

SourceSelector.propTypes = {
  changeFunction: PropTypes.func.isRequired
}
