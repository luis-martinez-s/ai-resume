import React, { Component } from 'react';

class Titles extends Component {
    render() {
        return (
                <div className={this.props.titleClass} onMouseEnter={this.props.hoverHandle} onMouseLeave={this.props.defaultHandle} onClick={this.props.focusHandle}>
                    <div className='title-wrapper'>
                        <h2 className='title-text'>{this.props.title}</h2>
                    </div></div>
        );
    }
}

export default Titles;