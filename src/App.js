import React, { Component } from 'react'

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
        <List />
      </Provider>
    )
  }
}

export default App
