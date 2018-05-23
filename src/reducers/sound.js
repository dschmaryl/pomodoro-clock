export const sound = (state = { volume: 50, playing: false }, action) => {
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
