import React from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { TimeDisplay } from './components/TimeDisplay';

export class App extends React.Component {
  constructor() {
    super();
    this.controlsClick = this.controlsClick.bind(this);
    this.state = {
      workMinutes: 25,
      breakMinutes: 5,
    };
  }

  controlsClick(control) {
    switch (control) {
      case 'workMinus':
        this.setState({
          workMinutes: Math.max(1, this.state.workMinutes - 1)
        });
        break;
      case 'workPlus':
        this.setState({
          workMinutes: Math.max(1, this.state.workMinutes + 1)
        });
        break;
      case 'breakMinus':
        this.setState({
          breakMinutes: Math.max(1, this.state.breakMinutes - 1)
        });
        break;
      case 'breakPlus':
        this.setState({
          breakMinutes: Math.max(1, this.state.breakMinutes + 1)
        });
        break;
      default:
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Controls
          workMinutes={this.state.workMinutes}
          breakMinutes={this.state.breakMinutes}
          controlsClick={this.controlsClick}
        />
        <TimeDisplay
          workMinutes={this.state.workMinutes}
          breakMinutes={this.state.breakMinutes}
        />
      </div>
    );
  }
}
