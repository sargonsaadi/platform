import React, { Component } from 'react';
import seconds_logo from '../../../icons/clock/seconds.png'
import minutes_logo from '../../../icons/clock/minutes.png'
import hours_logo from '../../../icons/clock/hours.png'
import clock_bg from '../../../icons/clock/clock_bg.png'
import loading from '../../../icons/clock/loading.gif';

const Mechanical = props => {
    let { second, minute, hour } = props.time;
    let minsHr = Math.floor(minute / 2);
    hour = hour > 12 ? (hour - 12) : hour;
    console.log("mech hour: ", hour);

    return (
        <div className="mechanical">
            <img src={clock_bg} alt="clock_bg" height="75px" className={"clock_bg"} />
            <img src={seconds_logo} alt="seconds_logo" height="75px" className={"secs" + second} />
            <img src={minutes_logo} alt="minutes_logo" height="75px" className={"mins" + minute} />
            <img src={hours_logo} alt="hours_logo" height="75px" className={"hrs" + hour + "-" + minsHr} />
        </div>
    );
}

export default Mechanical;