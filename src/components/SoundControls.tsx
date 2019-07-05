import React from 'react';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';

interface PropTypes {
  volume: number;
  soundPlaying: boolean;
  session: string;
  toggleSound: Function;
  decreaseVolume: Function;
  increaseVolume: Function;
  togglePaused: Function;
  nextSession: Function;
}

export class SoundControls extends React.Component<PropTypes> {
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
    const {
      volume,
      session,
      decreaseVolume,
      increaseVolume,
      togglePaused,
      nextSession
    } = this.props;

    return (
      <Control>
        <Adjuster
          label="volume"
          value={volume}
          onDecrease={() => this.adjustVolume(decreaseVolume)}
          onIncrease={() => this.adjustVolume(increaseVolume)}
        />
        <Adjuster
          label="session"
          value={session}
          onDecrease={togglePaused}
          onIncrease={nextSession}
        />
      </Control>
    );
  };
}
