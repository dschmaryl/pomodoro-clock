import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';

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

export function SoundControls(props) {
  const store = props.store;
  const { sound } = store.getState();

  return (
    <ControlDiv>
      <SoundControl>
        <p>volume</p>
        <Button
          onClick={() => store.dispatch({ type: 'DECREASE_VOLUME' })}
          buttonText="-"
        />
        <SoundVolume>{sound.volume}</SoundVolume>
        <Button
          onClick={() => store.dispatch({ type: 'INCREASE_VOLUME' })}
          buttonText="+"
        />
      </SoundControl>
      <SoundControl>
        <p>sound</p>
        <Button
          onClick={() => store.dispatch({ type: 'TOGGLE_SOUND' })}
          buttonText={sound.playing ? 'stop' : 'play'}
        />
      </SoundControl>
    </ControlDiv>
  );
}
