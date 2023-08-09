import React, { useState } from 'react';
import Nav from '../Componentes/Nav';
import Main from '../Componentes/Main';
import fantasma from '../images/ghost.png'
function Home() {
   
    const [selectedGame, setSelectedGame] = useState(null);
    const [showMessage, setShowMessage] = useState(true);
  
    const handleGameClick = (jogo) => {
  
      // fazer a busca primaria aqui ja que jogo traz o jogo selecionado
  
      setSelectedGame(jogo);
      setShowMessage(false); // Esconde a mensagem após clicar em um jogo
    };
  
    return (
      <div className='outerWrap'>
        <div className="App">
          <Nav />
          <Main onGameClick={handleGameClick} />
        </div>
        <div className='gameControls'>
          {showMessage ? (
            <React.Fragment>
            <h2 style={{ margin: '150px', textShadow: '1px 1px #9391c5', fontWeight: '500' }}>Selecione um jogo :D</h2>
            <img src={fantasma} style={{ width: '100px', height: '70px', marginRight: '10px' }} alt={selectedGame?.nome} />
          </React.Fragment>
          ) : (
            selectedGame && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', overflow: 'hidden', position: 'fixed' }}>
                <img src={selectedGame.imagem} style={{ width: '100px', height: '70px', marginRight: '10px' }} alt={selectedGame.nome} />
                <h2 style={{ margin: '150px', textShadow: '1px 1px #9391c5', fontWeight: '500' }}>{selectedGame.nome}</h2>
                <button style={{ padding: '10px 25px', borderRadius: '5px', backgroundColor: '#9391c5', border: '2px solid #ccc', color: 'white', fontWeight: 'bold', cursor: 'pointer', textShadow: '1px 1px #555', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>Compre agora!</button>
              </div>
            )
          )}
        </div>
      </div>
    );
    
}

export default Home;