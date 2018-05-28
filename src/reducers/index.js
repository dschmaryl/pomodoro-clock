const reducers = (
  state = {
    workTime: 25,
    breakTime: 5,
    volume: 50,
    soundPlaying: false,
    minutes: 25,
    seconds: 0,
    session: 'work',
    paused: true
  },
  action
) => {
  switch (action.type) {
    case 'DECREASE_WORK_TIME':
      if (state.paused && state.session === 'work') {
        const workTime = Math.max(1, state.workTime - 1);
        return { ...state, workTime: workTime, minutes: workTime, seconds: 0 };
      } else {
        return { ...state, workTime: Math.max(1, state.workTime - 1) };
      }

    case 'INCREASE_WORK_TIME':
      if (state.paused && state.session === 'work') {
        const workTime = Math.min(state.workTime + 1, 120);
        return { ...state, workTime: workTime, minutes: workTime, seconds: 0 };
      } else {
        return { ...state, workTime: Math.min(state.workTime + 1, 120) };
      }

    case 'DECREASE_BREAK_TIME':
      if (state.paused && state.session === 'break') {
        const breakTime = Math.max(1, state.breakTime - 1);
        return {
          ...state,
          breakTime: breakTime,
          minutes: breakTime,
          seconds: 0
        };
      } else {
        return { ...state, breakTime: Math.max(1, state.breakTime - 1) };
      }

    case 'INCREASE_BREAK_TIME':
      if (state.paused && state.session === 'break') {
        const breakTime = Math.min(state.breakTime + 1, 120);
        return {
          ...state,
          breakTime: breakTime,
          minutes: breakTime,
          seconds: 0
        };
      } else {
        return { ...state, breakTime: Math.min(state.breakTime + 1, 120) };
      }

    case 'INCREASE_VOLUME':
      return { ...state, volume: Math.min(100, state.volume + 5) };
    case 'DECREASE_VOLUME':
      return { ...state, volume: Math.max(0, state.volume - 5) };
    case 'PLAY_SOUND':
      return { ...state, soundPlaying: true };
    case 'STOP_SOUND':
      return { ...state, soundPlaying: false };
    case 'TOGGLE_SOUND':
      return { ...state, soundPlaying: !state.soundPlaying };

    case 'UNPAUSE_TIMER':
      if (state.paused) {
        return { ...state, paused: false, soundPlaying: false };
      } else {
        return state;
      }

    case 'PAUSE_TIMER':
      if (!state.paused) {
        return { ...state, paused: true };
      } else {
        return state;
      }

    case 'TIMER_TICK':
      if (!state.paused) {
        if (state.minutes === 0 && state.seconds === 1) {
          if (state.session === 'work') {
            return {
              ...state,
              soundPlaying: true,
              session: 'break',
              paused: true,
              minutes: state.breakTime,
              seconds: 0
            };
          } else {
            return {
              ...state,
              soundPlaying: true,
              session: 'work',
              paused: true,
              minutes: state.workTime,
              seconds: 0
            };
          }
        } else if (state.seconds === 0) {
          return { ...state, minutes: state.minutes - 1, seconds: 59 };
        } else {
          return { ...state, seconds: state.seconds - 1 };
        }
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default reducers;
