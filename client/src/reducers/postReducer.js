import {
    ADD_POST,
    GET_POSTS,
    GET_POST,
    ADD_POST_COUNT,
    DELETE_POST,
    // eslint-disable-next-line
    POST_LOADING
  } from '../actions/types';
import update from 'react-addons-update';

  
  const initialState = {
    posts: [],
    post: {},
    count: 0,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case POST_LOADING:
        return {
          ...state,
          loading: true
        };
        case ADD_POST_COUNT:
        return {
          ...state,
          count: action.payload
        };
      case GET_POSTS:
        return {
          ...state,
          posts: action.payload,
          loading: false
        };
      case GET_POST:
        return {
          ...state,
          post: action.payload,
          loading: false
        };
      case ADD_POST:
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        };
      case DELETE_POST:
        
      return {
          ...state,
          posts: state.posts.filter(post => post._id !== action.payload)
        };
        
      default:
        return state;
    }
  }

