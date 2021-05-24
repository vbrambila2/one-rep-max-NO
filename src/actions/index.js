import * as constants from './constants';
import history from '../history';

export const addMovement = (formValues) => {
    history.push('/')
    return {
        type: constants.ADD_MOVEMENT,
        payload: formValues,
    }
};