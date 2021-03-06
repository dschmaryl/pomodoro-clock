import React from 'react';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import styled from 'styled-components';

const Container = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 6px 10px 0 10px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 1.5em;
`;

const Value = styled.div`
  font-size: 2em;
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
    <Text>{label}</Text>
    <ButtonContainer>
      <Button onClick={() => onDecrease()}>
        <FaAngleDown size="2.2em" />
      </Button>
      <Value>{value}</Value>
      <Button onClick={() => onIncrease()}>
        <FaAngleUp size="2.2em" />
      </Button>
    </ButtonContainer>
  </Container>
);
