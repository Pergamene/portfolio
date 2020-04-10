import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useStyles } from './assets/useStyles';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Bio from './components/Bio';
import Projects from './components/Projects';

const App = () => {
  const matchDark = useMediaQuery('(prefers-color-scheme: dark)');
  const matchS = useMediaQuery('(max-width: 630px)');
  const matchM = useMediaQuery('(max-width: 700px)');
  const matchL = useMediaQuery('(max-width: 900px)');
  
  const [darkMode, setDarkMode] = useState(matchDark);

  const classes = useStyles({darkMode, matchS, matchM, matchL});

  useEffect(() => {
    setDarkMode(matchDark);
  }, [matchDark]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Nav classes={classes} darkMode={darkMode} matchS={matchS} toggleDarkMode={toggleDarkMode} />
      
      <Route exact path="/">
        <Landing classes={classes} />
      </Route>
      <Route exact path="/bio">
        <Bio classes={classes} />
      </Route>
      <Route exact path="/current-projects">
        <Projects classes={classes} projectPage={'currentProjects'} />
      </Route>
      <Route exact path="/previous-projects">
        <Projects classes={classes} projectPage={'previousProjects'} />
      </Route>
    </div>
  );
}

export default App;
