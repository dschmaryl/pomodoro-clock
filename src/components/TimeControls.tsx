import React from 'react';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';

interface PropTypes {
  workTime: number;
  breakTime: number;
  decreaseWorkTime: Function;
  increaseWorkTime: Function;
  decreaseBreakTime: Function;
  increaseBreakTime: Function;
}

export const TimeControls: React.FC<PropTypes> = ({
  workTime,
  breakTime,
  decreaseWorkTime,
  increaseWorkTime,
  decreaseBreakTime,
  increaseBreakTime
}) => (
  <Control>
    <Adjuster
      label="work"
      value={workTime}
      onDecrease={decreaseWorkTime}
      onIncrease={increaseWorkTime}
    />
    <Adjuster
      label="break"
      value={breakTime}
      onDecrease={decreaseBreakTime}
      onIncrease={increaseBreakTime}
    />
  </Control>
);
