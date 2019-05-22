import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../types';
import {
  decreaseWorkTime,
  increaseWorkTime,
  decreaseBreakTime,
  increaseBreakTime
} from '../actions';
import { TimeControls } from '../components/TimeControls';

const mapStateToProps = (state: State) => {
  return { workTime: state.workTime, breakTime: state.breakTime };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  decreaseWorkTime: () => dispatch(decreaseWorkTime()),
  increaseWorkTime: () => dispatch(increaseWorkTime()),
  decreaseBreakTime: () => dispatch(decreaseBreakTime()),
  increaseBreakTime: () => dispatch(increaseBreakTime())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeControls);
