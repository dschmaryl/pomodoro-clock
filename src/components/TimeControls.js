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

export function TimeControls(props) {
  return (
    <ControlDiv>
      <TimerControl>
        <p>work</p>
        <Button onClick={() => props.controlsClick('workMinus')}>-</Button>
        <TimerTime>{props.workMinutes}</TimerTime>
        <Button onClick={() => props.controlsClick('workPlus')}>+</Button>
      </TimerControl>
      <TimerControl>
        <p>break</p>
        <Button onClick={() => props.controlsClick('breakMinus')}>-</Button>
        <TimerTime>{props.breakMinutes}</TimerTime>
        <Button onClick={() => props.controlsClick('breakPlus')}>+</Button>
      </TimerControl>
    </ControlDiv>
  );
}
