// jogosData.js

const Livre = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/1024px-DJCTQ_-_L.svg.png"
const dezesseis = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/1200px-DJCTQ_-_16.svg.png"
const doze = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/DJCTQ_-_12.svg/1024px-DJCTQ_-_12.svg.png"


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
		    "https://cdn.akamai.steamstatic.com/steam/apps/1462040/ss_55903e74751601e42fb7f858d5c07ec048386ce2.1920x1080.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1462040/ss_6e30290a5de36f3274a11bd6c78f077c9e489115.1920x1080.jpg"
      ],
      video: "https://www.youtube.com/watch?v=enieV9c7P-E&ab_channel=PlayStationBrasil",
      desc: " Cloud Strife, ex-agente da SOLDIER, chega a Midgar, a cidade movida a energia de mako. O clássico atemporal FINAL FANTASY VII renasceu, com gráficos de última geração, um novo sistema de combate e uma aventura adicional com Yuffie Kisaragi."
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
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_0901e64e9d4b8ebaea8348c194e7a3644d2d832d.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_112b1e176c1bd271d8a565eacb6feaf90f240bb2.1920x1080.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_dc55eeb409d6e187456a8e159018e8da098fa468.1920x1080.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_90a33d7764a2d23306091bfcb52265c3506b4fdb.1920x1080.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_07812c174bb6b96c29895ddc27404143df7aba6d.1920x1080.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/292030/ss_8ac1dc847388e59b1be1c5ea5ca592d5861756cc.1920x1080.jpg"
      ],
      video:"https://www.youtube.com/watch?v=uqtFg2C2v_0",
      desc: "Você é Geralt de Rívia, mercenário matador de monstros. Você está em um continente devastado pela guerra e infestado de monstros para você explorar à vontade. Sua tarefa é encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo."
    },
    {
      id: "5",
      nome: "Resident Evil 8 - Village",
      Genero: "Terror",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://www.residentevil.com/village/assets/images/common/share.png",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_d25704b01be292d1337df4fea0fba2aab322b58a.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_8113ec993ec474055c4cdce5ee86f91f7cf6663f.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_e2bdaa9a0eeae714b3ad3ba49c9ae83a3930f08e.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_d296efbc9a5d87bf20b2ea19134f35ba203ae813.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1196590/ss_363d9c05ee0a974b766938610a3352e7a89b9c92.600x338.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/256825274/movie480_vp9.webm",
      desc: "Vivencie o horror de sobrevivência como nunca na 8ª sequência parte da franquia Resident Evil - Resident Evil Village. Com gráficos detalhados, ação intensa em primeira pessoa e uma narrativa primorosa, o terror nunca foi tão realista."
    },
    {
      id: "6",
      nome: "Rimworld",
      Genero: "Simulação",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://goblinsandghouls.com/wp-content/uploads/2020/07/RimWorld-Header1.jpeg",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_6f7a5a9555add3a43f93a976ed563605e997e031.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_c34c6c04b002454d8fee32ba52dca99c9cf1d76b.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_6bee92494e0c4dc53ad69000f2b71128c23629d6.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_3038f36d2a1da63ddf29f16a48ee27254ab9b53d.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_9c195af4d3b80edcd01e4836be605a04b24657c2.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_8dfed1fd659a608f3556bfccaaf9ef49bf594222.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_4313dccc8b8ffdc6020789a59ddedaa570f78de4.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_2704e3db8c81431920fd72a219e5cd32d6950642.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/294100/ss_371726c10a1b640dbf748fa62a500d911ac62427.600x338.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/256731486/movie480.webm",
      desc: "Um simulador de colônia de ficção científica dirigido por um inteligente narrador IA. Crie histórias com simulação de psicologia, ecologia, combates de longa distância e corpo a corpo, clima, biomas, diplomacia, relações interpessoais, arte medicina, comércio e muito mais."
    },
    {
      id: "7",
      nome: "Valheim",
      Genero: "Sobrevivência",
      Classificaçãoindicativa: doze,
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_a600a7d4ca954543e22f571a9629521a13f82143.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_cd0262c5abf8a90ee5e1059acafc5a92b6be0e73.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f6cbfeea728d557fa9f483685fea3205f08f5d9e.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_551f06a43b72609d7ca3cd63e93c58e949d58384.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_553301e2432883e9f026fe1dd0e91d7a8886d6f1.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_ad81cc7ced8585ad344ba50e9d0b4bf9c597e62e.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_b3c171e257dd1a3173254b1b61a7995dec204df4.600x338.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/256919598/movie480_vp9.webm",
      desc: "Um brutal jogo de exploração e sobrevivência para 1 a 10 jogadores, ambientado em um purgatório gerado de forma procedural, inspirado na cultura viking. Batalhe, construa e conquiste glória em uma saga digna da benção de Odin! "
    },
    {
      id: "8",
      nome: "Factorio",
      Genero: "Simulação",
      Classificaçãoindicativa: Livre,
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg?t=1690192305",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/427520/ss_171f398a8e347fad650a9c1b6c3b77c612781510.1920x1080.jpg?t=1690192305",
        "https://cdn.akamai.steamstatic.com/steam/apps/427520/ss_0bf814493f247b6baa093511b46c352cf9e98435.1920x1080.jpg?t=1690192305",
        "https://cdn.akamai.steamstatic.com/steam/apps/427520/ss_2533e54b0bd90a29adbedb60108ed277536ad445.600x338.jpg?t=1690192305",
        "https://cdn.akamai.steamstatic.com/steam/apps/427520/ss_9dba6c91d45eededca01f9f61bf1435be2dfbf0d.600x338.jpg?t=1690192305",
        "https://cdn.akamai.steamstatic.com/steam/apps/427520/ss_124dc8dc3fd282f6feb2d9ee20aebd2d73188e02.600x338.jpg?t=1690192305",
        "https://cdn.akamai.steamstatic.com/steam/apps/427520/ss_37aa19e26e20e18a220fd8870dac6efb0e98b5f0.600x338.jpg?t=1690192305"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/256796273/movie480_vp9.webm?t=1597395499",
      desc: "Factorio é um jogo em que você constrói e mantém fábricas.\n\nVocê irá minerar recursos, pesquisar tecnologias, construir infraestrutura, automatizar produção e lutar contra inimigos.\n\nA princípio você terá que cortar árvores, extrair minérios e produzir braços mecânicos e esteiras de transporte manualmente, mas em pouco tempo você irá se tornar uma potência industrial, com enormes fazendas solares, refinamento de petróleo e seus subprodutos, fábricas e robôs logísticos e de construção, tudo pra suprir sua necessidade de recursos.\n\nContudo, essa exploração de recursos do planeta não é bem visto entre os habitantes locais, então você terá que estar preparado para defender você e seu império de máquinas. "
    },
    {
      id: "9",
      nome: "Little Nightmares",
      Genero: "Terror",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/424840/ss_328207fbb7a33b95ab6df8bcef7858e670943c17.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/424840/ss_8100f5db18a37496396985b1aeedf308bc2a9f46.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/424840/ss_0db64641f03f3992a5c05a86a818a06691d355c3.1920x1080.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/424840/ss_e1c5d77c5eb75ef6a377d4e1e24cfe1dedf9c6c2.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/424840/ss_51abd72593a2a8ceafb69e75c8414c8e32c72808.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/424840/ss_40250a889d6ca5650154ac8f31be700eeaa235d8.600x338.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/256683917/movie480.webm",
      desc: "Mergulhe em Little Nightmares, um fantástico conto sombrio que o fará enfrentar seus medos de infância! Ajude Six a fugir de A Bocarra – um navio imenso e misterioso habitado por almas corrompidas que procuram sua próxima refeição. À medida que você progride na sua jornada, explore a mais perturbadora casa de bonecas como uma prisão para dela fugir e um parquinho cheio de segredos para se descobrir. Reconecte-se com sua criança interior para soltar a sua imaginação e encontrar a saída! "
    },
    {
      id: "10",
      nome: "Stray",
      Genero: "Aventura",
      Classificaçãoindicativa: doze,
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/1332010/header.jpg",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_88e209a90c2039fa76bca6fa08c641365be38d50.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_e8f0cbd5efdba352e89c4cfcee3fe991a1e1be8a.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_2221af260c64362fdc835a9dca65f6f1d1192b25.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_3fdd04a5418293864bf82d33c75f833121e63804.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_90f8a99d0d1454bc77f46542f00f9ae5043c4268.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_a697971e484b3deef50153a13f2afd0539347d23.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_f6f6ba009971ff21867d5d8f96a3feb503f787b8.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/1332010/ss_95ead64e0d31147f47f27ce828e8d5f52939dcf6.600x338.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/256896952/movie480_vp9.webm",
      desc: "Perdido, sozinho e separado da sua família, um gato de rua precisa desvendar um mistério ancestral para fugir de uma cidade esquecida.\n\nStray é um jogo de aventura felina em terceira pessoa que se passa nos detalhados becos iluminados por neon de uma cibercidade decadente e nos sombrios ambientes de seu submundo. Vague os arredores superiores e inferiores, defenda-se contra ameaças inesperadas e resolva os mistérios desse lugar hostil habitado por nada além de droides tranquilos e criaturas perigosas.\n\nVeja o mundo pelos olhos de um gato de rua e interaja com o ambiente de formas lúdicas. Seja furtivo, ágil, bobo e, às vezes, o mais irritante possível com os estranhos habitantes desse mundo exótico.\n\nPelo caminho, o gato faz amizade com um pequeno drone voador, conhecido apenas como B-12. Com a ajuda de seu novo companheiro, a dupla vai tentar encontrar uma saída.\n\nStray foi desenvolvido pela BlueTwelve Studio, uma pequena equipe do sul da França composta basicamente por gatos e alguns humanos. "
    },
    {
      id: "11",
      nome: "Terraria",
      Genero: "Sobrevivência",
      Classificaçãoindicativa: Livre,
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/105600/ss_ae168a00ab08104ba266dc30232654d4b3c919e5.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/105600/ss_75ea9a7e39eb34b40efa1e6dfd2536098dc4734b.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/105600/ss_04dd9f0a5773b686a452ba480b951f83b3ed5061.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/105600/ss_a34d1ebdc99634e012ea19759c12822802164b0e.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/105600/ss_a81bfb762197b0aafc207274a708d79e7c39e45f.600x338.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/2029566/movie480.webm",
      desc: "Cave, lute, explore, construa! Nada é impossível nesse jogo de aventura cheio de ação. O mundo é a sua tela de pintar e o chão em si é a sua tinta.\n\nPegue suas ferramentas e vá! Faça novas armas para lutar contra uma variedades de inimigos em numerosos biomas. Cave profundamente no subsolo para encontrar acessórios, dinheiro e outras coisas úteis. Reúna recursos para criar tudo o que você precisa para tornar o mundo o seu próprio. Construa uma casa, um forte ou até mesmo um castelo. Pessoas vão se mudar e viver lá e talvez até vender para você diferentes mercadorias para ajudá-lo em sua jornada.\n\nMas cuidado, há ainda mais desafios à sua espera... Você está à altura da tarefa?"
    },
    {
      id: "12",
      nome: "Dragon Age: Origins",
      Genero: "RPG",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://www.t1gn.com/wp-content/uploads/2010/03/dragon-age-origin.jpg",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/47810/ss_7fe94447069d399c8b32c125d684ec7b255600ba.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/47810/ss_32fa8fda83dcb8152ba6d83bda8379eb1bf6ed2c.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/47810/ss_15c511e75db32a0ff967b9b97ac0fb824556b707.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/47810/ss_afc54931c8ae9665ab2716e40c814ba0d8997972.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/47810/ss_6d3f7f75d007bc2efe93b1f230b66850757001db.600x338.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/256823689/movie480_vp9",
      desc: "Você é um Grey Warden, um dos últimos desta lendária ordem de guardiões. Com o retorno do antigo inimigo da humanidade e com o reino envolto numa guerra civil, você foi escolhido pelo destino para unir as terras destruídas e acabar com o arquidemônio de uma vez por todas. Explore um mundo estonteante, faça escolhas morais complexas e envolva-se em combates esmagadores contra criaturas gigantescas e aterrorizantes."
    },
    {
      id: "13",
      nome: "Counter-Strike: Global Offensive",
      Genero: "FPS",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
      imagensSlider: [
        "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_118cb022b9a43f70d2e5a2df7427f29088b6b191.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.600x338.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/730/ss_60b4f959497899515f46012df805b0006ef21af6.600x338.jpg",
        "https://amlosports.com/wp-content/uploads/2020/07/howl.jpg",
        "https://cdn1.dotesports.com/wp-content/uploads/2018/08/11124042/bded26c4-c2c4-48e7-b87f-c75fd2f339c3.jpg",
        "https://www.hotspawn.com/app/uploads/2021/06/csgo_fireserpant_ak-1.jpg",
        "https://assets.vg247.com/current/2016/10/csgo-skins.jpg",
        "https://cdn.mos.cms.futurecdn.net/FdJEyPxxAujZebsoiZnisN.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/81958/movie480.webm",
      desc: "Counter-Strike: Global Offensive (CS:GO) expandirá na jogabilidade de ação baseada em equipes na qual foi pioneiro quando foi lançado há 19 anos.\n\nCS:GO contém novos mapas, personagens e armas, além de contar com versões atualizadas de conteúdos do CS clássico (como de_dust etc.).\n\n\"O Counter-Strike surpreendeu a indústria de jogos quando o mod improvável se tornou o jogo de ação de PC mais jogado no mundo quase imediatamente após o seu lançamento, em agosto de 1999. Durante os últimos anos, continuou a ser um dos jogos mais jogados do mundo, foi o jogo principal de inúmeros torneios competitivos e vendeu mais de 25 milhões de cópias no mundo inteiro. O CS:GO promete expandir a jogabilidade popular do jogo e trazê-la não só para o PC, mas também para os consoles de última geração e para Macs\", disse Doug Lombardi, da Valve. "
    },
    {
      id: "14",
      nome: "Team Fortress 2",
      Genero: "FPS",
      Classificaçãoindicativa: dezesseis,
      imagem: "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg?t=1682961494",
      imagensSlider: [
        "https://spuf.org/wp-content/uploads/2016/08/2015-02-02_00005.jpg"
      ],
      video:"https://cdn.akamai.steamstatic.com/steam/apps/256698790/movie480.webm",
      desc: "Nove classes distintas providenciam uma enorme variação de habilidades táticas e personalidades. Constantemente atualizado com novos modos de jogo, mapas, equipamentos e o mais importante: chapéus!"
    }
  ]
};

export default jogosData;
