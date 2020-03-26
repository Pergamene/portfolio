import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, LIGHT } from '../assets/colors';
import { data } from '../assets/data';

const useStyles = makeStyles({
  root: {
    borderTop: props => props.darkMode ? 'none' : '1px solid #ddd',
    boxShadow: props => props.darkMode ? 'none' : '0px -2px 15px -8px rgba(0, 0, 0, 0.42)',
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
  links: {
    display: 'flex',
    flex: '1',
    cursor: 'pointer',
  },
});

const Footer = props => {
  const { darkMode } = props;
  const classes = useStyles({darkMode: darkMode});
  const { footer } = data;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        Footer!
      </div>
    </div>
  );
};

export default Footer;
