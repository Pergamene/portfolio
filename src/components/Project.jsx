import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
});

const Project = props => {
  const classes = useStyles();
  const { data } = props;

  return (
    <div className={classes.root}>
      <h3>{data.name}</h3>
      <p>{data.date}</p>
      <p>Tech Stack: {data.stack}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default Project;
