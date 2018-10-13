import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MenuBox from './components/MenuBox';
import Titles from './components/Titles';
import Content from './components/Content';
import { MENUBOXES, TITLES, CONTENT } from './content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxState: [
        {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none',
          boxTitle: MENUBOXES[0]
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none',
          boxTitle: MENUBOXES[1]
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none',
          boxTitle: MENUBOXES[2]
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none',
          boxTitle: MENUBOXES[3]
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none',
          boxTitle: MENUBOXES[4]
        }, {
          isDefault: true,
          isHover: false,
          isFocus: false,
          boxClass: 'menu-box-default',
          displaymenuSideBoxes: 'none',
          boxTitle: MENUBOXES[5]
        }],
        contentIndex : 0,
      titleState: [
        {
          title: '',
          isDefault: true,
          isHover: false,
          isFocus: false,
          titleClass: 'title-box title-box-default',
        },{
          title: '',
          isDefault: true,
          isHover: false,
          isFocus: false,
          titleClass: 'title-box title-box-default',
        },{
          title: '',
          isDefault: true,
          isHover: false,
          isFocus: false,
          titleClass: 'title-box title-box-default',
        }
      ],
      content: ''
    };

    this.onHoverBox = this.onHoverBox.bind(this);
    this.onDefaultBox = this.onDefaultBox.bind(this);
    this.onFocusBox = this.onFocusBox.bind(this);
    this.onHoverTitle = this.onHoverTitle.bind(this);
    this.onDefaultTitle = this.onDefaultTitle.bind(this);
    this.onFocusTitle = this.onFocusTitle.bind(this);
    this.clearTitleFocus = this.clearTitleFocus.bind(this);
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
    this.clearTitleFocus();
    for (let j = 0; j < 3; j++){
      this.state.titleState[j].title = TITLES[index][j];
    }
    this.state.content = '';
    this.state.contentIndex = index;
    this.forceUpdate();
  }


  onDefaultTitle = (i) => () => {
    if (!this.state.titleState[i].isFocus) {
      this.state.titleState[i].titleClass = 'title-box title-box-default';
      this.forceUpdate();
    }
  }
  onHoverTitle = (i) => () => {
    if (this.state.titleState[i].title !== '' && !this.state.titleState[i].isFocus){
      this.state.titleState[i].titleClass = 'title-box title-box-hover';
      this.forceUpdate();
    }
  }
  onFocusTitle = (i) => () => {
    if (this.state.titleState[i].title !== ''){
      for (let j = 0; j < 3; j++) {
        this.state.titleState[j].titleClass = 'title-box title-box-default';
        this.state.titleState[j].isFocus = false;
      }
      this.state.titleState[i].titleClass = 'title-box title-box-focus';
      this.state.titleState[i].isFocus = true;
      this.state.content = CONTENT[this.state.contentIndex][i];
      this.forceUpdate();
    }
  }
  clearTitleFocus() {
    for (let i = 0; i < 3; i++) {
        this.state.titleState[i].titleClass = 'title-box title-box-default';
        this.state.titleState[i].isFocus = false;
    }
  }


  render() {
    return (
      <div className="App">

        <div id='main-container'>
          <TopBar />

          <div id='content-container'>
            <div id='menu-box-container'>
              <div id='container-header'><span className='cpu-text' id='folder-header'>Folders</span></div>
              
              <MenuBox boxClass={this.state.boxState[0].boxClass} sideBoxes={this.state.boxState[0].displaymenuSideBoxes} hoverHandle={this.onHoverBox(0)} defaultHandle={this.onDefaultBox(0)} focusHandle={this.onFocusBox(0)} title={this.state.boxState[0].boxTitle} />

              <MenuBox boxClass={this.state.boxState[1].boxClass} sideBoxes={this.state.boxState[1].displaymenuSideBoxes} hoverHandle={this.onHoverBox(1)} defaultHandle={this.onDefaultBox(1)} focusHandle={this.onFocusBox(1)} title={this.state.boxState[1].boxTitle} />

              <MenuBox boxClass={this.state.boxState[2].boxClass} sideBoxes={this.state.boxState[2].displaymenuSideBoxes} hoverHandle={this.onHoverBox(2)} defaultHandle={this.onDefaultBox(2)} focusHandle={this.onFocusBox(2)} title={this.state.boxState[2].boxTitle} />

              <MenuBox boxClass={this.state.boxState[3].boxClass} sideBoxes={this.state.boxState[3].displaymenuSideBoxes} hoverHandle={this.onHoverBox(3)} defaultHandle={this.onDefaultBox(3)} focusHandle={this.onFocusBox(3)} title={this.state.boxState[3].boxTitle} />

              <MenuBox boxClass={this.state.boxState[4].boxClass} sideBoxes={this.state.boxState[4].displaymenuSideBoxes} hoverHandle={this.onHoverBox(4)} defaultHandle={this.onDefaultBox(4)} focusHandle={this.onFocusBox(4)} title={this.state.boxState[4].boxTitle} />

              <MenuBox boxClass={this.state.boxState[5].boxClass} sideBoxes={this.state.boxState[5].displaymenuSideBoxes} hoverHandle={this.onHoverBox(5)} defaultHandle={this.onDefaultBox(5)} focusHandle={this.onFocusBox(5)} title={this.state.boxState[5].boxTitle} />

            </div>

            <main id='main-content-container'>

              <div id='titles-container'>

                <Titles title={this.state.titleState[0].title} titleClass={this.state.titleState[0].titleClass} hoverHandle={this.onHoverTitle(0)} defaultHandle={this.onDefaultTitle(0)} focusHandle={this.onFocusTitle(0)}/>

                <Titles title={this.state.titleState[1].title} titleClass={this.state.titleState[1].titleClass} hoverHandle={this.onHoverTitle(1)} defaultHandle={this.onDefaultTitle(1)} focusHandle={this.onFocusTitle(1)}/>

                <Titles title={this.state.titleState[2].title} titleClass={this.state.titleState[2].titleClass} hoverHandle={this.onHoverTitle(2)} defaultHandle={this.onDefaultTitle(2)} focusHandle={this.onFocusTitle(2)}/>

              </div>

                <Content content={this.state.content}/>

            </main>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
