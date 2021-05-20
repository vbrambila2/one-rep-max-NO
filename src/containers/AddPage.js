import React, { useState } from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { addMovement } from '../actions/index';
import { useDispatch }  from 'react-redux';

const useStyles = makeStyles((theme) => ({
    addPage: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
    },
    addMovementDiv: {
        background: '#C4C4C4',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
      },
      movementName: {
        padding: '10px',
        margin: '10px',
      },
      textBoxColor: {
        background: 'white',
        borderRadius: '10px',
      },
      movementWeight: {
        margin: '10px',
        padding: '10px',
      },
      addButton: {
          width: '50px',
          borderRadius: '10px',
          marginLeft: '95px'
      },
}));

const AddPage = () => {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState(0);
    // const name = useSelector(state => state.move.name);
    // const weight = useSelector(state => state.move.weight);
    const classes = useStyles();
    const dispatch = useDispatch();

    console.log(name, weight);

    return (
        <div>
            <Header title="Add Page" />
            <div className={classes.addPage}>
                <div className={classes.addMovementDiv}>
                    <TextField 
                        className={classes.movementName} 
                        key="name" 
                        label="Enter Movement Name" 
                        InputProps= {{className: "textBoxColor"}}
                        variant="outlined"
                        onChange={event => {
                            const { value } = event.target;
                            setName(value);
                        }}
                         
                        
                         />    
                    <TextField 
                        className={classes.movementWeight} 
                        key="weight" 
                        label="Enter Movement Weight" 
                        type="number" 
                        variant="outlined"
                        onChange={event => {
                            const { value } = event.target;
                            setWeight(value);
                        }}
                        
                        InputProps= {{endAdornment: <InputAdornment position="end">lb</InputAdornment>, className: "textBoxColor"}} />
                    <Link 
                        to={`/`}
                        className={classes.addButton}
                        variant="outlined"
                        onClick={() => dispatch(addMovement(name, weight))}
                        >
                        <AddCircleIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.move.name,
        weight: state.move.weight,   
    }   
};

const mapDispatchToProps = (dispatch) => {
    return({
        addMovement: (name, weight) => dispatch(addMovement(name, weight)),
    })
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(AddPage);