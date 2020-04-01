import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { DARK, DARK_PAGE, LIGHT } from '../assets/colors';
import { data } from '../assets/data';

const useStyles = makeStyles({
  root: {
    minHeight: props => props.matches ? 'calc(100vh - 189px)' : 'calc(100vh - 100px)',
    backgroundColor: props => props.darkMode ? DARK_PAGE : '',
    color: props => props.darkMode ? LIGHT : DARK,
    transition: '1s linear',
    transitionProperty: 'background, color',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
  },
  h1: {
    fontSize: props => props.matches ? '8vw' : '80px',
    fontWeight: '300',
    margin: props => props.matches ? '8vw 0 0' : '20vh 0 0',
  },
  p: {
    fontWeight: '500',
    fontSize: props => props.matches ? '16px' : '18px',
    margin: '0',
    padding: '0 20px',
  },
});

const Landing = props => {
  const matches = useMediaQuery('(max-width: 930px)');
  const { darkMode } = props;
  const classes = useStyles({darkMode, matches});
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
