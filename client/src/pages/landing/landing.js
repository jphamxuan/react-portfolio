import React, { Component, Fragment } from 'react'
import logo from "./logo.svg";



class Landing extends Component {
  render () {

    return (
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>JPX-Portfolio</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Landing