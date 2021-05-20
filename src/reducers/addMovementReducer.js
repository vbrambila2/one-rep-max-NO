import { ADD_MOVEMENT } from '../actions/constants.js';

const initialState = []

const addMovementReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVEMENT: 
            return [ ...state, {name: action.name, weight: action.weight} ]
        default:
            return state;
    }
};

export default addMovementReducer;