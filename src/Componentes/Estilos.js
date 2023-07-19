import React from 'react';

function TituloSite() {
  const estiloTitulo = {
    color: 'white',
    fontSize: '120%',
    fontWeight: 'bold',
    fontFamily: 'monospace', //'sans-serif' , 'monospace', 'serif'
    textShadow: '2px 2px 2px black',
    top: '5%',
    position: 'fixed',
    left: '5%',

    
  };

  return (
    <div>
      <h1 style={estiloTitulo}>Game shop - The better way to find your fav games</h1>
      {/* Outro conteúdo do componente */}
    </div>
  );
}

export default TituloSite;
