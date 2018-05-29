import React from 'react';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

export const TimeControls = ({
  workTime,
  breakTime,
  decreaseWorkTime,
  increaseWorkTime,
  decreaseBreakTime,
  increaseBreakTime
}) => {
  return (
    <Control>
      <Adjuster>
        <p>work</p>
        <Button buttonText="-" onClick={decreaseWorkTime} />
        <Label text={workTime} />
        <Button buttonText="+" onClick={increaseWorkTime} />
      </Adjuster>
      <Adjuster>
        <p>break</p>
        <Button buttonText="-" onClick={decreaseBreakTime} />
        <Label text={breakTime} />
        <Button buttonText="+" onClick={increaseBreakTime} />
      </Adjuster>
    </Control>
  );
};
