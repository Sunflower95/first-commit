import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import './App.css'
import Result from './modules/result'
import loginPage from './modules/loginPage'
import Home from './modules/Home'
import Report1 from './modules/homepage'
import signup from './signup';

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Report1} />
        <Route path='/result' component={Result} />
        <Route path='/loginPage' component={loginPage} />
        <Route path='/Home' component={Home} />
        <Route path='signup' component={signup} />
      </Router>
    )
  }
}

export default App
