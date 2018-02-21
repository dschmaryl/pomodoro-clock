import React from 'react';
import Sound from 'react-sound';

export class AlarmSound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {soundStatus: Sound.status.STOPPED};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.alarmStatus === 'on') {
      this.setState({soundStatus: Sound.status.PLAYING});
    } else {
      this.setState({soundStatus: Sound.status.STOPPED});
    }
  }

  render() {
    return (
      <Sound
        // this should probably be a relative link. fix it
        url="https://dschmaryl.github.io/pomodoro-clock/static/chimes.opus"
        volume={50}
        loop={true}
        playFromPosition={0}
        playStatus={this.state.soundStatus}
      />
    );
  }
}
