import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MenuBox from './components/MenuBox';
import Titles from './components/Titles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDefault: true,
      isHover: false,
      isFocus: false,
      boxState: [
        {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none'
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none'
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none'
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none'
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none'
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none'
        }],
      titleState: [
        {
          title: 'Licenciature in Chemistry',
          isDefault: true,
          isHover: false,
          isFocus: false,
          titleClass: 'title-box title-box-default'
        },
        {
          title: 'Master of Science',
          isDefault: true,
          isHover: false,
          isFocus: false,
          titleClass: 'title-box title-box-default'
        },
        {
          title: 'Doctorate in Computational Chemistry',
          isDefault: true,
          isHover: false,
          isFocus: false,
          titleClass: 'title-box title-box-default'
        }
      ]
    };

    this.onHoverBox = this.onHoverBox.bind(this);
    this.onDefaultBox = this.onDefaultBox.bind(this);
    this.onFocusBox = this.onFocusBox.bind(this);
    this.onHoverTitle = this.onHoverTitle.bind(this);
    this.onDefaultTitle = this.onDefaultTitle.bind(this);
    this.onFocusTitle = this.onFocusTitle.bind(this);
  }


  onDefaultBox = (index) => () => {
    if (!this.state.boxState[index].isFocus) {
      this.state.boxState[index].boxClass = 'menu-box-default';
      this.forceUpdate();
    }
  }
  onHoverBox = (index) => () => {
    if (!this.state.boxState[index].isFocus) {
      this.state.boxState[index].boxClass = 'menu-box-hover';
      this.forceUpdate();
    }
  }
  onFocusBox = (index) => () => {
    for (let i = 0; i < 6; i++) {
      this.state.boxState[i].boxClass = 'menu-box-default';
      this.state.boxState[i].displaymenuSideBoxes = 'none';
      this.state.boxState[i].isFocus = false;
    }
    this.state.boxState[index].boxClass = 'menu-box-focus';
    this.state.boxState[index].displaymenuSideBoxes = 'initial';
    this.state.boxState[index].isFocus = true;
    this.forceUpdate();
  }


  onDefaultTitle = (index) => () => {
    if (!this.state.titleState[index].isFocus) {
      this.state.titleState[index].titleClass = 'title-box title-box-default';
      this.forceUpdate();
    }
  }
  onHoverTitle = (index) => () => {
    if (!this.state.titleState[index].isFocus) {
      this.state.titleState[index].titleClass = 'title-box title-box-hover';
      this.forceUpdate();
    }
  }
  onFocusTitle = (index) => () => {
    for (let i = 0; i < 3; i++) {
      this.state.titleState[i].titleClass = 'title-box title-box-default';
      this.state.titleState[i].isFocus = false;
    }
    this.state.titleState[index].titleClass = 'title-box title-box-focus';
    this.state.titleState[index].isFocus = true;
    this.forceUpdate();
  }


  render() {
    return (
      <div className="App">

        <div id='main-container'>
          <TopBar />

          <div id='content-container'>
            <div id='menu-box-container'>
              <div id='container-header'><span className='cpu-text' id='folder-header'>Folders</span></div>
              
              <MenuBox boxClass={this.state.boxState[0].boxClass} sideBoxes={this.state.boxState[0].displaymenuSideBoxes} hoverHandle={this.onHoverBox(0)} defaultHandle={this.onDefaultBox(0)} focusHandle={this.onFocusBox(0)} title='personal' />

              <MenuBox boxClass={this.state.boxState[1].boxClass} sideBoxes={this.state.boxState[1].displaymenuSideBoxes} hoverHandle={this.onHoverBox(1)} defaultHandle={this.onDefaultBox(1)} focusHandle={this.onFocusBox(1)} title='Education' />

              <MenuBox boxClass={this.state.boxState[2].boxClass} sideBoxes={this.state.boxState[2].displaymenuSideBoxes} hoverHandle={this.onHoverBox(2)} defaultHandle={this.onDefaultBox(2)} focusHandle={this.onFocusBox(2)} title='Skills' />

              <MenuBox boxClass={this.state.boxState[3].boxClass} sideBoxes={this.state.boxState[3].displaymenuSideBoxes} hoverHandle={this.onHoverBox(3)} defaultHandle={this.onDefaultBox(3)} focusHandle={this.onFocusBox(3)} title='work' />

              <MenuBox boxClass={this.state.boxState[4].boxClass} sideBoxes={this.state.boxState[4].displaymenuSideBoxes} hoverHandle={this.onHoverBox(4)} defaultHandle={this.onDefaultBox(4)} focusHandle={this.onFocusBox(4)} title='Courses' />

              <MenuBox boxClass={this.state.boxState[5].boxClass} sideBoxes={this.state.boxState[5].displaymenuSideBoxes} hoverHandle={this.onHoverBox(5)} defaultHandle={this.onDefaultBox(5)} focusHandle={this.onFocusBox(5)} title='Projects' />

            </div>

            <main id='main-content-container'>

              <div id='titles-container'>

                <Titles title={this.state.titleState[0].title} titleClass={this.state.titleState[0].titleClass} hoverHandle={this.onHoverTitle(0)} defaultHandle={this.onDefaultTitle(0)} focusHandle={this.onFocusTitle(0)}/>

                <Titles title={this.state.titleState[1].title} titleClass={this.state.titleState[1].titleClass} hoverHandle={this.onHoverTitle(1)} defaultHandle={this.onDefaultTitle(1)} focusHandle={this.onFocusTitle(1)}/>

                <Titles title={this.state.titleState[2].title} titleClass={this.state.titleState[2].titleClass} hoverHandle={this.onHoverTitle(2)} defaultHandle={this.onDefaultTitle(2)} focusHandle={this.onFocusTitle(2)}/>

              </div>

            </main>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
