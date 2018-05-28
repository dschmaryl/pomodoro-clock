import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 2em;
`;

export const TimerHead = ({ session }) => <Header>{session} time left:</Header>;
