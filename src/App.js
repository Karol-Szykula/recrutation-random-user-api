import React, { Component } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'
import Navigation from './Navigation/Navigation'
import List from './List/List'

class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <Navigation />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={List} />
            <Route path='/:id' component={List} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
