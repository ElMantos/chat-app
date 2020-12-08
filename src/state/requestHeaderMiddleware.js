import {isRSAA, RSAA} from 'redux-api-middleware';

import {JSON_API_KEY, API_URL} from '@env';

export default () => (next) => (action) => {
  if (!isRSAA(action)) {
    return next(action);
  }
  return next({
    ...action,
    [RSAA]: {
      ...action[RSAA],
      endpoint: `${API_URL}${action[RSAA].endpoint}`,
      headers: {
        ...action[RSAA]?.headers,
        'Content-Type': 'application/json',
        'secret-key': JSON_API_KEY,
      },
    },
  });
};
