import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouteMatch } from 'react-router-dom';

import { DARK, DARK_PAGE, LIGHT } from '../assets/colors';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: props => props.darkMode ? DARK_PAGE : '',
    color: props => props.darkMode ? LIGHT : DARK,
  },
});

const Bio = props => {
  const match = useRouteMatch();
  const { darkMode, setCurrentPage } = props;
  const classes = useStyles({darkMode: darkMode});

  useEffect(() => {
    setCurrentPage(match.path);
  });

  return (
    <div className={classes.root}>Bio</div>
  );
};

export default Bio;
