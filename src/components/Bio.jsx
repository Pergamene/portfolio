import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import headshot from '../assets/headshot.jpg';

import { DARK, DARK_PAGE, LIGHT } from '../assets/colors';
import { data } from '../assets/data';

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
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
  },
  h2: {
    fontSize: '36px',
    margin: '20px',
    fontWeight: '300',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Bio = props => {
  const { darkMode } = props;
  const classes = useStyles({darkMode});
  const { bio } = data;

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <div className={classes.profile}>
          {/* <img src={headshot} alt="headshot" /> */}
          <h2 className={classes.h2}>{bio.name}</h2>
        </div>
        <div className={classes.contact}>
          <p>{bio.missionStatement}</p>
          <a href={`tel:+1${bio.phone}`}>{bio.phone}</a>
          <a href={`mailto:${bio.email}`}>{bio.email}</a>
          {/* Resume, GitHub, LinkedIn, Skills */}
        </div>
      </div>
    </div>
  );
};

export default Bio;
