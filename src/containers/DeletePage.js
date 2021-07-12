import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { deleteMovement } from '../actions/index';
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

const NameLocationFunction = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[2]);
    return movementNameURL
};

const WeightLocationFunction = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[3]);
    return movementNameURL
};
    

const renderInputName = ({ input, label }) => {
    return (
        <div>
            <label>{label}:   </label>
            <input {...input} readOnly autoFocus={true} type="text" value={NameLocationFunction()} /> 
        </div>    
    )  
};

const renderInputWeight = ({ input, label }) => {
    return (
        <div>
            <label>{label}   </label>
            <input {...input} type="hidden" value={WeightLocationFunction()} /> 
        </div>    
    )  
};

const DeletePage = (props) => {
    const classes = useStyles();
    const onSubmit = (formValues) => {
        props.deleteMovement(formValues)
    };

    return (
        <div>
            <Header title="Delete Movement" />
            <div className={classes.updatePage}>
                <form onSubmit={props.handleSubmit(onSubmit)}>
                    <Field 
                        name="movementName"
                        component={renderInputName} 
                        label="Movement to be Deleted"
                    />
                    <Field
                        name="movementWeight"  
                        label="" 
                        component={renderInputWeight}
                    />
                    <button>Delete</button>
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
        deleteMovement: (formValues) => dispatch(deleteMovement(formValues)),
    })
};

  const formWrap = reduxForm({
    form: 'addMovementForm',
})(DeletePage);

export default connect(mapStateToProps, mapDispatchToProps)(formWrap);