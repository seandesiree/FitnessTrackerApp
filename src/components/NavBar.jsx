import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/exercises">Exercises</Link>
  </nav>
);

export default NavBar;