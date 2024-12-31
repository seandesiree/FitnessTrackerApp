import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Exercises from './components/Exercises';
import { Provider } from 'react-redux';
import { store } from './reducers/store'

const App = () => (
  <Provider store={store}> 
  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </div>
  </Router>
  </Provider>
);

export default App;