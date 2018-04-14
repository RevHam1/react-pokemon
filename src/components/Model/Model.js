import React, { Component } from 'react';
import './Model.css'

export default class Module extends Component {

    render() {
        return (
            this.props.open &&
            <div className='Model-background'>
                <div className="Model-container">
                    {this.props.text}
                    <button className="Model-close-btn" onClick={this.props.onClose}>Close</button>
                </div>
            </div>
        );
    }
}