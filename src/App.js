import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
      </div>
    );
  }
}

class TopBar extends Component {
  render() {
    return (
      <div id='topbar'>
      <span className='cpu-text' id='top-text'>Personal terminal</span>
      <span id='top-block'></span>
      </div>
    );
  }
}

export default App;
