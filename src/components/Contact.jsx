import React from 'react';

import { data } from '../assets/data';

import ContactIcons from './ContactIcons';

const Contact = props => {
  const { classes } = props;
  const { bio } = data;

  return (
    <div className={classes.contact}>
      <h2 className={classes.bioH2}>{bio.name}</h2>
      <p className={classes.bioP}>{bio.missionStatement}</p>

      <h3 className={classes.bioH3}>Skills</h3>
      <p className={classes.bioP}>{bio.skills}</p>

      <h3 className={classes.bioH3}>Contact</h3>
      <a className={classes.mediaLinks} href={`tel:+1${bio.phone}`}>{bio.phone}</a>
      <a className={classes.mediaLinks} href={`mailto:${bio.email}`}>{bio.email}</a>
      
      <ContactIcons classes={classes} />
    </div>
  );
;}

export default Contact;
