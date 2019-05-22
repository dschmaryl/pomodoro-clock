import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../types';
import { decreaseVolume, increaseVolume, toggleSound } from '../actions';
import { SoundControls } from '../components/SoundControls';

const mapStateToProps = (state: State) => ({
  volume: state.volume,
  soundPlaying: state.soundPlaying
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  decreaseVolume: () => dispatch(decreaseVolume()),
  increaseVolume: () => dispatch(increaseVolume()),
  toggleSound: () => dispatch(toggleSound())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundControls);
