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
        minutes: nextProps.workMinutes
      });
    }
  }

  timerClick() {
    console.log('timerClick func called');
    if (this.state.paused) {
      this.startClock();
      this.setState({paused: false});
    } else {
      this.stopClock();
      this.setState({paused: true});
    }
  }

  startClock() {
    console.log('startClock func called');
  }

  stopClock() {
    console.log('stopClock func called');
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
        <DisplayHead>time left to {this.state.session}</DisplayHead>
        <DisplayTime onClick={this.timerClick}>
          {minutes}:{seconds}
        </DisplayTime>
      </DisplayDiv>
    );
  }
}
