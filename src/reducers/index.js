import { combineReducers } from 'redux';
import addMovementReducer from './addMovementReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    move: addMovementReducer,
    form: formReducer,
});

export default rootReducer;