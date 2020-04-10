import React from 'react';

import { data } from '../assets/data';

const Landing = props => {
  const { classes } = props;
  const { landing } = data;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.page}>
        <h1 className={classes.h1}>{landing.title}</h1>
        <p className={classes.landingP}>{landing.bio}</p>
      </div>
    </div>
  );
};

export default Landing;
