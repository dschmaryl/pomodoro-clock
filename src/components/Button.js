import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1.5em;
  text-align: center;
`;

export const Button = props => (
  <StyledButton onClick={props.onClick}>{props.buttonText}</StyledButton>
);