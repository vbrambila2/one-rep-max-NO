import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router';

const useStyles = makeStyles(() => ({
    PREntry: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        marginTop: '100px'
    },
    PRChart: {
        background: '#C4C4C4',
        borderRadius: '10px',
        borderCollapse: 'separate',
        borderSpacing: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    percentHeader: {
        borderRadius: '10px',
        padding: '5px',
        fontSize: '24px', 
        display: 'flex',
        justifyContent: 'space-around'
    },
    percentBox: {
        background: '#E7E7E7',
        border: '1px solid #C4C4C4',
        padding: '5px',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-around'
    },
}));


const PercentChart = () => {
    const classes = useStyles();
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementWeightURL = (pathArray[3]);
    const [results, setResults] = useState([]);
 
    useEffect(() => {
        const arr = [];
        let percentage = 100;
        while (percentage > 50 ) {
            arr.push([percentage, (movementWeightURL * percentage) / 100]);
            percentage -= 5;
        }
        setResults(arr);
    }, [movementWeightURL]);

    return (
        <div>
            <div>
                <div className={classes.PREntry}>One Rep Max: {movementWeightURL}</div>   
                <div className={classes.PRChart}>
                    <h1 className={classes.percentHeader} >Percent<div>Weight</div></h1>
                    <div>
                        {results.map((result) => (
                        <div key={result[0]} className={classes.percentBox} >{result[0]}% <div>{result[1]}</div></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PercentChart;
