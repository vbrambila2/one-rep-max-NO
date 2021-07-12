import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { updateMovement } from '../actions/index';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { useLocation } from 'react-router';

const useStyles = makeStyles(() => ({
    updatePage: {
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'PT Sans Caption',
    },
}));

const LocationFunction = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[2]);
    return movementNameURL
};
    

const renderInputName = ({ input, label, meta }) => {
    return (
        <div>
            <label>{label}:   </label>
            <input {...input} readOnly autoFocus={true} type="text" value={LocationFunction()} /> 
        </div>    
    )  
};

const renderInputWeight = ({ input, label, meta }) => {
    return (
        <div>
            <label>{label}:   </label>
            <input {...input} type="number" /> 
        </div>    
    )  
};

const UpdatePage = (props) => {
    const classes = useStyles();
    const onSubmit = (formValues) => {
        props.updateMovement(formValues)
    };

    return (
        <div>
            <Header title="Update Movement" />
            <div className={classes.updatePage}>
                <form onSubmit={props.handleSubmit(onSubmit)}>
                    <Field 
                        name="movementName"
                        component={renderInputName} 
                        label="Movement Selected"
                    />
                    <Field
                        name="movementWeight"  
                        label="New One Rep Max: " 
                        component={renderInputWeight}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
      formValues: state.move,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return({
        updateMovement: (formValues) => dispatch(updateMovement(formValues)),
    })
};

  const formWrap = reduxForm({
    form: 'addMovementForm',
})(UpdatePage);

export default connect(mapStateToProps, mapDispatchToProps)(formWrap);