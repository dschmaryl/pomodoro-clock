import React from 'react';
import { connect } from 'react-redux';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

const SoundControls = ({ volume, soundPlaying, dispatch }) => {
  return (
    <Control>
      <Adjuster>
        <p>volume</p>
        <Button
          buttonText="-"
          onClick={() => dispatch({ type: 'DECREASE_VOLUME' })}
        />
        <Label text={volume} />
        <Button
          buttonText="+"
          onClick={() => dispatch({ type: 'INCREASE_VOLUME' })}
        />
      </Adjuster>
      <Adjuster>
        <p>sound</p>
        <Button
          buttonText={soundPlaying ? 'stop' : 'play'}
          onClick={() => dispatch({ type: 'TOGGLE_SOUND' })}
        />
      </Adjuster>
    </Control>
  );
};

const mapStateToProps = state => ({
  volume: state.volume,
  soundPlaying: state.soundPlaying
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps)(SoundControls);
