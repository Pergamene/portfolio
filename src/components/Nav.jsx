import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import tower from '../assets/tower.png';

import { DARK, LIGHT } from '../assets/colors';
import { data } from '../assets/data';

import NavLink from './NavLink';

const useStyles = makeStyles({
  root: {
    borderBottom: props => props.darkMode ? 'none' : '1px solid #ddd',
    boxShadow: props => props.darkMode ? 'none' : '0px 2px 15px -8px rgba(0, 0, 0, 0.42)',
    height: '100px',
    background: props => props.darkMode ? DARK : LIGHT,
  },
  container: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
    alignItems: 'center',
  },
  img: {
    padding: '10px',
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
    height: '100%',
    flex: '1',
    cursor: 'pointer',
  },
  toggle: {
    padding: '10px',
  },
  sun: {
    color: LIGHT,
  },
  moon: {
    color: DARK,
    transform: 'rotate(30deg)',
  },
});

const Nav = props => {
  const { darkMode, toggleDarkMode } = props;
  const classes = useStyles({darkMode: darkMode});
  const { nav } = data;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Link to="/">
          <img className={classes.img} src={tower} alt="tower logo" />
        </Link>
        <div className={classes.links}>
          {nav.map(link => {
            return <NavLink link={link} darkMode={darkMode} key={link.id} />
          })}
        </div>
        <div className={classes.toggle}>
          {darkMode ? (
            <WbSunnyIcon className={classes.sun} onClick={toggleDarkMode} />
          ) : (
            <Brightness2Icon className={classes.moon} onClick={toggleDarkMode} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
