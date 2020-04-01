import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import tower from '../assets/tower.png';

import { DARK, LIGHT } from '../assets/colors';
import { data } from '../assets/data';

import NavLink from './NavLink';

const useStyles = makeStyles({
  root: {
    borderBottom: props => props.darkMode ? `1px solid ${DARK}` : '1px solid #ddd',
    boxShadow: props => props.darkMode ? 'none' : '0px 2px 15px -8px rgba(0, 0, 0, 0.42)',
    height: props => props.matches ? '' : '100px',
    backgroundColor: props => props.darkMode ? DARK : LIGHT,
    transition: 'all 1s ease-out',
  },
  container: {
    display: 'flex',
    flexDirection: props => props.matches ? 'column' : 'row',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '100%',
    alignItems: 'center',
  },
  img: {
    padding: props => props.matches ? '10px 0 0 0' : '10px',
    marginTop: props => props.matches ? '0' : '4px',
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
    flexDirection: props => props.matches ? 'column' : 'row',
    height: '100%',
    flex: '1',
    cursor: 'pointer',
    alignItems: props => props.matches ? 'center' : '',
  },
  toggle: {
    padding: '10px',
  },
  sun: {
    color: LIGHT,
    position: 'relative',
    left: '24px',
    opacity: '0%',
    transition: 'opacity 0.3s ease-out',
  },
  moon: {
    color: DARK,
    transform: 'rotate(30deg)',
    position: 'relative',
    opacity: '0%',
    transition: 'opacity 0.3s ease-out',
  },
  visible: {
    transition: 'opacity 1s ease-out',
    opacity: '100%',
  },
});

const Nav = props => {
  const { darkMode, toggleDarkMode } = props;
  const matches = useMediaQuery('(max-width: 630px)');
  const classes = useStyles({darkMode, matches});
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
        {!matches && <div className={classes.toggle}>
          <WbSunnyIcon className={`${classes.sun} ${darkMode ? classes.visible : ''}`} onClick={toggleDarkMode} />
          <Brightness2Icon className={`${classes.moon} ${darkMode ? '' : classes.visible}`} onClick={toggleDarkMode} />
        </div>}
      </div>
    </div>
  );
};

export default Nav;
