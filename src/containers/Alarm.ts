import { connect } from 'react-redux';

import { State } from '../types';
import { Alarm } from '../components/Alarm';

const mapStateToProps = (state: State) => ({
  volume: state.volume,
  soundPlaying: state.soundPlaying
});

export default connect(mapStateToProps)(Alarm);
