import State from '~/state/interfaces/State';

import {NAME} from './constants';

export const getUserData = (state: State) => state[NAME]?.userData;
