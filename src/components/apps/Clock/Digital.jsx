import React, { Component } from 'react';

const Digital = props => {
    let { second, minute, hour } = props.time;

    const section = hour > 12 ? "PM" : "AM";
    hour = hour > 12 ? (hour - 12) : hour;
    minute = minute < 10 ? ("0" + minute) : minute;
    second = second < 10 ? ("0" + second) : second;


    return (
        <div className="digital">
            <div>{hour}:{minute}:{second} | <span style={{ color: 'black' }}>{section}</span></div>
        </div>
    );
}

export default Digital;