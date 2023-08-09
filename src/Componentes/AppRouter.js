import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Comprar from './Comprar';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comprar" element={<Comprar />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
