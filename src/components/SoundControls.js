import React from 'react';
import styled from 'styled-components';

const ControlDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const SoundControl = styled.div`
  display: inline;
  padding: 0 20px 0 20px;
  font-size: 1.5em;
`;

const SoundVolume = styled.div`
  display: inline;
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

export function SoundControls(props) {
  return (
    <ControlDiv>
      <SoundControl>
        <p>volume</p>
        <Button onClick={() => props.volumeClick('volumeMinus')}>-</Button>
        <SoundVolume>{props.soundVolume}</SoundVolume>
        <Button onClick={() => props.volumeClick('volumePlus')}>+</Button>
      </SoundControl>
      <SoundControl>
        <p>sound</p>
        <Button onClick={props.soundClick}>{props.soundButtonStr}</Button>
      </SoundControl>
    </ControlDiv>
  );
}
