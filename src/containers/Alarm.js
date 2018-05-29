import { connect } from 'react-redux';
import { Alarm } from '../components/Alarm';

const mapStateToProps = state => {
  return { volume: state.volume, soundPlaying: state.soundPlaying };
};

export default connect(mapStateToProps)(Alarm);
