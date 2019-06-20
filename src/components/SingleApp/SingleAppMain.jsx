import React, { Component } from 'react';

class SingleAppMain extends Component {
    state = {}
    render() {
        return (
            !this.props.collapsed ? (
                <div className="single-app-main">
                    <div className="wrapper">
                        <p>{this.props.app.desc}</p>
                    </div>
                </div>
            ) : null
        );
    }
}

export default SingleAppMain;