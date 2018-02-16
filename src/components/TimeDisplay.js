import React from 'react';
import styled from 'styled-components';

const DisplayDiv = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
`;

const DisplayHead = styled.div`
  font-size: 1.5em;
`;

const DisplayTime = styled.div`
  font-size: 3em;
  cursor: pointer;
`;

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
      this.setState({
        workMinutes: nextProps.workMinutes,
        breakMinutes: nextProps.breakMinutes,
        minutes: nextProps.workMinutes,
        seconds: 0
      });
    }
  }

  timerClick() {
    if (this.state.paused) {
      this.startClock();
      this.setState({paused: false});
    } else {
      this.stopClock();
      this.setState({paused: true});
    }
  }

  startClock() {
    this.clockUpdate();
    this.setState({interval: setInterval(() => this.clockUpdate(), 1000)});
  }

  stopClock() {
    this.setState({interval: clearInterval(this.state.interval)});
  }

  clockUpdate() {
    if (this.state.minutes === 0 && this.state.seconds === 1) {
      if (this.state.session === 'work') {
        this.setState({
          session: 'break',
          minutes: this.state.breakMinutes,
          seconds: 0
        });
      } else {
        this.setState({
          session: 'work',
          minutes: this.state.workMinutes,
          seconds: 0
        });
      }
    } else if (this.state.seconds === 0) {
      this.setState({
        minutes: this.state.minutes - 1,
        seconds: 59,
      });
    } else {
      this.setState({seconds: this.state.seconds - 1});
    }
  }

  render() {
    let minutes = this.state.minutes;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    let seconds = this.state.seconds;
    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    return (
      <DisplayDiv>
        <DisplayHead>{this.state.session} time left:</DisplayHead>
        <DisplayTime onClick={this.timerClick}>
          {minutes}:{seconds}
        </DisplayTime>
      </DisplayDiv>
    );
  }
}
