import React from 'react';

import { FaAngleDoubleRight, FaPlay, FaPause } from 'react-icons/fa';

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
  padding-top: 8px;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  text-align: center;
`;

const Text = styled.div`
  display: inline;
  font-size: 1.5em;
`;

interface PropTypes {
  paused: boolean;
  togglePaused: Function;
  nextSession: Function;
}

export const Session: React.FC<PropTypes> = ({
  paused,
  togglePaused,
  nextSession
}) => (
  <Container>
    <Text>session</Text>
    <ButtonContainer>
      <Button onClick={() => togglePaused()}>
        {paused ? <FaPlay size="2em" /> : <FaPause size="2em" />}
      </Button>
      <Button onClick={() => nextSession()}>
        <FaAngleDoubleRight size="2.5em" />
      </Button>
    </ButtonContainer>
  </Container>
);
