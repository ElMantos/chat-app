import {createAction} from 'redux-api-middleware';
import {CHAT_ENDPOINT_ID} from '@env';
import * as actionTypes from './actionTypes';

export const requestChats = () =>
  createAction({
    method: 'GET',
    endpoint: `/b/${CHAT_ENDPOINT_ID}/latest`,
    types: [
      actionTypes.REQUEST_CHAT,
      actionTypes.REQUEST_CHAT_SUCCESS,
      actionTypes.REQUEST_CHAT_FAILURE,
    ],
  });

export const requestChatUpdate = (data: any) =>
  createAction({
    method: 'PUT',
    endpoint: `/b/${CHAT_ENDPOINT_ID}`,
    body: JSON.stringify(data),
    types: [
      actionTypes.REQUEST_CHAT_UPDATE,
      actionTypes.REQUEST_CHAT_UPDATE_SUCCESS,
      actionTypes.REQUEST_CHAT_UPDATE_FAILURE,
    ],
  });

export const normalize = () => ({
  type: actionTypes.NORMALIZE,
});
