import { GET_MOVEMENT } from '../actions/constants.js';

const intialState = {
    movement: {
        name: '',
        weight: '',
    } 
};

const movementReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_MOVEMENT:
            return [ ...state, action.payload ]
        default:
            return state;
    }
};

export default movementReducer;