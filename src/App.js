import React from 'react';
import Sound from 'react-sound';

import { Header } from './components/Header';
import { SoundControls } from './components/SoundControls';
import { TimeControls } from './components/TimeControls';
import { TimeDisplay } from './components/TimeDisplay';

export class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const store = this.props.store;
    const { time, sound } = store.getState();

    return (
      <div>
        <Header />
        <TimeControls store={store} />
        <SoundControls store={store} />
        <TimeDisplay
          workMinutes={time.workTime}
          breakMinutes={time.breakTime}
          playSound={() => store.dispatch({ type: 'PLAY_SOUND' })}
          stopSound={() => store.dispatch({ type: 'STOP_SOUND' })}
        />
        <Sound
          // todo: this should probably be a relative link
          url="https://dschmaryl.github.io/pomodoro-clock/static/alarm.opus"
          volume={sound.volume}
          loop={true}
          playFromPosition={0}
          playStatus={
            sound.playing ? Sound.status.PLAYING : Sound.status.STOPPED
          }
        />
      </div>
    );
  }
}
