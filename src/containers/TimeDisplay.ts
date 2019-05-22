import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../types';
import { pauseTimer, unpauseTimer, timerTick } from '../actions';
import { TimeDisplay } from '../components/TimeDisplay';

const mapStateToProps = (state: State) => ({
  paused: state.paused,
  session: state.session,
  minutes: state.minutes,
  seconds: state.seconds
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  pauseTimer: () => dispatch(pauseTimer()),
  unpauseTimer: () => dispatch(unpauseTimer()),
  timerTick: () => dispatch(timerTick())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeDisplay);
