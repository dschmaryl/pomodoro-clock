import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0 30px 0 30px;
`;

export const Control = (props: any) => <Container>{props.children}</Container>;
