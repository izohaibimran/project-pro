import {
  ADD_CHAT,
  GET_CHATS,
  GET_CHAT,
  DELETE_CHAT,
  CHAT_LOADING
} from '../actions/types';

const initialState = {
  chats: [],
  chatArray: {},
  loading: false,
  newMessage:false
};


export default function(state = initialState, action) {
  const chatId = state.chatArray._id; 
  
  switch (action.type) {
    case CHAT_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CHATS:
      return {
        ...state,
        chats: action.payload,
        loading: false
      };
    case GET_CHAT:
      return {
        ...state,
        chatArray:action.payload,
        loading: false
      };
    case ADD_CHAT: 
    const msg = {from:{name:action.payload.from.name,avatar:action.payload.from.avatar},message:action.payload.message};
  
    
    if(action.payload.chatId === chatId){
      
      return {
        ...state,
        chatArray: {...state.chatArray, chat:[msg,...state.chatArray.chat]},newMessage:true
      };}
    case DELETE_CHAT:
      return {
        ...state,
        chats: state.chats.filter(chat => chat._id !== action.payload)
      };
      
    default:
      return state;
  }
}
