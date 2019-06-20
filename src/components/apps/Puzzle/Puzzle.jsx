import React, { Component } from 'react';
import { connect } from 'react-redux';

class Puzzle extends Component {
    state = {}
    componentDidMount() {
    }
    render() {
        return (
            !this.props.apps['Puzzle'].collapsed ? (
                <div className="single-app-main">
                    <div className="wrapper">
                        <p>{this.props.apps['Puzzle'].desc}</p>
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
export default connect(mapStateToProps, {})(Puzzle);