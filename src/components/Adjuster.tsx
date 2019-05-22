import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 1.5em;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1.5em;
  text-align: center;
`;

const Text = styled.div`
  display: inline;
  font-size: 1.5em;
`;

interface PropTypes {
  label: string;
  value: number | string;
  onDecrease: Function;
  onIncrease: Function;
}

export const Adjuster: React.FC<PropTypes> = ({
  label,
  value,
  onDecrease,
  onIncrease
}) => (
  <Container>
    {label}
    {label === 'sound' ? (
      <div>
        <Button onClick={() => onDecrease()}>{value}</Button>
      </div>
    ) : (
      <div>
        <Button onClick={() => onDecrease()}>-</Button>
        <Text>{value}</Text>
        <Button onClick={() => onIncrease()}>+</Button>
      </div>
    )}
  </Container>
);
