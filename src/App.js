import React from 'react';

import { Header } from './components/Header';
import SoundControls from './containers/SoundControls';
import TimeControls from './containers/TimeControls';
import TimeDisplay from './containers/TimeDisplay';
import Alarm from './containers/Alarm';

const App = () => (
  <div>
    <Header />
    <TimeControls />
    <SoundControls />
    <TimeDisplay />
    <Alarm />
  </div>
);

export default App;
