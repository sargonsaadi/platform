import React from 'react';
import './calculator.css'

const HistoryBar = props => {
    return (
        <div className="history-bar">
            {props.equation}
        </div>
    );
}

export default HistoryBar;