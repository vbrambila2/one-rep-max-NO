import { UPDATE_MOVEMENT, DELETE_MOVEMENT, CREATE_MOVEMENT } from '../actions/constants.js';

const initialState = [];

const movementReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MOVEMENT: 
            return [
                ...state, action.payload
            ];
        case UPDATE_MOVEMENT:
            // return {
            //     ...state, [action.payload.id]: action.payload
            // };

            return state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })

            //return [ ...state.map(item => item.id === action.payload.id ? {...item, movementWeight: action.payload.movementWeight} : item)];

            // const clonedMovement = state;
            // const movementIndexToUpdate = clonedMovement.findIndex(
            //   (item) => item.id === action.payload.id
            // );
            // const updatedMovement = {
            //   ...clonedMovement[movementIndexToUpdate],
            //   movementWeight: action.payload.movementWeight,
            // };
            // const updatedMovements = [...clonedMovement];
            // updatedMovements[movementIndexToUpdate] = updatedMovement;
            // return [...updatedMovements];
             
            
        case DELETE_MOVEMENT:
            return [
                ...state.filter(item => item.movementName !== action.payload.movementName)
            ];
        default:
            return state;
    }
};

export default movementReducer;