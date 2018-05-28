import React from 'react';
import { connect } from 'react-redux';

import { Control } from '../components/Control';
import { Adjuster } from '../components/Adjuster';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

const TimeControls = ({ workTime, breakTime, dispatch }) => {
  return (
    <Control>
      <Adjuster>
        <p>work</p>
        <Button
          buttonText="-"
          onClick={() => dispatch({ type: 'DECREASE_WORK_TIME' })}
        />
        <Label text={workTime} />
        <Button
          buttonText="+"
          onClick={() => dispatch({ type: 'INCREASE_WORK_TIME' })}
        />
      </Adjuster>
      <Adjuster>
        <p>break</p>
        <Button
          buttonText="-"
          onClick={() => dispatch({ type: 'DECREASE_BREAK_TIME' })}
        />
        <Label text={breakTime} />
        <Button
          buttonText="+"
          onClick={() => dispatch({ type: 'INCREASE_BREAK_TIME' })}
        />
      </Adjuster>
    </Control>
  );
};

const mapStateToProps = state => {
  return { workTime: state.workTime, breakTime: state.breakTime };
};

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeControls);
