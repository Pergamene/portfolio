import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, DARK_PAGE, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: props => props.darkMode ? DARK_PAGE : '',
    color: props => props.darkMode ? LIGHT : DARK,
    transition: '1s ease-out',
    transitionProperty: 'background, color',
  },
});

const PreviousProjects = props => {
  const { darkMode } = props;
  const classes = useStyles({darkMode});

  return (
    <div className={classes.root}>Previous Projects</div>
  );
};

export default PreviousProjects;
