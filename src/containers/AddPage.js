import React, { useState } from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { addMovement } from '../actions/index';
import { useDispatch }  from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ErrorSharp } from '@material-ui/icons';
import history from '../history';
import HomePage from './HomePage';

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

const AddPage = (props) => {
    //const [name, setName] = useState('');
    //const [weight, setWeight] = useState(0);
    // const name = useSelector(state => state.move.name);
    // const weight = useSelector(state => state.move.weight);
    const classes = useStyles();
    const dispatch = useDispatch();
    const updateText = (event) => {
        dispatch(addMovement(event.target.value))
    };
    const renderError = ({ error, touched }) => {
        if (touched && error ) {
            return (
                <div>
                    {error}
                </div>
            )
        }
    }
    const renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <label>{label}:   </label>
                <input {...input} /> 
                {renderError(meta)}
            </div>
            
        )  
    };
    const onSubmit = (formValues) => {
        props.addMovement(formValues);
    }
    

    return (
        <div>
            <Header title="Add Page" />
            <div className={classes.addPage}>
                <div className={classes.addMovementDiv}>
                    <form onSubmit={props.handleSubmit(onSubmit)} >
                        <Field 
                            name="movementName" 
                            component={renderInput} 
                            label="Movement Name" 
                        />
                        <Field
                            name="movementWeight" 
                            component={renderInput} 
                            label="One Rep Max" 
                         />
                         <button >Submit</button>
                    </form>
                    {/* <TextField 
                        className={classes.movementName} 
                        value={props.name} 
                        label="Enter Movement Name" 
                        InputProps= {{className: "textBoxColor"}}
                        variant="outlined"
                        onChange={updateText()}
                        
                         
                        
                         />    
                    <TextField 
                        className={classes.movementWeight} 
                        value={props.weight} 
                        label="Enter Movement Weight" 
                        type="number" 
                        variant="outlined"
                        onChange={updateText()}
                        
                        InputProps= {{endAdornment: <InputAdornment position="end">lb</InputAdornment>, className: "textBoxColor"}}
                    /> */}
                    {/* <Link 
                        to={`/`}
                        className={classes.addButton}
                        variant="outlined"
                        onClick={() => dispatch(addMovement(props.name, props.weight))}
                        >
                        Submit
                    </Link> */}
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
    // return {
    //     moveChanged: (e) => {
    //         const action = { type: ADD_MOVEMENT, name: e.target.value, weight: e.target.value };
    //         dispatch(action);
    //     }
    // }
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const validate = (formValues) => {
    const errors = {};

    if (!formValues.movementName) {
        errors.movementName = "Please enter a Name";
    }

    if (!formValues.movementWeight) {
        errors.movementWeight = "Please enter a Weight";
    }

    return errors;
};

// export default compose(withConnect)(AddPage);
const formWrap = reduxForm({
    form: 'addMovementForm',
    validate: validate,
})(AddPage);

export default connect(null, { addMovement })(formWrap);