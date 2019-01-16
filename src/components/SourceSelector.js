import React, { Component } from 'react'
import PropTypes from 'prop-types'

const sources = [
  { title: 'BBC News', url: 'bbc-news' },
  { title: 'The Guardian', url: 'the-guardian-uk' },
  { title: 'Financial Times', url: 'financial-times' },
  { title: 'Google News', url: 'google-news' },
  { title: 'National Geographic', url: 'national-geographic' },
  { title: 'Time', url: 'time' },
  { title: 'TechRadar', url: 'techradar' },
  { title: 'Wired', url: 'wired' }
]

export default class SourceSelector extends Component {
  state = {
    selected: 'BBC News'
  }

  handleChange = event => {
    const index = event.target.selectedIndex
    const selectedText = event.target[index].text

    this.setState({ selected: selectedText })
    this.props.changeFunction(event)
  }

  render() {
    return (
      <select
        selected={this.state.selected}
        onChange={this.handleChange}
        className='sourceSelector'
      >
        {sources.map((source, index) => {
          return (
            <option
              key={index}
              value={source.url}
            >
              {source.title}
            </option>
          )
        })}
      </select>
    )
  }
}

SourceSelector.propTypes = {
  changeFunction: PropTypes.func.isRequired
}
