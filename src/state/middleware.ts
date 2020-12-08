import {apiMiddleware} from 'redux-api-middleware';

import requestHeaderMiddleware from './requestHeaderMiddleware';

export default [requestHeaderMiddleware, apiMiddleware];
