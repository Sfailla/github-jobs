import React from 'react';
import { Container, Switch, Slider } from './toggleStyles';

export default function Toggle({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Toggle.Switch = function ToggleSwitch({ active, ...otherProps }) {
  return (
    <Switch {...otherProps}>
      <Slider active={active} />
    </Switch>
  );
};
