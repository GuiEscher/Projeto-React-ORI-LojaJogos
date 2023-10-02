import React from 'react';
import './App.scss';
import AppRouter from './Componentes/AppRouter';
import {Helmet} from "react-helmet";

function App() {

  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Evil Owl</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <AppRouter/>
    </div>
    
  );
}

export default App;

