import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  root: {
    padding: '20px 20px',
    color: props => props.darkMode ? LIGHT : DARK,
    borderRight: props => `1px solid ${props.darkMode ? LIGHT : DARK }`,
    '&:last-child': {
      borderRight: 'none',
      paddingRight: '0',
    },
  },
});

const NavLink = props => {
  const history = useHistory();
  const { link, darkMode } = props;
  const classes = useStyles({darkMode: darkMode});

  const handleClick = () => {
    history.push(link.path);
  };

  return (
    <div className={classes.root} onClick={handleClick}>{link.name}</div>
  );
};

export default NavLink;
