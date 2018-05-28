import React from 'react';
import styled from 'styled-components';

const Time = styled.div`
  font-size: 4em;
  cursor: pointer;
  color: ${props => (props.session === 'work' ? 'green' : 'red')};
`;

export const TimerTime = ({ session, minutes, seconds, timerClick }) => {
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  const secondsStr = seconds < 10 ? '0' + seconds : seconds;

  return (
    <Time session={session} onClick={timerClick}>
      {minutesStr}:{secondsStr}
    </Time>
  );
};
