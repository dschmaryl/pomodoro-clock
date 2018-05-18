import { combineReducers } from 'redux';

const time = (state = { workTime: 25, breakTime: 5 }, action) => {
  switch (action.type) {
    case 'DECREASE_WORK_TIME':
      return { ...state, workTime: Math.max(1, state.workTime - 1) };
    case 'INCREASE_WORK_TIME':
      return { ...state, workTime: state.workTime + 1 };
    case 'DECREASE_BREAK_TIME':
      return { ...state, breakTime: Math.max(1, state.breakTime - 1) };
    case 'INCREASE_BREAK_TIME':
      return { ...state, breakTime: state.breakTime + 1 };
    default:
      return state;
  }
};

const sound = (state = { volume: 50, playing: false }, action) => {
  switch (action.type) {
    case 'INCREASE_VOLUME':
      return { ...state, volume: Math.min(100, state.volume + 5) };
    case 'DECREASE_VOLUME':
      return { ...state, volume: Math.max(0, state.volume - 5) };
    case 'PLAY_SOUND':
      return { ...state, playing: true };
    case 'STOP_SOUND':
      return { ...state, playing: false };
    case 'TOGGLE_SOUND':
      return { ...state, playing: !state.playing };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  time,
  sound
});
