import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Bio from './components/Bio';
import CurrentProjects from './components/CurrentProjects';
import PreviousProjects from './components/PreviousProjects';

const App = () => {
  const matches = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(matches);

  useEffect(() => {
    setDarkMode(matches);
  }, [matches]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Route exact path="/">
        <Landing darkMode={darkMode} />
      </Route>
      <Route exact path="/bio">
        <Bio darkMode={darkMode} />
      </Route>
      <Route exact path="/current-projects">
        <CurrentProjects darkMode={darkMode} />
      </Route>
      <Route exact path="/previous-projects">
        <PreviousProjects darkMode={darkMode} />
      </Route>
    </div>
  );
}

export default App;
