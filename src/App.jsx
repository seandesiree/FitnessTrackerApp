import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Exercises from './Exercises';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </div>
  </Router>
);

export default App;