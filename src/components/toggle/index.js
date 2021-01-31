import React from 'react';
import Toggle from './toggle';
import Icon from '../icon';

import sun from '../../assets/desktop/icon-sun.svg';
import moon from '../../assets/desktop/icon-moon.svg';
import { ThemeContext } from '../app/context';

export default function ToggleSwitch() {
  const [active, setActive] = React.useState(false);
  const { setTheme } = React.useContext(ThemeContext);

  const handleToggle = () => setActive(!active);
  const handleTheme = () => {
    return active === true
      ? setTheme({ mode: 'light' })
      : setTheme({ mode: 'dark' });
  };

  return (
    <Toggle>
      <Icon src={sun} />
      <Toggle.Switch
        active={active}
        onClick={() => {
          handleToggle();
          handleTheme();
        }}
      />
      <Icon src={moon} />
    </Toggle>
  );
}
