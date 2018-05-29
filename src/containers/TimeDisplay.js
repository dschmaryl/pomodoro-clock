import { connect } from 'react-redux';
import { TimeDisplay } from '../components/TimeDisplay';

const mapStateToProps = state => ({
  paused: state.paused,
  session: state.session,
  minutes: state.minutes,
  seconds: state.seconds
});

const mapDispatchToProps = dispatch => ({
  pauseTimer: () => dispatch({ type: 'PAUSE_TIMER' }),
  unpauseTimer: () => dispatch({ type: 'UNPAUSE_TIMER' }),
  timerTick: () => dispatch({ type: 'TIMER_TICK' })
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeDisplay);
