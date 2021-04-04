import React from 'react';
import Toggle from './toggle';
import Icon from '../icon';

import sun from '../../assets/desktop/icon-sun.svg';
import moon from '../../assets/desktop/icon-moon.svg';
import { AppContext } from '../../context';

export default function ToggleSwitch() {
  const [active, setActive] = React.useState(false);
  const { setTheme } = React.useContext(AppContext);

  const handleToggle = () => setActive(!active);
  const handleTheme = () => {
    return active === true
      ? setTheme({ mode: 'light' })
      : setTheme({ mode: 'dark' });
  };

  return (
    <Toggle>
      <Icon width={20} height={18} src={sun} />
      <Toggle.Switch
        active={active}
        onClick={() => {
          handleToggle();
          handleTheme();
        }}
      />
      <Icon width={12} height={12} src={moon} />
    </Toggle>
  );
}
