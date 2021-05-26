import { connect } from 'react-redux';
import history from '../history';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    movementButtons: {
        fontFamily: 'PT Sans Caption',
        marginTop: '30px',
        borderRadius: '10px',
        background: '#C4C4C4',
        boxShadow: '0px 2px 2px #A9A9A9',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
    },
    movementButtonsDiv: {
        marginTop: '100px'
    },
    noMovementsMessage: {
        marginTop: '30px',
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        textTransform: 'uppercase',
    },
}));

const MovementButton = (props) => {
    const classes = useStyles();
    const names  = props.name
    const mapNames = names.map((lift) => {
        return (
            <Button 
                key={lift.newMovement.movementName}
                className={classes.movementButtons} 
                onClick={() => history.push(`/movement/${lift.newMovement.movementName}/${lift.newMovement.movementWeight}`)}
            >
                {lift.newMovement.movementName}
            </Button>
        )
    });
    const displayMovementButtons = () => {
        if (mapNames.length === 0) {    
            return <div className={classes.noMovementsMessage} >Click add button to begin</div> 
        };

        return <div className={classes.movementName} >{mapNames}</div>
    };
    return <div className={classes.movementButtonsDiv}>{displayMovementButtons()}</div>
};

const mapStateToProps = (state) => {
    return {
        name: state.move
    }
};

export default connect(mapStateToProps)(MovementButton);
