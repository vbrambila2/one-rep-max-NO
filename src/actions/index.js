import * as constants from './constants';

// export const getMovements = (name) => {
//     return {
//         type: constants.GET_MOVEMENTS,
//         name,
//     }
// };

export const addMovement = (name, weight) => {
    return {
        type: constants.ADD_MOVEMENT,
        name, 
        weight,
    }
};