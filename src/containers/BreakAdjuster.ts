import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../types';
import { decreaseBreakTime, increaseBreakTime } from '../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = (state: State) => ({
  label: 'break',
  value: state.breakTime
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrease: () => dispatch(decreaseBreakTime()),
  onIncrease: () => dispatch(increaseBreakTime())
});

export const BreakAdjuster = connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
