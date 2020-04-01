import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import headshot from '../assets/headshot.jpg';
import resume from '../assets/resume.pdf';

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
    flexDirection: props => props.matches ? 'column' : 'row',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: props => props.matches ? '8vw 20px 0' : '20vh 20px 0',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    borderRight: props => props.matches ? 'none' : `2px solid ${props.darkMode ? LIGHT : DARK }`,
    paddingRight: props => props.matches ? '0' : '20px',
    marginRight: props => props.matches ? '0' : '20px',
    transition: 'border 1s ease-out',
  },
  image: {
    width: '300px',
    height: '300px',
    borderRadius: '150px',
  },
  h2: {
    fontSize: '36px',
    margin: '0',
    fontWeight: '300',
  },
  p: {
    margin: '0 0 10px',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: props => props.matches ? 'center' : 'start',
    width: '80vw',
  },
  links: {
    color: 'inherit',
    textDecoration: 'none',
    padding: '0 10px 10px 0',
  },
  icons: {
    dipslay: 'flex',
    paddingBottom: '20px',
  },
});

const Bio = props => {
  const { darkMode } = props;
  const matches = useMediaQuery('(max-width: 700px)');
  const classes = useStyles({darkMode, matches});
  const { bio } = data;

  return (
    <div className={classes.root}>
      <div className={classes.page}>
        <div className={classes.profile}>
          <img className={classes.image} src={headshot} alt="headshot" />
        </div>
        <div className={classes.contact}>
          <h2 className={classes.h2}>{bio.name}</h2>
          <p className={classes.p}>{bio.missionStatement}</p>
          {/* @TODO: change path to /resume */}
          <p className={classes.p}>{bio.skills}</p>
          <a className={classes.links} href={resume}>Resume</a>
          <a className={classes.links} href={`tel:+1${bio.phone}`}>{bio.phone}</a>
          <a className={classes.links} href={`mailto:${bio.email}`}>{bio.email}</a>
          <div className={classes.icons}>
            <a className={classes.links} href="https://github.com/Pergamene">
              <GitHubIcon fontSize={'large'} />
            </a>
            <a className={classes.links} href="https://www.linkedin.com/in/austinkglenn/">
              <LinkedInIcon fontSize={'large'} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bio;
