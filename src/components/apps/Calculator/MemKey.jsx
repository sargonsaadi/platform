import React from 'react';

const MemKey = props => {
    const { symbol, onPress } = props;
    return (
        <div className="mem-key" onClick={() => onPress(symbol)}>{symbol}</div>
    );
}

export default MemKey;