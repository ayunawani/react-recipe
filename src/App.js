import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'react-bootstrap';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to foodbook</h2>
        </div>
        <form>
          <label style={{ borderRaduis: 3, color: 'purple'}}>
            <input placeholder="enter username"  style={{borderWidth:1, borderColor: 'purple' }}type='text' name='name' />
          </label>
          <br/>
          <label style={{color: 'purple'}}>
            <input placeholder="enter username"  style={{borderWidth:1, borderColor: 'purple' }}type='text' name='name' />
          </label>
          <br/>
          <input className= 'App-login' type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default App
