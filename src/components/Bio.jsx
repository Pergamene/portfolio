import React from 'react';

import headshot from '../assets/headshot.jpg';

import Contact from './Contact';

const Bio = props => {
  const { classes } = props;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.page}>
        <div className={classes.profileContainer}>
          <div className={classes.profile}>
            <img className={classes.image} src={headshot} alt="headshot" />
          </div>
          <Contact classes={classes} />
        </div>
      </div>
    </div>
  );
};

export default Bio;
