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
  h2: {
    fontSize: '36px',
    margin: '20px',
    fontWeight: '300',
  },
});

const PreviousProjects = props => {
  const { darkMode } = props;
  const classes = useStyles({darkMode});
  const { previousProjects } = data;

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <h2 className={classes.h2}>Previous Projects</h2>
        {previousProjects.map(project => {
          return <Project darkMode={darkMode} data={project} key={project.id} />
        })}
      </div>
    </div>
  );
};

export default PreviousProjects;
