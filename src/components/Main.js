import React, { Component } from 'react'
import ArticleList from './ArticleList'
import ArticleSummary from './ArticleSummary'
import Title from './Title'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Title />
          <Switch>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/articles/:id' component={ArticleSummary} />
          </Switch>
        </main>
      </Router>
    )
  }
}
