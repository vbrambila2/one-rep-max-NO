import { combineReducers } from 'redux';
import addMovementReducer from './addMovementReducer';
import { reducer as formReducer } from 'redux-form';
//import getMovementsReducer from './getMovementsReducer';

const rootReducer = combineReducers({
    move: addMovementReducer,
    form: formReducer,
    //moveList: getMovementsReducer,
});

export default rootReducer;