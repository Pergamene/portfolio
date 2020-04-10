import React from 'react';

import { data } from '../assets/data';

import Project from './Project';

const Projects = props => {
  const { classes, projectPage } = props;
  const projectsPage = data[projectPage];

  return (
    <div className={classes.pageContainer}>
      <div className={classes.page}>
        <h2 className={classes.projectsH2}>{projectsPage.name}</h2>
        {projectsPage.projects.map(project => {
          return <Project classes={classes} data={project} key={project.id} />
        })}
      </div>
    </div>
  );
};

export default Projects;
