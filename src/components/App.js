import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import ArticleList from './ArticleList'
import ArticleSummary from './ArticleSummary'

const App = () => {
  return (
    <Router>
      <div
        id='appWrapper'
      >
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/articles/:id' component={ArticleSummary} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
