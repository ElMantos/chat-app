import {Reducer} from 'redux';

import * as actionTypes from './actionTypes';

import Action from '~/state/interfaces/Action';
import User from './interface';

const DEFAULT_STATE = {
  userData: null,
};

const reducer: Reducer = (
  state: User = DEFAULT_STATE,
  {type, payload}: Action,
) => {
  switch (type) {
    case actionTypes.REQUEST_LOGIN:
      return {
        ...state,
        userData: {
          email: payload,
        },
      };
    case actionTypes.NORMALIZE:
      return {
        ...DEFAULT_STATE,
      };
    default:
      return state;
  }
};

export default reducer;
