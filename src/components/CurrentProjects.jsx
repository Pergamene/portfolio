import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, DARK_PAGE, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: props => props.darkMode ? DARK_PAGE : '',
    color: props => props.darkMode ? LIGHT : DARK,
  },
});

const CurrentProjects = props => {
  const { darkMode } = props;
  const classes = useStyles({darkMode: darkMode});

  return (
    <div className={classes.root}>Current Projects</div>
  );
};

export default CurrentProjects;
