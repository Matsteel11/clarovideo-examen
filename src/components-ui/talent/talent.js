import React, { Component } from 'react';

// Styles
import './talent.css';

export class Talent extends Component {
    render() {
        return (
            <button style={{borderColor : 'white'}} className="btn btn-talento btn-default">{this.props.title}</button>
        )
    }
}

export default Talent