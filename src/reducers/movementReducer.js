import { ADD_MOVEMENT, UPDATE_MOVEMENT } from '../actions/constants.js';

const initialState = [];

const movementReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVEMENT: 
            return [ ...state, action.payload ];
        case UPDATE_MOVEMENT:
            return [
                ...state.map(item => item.movementName === action.payload.movementName ? action.payload : item  )
              ];
        default:
            return state;
    }
};

export default movementReducer;