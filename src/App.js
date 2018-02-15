import React from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { TimeDisplay } from './components/TimeDisplay';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workTime: 25,
      breakTime: 5,
      numSessions: 0,
      session: 'work',
      sessionTime: '00:00',
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Controls
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
        />
        <TimeDisplay
          session={this.state.session}
          sessionTime={this.state.sessionTime}
        />
      </div>
    );
  }
}
