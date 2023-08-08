import React, { useState } from 'react';
import './App.scss';
import Nav from './Componentes/Nav';
import Main from './Componentes/Main';
import fantasma from '../src/images/ghost.png'

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [showMessage, setShowMessage] = useState(true);

  const handleGameClick = (jogo) => {
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

export default App;





























/*<img src={logo} className="App-logo" alt="logo" />*/

/* texto link

<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

*/


/*
paragrafo

  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>



*/


/*

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const App = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneElement = sceneRef.current;

    // Criação da cena
    const scene = new THREE.Scene();

    // Criação da câmera
    const camera = new THREE.PerspectiveCamera(
      75, // Campo de visão vertical em graus
      sceneElement.clientWidth / sceneElement.clientHeight, // Proporção de aspecto
      0.1, // Distância mínima de renderização
      1000 // Distância máxima de renderização
    );
    camera.position.z = 5; // Define a posição da câmera em relação à cena

    // Criação do renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sceneElement.clientWidth, sceneElement.clientHeight);
    sceneElement.appendChild(renderer.domElement);

    // Criação da geometria (no exemplo, um cubo)
    const geometry = new THREE.BoxGeometry(); // Geometria de um cubo
    const material = new THREE.MeshBasicMaterial({ color: `#9932cc` }); // Material básico com cor verde
    const cube = new THREE.Mesh(geometry, material); // Criação do Mesh usando a geometria e o material
    scene.add(cube); // Adiciona o Mesh à cena

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Lógica de animação (girar o cubo)
      cube.rotation.x += 0.01; // Rotaciona o cubo em torno do eixo X
      cube.rotation.y += 0.01; // Rotaciona o cubo em torno do eixo Y

      renderer.render(scene, camera); // Renderiza a cena com a câmera especificada
    };

    animate(); // Inicia a animação

    return () => {
      // Limpeza de recursos ao desmontar o componente
      sceneElement.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={sceneRef} style={{ width: '100%', height: '100vh' }} />;
};

export default App;



*/