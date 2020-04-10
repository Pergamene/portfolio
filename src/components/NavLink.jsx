import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  link: {
    borderRight: props => (props.last || props.matchS) ? 'none' : `2px solid ${props.darkMode ? LIGHT : DARK }`,
  },
});

const NavLink = props => {
  console.log(props);
  const { link, classes, darkMode, matchS } = props;
  const localClass = useStyles({darkMode, matchS, last: link.last});

  return (
    <Link className={classes.linkContainer} 
      activeStyle={
        {
        borderBottom: `4px solid ${darkMode ? LIGHT : DARK}`,
        paddingTop: `${matchS ? '0' : '4px'}`,
        transition: 'all 0.3s ease-out, border-color 1s ease-out',
        }
      } 
      to={link.path}
    >
      <div className={`${classes.link} ${localClass.link}`}>{link.name}</div>
    </Link>
  );
};

export default NavLink;
