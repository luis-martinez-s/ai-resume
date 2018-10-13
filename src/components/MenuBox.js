import React, { Component } from 'react';

class MenuBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='box-wrapper'>
                <div className={this.props.boxClass} onMouseEnter={this.props.hoverHandle} onMouseLeave={this.props.defaultHandle} onClick={this.props.focusHandle}>
                    <div className='menu-box-before' style={{ display: this.props.sideBoxes }}></div>
                    <span className='cpu-text menu-box-text'>{this.props.title}</span>
                    <div className='menu-box-after' style={{ display: this.props.sideBoxes }}></div>
                </div>
            </div>
        );
    }
}

export default MenuBox;