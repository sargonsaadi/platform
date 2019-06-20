import React from 'react';
import MemoryBar from './MemoryBar';
import Keys from './Keys';



const KeysBox = (props) => {

    const { onPress } = props;
    return (
        <>
            <MemoryBar onPress={onPress} />
            <Keys onPress={onPress} />
        </>
    );
}

export default KeysBox;