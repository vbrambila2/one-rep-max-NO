import * as constants from './constants';
import history from '../history';

export const addMovement = (formValues) => {
    history.push('/')
    return {
        type: constants.ADD_MOVEMENT,
        payload: formValues,
    }
};

export const updateMovement = (formValues) => {
    history.push('/')
    return {
        type: constants.UPDATE_MOVEMENT,
        payload: formValues,
    }
};

export const deleteMovement = (formValues) => {
    history.push('/')
    return {
        type: constants.DELETE_MOVEMENT,
        payload: formValues,
    }
};
