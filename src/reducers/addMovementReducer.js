import { ADD_MOVEMENT } from '../actions/constants.js';

const initialState = [];

const addMovementReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVEMENT: 
            return [ ...state, action.payload ];
        default:
            return state;
    }
};

export default addMovementReducer;