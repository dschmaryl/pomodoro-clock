import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  display: inline;
  font-size: 1.5em;
`;

export const Label = props => <Text>{props.text}</Text>;
