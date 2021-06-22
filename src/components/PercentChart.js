import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { useLocation } from 'react-router';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
    oneRepMaxWeight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        marginTop: '100px'
    },
    oneRepMaxChart: {
        background: '#C4C4C4',
        borderRadius: '10px',
        borderCollapse: 'separate',
        borderSpacing: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    chartHeader: {
        borderRadius: '10px',
        padding: '5px',
        fontSize: '24px', 
        display: 'flex',
        justifyContent: 'space-around'
    },
    chartBox: {
        background: '#E7E7E7',
        border: '1px solid #C4C4C4',
        padding: '5px',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-around',
        fontFamily: 'PT Sans Caption',
    },
}));

const PercentChart = (props) => {
    const classes = useStyles();
    //const location = useLocation();
    //const pathArray = location.pathname.split('/');
    //const movementWeightURL = (pathArray[3]);
    const [results, setResults] = useState([]);
    console.log(props.weight, "weight");
    const mapWeights = props.weight.map((movement) => {
        return (
            <div 
                key={movement.movementName}
            >
                {movement.movementWeight}
            </div>
        )
    });
    console.log(mapWeights, "Map");
    console.log(props.name, "name");
   

    useEffect(() => {
        const arr = [];
        let percentage = 100;
        while (percentage > 50 ) {
            arr.push([percentage, (mapWeights * percentage) / 100]);
            percentage -= 5;
        }
        setResults(arr);
    }, [mapWeights]);

    return (
        <div>
            <div className={classes.oneRepMaxWeight}>One Rep Max: {mapWeights}</div>   
            <div className={classes.oneRepMaxChart}>
                <h1 className={classes.chartHeader} >Percent<div>Weight</div></h1>
                <div>
                    {results.map((result) => (
                    <div key={result[0]} className={classes.chartBox} >{result[0]}% <div>{result[1]}</div></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        weight: state.move,
        name: state.move
    }
};


export default connect(mapStateToProps, null)(PercentChart);
