import { combineReducers } from 'redux';

import { time } from './time';
import { sound } from './sound';

export const reducers = combineReducers({
  time,
  sound
});
