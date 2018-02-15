import React, { Component } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 3em;
`;

const ControlDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding: 30px;
`;

const TimerControl = styled.div`
  display: inline;
  padding: 0 20px 0 20px;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
`;

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
`;

export class App extends Component {
  constructor() {
    super();
    this.state = {
      workTime: 25,
      breakTime: 5,
      numSessions: 0,
      session: 'work',
      sessionTime: '00:00',
    };
  }

  render() {
    return (
      <div>
        <H1>Pomodoro clock</H1>
        <ControlDiv>
          <TimerControl>
            <p>work</p>
            <Button>-</Button>{this.state.workTime}<Button>+</Button>
          </TimerControl>
          <TimerControl>
            <p>break</p>
            <Button>-</Button>{this.state.breakTime}<Button>+</Button>
          </TimerControl>
        </ControlDiv>
        <DisplayDiv>
          <DisplayHead>time left to {this.state.session}</DisplayHead>
          <DisplayTime>{this.state.sessionTime}</DisplayTime>
        </DisplayDiv>
      </div>
    );
  }
}
