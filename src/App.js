import React from 'react';
import Sound from 'react-sound';
import { Header } from './components/Header';
import { SoundControls } from './components/SoundControls';
import { TimeControls } from './components/TimeControls';
import { TimeDisplay } from './components/TimeDisplay';

export class App extends React.Component {
  constructor() {
    super();
    this.controlsClick = this.controlsClick.bind(this);
    this.volumeClick = this.volumeClick.bind(this);
    this.soundToggle = this.soundToggle.bind(this);
    this.state = {
      workMinutes: 25,
      breakMinutes: 5,
      soundVolume: 50,
      soundStatus: Sound.status.STOPPED,
      soundButtonStr: 'play'
    };
  }

  controlsClick(control) {
    switch (control) {
      case 'workMinus':
        this.setState({workMinutes: Math.max(1, this.state.workMinutes - 1)});
        break;
      case 'workPlus':
        this.setState({workMinutes: this.state.workMinutes + 1});
        break;
      case 'breakMinus':
        this.setState({breakMinutes: Math.max(1, this.state.breakMinutes - 1)});
        break;
      case 'breakPlus':
        this.setState({breakMinutes: this.state.breakMinutes + 1});
        break;
      default:
    }
  }

  volumeClick(control) {
    if (control === 'volumeMinus') {
      this.setState({soundVolume: Math.max(0, this.state.soundVolume - 5)});
    } else {
      this.setState({soundVolume: Math.min(100, this.state.soundVolume + 5)});
    }
  }

  soundToggle(onOff) {
    if (this.state.soundStatus === Sound.status.STOPPED && onOff !== 'off') {
      this.setState({
        soundStatus: Sound.status.PLAYING,
        soundButtonStr: 'stop'
      });
    } else {
      this.setState({
        soundStatus: Sound.status.STOPPED,
        soundButtonStr: 'play'
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <TimeControls
          workMinutes={this.state.workMinutes}
          breakMinutes={this.state.breakMinutes}
          controlsClick={this.controlsClick}
        />
        <SoundControls
          soundVolume={this.state.soundVolume}
          volumeClick={this.volumeClick}
          soundButtonStr={this.state.soundButtonStr}
          soundClick={this.soundToggle}
        />
        <TimeDisplay
          workMinutes={this.state.workMinutes}
          breakMinutes={this.state.breakMinutes}
          soundToggle={this.soundToggle}
        />
        <Sound
          // this should probably be a relative link. fix it
          url="https://dschmaryl.github.io/pomodoro-clock/static/chimes.opus"
          volume={this.state.soundVolume}
          loop={true}
          playFromPosition={0}
          playStatus={this.state.soundStatus}
        />
      </div>
    );
  }
}
