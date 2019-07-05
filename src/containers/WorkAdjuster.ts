import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../types';
import { decreaseWorkTime, increaseWorkTime } from '../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = (state: State) => ({
  label: 'work',
  value: state.workTime
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrease: () => dispatch(decreaseWorkTime()),
  onIncrease: () => dispatch(increaseWorkTime())
});

export const WorkAdjuster = connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
