import React, { useState } from 'react';
import './App.scss';
import Nav from './Componentes/Nav';
import Main from './Componentes/Main';
import fantasma from '../src/images/ghost.png'
import Home from './Componentes/Home';
import AppRouter from './Componentes/AppRouter';
import AdicionarJogo from './Componentes/AdicionarJogo';

function App() {

  return (
    <AppRouter/>
  );
}

export default App;

