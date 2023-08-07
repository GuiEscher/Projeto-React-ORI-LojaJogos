import React from 'react';
import logoImage from '../images/coruja2.png'; // Substitua "nome_da_sua_logo.png" pelo caminho correto da imagem

  const ToGitHub = () => {
    window.open('https://github.com/GuiEscher/Projeto-React-ORI', '_blank'); // Abre em uma nova guia
  };


const Nav = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logoImage} alt="Loja games" style={{ width: '100px' }} />
      </div>
      <ul>
        <li className="active">Página Inicial</li>
        <li>Sua Biblioteca</li>
        <li
        onClick={ToGitHub}
      >
        Sobre Nós!
      </li>
      </ul>
      <div className="cookies">
        <span>Cookies</span>
        <span>Privacy policy</span>
      </div>
    </div>
  );
};

export default Nav;
