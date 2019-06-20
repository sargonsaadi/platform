import React, { Component } from 'react';
import SingleAppNav from './SingleAppNav';
import SingleAppMain from './SingleAppMain';

class SingleApp extends Component {
    state = {
        collapsed: false,
        cancel: false
    }
    handleCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }
    render() {
        return (
            <div className="single-app">
                <SingleAppNav
                    onCollapse={this.handleCollapse}
                    app={this.props.app}
                />
                <SingleAppMain collapsed={this.state.collapsed} app={this.props.app} />
            </div>
        );
    }
}

export default SingleApp;