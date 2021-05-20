import { ADD_MOVEMENT } from '../actions/constants.js';

const initialState = {

}

// const addMovementReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_MOVEMENT: 
//             return Object.assign({}, state, {name: action.name, weight: action.weight})
//         default:
//             return state;
//     }
// };

const addMovementReducer = (state = initialState, action) => {
    const newMovement = "newMovement";
    switch (action.type) {
        case ADD_MOVEMENT: 
            return { ...state, [newMovement]: action.payload };
        default:
            return state;
    }
};

export default addMovementReducer;