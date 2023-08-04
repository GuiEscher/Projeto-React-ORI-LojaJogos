// Main.js
import React from 'react';
import jogosData from '../Arquivos/Jogos';

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">Evil owl game shop</div>
      <div className="mainContent">
        <h1 style={{ padding: 10 }}>Econtre os melhores jogos recomendados de 2023</h1>
        <div className='cardswrap'>
          {jogosData.jogos.map((jogo) => (
            <div className='card' key={jogo.id}>
              <div className='cardImage'>
                <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', fontSize: '20px', margin: 0 }}>{jogo.nome}</h1>
                <img src={jogo.imagem} style={{ width: '350px', height: '250px', padding: 10 }} />
                <img src={jogo.Classificaçãoindicativa} style={{ width: '50px', height: '50px', padding: 10 }} />
              </div>
              <div className='cardContent'>
                <p>Year of Release: {jogo.anoLancamento}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main;
