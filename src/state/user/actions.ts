import * as actionTypes from './actionTypes';

export const requestLogin = (email: string) => ({
  type: actionTypes.REQUEST_LOGIN,
  payload: email,
});

export const normalize = () => ({
  type: actionTypes.NORMALIZE,
});
