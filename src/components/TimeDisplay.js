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

export function TimeDisplay(props) {
  let minutes = props.timerMinutes;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let seconds = props.timerSeconds;
  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  return (
    <DisplayDiv>
      <DisplayHead>time left to {props.session}</DisplayHead>
      <DisplayTime onClick={props.timerClick}>
        {minutes}:{seconds}
      </DisplayTime>
    </DisplayDiv>
  );
}
