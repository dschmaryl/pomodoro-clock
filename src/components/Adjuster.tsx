import React from 'react';

import {
  FaAngleDown,
  FaAngleUp,
  FaAngleDoubleRight,
  FaPlay
} from 'react-icons/fa';

import styled from 'styled-components';

const Container = styled.div`
  font-size: 1.5em;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  //background-color: #888888;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  text-align: center;
`;

const Number = styled.div`
  display: inline;
  font-size: 1.5em;
`;

const Text = styled.div`
  display: inline;
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
    {label === 'session' ? (
      <ButtonContainer>
        <Button onClick={() => onDecrease()}>
          <FaPlay size="2em" />
        </Button>
        <Button onClick={() => onIncrease()}>
          <FaAngleDoubleRight size="2.5em" />
        </Button>
      </ButtonContainer>
    ) : (
      <ButtonContainer>
        <Button onClick={() => onDecrease()}>
          <FaAngleDown size="2.2em" />
        </Button>
        <Number>{value}</Number>
        <Button onClick={() => onIncrease()}>
          <FaAngleUp size="2.2em" />
        </Button>
      </ButtonContainer>
    )}
  </Container>
);
