// Router.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Componentes/Main';
import YourLibrary from './Componentes/YourLibrary'; // Suponha que você tenha um componente YourLibrary

const Router = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/your-library" component={YourLibrary} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
