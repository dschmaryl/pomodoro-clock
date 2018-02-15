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
`;

export function TimeDisplay(props) {
  return (
    <DisplayDiv>
      <DisplayHead>time left to {props.session}</DisplayHead>
      <DisplayTime>{props.sessionTime}</DisplayTime>
    </DisplayDiv>
  );
}
