import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  toggle: {
    padding: '10px',
  },
  sun: {
    color: LIGHT,
    position: 'relative',
    left: '24px',
    opacity: '0',
    transition: 'opacity 0.3s ease-out',
  },
  moon: {
    color: DARK,
    transform: 'rotate(30deg)',
    position: 'relative',
    opacity: '0',
    transition: 'opacity 0.3s ease-out',
  },
  visible: {
    transition: 'opacity 1s ease-out',
    opacity: '100',
  },
});

const Toggle = props => {
  const classes = useStyles();
  const { darkMode, toggleDarkMode } = props;

  return (
    <div className={classes.toggle}>
      <WbSunnyIcon className={`${classes.sun} ${darkMode ? classes.visible : ''}`} onClick={toggleDarkMode} />
      <Brightness2Icon className={`${classes.moon} ${darkMode ? '' : classes.visible}`} onClick={toggleDarkMode} />
    </div>
  );
};

export default Toggle;
