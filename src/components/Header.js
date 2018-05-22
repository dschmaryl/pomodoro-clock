import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 3em;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Header = () => <H1>Pomodoro clock</H1>;
