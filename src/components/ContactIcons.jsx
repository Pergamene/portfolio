import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import resume from '../assets/resume.pdf';

const ContactIcons = props => {
  const { classes } = props;

  return (
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
  );
}

export default ContactIcons;
