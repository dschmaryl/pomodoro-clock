export const time = (state = { workTime: 25, breakTime: 5 }, action) => {
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
