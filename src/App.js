import React from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { TimeDisplay } from './components/TimeDisplay';

export class App extends React.Component {
  constructor() {
    super();
    this.timerClick = this.timerClick.bind(this);
    this.controlsClick = this.controlsClick.bind(this);
    this.state = {
      workTime: 25,
      breakTime: 5,
      numSessions: 0,
      session: 'work',
      sessionTime: '25:00',
      timerSeconds: 0,
      timerMinutes: 25,
      paused: true
    };
  }

  controlsClick(control) {
    console.log('controlsClick func called');
    if (this.state.paused) {
      switch (control) {
        case 'workMinus':
          this.setState({workTime: this.state.workTime - 1});
          break;
        case 'workPlus':
          this.setState({workTime: this.state.workTime + 1});
          break;
        case 'breakMinus':
          this.setState({breakTime: this.state.breakTime - 1});
          break;
        case 'breakPlus':
          this.setState({breakTime: this.state.breakTime + 1});
          break;
        default:
      }
    }
  }

  timerClick() {
    console.log('timerClick func called');
    if (this.state.paused) {
      this.startClock();
      this.setState({paused: false});
    } else {
      this.stopClock();
      this.setState({paused: true});
    }
  }

  startClock() {
    console.log('startClock func called');
  }

  stopClock() {
    console.log('stopClock func called');
  }

  render() {
    return (
      <div>
        <Header />
        <Controls
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          controlsClick={this.controlsClick}
        />
        <TimeDisplay
          session={this.state.session}
          sessionTime={this.state.sessionTime}
          timerMinutes={this.state.timerMinutes}
          timerSeconds={this.state.timerSeconds}
          timerClick={this.timerClick}
        />
      </div>
    );
  }
}
