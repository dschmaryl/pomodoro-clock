import React from 'react';

import { Header } from './components/Header';
import SoundControls from './containers/SoundControls';
import TimeControls from './containers/TimeControls';
import TimeDisplay from './containers/TimeDisplay';
import AlarmSound from './containers/AlarmSound';

const App = props => (
  <div>
    <Header />
    <TimeControls />
    <SoundControls />
    <TimeDisplay />
    <AlarmSound />
  </div>
);

export default App;
