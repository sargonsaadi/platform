import React from 'react';
import Key from './Key';


const Keys = props => {
    const symbols = [[1, 2, 3, "*"], [4, 5, 6, "/"], [7, 8, 9, "+"], ["-+", 0, '.', '=']];

    const { onPress } = props;

    return (
        <>
            {symbols.map((row, index) => (
                <div key={row + index} className="keys">
                    {row.map((symbol, index) => (
                        <Key key={symbol + index} symbol={symbol} onPress={onPress} />
                    ))}
                </div>
            ))}
        </>
    );
}

export default Keys;