import { combineReducers } from 'redux';
import movementReducer from './movementReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    move: movementReducer,
    form: formReducer,
});

export default rootReducer;