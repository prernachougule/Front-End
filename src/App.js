import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';  // Make sure the Home component is imported correctly
import About from './About'; // Import About component if needed
import Welcome from './Welcome'; // Import the Welcome component
import './App.css';  // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>  {/* Links to the Home route */}
            </li>
            <li>
              <Link to="/about">About</Link>  {/* Links to the About route */}
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Welcome />} />  {/* Show Welcome component at / */}
          <Route path="/home" element={<Home />} />  {/* Show Home component at /home */}
          <Route path="/about" element={<About />} />  {/* Show About component at /about */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
