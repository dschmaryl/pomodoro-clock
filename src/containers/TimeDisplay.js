import React from 'react';
import { connect } from 'react-redux';

import { Timer } from '../components/Timer';
import { TimerHead } from '../components/TimerHead';
import { TimerTime } from '../components/TimerTime';

class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.timerClick = this.timerClick.bind(this);
    this.state = {
      interval: setInterval(() => props.dispatch({ type: 'TIMER_TICK' }), 1000)
    };
  }

  timerClick() {
    if (this.props.paused) {
      this.props.dispatch({ type: 'UNPAUSE_TIMER' });
    } else {
      this.props.dispatch({ type: 'PAUSE_TIMER' });
    }
  }

  render() {
    return (
      <Timer>
        <TimerHead session={this.props.session} />
        <TimerTime
          session={this.props.session}
          minutes={this.props.minutes}
          seconds={this.props.seconds}
          timerClick={this.timerClick}
        />
      </Timer>
    );
  }
}

const mapStateToProps = state => ({
  paused: state.paused,
  session: state.session,
  minutes: state.minutes,
  seconds: state.seconds
});

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeDisplay);
