import React from 'react';

const Key = props => {
    const { symbol, onPress } = props;
    return (
        <div className="key" onClick={() => onPress(symbol)}>
            {symbol}
        </div>
    );
}

export default Key;