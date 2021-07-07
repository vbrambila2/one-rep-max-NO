import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { updateMovement } from '../actions/index';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const useStyles = makeStyles(() => ({
    updatePage: {
        marginTop: '150px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'PT Sans Caption',
    }
}));

const renderInputWeight = ({ input, label, meta }) => {
    return (
        <div>
            <label>{label}:   </label>
            <input {...input} type="number" /> 
            <div style={{fontSize: "15px", color:"red"}}></div>
        </div>    
    )  
};

const UpdatePage = (props) => {
    const classes = useStyles();
    const onSubmit = (formValues) => {
        props.updateMovement(formValues);
    };

    return (
        <div>
            <Header title="Update Movement" />
            <div className={classes.updatePage}>
                <form onSubmit={props.handleSubmit(onSubmit)}>
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
      weight: state.move
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