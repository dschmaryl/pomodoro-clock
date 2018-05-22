import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 1.5em;
`;

export const Adjuster = props => <Container>{props.children}</Container>;
