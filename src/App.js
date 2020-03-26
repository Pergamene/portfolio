import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import CurrentProjects from './components/CurrentProjects';
import PreviousProjects from './components/PreviousProjects';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Route exact path="/">
        <Landing darkMode={darkMode} />
      </Route>
      <Route exact path="/current-projects">
        <CurrentProjects darkMode={darkMode} />
      </Route>
      <Route exact path="/previous-projects">
        <PreviousProjects darkMode={darkMode} />
      </Route>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
