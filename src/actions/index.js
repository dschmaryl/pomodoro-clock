export const decreaseWorkTime = () => ({ type: 'DECREASE_WORK_TIME' });
export const increaseWorkTime = () => ({ type: 'INCREASE_WORK_TIME' });
export const decreaseBreakTime = () => ({ type: 'DECREASE_BREAK_TIME' });
export const increaseBreakTime = () => ({ type: 'INCREASE_BREAK_TIME' });

export const decreaseVolume = () => ({ type: 'DECREASE_VOLUME' });
export const increaseVolume = () => ({ type: 'INCREASE_VOLUME' });
export const toggleSound = () => ({ type: 'TOGGLE_SOUND' });

export const pauseTimer = () => ({ type: 'PAUSE_TIMER' });
export const unpauseTimer = () => ({ type: 'UNPAUSE_TIMER' });
export const timerTick = () => ({ type: 'TIMER_TICK' });
