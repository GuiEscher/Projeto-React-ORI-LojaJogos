// jogosData.js

const Livre = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/1024px-DJCTQ_-_L.svg.png"
const dezesseis = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/1200px-DJCTQ_-_16.svg.png"
const doze = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/DJCTQ_-_12.svg/1024px-DJCTQ_-_12.svg.png "


/* 
    Chave primária: nome
    RRN: id
    Campos: genero, classificação, imagem, descrição

*/

const jogosData = {
  "jogos": [
    {
      id: "1",
      nome: "Pokémon Legends Arceus",
      Genero: "RPG",
      Classificaçãoindicativa: Livre,
      imagem: "https://pokemonbattlefest.com/wp-content/uploads/banner-arceus.jpg"
    },
    {
      id: "2",
      nome: "Final Fantasy 7 Remake",
      Genero: "RPG",
      Classificaçãoindicativa: doze,
      imagem: "https://www.siliconera.com/wp-content/uploads/2020/04/final-fantasy-7-remake-avatars-final-fantasy-vii-remake-avatars.jpg?fit=859%2C483"
    },
    {
      id: "3",
      nome: "Super Mario Bros - 3DS Version",
      Genero: "Aventura",
      Classificaçãoindicativa: Livre,
      imagem: "https://images-americanas.b2w.io/produtos/01/00/img/3082394/9/3082394903_1GG.jpg"
    },
    {
      id: "4",
      nome: "The Witcher 3",
      Genero: "RPG",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f"
    },
    {
      id: "5",
      nome: "Resident Evil 8 - Village",
      Genero: "Terror",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://www.residentevil.com/village/assets/images/common/share.png"
    },
    {
      id: "6",
      nome: "Rimworld",
      Genero: "Sobrevivência",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://th.bing.com/th/id/OIP.1zIUHZgrtrFR3E0meQ2YSwHaEK?pid=ImgDet&rs=1"
    }
  ]
};

export default jogosData;
