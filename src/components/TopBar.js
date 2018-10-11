import React, { Component } from 'react';

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

  export default TopBar;