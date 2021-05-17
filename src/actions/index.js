import * as constants from './constants';
import history from '../history';

export const getMovement = (movement) => {
    return {
        type: constants.GET_MOVEMENT,
        movement,
    }
};

export const addMovement = (response) => {
    return {
        type: constants.ADD_MOVEMENT,
        payload: response
    }
   
};

// /history.push('/')