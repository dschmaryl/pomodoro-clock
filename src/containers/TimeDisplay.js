import React from 'react';

import { Timer } from '../components/Timer';
import { TimerHead } from '../components/TimerHead';
import { TimerTime } from '../components/TimerTime';

export class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.timerClick = this.timerClick.bind(this);
    this.state = {
      session: 'work',
      paused: true,
      workMinutes: props.workMinutes,
      breakMinutes: props.breakMinutes,
      minutes: props.workMinutes,
      seconds: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.paused) {
      if (this.state.session === 'work') {
        if (this.state.workMinutes !== nextProps.workMinutes) {
          this.setState({ minutes: nextProps.workMinutes, seconds: 0 });
        }
      } else if (this.state.breakMinutes !== nextProps.breakMinutes) {
        this.setState({ minutes: nextProps.breakMinutes, seconds: 0 });
      }
    }
    this.setState({
      workMinutes: nextProps.workMinutes,
      breakMinutes: nextProps.breakMinutes
    });
  }

  timerClick() {
    if (this.state.paused) {
      this.startClock();
      this.props.stopSound();
      this.setState({ paused: false });
    } else {
      this.stopClock();
      this.setState({ paused: true });
    }
  }

  startClock() {
    this.clockUpdate();
    this.setState({ interval: setInterval(() => this.clockUpdate(), 1000) });
  }

  stopClock() {
    this.setState({ interval: clearInterval(this.state.interval) });
  }

  clockUpdate() {
    if (this.state.minutes === 0 && this.state.seconds <= 1) {
      this.stopClock();
      this.props.playSound();
      if (this.state.session === 'work') {
        this.setState({
          session: 'break',
          paused: true,
          minutes: this.state.breakMinutes,
          seconds: 0
        });
      } else {
        this.setState({
          session: 'work',
          paused: true,
          minutes: this.state.workMinutes,
          seconds: 0
        });
      }
    } else if (this.state.seconds === 0) {
      this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
    } else {
      this.setState({ seconds: this.state.seconds - 1 });
    }
  }

  render() {
    let minutes = this.state.minutes;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    let seconds = this.state.seconds;
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return (
      <Timer>
        <TimerHead session={this.state.session} />
        <TimerTime timerClick={this.timerClick} session={this.state.session}>
          {minutes}:{seconds}
        </TimerTime>
      </Timer>
    );
  }
}
