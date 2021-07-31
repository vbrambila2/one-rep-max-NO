import * as constants from './constants';
import history from '../history';
import movements from '../apis/movements';

// export const addMovement = (formValues) => {
//     history.push('/')
//     return {
//         type: constants.ADD_MOVEMENT,
//         payload: formValues,
//     }
// };

// export const updateMovement = (formValues) => {
//     history.push('/')
//     return {
//         type: constants.UPDATE_MOVEMENT,
//         payload: formValues,
//     }
// };

// export const deleteMovement = (formValues) => {
//     history.push('/')
//     return {
//         type: constants.DELETE_MOVEMENT,
//         payload: formValues,
//     }
// };

export const createMovement = formValues => async dispatch => {
    history.push('/')
    const response = await movements.post('/movements', formValues);

    dispatch({ type: constants.CREATE_MOVEMENT, payload: response.data })
};

export const updateMovement = (id, formValues) => async dispatch => {
    //console.log(formValues, "action");
    history.push('/')
    const response = await movements.patch(`/movements/${id}`, formValues);
    
    // const updateId = response.data.id;
    // console.log(updateId, "action");
    //dispatch({ type: constants.UPDATE_MOVEMENT, payload: { data: response.data } });
    dispatch({ type: constants.UPDATE_MOVEMENT, payload: response.data });
};

export const deleteMovement = formValues => async dispatch => {
    history.push('/')
    const response = await movements.post('/movements', formValues);

    dispatch({ type: constants.DELETE_MOVEMENT, payload: response.data })
};