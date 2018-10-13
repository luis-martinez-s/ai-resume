import React, { Component } from 'react';

class TopBar extends Component {
    render() {
      return (
        <nav id='topbar'>
        <h1 className='cpu-text' id='top-text'>Luis Martinez Resume</h1>
        <span id='top-block'></span>
        </nav>
      );
    }
  }

  export default TopBar;