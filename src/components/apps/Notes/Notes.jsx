import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notes extends Component {
    state = {}
    componentDidMount() {
    }
    render() {
        return (
            !this.props.apps['Notes'].collapsed ? (
                <div className="single-app-main">
                    <div className="wrapper">
                        <p>{this.props.apps['Notes'].desc}</p>
                    </div>
                </div>
            ) : null
        );
    }
}
const mapStateToProps = state => {
    return {
        apps: state.apps
    }
}
export default connect(mapStateToProps, {})(Notes);