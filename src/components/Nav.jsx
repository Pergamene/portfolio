import React from 'react';
import { Link } from 'react-router-dom';

import tower from '../assets/tower.svg';
import { data } from '../assets/data';

import NavLink from './NavLink';
import Toggle from './Toggle';

const Nav = props => {
  const { classes, matchS, darkMode, toggleDarkMode } = props;
  const { nav } = data;

  return (
    <div className={classes.navBar}>
      <div className={classes.navContainer}>
        <Link to="/">
          <img className={classes.logo} src={tower} alt="tower logo" />
        </Link>
        <div className={classes.linksContainer}>
          {nav.map(link => {
            return <NavLink link={link} classes={classes} matchS={matchS} darkMode={darkMode} key={link.id} />
          })}
        </div>
        {!matchS && <Toggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
      </div>
    </div>
  );
};

export default Nav;
