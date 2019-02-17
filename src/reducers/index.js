import { combineReducers } from 'redux';
import apiDataReducer from './apiDataReducer';
import todoListReducer from './todoListReducer';

export default combineReducers({
    apiDataReducer,
    todoListReducer
});