// Main.js
import React, { useState } from 'react';
import jogosData from '../Arquivos/Jogos';
import diacritics from 'diacritics';
import searchIcon from '../images/super-mario.png';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJogos, setFilteredJogos] = useState(jogosData.jogos);
  const [anoLancamento, setAnoLancamento] = useState('');

  const handleSearchChange = (event) => {
    const termoBusca = event.target.value;
    setSearchTerm(termoBusca);
    filtrarJogos(termoBusca);
  };

  const filtrarJogos = (termo) => {
    const termosBusca = diacritics.remove(termo.toLowerCase()).split(/\s+/);
    const jogosFiltrados = jogosData.jogos.filter((jogo) =>
      termosBusca.every((termo) => diacritics.remove(jogo.nome.toLowerCase()).includes(termo))
    );
    setFilteredJogos(jogosFiltrados);
  };

  const handleSearchClick = (id) => {
    const jogo = jogosData.jogos.find((jogo) => jogo.id === id);
    if (jogo) {
      return;
    } else {
      setAnoLancamento('Jogo não encontrado');
    }
  };

  return (
    <div className="main">
      <div className="upperNav">Evil owl game shop</div>
      <div className="mainContent">
        <h1 style={{ padding: 10, textShadow: '1.5px 1.5px #9391c5', fontWeight: 'bold' }}>
          Encontre os melhores jogos recomendados de 2023
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Digite o nome do jogo"
            style={{
              padding: '10px',
              fontSize: '19px',
              border: '2px solid #ccc',
              borderRadius: '5px',
              color: 'white', // Cor do texto
              backgroundColor: 'black', // Cor da caixa de texto
              borderColor: '#9391c5', // Cor da borda da caixa de texto
              backgroundImage: `url(${searchIcon})`, // URL da imagem de ícone de busca
              backgroundPosition: 'right 10px center',
              backgroundSize: '20px 20px',
              backgroundRepeat: 'no-repeat',
              paddingLeft: '40px', // Espaçamento para a imagem não sobrepor o texto
              fontWeight: '400',
              textShadow: '1px 1px #9391c5', // Contorno roxo
              width: '70%', // Aumenta o comprimento do input
            }}
          />
          <button
            onClick={() => handleSearchClick(filteredJogos[0]?.id)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              backgroundColor: '#9391c5',
              border: '2px solid #ccc',
              color: 'white',
              fontWeight: 'bold',
              marginLeft: '10px',
              cursor: 'pointer',
              textShadow: '1px 1px #555',
              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
            }}
          >
            Pesquisar
          </button>
        </div>
        <div className='cardswrap' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {filteredJogos.map((jogo) => (
            <div className='card' key={jogo.id} style={{ flexBasis: '30%', marginBottom: '20px' }}>
              <div className='cardImage'>
                <h1 style={{ marginTop: '15px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', fontSize: '20px', margin: 0, padding: 10 }}>{jogo.nome}</h1>
                <img src={jogo.imagem} style={{ width: '350px', height: '250px', padding: 10 }} alt={jogo.nome} />
                <img src={jogo.Classificaçãoindicativa} style={{ width: '50px', height: '50px', padding: 10 }} alt={`Classificação ${jogo.Classificaçãoindicativa}`} />
              </div>
              <div className='cardContent'>
                <p style={{ fontSize: '15px', padding: 5, fontWeight: '600' }}>Year of Release: {jogo.anoLancamento}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {anoLancamento}
        </div>
      </div>
    </div>
  )
}

export default Main;
