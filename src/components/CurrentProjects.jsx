import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, DARK_PAGE, LIGHT } from '../assets/colors';
import { data } from '../assets/data';

import Project from './Project';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: props => props.darkMode ? DARK_PAGE : '',
    color: props => props.darkMode ? LIGHT : DARK,
    transition: '1s ease-out',
    transitionProperty: 'background, color',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
  },
});

const CurrentProjects = props => {
  const { darkMode } = props;
  const classes = useStyles({darkMode});
  const { currentProjects } = data;

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <h2>Current Projects</h2>
        {currentProjects.map(project => {
          return <Project data={project} />
        })}
      </div>
    </div>
  );
};

export default CurrentProjects;
