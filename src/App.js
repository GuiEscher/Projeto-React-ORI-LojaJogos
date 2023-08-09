import React, { useState } from 'react';
import './App.scss';
import Nav from './Componentes/Nav';
import Main from './Componentes/Main';
import fantasma from '../src/images/ghost.png'
import Home from './Componentes/Home';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [showMessage, setShowMessage] = useState(true);

  const handleGameClick = (jogo) => {

    // fazer a busca primaria aqui ja que jogo traz o jogo selecionado

    setSelectedGame(jogo);
    setShowMessage(false); // Esconde a mensagem após clicar em um jogo
  };

  return (
    <Home/>
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