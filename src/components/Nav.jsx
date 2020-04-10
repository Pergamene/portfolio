import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { Link } from 'react-router-dom';

import tower from '../assets/tower.svg';
import { data } from '../assets/data';

import NavLink from './NavLink';

const Nav = props => {
  const { classes, darkMode, matchS, toggleDarkMode } = props;
  const { nav } = data;

  return (
    <div className={classes.navBar}>
      <div className={classes.navContainer}>
        <Link to="/">
          <img className={classes.logo} src={tower} alt="tower logo" />
        </Link>
        <div className={classes.linksContainer}>
          {nav.map(link => {
            return <NavLink link={link} classes={classes} darkMode={darkMode} matchS={matchS} key={link.id} />
          })}
        </div>
        {!matchS && <div className={classes.toggle}>
          <WbSunnyIcon className={`${classes.sun} ${darkMode ? classes.visible : ''}`} onClick={toggleDarkMode} />
          <Brightness2Icon className={`${classes.moon} ${darkMode ? '' : classes.visible}`} onClick={toggleDarkMode} />
        </div>}
      </div>
    </div>
  );
};

export default Nav;
