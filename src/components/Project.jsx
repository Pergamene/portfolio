import React from 'react';

const Project = props => {
  const { data, classes } = props;

  return (
    <div className={classes.projectContainer}>
      <h3 className={classes.projectH3}>{data.name}</h3>
      <div className={classes.info}>
        <p className={classes.date}>{data.date}</p>
        <p className={classes.stack}>{data.stack}</p>
      </div>
      <div className={classes.projectLinks}>
        <a className={`${classes.projectButton} ${classes.repo}`} href={data.repo} target="_blank" rel="noopener noreferrer">
          View Repo
        </a>
        {data.link && <a className={`${classes.projectButton} ${classes.projectLink}`} href={data.link} target="_blank" rel="noopener noreferrer">
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
