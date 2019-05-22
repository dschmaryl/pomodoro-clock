import React from 'react';

import { Header } from './components/Header';
import SoundControls from './containers/SoundControls';
import TimeControls from './containers/TimeControls';
import TimeDisplay from './containers/TimeDisplay';
import Alarm from './containers/Alarm';

const App: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          width: '340px',
          height: '560px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Header />
        <TimeControls />
        <SoundControls />
        <TimeDisplay />
        <Alarm />
      </div>
    </div>
  );
};

export default App;
