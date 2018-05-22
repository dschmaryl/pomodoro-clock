import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
`;

export const Timer = props => <Container>{props.children}</Container>;
