import State from '~/state/interfaces/State';

import {NAME} from './constants';

export const getChatsData = (state: State) => state[NAME].chats.data;
export const areChatsFetching = (state: State) => state[NAME].chats.fetching;
export const getChatsError = (state: State) => state[NAME].chats.error;

export const getChatsUpdateError = (state: State) =>
  state[NAME].chatsUpdate.error;
export const isChatsUpdateFetching = (state: State) =>
  state[NAME]?.chatsUpdate.fetching;
