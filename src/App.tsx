import React from 'react';

import { Header } from './components/Header';
import { AdjusterRow } from './components/AdjusterRow';
import { WorkAdjuster } from './containers/WorkAdjuster';
import { BreakAdjuster } from './containers/BreakAdjuster';
import { VolumeAdjuster } from './containers/VolumeAdjuster';
import { SessionAdjuster } from './containers/SessionAdjuster';
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
          width: '300px',
          height: '560px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Header />
        <AdjusterRow>
          <WorkAdjuster />
          <BreakAdjuster />
        </AdjusterRow>
        <AdjusterRow>
          <VolumeAdjuster />
          <SessionAdjuster />
        </AdjusterRow>

        <TimeDisplay />
        <Alarm />
      </div>
    </div>
  );
};

export default App;
