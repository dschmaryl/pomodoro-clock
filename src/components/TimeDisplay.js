import React from 'react';
import styled from 'styled-components';

const Timer = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
`;

const TimerHead = styled.div`
  font-size: 2em;
`;

const TimerTime = styled.div`
  font-size: 4em;
  cursor: pointer;
  color: ${props => (props.session === 'work' ? 'green' : 'red')};
`;

export class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.timerClick = this.timerClick.bind(this);
    this.state = { interval: null, paused: true };
  }

  componentWillReceiveProps({ paused }) {
    if (paused && !this.state.paused) {
      this.setState({
        interval: clearInterval(this.state.interval),
        paused: true
      });
    } else if (!paused & this.state.paused) {
      this.props.timerTick();
      this.setState({
        interval: setInterval(() => this.props.timerTick(), 1000),
        paused: false
      });
    }
  }

  timerClick() {
    if (this.state.paused) {
      this.props.unpauseTimer();
    } else {
      this.props.pauseTimer();
    }
  }

  render() {
    const { minutes, seconds } = this.props;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;

    return (
      <Timer>
        <TimerHead>{this.props.session} time left:</TimerHead>
        <TimerTime onClick={this.timerClick} session={this.props.session}>
          {minutesStr}:{secondsStr}
        </TimerTime>
      </Timer>
    );
  }
}
