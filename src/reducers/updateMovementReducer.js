import { UPDATE_MOVEMENT } from '../actions/constants.js';

const initialState = [];

const updateMovementReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MOVEMENT: 
            return [ ...state, action.payload ];
        default:
            return state;
    }
};

export default updateMovementReducer;