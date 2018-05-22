import React from 'react';
import styled from 'styled-components';

const Time = styled.div`
  font-size: 4em;
  cursor: pointer;
  color: ${props => (props.session === 'work' ? 'green' : 'red')};
`;

export const TimerTime = props => (
  <Time session={props.session} onClick={props.timerClick}>
    {props.children}
  </Time>
);
