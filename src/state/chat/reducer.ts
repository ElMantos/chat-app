import {Reducer} from 'redux';

import * as actionTypes from './actionTypes';

import Action from '~/state/interfaces/Action';
import Chat from './interface';

const DEFAULT_CHATS_STATE = {
  fetching: false,
  data: null,
  error: null,
};

const DEFAULT_CHATS_UPDATE_STATE = {
  fetching: false,
  error: null,
};

const DEFAULT_STATE = {
  chats: DEFAULT_CHATS_STATE,
  chatsUpdate: DEFAULT_CHATS_UPDATE_STATE,
};

const reducer: Reducer = (
  state: Chat = DEFAULT_STATE,
  {type, payload}: Action,
) => {
  switch (type) {
    case actionTypes.REQUEST_CHAT:
      return {
        ...state,
        chats: {
          ...DEFAULT_CHATS_STATE,
          fetching: true,
        },
      };
    case actionTypes.REQUEST_CHAT_SUCCESS:
      return {
        ...state,
        chats: {
          ...DEFAULT_CHATS_STATE,
          data: payload,
        },
      };
    case actionTypes.REQUEST_CHAT_FAILURE:
      return {
        ...state,
        chats: {
          ...DEFAULT_CHATS_STATE,
          error: payload,
        },
      };
    case actionTypes.REQUEST_CHAT_UPDATE:
      return {
        ...state,
        chatsUpdate: {
          ...state.chatsUpdate,
          fetching: true,
        },
      };
    case actionTypes.REQUEST_CHAT_UPDATE_SUCCESS:
      return {
        ...state,
        chatsUpdate: {
          ...DEFAULT_CHATS_UPDATE_STATE,
        },
        chats: {
          ...state.chats,
          data: payload.data,
        },
      };
    case actionTypes.REQUEST_CHAT_UPDATE_FAILURE:
      return {
        ...state,
        chatsUpdate: {
          ...DEFAULT_CHATS_UPDATE_STATE,
          error: payload,
        },
      };
    case actionTypes.NORMALIZE:
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default reducer;
