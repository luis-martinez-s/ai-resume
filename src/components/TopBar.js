import React, { Component } from 'react';

class TopBar extends Component {
    render() {
      return (
        <nav id='topbar'>
        <span className='cpu-text' id='top-text'>Personal terminal</span>
        <span id='top-block'></span>
        </nav>
      );
    }
  }

  export default TopBar;