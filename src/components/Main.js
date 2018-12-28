import React, { Component } from 'react'
import ArticlesPage from './ArticlesPage'
import ArticleSummary from './ArticleSummary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path='/' component={ArticlesPage} />
            <Route path='/articles' component={ArticleSummary} />
          </Switch>
        </Router>
      </main>
    )
  }
}
