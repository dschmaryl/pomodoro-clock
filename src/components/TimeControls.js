import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';

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

export function TimeControls(props) {
  const store = props.store;
  const { time } = store.getState();

  return (
    <ControlDiv>
      <TimerControl>
        <p>work</p>
        <Button
          onClick={() => store.dispatch({ type: 'DECREASE_WORK_TIME' })}
          buttonText="-"
        />
        <TimerTime>{time.workTime}</TimerTime>
        <Button
          onClick={() => store.dispatch({ type: 'INCREASE_WORK_TIME' })}
          buttonText="+"
        />
      </TimerControl>
      <TimerControl>
        <p>break</p>
        <Button
          onClick={() => store.dispatch({ type: 'DECREASE_BREAK_TIME' })}
          buttonText="-"
        />
        <TimerTime>{time.breakTime}</TimerTime>
        <Button
          onClick={() => store.dispatch({ type: 'INCREASE_BREAK_TIME' })}
          buttonText="+"
        />
      </TimerControl>
    </ControlDiv>
  );
}
