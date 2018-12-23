import React, { Component } from 'react'
import ArticleList from './ArticleList'
import { Switch, Route } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ArticleList} />
        </Switch>
      </main>
    )
  }
}
