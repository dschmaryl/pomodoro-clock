import React from 'react';

import { Header } from './components/Header';
import { SoundControls } from './containers/SoundControls';
import { TimeControls } from './containers/TimeControls';
import { TimeDisplay } from './containers/TimeDisplay';
import { Alarm } from './components/Alarm';

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
    const { time } = store.getState();

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
        <Alarm store={store} />
      </div>
    );
  }
}
