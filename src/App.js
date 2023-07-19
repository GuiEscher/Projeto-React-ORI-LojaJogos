import React from 'react';
import './App.css';
import TituloSite from './Componentes/Estilos';
import logo from './logo.svg';
import tagCloudd from './Componentes/TagCloudd'
import Three3D from './Componentes/Three3D';

function App() {
  const backgroundImageUrl = 'https://i.pinimg.com/564x/80/fc/42/80fc425ea9d40075c8846d498ca5b551.jpg'
  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <div className="App" style={Object.assign({}, divStyle)}>
      <header className="App-header">
        <TituloSite/>
        <Three3D/>
        <tagCloudd/>
      </header>
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