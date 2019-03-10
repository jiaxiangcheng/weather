import { combineReducers } from 'redux';
import apiDataReducer from './apiDataReducer';
import todoListReducer from './todoListReducer';
import postsReducer from './postsReducer';

export default combineReducers({
    apiDataReducer,
    todoListReducer,
    postsReducer
});