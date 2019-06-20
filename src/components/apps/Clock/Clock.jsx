import React, { Component } from 'react';
import { connect } from 'react-redux';
import InsideClock from './insideClock';


import './clock.scss'


class Clock extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = {
            zone: 'local',
            type: 'Mechanical'
        }
    }

    handleSwitchZone = zone => {
        this.setState({ zone })
    }

    handleSwitchType = type => {
        this.setState({ type: type })
    }
    render() {
        const { zone, type } = this.state;
        const clock_type = type === 'Mechanical' ? 'clock mechanical_bg' : 'clock digital_bg';
        return (
            !this.props.apps['Clock'].collapsed ? (
                <div className="single-app-main">
                    <div className="wrapper">
                        <div className={clock_type}>
                            <div className="header">
                                <div className={type === "Mechanical" ? 'button clicked' : 'button'} onClick={() => this.handleSwitchType('Mechanical')}>Mechanical</div>
                                <div className={type === "Digital" ? 'button clicked' : 'button'} onClick={() => this.handleSwitchType('Digital')} >Digital</div>
                            </div>

                            <div className="container">
                                <InsideClock zone={zone} type={type} />
                            </div>

                            <div className="footer">
                                <div className={zone === "local" ? 'button clicked' : 'button'} onClick={() => this.handleSwitchZone('local')} >Local Time</div>
                                <div className={zone === "UTC+3" ? 'button clicked' : 'button'} onClick={() => this.handleSwitchZone('UTC+3')}>Damascus</div>
                            </div>
                        </div>
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
export default connect(mapStateToProps, {})(Clock);