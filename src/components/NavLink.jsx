import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  link: {
    padding: '20px',
    color: props => props.darkMode ? LIGHT : DARK,
    borderRight: props => props.last ? 'none' : `2px solid ${props.darkMode ? LIGHT : DARK }`,
  },
});

const NavLink = props => {
  const { link, darkMode } = props;
  const classes = useStyles({darkMode: darkMode, last: link.last});

  return (
    <Link className={classes.root} 
      activeStyle={{
        borderBottom: `4px solid ${darkMode ? LIGHT : DARK}`,
        paddingTop: '4px',
        transition: 'all 0.3s ease-out',
      }} 
      to={link.path}
    >
      <div className={classes.link}>{link.name}</div>
    </Link>
  );
};

export default NavLink;
