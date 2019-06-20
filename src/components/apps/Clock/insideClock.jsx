import React, { Component } from 'react';


import { DateTime } from 'luxon';

import './clock.scss'
import Mechanical from './Mechanical';
import Digital from './Digital';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'DEC'];

class InsideClock extends Component {
    state = {}

    constructor(props) {
        super(props);

        const { zone, type } = this.props;

        this.state = {
            time: DateTime.fromISO(DateTime.utc().toString(), { zone: zone }),
            type: type
        }
    }
    componentDidMount() {
        setInterval(() => { this.advanceTime() }, 1000)
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { type } = this.props;

        if (type !== prevState.type) {
            this.setState({ type })
        }
    }

    advanceTime = () => {
        this.setState(({
            time: DateTime.fromISO(DateTime.utc().toString(), { zone: this.props.zone })
        }))
    }
    render() {
        let { time, type } = this.state;

        const { year, month, day, hour } = time.c;
        const MONTH = MONTHS[month];
        const section = hour > 12 ? 'PM' : 'AM';

        return (
            <>
                {type === 'Mechanical' ? (
                    <Mechanical time={time.c} />
                ) : <Digital time={time.c} />}

                <div className="date-wrapper">
                    <div className='date'>{MONTH} {day} {year} : {section}</div>
                </div>
            </>
        );
    }
}

export default InsideClock
