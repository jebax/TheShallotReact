import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Title from './Title'
import ArticleList from './ArticleList'
import ArticleSummary from './ArticleSummary'

const Main = () => {
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

export default Main
