import { ADD_MOVEMENT } from '../actions/constants.js';

const intialState = [];

const addMovementReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_MOVEMENT:
            return [ ...state, action.payload ]
        default:
            return state;
    }
};

export default addMovementReducer;