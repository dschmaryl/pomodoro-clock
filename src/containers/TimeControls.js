import { connect } from 'react-redux';
import { TimeControls } from '../components/TimeControls';

const mapStateToProps = state => {
  return { workTime: state.workTime, breakTime: state.breakTime };
};

const mapDispatchToProps = dispatch => ({
  decreaseWorkTime: () => dispatch({ type: 'DECREASE_WORK_TIME' }),
  increaseWorkTime: () => dispatch({ type: 'INCREASE_WORK_TIME' }),
  decreaseBreakTime: () => dispatch({ type: 'DECREASE_BREAK_TIME' }),
  increaseBreakTime: () => dispatch({ type: 'INCREASE_BREAK_TIME' })
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeControls);
