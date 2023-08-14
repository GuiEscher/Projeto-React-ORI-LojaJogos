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
      imagem: "https://pokemonbattlefest.com/wp-content/uploads/banner-arceus.jpg",
      imagensSlider: [
        "https://th.bing.com/th/id/OIP.iRhiJUSODDIa59jiOBG7YQHaEK?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/OIP.Vwdb-Lvif9zxsFTm4Yl2qwHaEo?pid=ImgDet&rs=1",
        "https://th.bing.com/th/id/R.d8a202de894e2b42c8eafc1e921f0d3f?rik=iqd2J6QtRYI5KA&pid=ImgRaw&r=0",
        "https://cdn1.dotesports.com/wp-content/uploads/2022/02/01205504/c7d86e64a1539e6a593d2de2d03ae530.jpg",
        "https://blog-imgs-144.fc2.com/g/a/m/gamecolumn/WS003289.jpg",
        "https://img.pokemon-matome.net/poke/210226/legends_002.jpg"
      ],
      video: "https://www.youtube.com/watch?v=wOEHUANP-vo&t=16s",
    
      desc: "       Ação e RPG encontram-se à medida que a série Pokémon atinge uma nova fronteira\n\nPrepare-se para um novo tipo de grande aventura Pokémon em Pokémon Legends: Arceus, um jogo totalmente novo da Game Freak que combina ação e exploração com as raízes de RPG da série Pokémon. Embarque em missões de pesquisa na antiga região de Hisui. Explore extensões naturais para capturar Pokémon selvagens, aprendendo seu comportamento, aproximando-se sorrateiramente e jogando uma Poké BallTM bem direcionada. Você também pode jogar a Pokébola contendo seu Pokémon aliado perto de um Pokémon selvagem para entrar na batalha sem problemas.\n\nViaje para a região de Hisui - a antiga Sinnoh - e construa a primeira Pokédex da região\n\nSua aventura acontece na expansiva majestade natural da região de Hisui, onde você tem a tarefa de estudar Pokémon para completar o primeiro Pokédex da região. O Monte Coronet surge do centro, cercado por todos os lados por áreas com ambientes distintos. Nesta era - muito antes dos eventos dos jogos Pokémon Brilliant Diamond e Pokémon Shining Pearl - você pode encontrar Pokémon recém-descobertos como Wyrdeer, uma evolução de Stantler, e novas formas regionais como Hisuian Growlithe! Ao longo do caminho, descubra o mistério em torno do Pokémon Mítico conhecido como Arceus.\n\nPré-encomende um traje especial para o jogo e baixe a versão digital de Heavy Balls!\n\nComo protagonista deste jogo, você conhecerá o Professor Laventon, que estuda a ecologia de Pokémon como membro da Equipe de Expedição Galaxy. Em pouco tempo, você mesmo se juntará à Equipe Galaxy e começará a trabalhar como membro do Survey Corps. Seu objetivo será conhecer todas as espécies de Pokémon da região!"
    
      
    },
    {
      id: "2",
      nome: "Final Fantasy 7 Remake",
      Genero: "RPG",
      Classificaçãoindicativa: doze,
      imagem: "https://www.siliconera.com/wp-content/uploads/2020/04/final-fantasy-7-remake-avatars-final-fantasy-vii-remake-avatars.jpg?fit=859%2C483",
      imagensSlider: [
        "https://th.bing.com/th/id/OIP.yyNCSkOaMyFgvoxPCPJu-gHaEK?pid=ImgDet&rs=1",
        "https://assets.rpgsite.net/images/images/000/096/404/original/Final-Fantasy-VII-Remake-Intergrade_PS5_20210302_02.jpg",
        "https://th.bing.com/th/id/OIP.5y6dIQX7E0aQhpxMDU2W5wHaEh?pid=ImgDet&rs=1",
      ],
      video: "https://www.youtube.com/watch?v=enieV9c7P-E&ab_channel=PlayStationBrasil",
      desc: " Final fantasy 7 - remake é um jogo muito "
    },
    {
      id: "3",
      nome: "Super Mario Bros - 3DS Version",
      Genero: "Aventura",
      Classificaçãoindicativa: Livre,
      imagem: "https://images-americanas.b2w.io/produtos/01/00/img/3082394/9/3082394903_1GG.jpg",
      imagensSlider: [

      ],
      video: "https://www.youtube.com/watch?v=eO8xe2AUY4c&ab_channel=NintendoofAmerica",
    },
    {
      id: "4",
      nome: "The Witcher 3",
      Genero: "RPG",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
      imagensSlider: [

      ],
      video:"",
    },
    {
      id: "5",
      nome: "Resident Evil 8 - Village",
      Genero: "Terror",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://www.residentevil.com/village/assets/images/common/share.png",
      imagensSlider: [

      ],
      video:"",
    },
    {
      id: "6",
      nome: "Rimworld",
      Genero: "Sobrevivência",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://th.bing.com/th/id/OIP.1zIUHZgrtrFR3E0meQ2YSwHaEK?pid=ImgDet&rs=1",
      imagensSlider: [

      ],
      video:"",
    }
  ]
};

export default jogosData;
