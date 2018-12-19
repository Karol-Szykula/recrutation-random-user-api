import React, { Component } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import Navigation from './Navigation/Navigation'
import List from './List/List'
import NotFound from './Navigation/NotFound'

class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <BrowserRouter>
          <div>
            <Route component={Navigation} />
            <Switch>
              <Route path='/' exact component={List} />
              <Route path='/:id([1-4])' component={List} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
