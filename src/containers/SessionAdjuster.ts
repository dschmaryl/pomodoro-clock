import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { State } from '../types';
import { nextSession, togglePaused } from '../actions';
import { Session } from '../components/Session';

const mapStateToProps = (state: State) => ({
  paused: state.paused,
  session: state.session
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  togglePaused: () => dispatch(togglePaused()),
  nextSession: () => dispatch(nextSession())
});

export const SessionAdjuster = connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
