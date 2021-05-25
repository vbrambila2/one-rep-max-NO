import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import history from '../history';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    homePageContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noMovementsMessage: {
        marginTop: '130px',
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        textTransform: 'uppercase',
    },
    movementButtons: {
        fontFamily: 'PT Sans Caption',
        marginTop: '30px',
        borderRadius: '10px',
        background: '#C4C4C4',
        boxShadow: '0px 2px 2px #A9A9A9',
        paddingLeft: '200px',
        paddingRight: '200px',
        
    },
    movementName: {
        fontFamily: 'PT Sans Caption',
        fontSize: '20px', 
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
    },
    fabDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    fab: {
        background: '#C4C4C4',
    },
}));

const HomePage = (props) => {
    const classes = useStyles();
    const names  = props.name
    const mapNames = names.map((lift) => {
        return (
            <Button 
                key={lift.newMovement.movementName}
                className={classes.movementButtons} 
                onClick={() => history.push('/movement/:name')}
            >
                {lift.newMovement.movementName}
            </Button>
        )
    });
    const displayMovementButtons = () => {
        if (mapNames.length === 0) {    
            return (
                <div className={classes.noMovementsMessage} >Click add button to begin</div> 
            )
        };

        return (  
                <div className={classes.movementName} >{mapNames}</div>
        )
    };

    return (
        <div className={classes.homePageContent} >
            <Header title={"Home Page" }/>
            <div>{displayMovementButtons()}</div>
            <div className={classes.fabDiv}>
                <Fab 
                    className={classes.fab}
                    onClick={() => history.push(`/add`)}>  
                    <AddIcon />      
                </Fab>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.move
    }
};

export default connect(mapStateToProps)(HomePage);