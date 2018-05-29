import React from 'react';
import Sound from 'react-sound';

export const Alarm = ({ volume, soundPlaying }) => (
  <Sound
    // todo: this should probably be a relative link
    url="https://dschmaryl.github.io/pomodoro-clock/static/alarm.opus"
    volume={volume}
    loop={true}
    playFromPosition={0}
    playStatus={soundPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
  />
);
