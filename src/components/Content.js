import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='content-box'>
                <div id='content-headline'></div>
                <div id='content-textbox-wrapper'>
                    <div id='content-textbox' className='cpu-p'>
                    {this.props.content}
                        {/* <p>Scientific research in the area of Computational Chemistry<br />Publication of <span className='number'>3</span> scientific works in scientific journals<br />I work every day with:</p> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;