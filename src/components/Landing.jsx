import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, DARK_PAGE, LIGHT } from '../assets/colors';
import { data } from '../assets/data';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: props => props.darkMode ? DARK_PAGE : '',
    color: props => props.darkMode ? LIGHT : DARK,
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
  },
  h1: {
    fontSize: '80px',
    fontVariant: 'small-caps',
    margin: '20vh 0 0',
  },
  p: {
    fontWeight: '500',
    fontSize: '20px',
    margin: '0',
    padding: '0 20px',
  },
});

const Landing = props => {
  const { darkMode } = props;
  const classes = useStyles({darkMode: darkMode});
  const { landing } = data;

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <h1 className={classes.h1}>{landing.title}</h1>
        <p className={classes.p}>{landing.bio}</p>
      </div>
    </div>
  );
};

export default Landing;
