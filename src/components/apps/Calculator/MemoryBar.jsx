import React from 'react';

import MemKey from './MemKey';

const MemoryBar = props => {
    const { onPress } = props;
    return (
        <div className="memory-bar">
            <MemKey symbol={"C"} onPress={onPress} />
            <MemKey symbol={""} onPress={onPress} />
            <MemKey symbol={""} onPress={onPress} />
            <MemKey symbol={"Del"} onPress={onPress} />

        </div>
    );
}

export default MemoryBar;