import React from 'react';
import styled from 'styled-components';

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
  font-size: 1.5em;
`;

const TimerTime = styled.div`
  display: inline;
  font-size: 1.5em;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1.5em;
  text-align: center;
`;

export function Controls(props) {
  return (
    <ControlDiv>
      <TimerControl>
        <p>work</p>
        <Button>-</Button>
        <TimerTime>{props.workTime}</TimerTime>
        <Button>+</Button>
      </TimerControl>
      <TimerControl>
        <p>break</p>
        <Button>-</Button>
        <TimerTime>{props.breakTime}</TimerTime>
        <Button>+</Button>
      </TimerControl>
    </ControlDiv>
  );
}
