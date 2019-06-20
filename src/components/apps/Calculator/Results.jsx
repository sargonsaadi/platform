import React from 'react';
import HistoryBar from './HistoryBar';
import ResultsBar from './ResultsBar';


const Results = props => {
    return (
        <>
            <HistoryBar
                equation={props.equation}
            />
            <ResultsBar
                final={props.final}
                equation={props.equation}
            />
        </>
    );
}

export default Results;