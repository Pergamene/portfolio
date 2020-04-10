import React from 'react';

const ProjectLinks = props => {
  const { classes, data } = props;

  return (
    <>
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
    </>
  );
}

export default ProjectLinks;
