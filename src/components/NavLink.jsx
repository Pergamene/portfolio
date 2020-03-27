import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: props => props.isCurrent ? `4px solid ${props.darkMode ? LIGHT : DARK}` : 'none',
    borderTop: props => props.isCurrent ? `4px solid ${props.darkMode ? DARK : LIGHT}` : 'none',
  },
  link: {
    padding: '20px',
    color: props => props.darkMode ? LIGHT : DARK,
    borderRight: props => props.last ? 'none' : `2px solid ${props.darkMode ? LIGHT : DARK }`,
  },
});

const NavLink = props => {
  const history = useHistory();
  const { link, darkMode, currentPage } = props;
  const [isCurrent, setIsCurrent] = useState(false);
  const classes = useStyles({darkMode: darkMode, isCurrent: isCurrent, last: link.last});

  useEffect(() => {
    setIsCurrent(currentPage === link.path);
  }, [currentPage, link.path]);

  const handleClick = () => {
    history.push(link.path);
  };

  return (
    <div className={classes.root}>
      <div className={classes.link} onClick={handleClick}>{link.name}</div>
    </div>
  );
};

export default NavLink;
