import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/landing/landing'
import Profile from './pages/profile/profile'
import Portfolio from './pages/portfolio/portfolio'
import Contact from './pages/contact/contact'

import "./App.css";

class App extends Component {
  render() {
    return (
     
    <Router>
    <Fragment>
      <Route exact path='/' component={Landing} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
    </Fragment>
    
    </Router>
    );
  }
}

export default App;

