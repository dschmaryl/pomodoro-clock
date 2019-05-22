import React from 'react';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';

interface PropTypes {
  volume: number;
  soundPlaying: boolean;
  toggleSound: Function;
  decreaseVolume: Function;
  increaseVolume: Function;
}

export const SoundControls: React.FC<PropTypes> = ({
  volume,
  soundPlaying,
  toggleSound,
  decreaseVolume,
  increaseVolume
}) => (
  <Control>
    <Adjuster
      label="volume"
      value={volume}
      onDecrease={decreaseVolume}
      onIncrease={increaseVolume}
    />
    <Adjuster
      label="sound"
      value={soundPlaying ? 'stop' : 'play'}
      onDecrease={toggleSound}
      onIncrease={toggleSound}
    />
  </Control>
);
