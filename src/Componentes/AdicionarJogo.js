import React, { useState } from "react";
import jogosData from "../Arquivos/Jogos";

function AdicionarJogo() {
  const [novoJogo, setNovoJogo] = useState({
    id: "",
    nome: "",
    Genero: "",
    Classificaçãoindicativa: "",
    imagem: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovoJogo((prevJogo) => ({ ...prevJogo, [name]: value }));
  };

  const adicionar = () => {
    const novoJogoComVariaveis = {
      id: novoJogo.id,
      nome: novoJogo.nome,
      Genero: novoJogo.Genero,
      Classificaçãoindicativa: novoJogo.Classificaçãoindicativa,
      imagem: novoJogo.imagem
    };

    // Faz uma cópia do array jogosData.jogos e adiciona o novo jogo
    const novoArrayJogos = [...jogosData.jogos, novoJogoComVariaveis];

    // Atualiza o objeto jogosData com o novo array de jogos
    const novoJogosData = { ...jogosData, jogos: novoArrayJogos };

    // Atualiza o estado e o arquivo jogosData.js
    setNovoJogo({
      id: "",
      nome: "",
      Genero: "",
      Classificaçãoindicativa: "",
      imagem: ""
    });
    jogosData.jogos = novoArrayJogos;
  };

  return (
    <div>
      <h2>Adicionar Novo Jogo</h2>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={novoJogo.id}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={novoJogo.nome}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="Genero"
        placeholder="Gênero"
        value={novoJogo.Genero}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="Classificaçãoindicativa"
        placeholder="Classificação Indicativa"
        value={novoJogo.Classificaçãoindicativa}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="imagem"
        placeholder="URL da Imagem"
        value={novoJogo.imagem}
        onChange={handleInputChange}
      />
      <button onClick={adicionar}>Adicionar Jogo</button>
    </div>
  );
}

export default AdicionarJogo;
