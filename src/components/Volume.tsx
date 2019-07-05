import React from 'react';

import { Adjuster } from '../components/Adjuster';

interface PropTypes {
  volume: number;
  soundPlaying: boolean;
  session: string;
  toggleSound: Function;
  decreaseVolume: Function;
  increaseVolume: Function;
}

export class Volume extends React.Component<PropTypes> {
  timeout: undefined | number = undefined;

  adjustVolume = (func: Function) => {
    clearTimeout(this.timeout);

    if (!this.props.soundPlaying) {
      this.props.toggleSound();
    }

    this.timeout = setTimeout(this.props.toggleSound, 1000);
    func();
  };

  render = () => {
    const { volume, decreaseVolume, increaseVolume } = this.props;

    return (
      <Adjuster
        label="volume"
        value={volume}
        onDecrease={() => this.adjustVolume(decreaseVolume)}
        onIncrease={() => this.adjustVolume(increaseVolume)}
      />
    );
  };
}
