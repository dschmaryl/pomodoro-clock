import React from 'react';
import Sound from 'react-sound';

export const Alarm = props => {
  const { sound } = props.store.getState();

  return (
    <Sound
      // todo: this should probably be a relative link
      url="https://dschmaryl.github.io/pomodoro-clock/static/alarm.opus"
      volume={sound.volume}
      loop={true}
      playFromPosition={0}
      playStatus={sound.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
    />
  );
};
