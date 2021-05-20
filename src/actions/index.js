import * as constants from './constants';
import history from '../history';

// export const getMovements = (name) => {
//     return {
//         type: constants.GET_MOVEMENTS,
//         name,
//     }
// };

// export const addMovement = (name, weight) => {
//     return {
//         type: constants.ADD_MOVEMENT,
//         name, 
//         weight,
//     }
// };

export const addMovement = (formValues) => {
    history.push('/')
    return {
        type: constants.ADD_MOVEMENT,
        payload: formValues,
    }
};