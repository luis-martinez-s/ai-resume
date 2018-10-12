import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MenuBox from './components/MenuBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDefault: true,
      isHover: false,
      isFocus: false,
      boxState: [{
        isDefault: true,
        isHover: false,
        isFocus: false,
        boxClass: 'menu-box-default',
        displaymenuSideMoxes: 'none'
      }],
      boxClass: 'menu-box-default',
      displaymenuSideMoxes: 'none'
    };
    this.onHover = this.onHover.bind(this);
    this.onDefault = this.onDefault.bind(this);
    // this.onFocus = this.onFocus.bind(this);
    this.onHoverArr = this.onHoverArr.bind(this);
    this.onDefaultArr = this.onDefaultArr.bind(this);
    this.onFocusArr = this.onFocusArr.bind(this);
  }
  onDefault() {
    if (!this.state.isFocus) {
      this.setState({
        boxClass: 'menu-box-default',
        isDefault: true
      });
    }
  }
  onHover() {
    if (!this.state.isFocus) {
      this.setState({
        boxClass: 'menu-box-hover',
        isHover: true
      });
    }
  }
  // onFocus() {
  //   this.setState({
  //     boxClass: 'menu-box-focus',
  //     displaymenuSideMoxes: 'initial',
  //     isFocus: true
  //   });
  // }
  onDefaultArr() {
    if (!this.state.isFocus) {
      this.setState({
        boxClass: 'menu-box-default',
        isDefault: true
      });
    }
  }
  onHoverArr() {
    if (!this.state.isFocus) {
      this.setState({
        boxClass: 'menu-box-hover',
        isHover: true
      });
    }
  }
  onFocusArr() {
    this.state.boxState[0].boxClass = 'menu-box-focus';
    this.state.boxState[0].displaymenuSideMoxes = 'initial'
    this.state.boxState[0].isFocus = true
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <div id='main-container'>
          <TopBar />
          <div id='menu-box-container'>
            <div id='container-header'><span className='cpu-text' id='folder-header'>Folders</span></div>
            <MenuBox boxClass={this.state.boxClass} sideBoxes={this.state.displaymenuSideMoxes} hoverHandle={this.onHover} defaultHandle={this.onDefault} focusHandle={this.onFocus} />
            <MenuBox boxClass={this.state.boxState[0].boxClass} sideBoxes={this.state.boxState[0].displaymenuSideMoxes} hoverHandle={this.onHover} defaultHandle={this.onDefault} focusHandle={this.onFocusArr} />
            <MenuBox boxClass={this.state.boxClass} sideBoxes={this.state.displaymenuSideMoxes} hoverHandle={this.onHover} defaultHandle={this.onDefault} focusHandle={this.onFocus} />
            <MenuBox boxClass={this.state.boxClass} sideBoxes={this.state.displaymenuSideMoxes} hoverHandle={this.onHover} defaultHandle={this.onDefault} focusHandle={this.onFocus} />
            <MenuBox boxClass={this.state.boxClass} sideBoxes={this.state.displaymenuSideMoxes} hoverHandle={this.onHover} defaultHandle={this.onDefault} focusHandle={this.onFocus} />
            <MenuBox boxClass={this.state.boxClass} sideBoxes={this.state.displaymenuSideMoxes} hoverHandle={this.onHover} defaultHandle={this.onDefault} focusHandle={this.onFocus} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
