import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import CurrentProjects from './components/CurrentProjects';
import PreviousProjects from './components/PreviousProjects';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Route exact path="/" component={Landing} />
      <Route exact path="/current-projects" component={CurrentProjects} />
      <Route exact path="/previous-projects" component={PreviousProjects} />
    </div>
  );
}

export default App;
