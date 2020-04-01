import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DARK, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    width: '100%',
    padding: '0 20px 20px',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  h3: {
    margin: '0',
    fontSize: '28px',
    fontWeight: '300',
  },
  info: {
    display: 'flex',
    margin: '5px 0',
  },
  date: {
    paddingRight: '10px',
    margin: '0',
    borderRight: props => `2px solid ${props.darkMode ? LIGHT : DARK }`,
    transition: 'border 1s ease-out',
  },
  stack: {
    paddingLeft: '10px',
    margin: '0',
  },
  links: {
    display: 'flex',
    margin: '5px 0',
  },
  button: {
    color: 'inherit',
    textDecoration: 'none',
    padding: '15px',
    border: props => `2px solid ${props.darkMode ? LIGHT : DARK }`,
    transition: 'border 1s ease-out',
    borderRadius: '20px',
    marginLeft: '10px',
  },
  link: {
    width: '127px',
  },
  repo: {
    width: '80px',
  },
  description: {
    margin: '5px 0 0',
  },
  bullets: {
    margin: '0',
  },
});

const Project = props => {
  const { data, darkMode } = props;
  const classes = useStyles({darkMode});

  return (
    <div className={classes.root}>
      <h3 className={classes.h3}>{data.name}</h3>
      <div className={classes.info}>
        <p className={classes.date}>{data.date}</p>
        <p className={classes.stack}>{data.stack}</p>
      </div>
      <div className={classes.links}>
        <a className={`${classes.button} ${classes.repo}`} href={data.repo} target="_blank" rel="noopener noreferrer">
          View Repo
        </a>
        {data.link && <a className={`${classes.button} ${classes.link}`} href={data.link} target="_blank" rel="noopener noreferrer">
          Deployed Project
        </a>}
      </div>
      <p className={classes.description}>{data.description}</p>
      {data.bullets && <ul className={classes.bullets}>
        {data.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>}
    </div>
  );
};

export default Project;
