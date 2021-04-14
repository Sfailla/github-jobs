import React from 'react';
import Toggle from './toggle';
import Icon from '../icon';

import sun from '../../assets/desktop/icon-sun.svg';
import moon from '../../assets/desktop/icon-moon.svg';
import { AppContext } from '../../contexts';

export default function ToggleSwitch() {
  const [toggle, setToggle] = React.useState(false);
  const { setMode } = React.useContext(AppContext);

  const handleToggle = () => setToggle(toggle => !toggle);

  React.useEffect(() => setMode(toggle ? 'dark' : 'light'), [setMode, toggle]);

  return (
    <Toggle>
      <Icon width={20} height={18} src={sun} />
      <Toggle.Switch toggle={toggle} onClick={handleToggle} />
      <Icon width={12} height={12} src={moon} />
    </Toggle>
  );
}
