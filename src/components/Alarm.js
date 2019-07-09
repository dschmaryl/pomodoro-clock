import React from 'react';
import Sound from 'react-sound';

// 'status' not found on Sound type error in typescript

// interface PropTypes {
//   volume: number;
//   soundPlaying: boolean;
// }

// export const Alarm: React.FC<PropTypes> = ({ volume, soundPlaying }) => (

export const Alarm = ({ volume, soundPlaying }) => (
  <Sound
    // todo: this should probably be a relative link
    url="https://dschmaryl.github.io/pomodoro-clock/static/alarm.opus"
    volume={volume}
    loop={true}
    playFromPosition={0}
    playStatus={soundPlaying ? Sound.status.Playing : Sound.status.STOPPED}
  />
);
