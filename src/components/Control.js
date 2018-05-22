import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Control = props => <Container>{props.children}</Container>;
