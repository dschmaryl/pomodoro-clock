import React from 'react';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

export const SoundControls = props => {
  const store = props.store;
  const { sound } = store.getState();

  return (
    <Control>
      <Adjuster>
        <p>volume</p>
        <Button
          buttonText="-"
          onClick={() => store.dispatch({ type: 'DECREASE_VOLUME' })}
        />
        <Label text={sound.volume} />
        <Button
          buttonText="+"
          onClick={() => store.dispatch({ type: 'INCREASE_VOLUME' })}
        />
      </Adjuster>
      <Adjuster>
        <p>sound</p>
        <Button
          buttonText={sound.playing ? 'stop' : 'play'}
          onClick={() => store.dispatch({ type: 'TOGGLE_SOUND' })}
        />
      </Adjuster>
    </Control>
  );
};
