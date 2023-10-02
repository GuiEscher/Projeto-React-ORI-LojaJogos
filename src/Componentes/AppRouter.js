import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Comprar from './Comprar';
import InitialScreen from './InitialScreen';
import SplashScreen from './SplashScreen';
import Pagar from './Pagar';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<InitialScreen />} /> */}
        <Route path="/" element={<SplashScreen />} />  
        <Route path="/home" element={<Home />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/pagar" element={<Pagar/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;


