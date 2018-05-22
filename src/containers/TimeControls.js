import React from 'react';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

export const TimeControls = props => {
  const store = props.store;
  const { time } = store.getState();

  return (
    <Control>
      <Adjuster>
        <p>work</p>
        <Button
          buttonText="-"
          onClick={() => store.dispatch({ type: 'DECREASE_WORK_TIME' })}
        />
        <Label text={time.workTime} />
        <Button
          buttonText="+"
          onClick={() => store.dispatch({ type: 'INCREASE_WORK_TIME' })}
        />
      </Adjuster>
      <Adjuster>
        <p>break</p>
        <Button
          buttonText="-"
          onClick={() => store.dispatch({ type: 'DECREASE_BREAK_TIME' })}
        />
        <Label text={time.breakTime} />
        <Button
          buttonText="+"
          onClick={() => store.dispatch({ type: 'INCREASE_BREAK_TIME' })}
        />
      </Adjuster>
    </Control>
  );
};
