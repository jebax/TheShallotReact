import React, { Component } from 'react'
import ArticleList from './ArticleList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={ArticleList} />
          </Switch>
        </Router>
      </main>
    )
  }
}
