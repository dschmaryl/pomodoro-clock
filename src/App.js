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
    this.playSound = this.playSound.bind(this);
    this.stopSound = this.stopSound.bind(this);
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
        this.setState({ workMinutes: Math.max(1, this.state.workMinutes - 1) });
        break;
      case 'workPlus':
        this.setState({ workMinutes: this.state.workMinutes + 1 });
        break;
      case 'breakMinus':
        this.setState({
          breakMinutes: Math.max(1, this.state.breakMinutes - 1)
        });
        break;
      case 'breakPlus':
        this.setState({ breakMinutes: this.state.breakMinutes + 1 });
        break;
      default:
    }
  }

  volumeClick(control) {
    if (control === 'volumeMinus') {
      this.setState({ soundVolume: Math.max(0, this.state.soundVolume - 5) });
    } else {
      this.setState({ soundVolume: Math.min(100, this.state.soundVolume + 5) });
    }
  }

  playSound() {
    if (this.state.soundStatus === Sound.status.STOPPED) {
      this.setState({
        soundStatus: Sound.status.PLAYING,
        soundButtonStr: 'stop'
      });
    }
  }

  stopSound() {
    if (this.state.soundStatus === Sound.status.PLAYING) {
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
          playSound={this.playSound}
          stopSound={this.stopSound}
        />
        <TimeDisplay
          workMinutes={this.state.workMinutes}
          breakMinutes={this.state.breakMinutes}
          playSound={this.playSound}
          stopSound={this.stopSound}
        />
        <Sound
          // todo: this should probably be a relative link
          url="https://dschmaryl.github.io/pomodoro-clock/static/alarm.opus"
          volume={this.state.soundVolume}
          loop={true}
          playFromPosition={0}
          playStatus={this.state.soundStatus}
        />
      </div>
    );
  }
}
