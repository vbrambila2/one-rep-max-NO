import { combineReducers } from 'redux';
import addMovementReducer from './addMovementReducer';
import updateMovementReducer from './updateMovementReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    move: addMovementReducer,
    newMove: updateMovementReducer,
    form: formReducer,
});

export default rootReducer;