import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import headshot from '../assets/headshot.jpg';
import resume from '../assets/resume.pdf';
import { data } from '../assets/data';

const Bio = props => {
  const { classes } = props;
  const { bio } = data;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.page}>
        <div className={classes.profileContainer}>
          <div className={classes.profile}>
            <img className={classes.image} src={headshot} alt="headshot" />
          </div>
          <div className={classes.contact}>
            <h2 className={classes.bioH2}>{bio.name}</h2>
            <p className={classes.bioP}>{bio.missionStatement}</p>
            <h3 className={classes.bioH3}>Skills</h3>
            <p className={classes.bioP}>{bio.skills}</p>
            <h3 className={classes.bioH3}>Contact</h3>
            <a className={classes.mediaLinks} href={`tel:+1${bio.phone}`}>{bio.phone}</a>
            <a className={classes.mediaLinks} href={`mailto:${bio.email}`}>{bio.email}</a>
            <div className={classes.icons}>
              <a className={classes.bioButton} href={resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a className={`${classes.mediaLinks} ${classes.icon}`} href="https://github.com/Pergamene" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize={'large'} />
              </a>
              <a className={`${classes.mediaLinks} ${classes.icon}`} href="https://www.linkedin.com/in/austinkglenn/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize={'large'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
