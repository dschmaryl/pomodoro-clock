import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px 0 30px;
`;

interface PropTypes {
  children: any;
}

export const AdjusterRow: React.FC<PropTypes> = ({ children }) => (
  <Container>{children}</Container>
);
