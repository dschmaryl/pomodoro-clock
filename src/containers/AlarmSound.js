import React from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';

const AlarmSound = ({ volume, soundPlaying }) => (
  <Sound
    // todo: this should probably be a relative link
    url="https://dschmaryl.github.io/pomodoro-clock/static/alarm.opus"
    volume={volume}
    loop={true}
    playFromPosition={0}
    playStatus={soundPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
  />
);

const mapStateToProps = state => {
  return { volume: state.volume, soundPlaying: state.soundPlaying };
};

export default connect(mapStateToProps)(AlarmSound);
