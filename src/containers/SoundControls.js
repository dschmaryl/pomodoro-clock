import { connect } from 'react-redux';
import { decreaseVolume, increaseVolume, toggleSound } from '../actions';
import { SoundControls } from '../components/SoundControls';

const mapStateToProps = state => ({
  volume: state.volume,
  soundPlaying: state.soundPlaying
});

const mapDispatchToProps = dispatch => ({
  decreaseVolume: () => dispatch(decreaseVolume()),
  increaseVolume: () => dispatch(increaseVolume()),
  toggleSound: () => dispatch(toggleSound())
});

export default connect(mapStateToProps, mapDispatchToProps)(SoundControls);
