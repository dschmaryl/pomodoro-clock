import React from 'react';
import styled from 'styled-components';

const Timer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const TimerHead = styled.div`
  font-size: 2em;
  padding-bottom: 8px;
`;

const TimerTime = styled.div`
  font-size: 5em;
  cursor: pointer;
  color: ${(props: { session: string }) =>
    props.session === 'work' ? 'green' : 'red'};
`;

interface PropTypes {
  minutes: number;
  seconds: number;
  session: string;
  paused: boolean;
  togglePaused: Function;
  timerTick: Function;
}

export class TimeDisplay extends React.Component<PropTypes> {
  state = { interval: undefined, paused: true };

  componentDidMount = () => this.checkPaused(this.props.paused);

  componentWillReceiveProps = ({ paused }: { paused: boolean }) =>
    this.checkPaused(paused);

  checkPaused = (paused: boolean) => {
    if (paused && !this.state.paused) {
      this.setState({
        paused: true,
        interval: clearInterval(this.state.interval)
      });
    } else if (!paused && this.state.paused) {
      this.setState(
        {
          paused: false,
          interval: setInterval(() => this.props.timerTick(), 1000)
        },
        () => this.props.timerTick()
      );
    }
  };

  render = () => {
    const { minutes, seconds, session } = this.props;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;
    const sessionStr = session[0].toUpperCase() + session.slice(1);

    document.title = sessionStr + ' ~ ' + minutesStr + ':' + secondsStr;

    return (
      <Timer>
        <TimerHead>{sessionStr} time left:</TimerHead>
        <TimerTime
          onClick={() => this.props.togglePaused()}
          session={this.props.session}
        >
          {minutesStr}:{secondsStr}
        </TimerTime>
      </Timer>
    );
  };
}
