import { connect } from 'react-redux';
import { SoundControls } from '../components/SoundControls';

const mapStateToProps = state => ({
  volume: state.volume,
  soundPlaying: state.soundPlaying
});

const mapDispatchToProps = dispatch => ({
  decreaseVolume: () => dispatch({ type: 'DECREASE_VOLUME' }),
  increaseVolume: () => dispatch({ type: 'INCREASE_VOLUME' }),
  toggleSound: () => dispatch({ type: 'TOGGLE_SOUND' })
});

export default connect(mapStateToProps, mapDispatchToProps)(SoundControls);
