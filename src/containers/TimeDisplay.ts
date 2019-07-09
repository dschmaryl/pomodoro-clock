import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../types';
import { timerTick, togglePaused } from '../actions';
import { TimeDisplay } from '../components/TimeDisplay';

const mapStateToProps = (state: State) => ({
  paused: state.paused,
  session: state.session,
  minutes: state.minutes,
  seconds: state.seconds
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  togglePaused: () => dispatch(togglePaused()),
  timerTick: () => dispatch(timerTick())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeDisplay);
