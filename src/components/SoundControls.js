import React from 'react';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

export const SoundControls = ({
  volume,
  soundPlaying,
  toggleSound,
  decreaseVolume,
  increaseVolume
}) => {
  return (
    <Control>
      <Adjuster>
        <p>volume</p>
        <Button buttonText="-" onClick={decreaseVolume} />
        <Label text={volume} />
        <Button buttonText="+" onClick={increaseVolume} />
      </Adjuster>
      <Adjuster>
        <p>sound</p>
        <Button
          buttonText={soundPlaying ? 'stop' : 'play'}
          onClick={toggleSound}
        />
      </Adjuster>
    </Control>
  );
};
