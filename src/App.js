import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MenuBox from './components/MenuBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='main-container'>
          <TopBar />
          <MenuBox />
        </div>
      </div>
    );
  }
}

export default App;
