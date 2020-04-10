import React from 'react';

import ProjectLinks from './ProjectLinks';

const Project = props => {
  const { classes, data } = props;

  return (
    <div className={classes.projectContainer}>
      <h3 className={classes.projectH3}>{data.name}</h3>
      <div className={classes.info}>
        <p className={classes.date}>{data.date}</p>
        <p className={classes.stack}>{data.stack}</p>
      </div>
      <ProjectLinks classes={classes} data={data} />
    </div>
  );
};

export default Project;
