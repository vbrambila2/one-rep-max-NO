import { combineReducers } from 'redux';
import addMovementReducer from './addMovementReducer';

export default combineReducers({
    move: addMovementReducer,
});