import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Bio from './components/Bio';
import CurrentProjects from './components/CurrentProjects';
import PreviousProjects from './components/PreviousProjects';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage={currentPage} />
      
      <Route exact path="/">
        <Landing darkMode={darkMode} setCurrentPage={setCurrentPage} />
      </Route>
      <Route exact path="/bio">
        <Bio darkMode={darkMode} setCurrentPage={setCurrentPage} />
      </Route>
      <Route exact path="/current-projects">
        <CurrentProjects darkMode={darkMode} setCurrentPage={setCurrentPage} />
      </Route>
      <Route exact path="/previous-projects">
        <PreviousProjects darkMode={darkMode} setCurrentPage={setCurrentPage} />
      </Route>
    </div>
  );
}

export default App;
