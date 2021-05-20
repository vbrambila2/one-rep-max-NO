import { combineReducers } from 'redux';
import addMovementReducer from './addMovementReducer';
//import getMovementsReducer from './getMovementsReducer';

const rootReducer = combineReducers({
    move: addMovementReducer,
    //moveList: getMovementsReducer,
});

export default rootReducer;