import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

import textureImage from '../images/cube2.jpg'

const Three3D = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneElement = sceneRef.current;

    // Verifica se a largura e a altura do elemento da cena são maiores que 0
    if (sceneElement.clientWidth === 0 || sceneElement.clientHeight === 0) return;

    // Criação da cena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee); // Define a cor de fundo da cena

    // Criação da câmera
    const camera = new THREE.PerspectiveCamera(
      40, // Campo de visão vertical em graus
      sceneElement.clientWidth / sceneElement.clientHeight, // Proporção de aspecto
      0.1, // Distância mínima de renderização
      100 // Distância máxima de renderização
    );
    camera.position.z = 5; // Define a posição da câmera em relação à cena

    // Criação do renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sceneElement.clientWidth, sceneElement.clientHeight);
    sceneElement.appendChild(renderer.domElement);

    // Adicionando iluminação
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz ambiente para iluminação global
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz direcional para simular a luz do sol
    directionalLight.position.set(5, 5, 5); // Define a posição da luz
    scene.add(directionalLight);

    // Criação da geometria (no exemplo, um cubo arredondado)
    const roundedBoxGeometry = new RoundedBoxGeometry(1, 1, 1, 0.2, 2); // Raio de arredondamento e número de segmentos

    // Carregamento da textura
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureImage);

    const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.6, metalness: 0.9 }); // Material com textura
    const cube = new THREE.Mesh(roundedBoxGeometry, material); // Criação do Mesh usando a geometria e o material
    scene.add(cube); // Adiciona o Mesh à cena

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Lógica de animação (girar o cubo)
      cube.rotation.x += 0.008; // Rotaciona o cubo em torno do eixo X
      cube.rotation.y += 0.008; // Rotaciona o cubo em torno do eixo Y

      renderer.render(scene, camera); // Renderiza a cena com a câmera especificada
    };

    animate(); // Inicia a animação
  }, []);

  return <div className='Three3DContainer' ref={sceneRef} /*style={{ 
    width: '10vw', 
    height: '50vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    right: '50vw',
    backgroundColor:'black', 
  
  
  }}*/ />;
};

export default Three3D;
