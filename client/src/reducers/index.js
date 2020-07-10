import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReduer';
import chatReducer from './chatReducer';
import postReducer from './postReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  chat: chatReducer,
  post: postReducer
});