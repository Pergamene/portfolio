import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { DARK, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  link: {
    padding: props => props.matches ? '5px' : '20px',
    color: props => props.darkMode ? LIGHT : DARK,
    borderRight: props => (props.last || props.matches) ? 'none' : `2px solid ${props.darkMode ? LIGHT : DARK }`,
    transition: 'all 1s ease-out',
  },
});

const NavLink = props => {
  const matches = useMediaQuery('(max-width: 630px)');
  const { link, darkMode } = props;
  const classes = useStyles({darkMode, matches, last: link.last});

  return (
    <Link className={classes.root} 
      activeStyle={{
        borderBottom: `4px solid ${darkMode ? LIGHT : DARK}`,
        paddingTop: `${matches ? '0' : '4px'}`,
        transition: 'all 0.3s ease-out',
      }} 
      to={link.path}
    >
      <div className={classes.link}>{link.name}</div>
    </Link>
  );
};

export default NavLink;
