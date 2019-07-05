import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../types';
import { decreaseVolume, increaseVolume, toggleSound } from '../actions';
import { Volume } from '../components/Volume';

const mapStateToProps = (state: State) => ({
  volume: state.volume,
  soundPlaying: state.soundPlaying,
  session: state.session
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  decreaseVolume: () => dispatch(decreaseVolume()),
  increaseVolume: () => dispatch(increaseVolume()),
  toggleSound: () => dispatch(toggleSound())
});

export const VolumeAdjuster = connect(
  mapStateToProps,
  mapDispatchToProps
)(Volume);
