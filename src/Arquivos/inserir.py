import json
import os



# Define nome do arquivo principal (entrada)
ArquivoPrincipal = 'Jogos.json'

# Abre e lê o arquivo de entrada
with open(ArquivoPrincipal, 'r', encoding="utf-8") as ArquivoEntrada:
    data = json.load(ArquivoEntrada)

# Lê input do console


# Adiciona a um dict
Novo_Jogo = {
            "id": "15",
            "nome": "Honkai: Star Rail",
            "Genero": "RPG",
            "Classifica\u00e7\u00e3oindicativa": "upload.wikimedia.org/wikipedia/commons/thumb/5/5d/DJCTQ_-_16.svg/1200px-DJCTQ_-_16.svg.png",
            "imagem": "ldcdn.ldmnq.com/rms/ldplayer/process/img/194f135f99da47efbfb0f564522ce2dc1682381928.webp",
            "imagensSlider": [
                "https://static1-br.millenium.gg/articles/9/85/89/@/111199-009-article_m-1.jpg",
                "https://cdn.ome.lt/6T-9v_gdJDBvuoIoH_LiFyfsghQ=/770x0/smart/uploads/conteudo/fotos/honkai_star_rail_gameplay_VRPkJnX.png",
                "https://static1-br.millenium.gg/articles/9/85/89/@/150765-imagem-2023-01-27-112816499-article_m-1.png"
            ],
            "video": "https://www.youtube.com/watch?v=w8vPZrMFiZ4",
            "desc": "Honkai: Star Rail, embora tenha recebido o mesmo nome da série de sucesso da HoYoverse, se passa no mesmo universo e uma historia inédita, separada, sem conexões com outros games. No RPG, o jogador está na pele de Trailblazer, um personagem no qual é implantada um Stellaron, uma espécie de semente que liga o portador a um Aeon, que são os deuses deste universo. Dessa forma, o jogador deve desvendar alguns mistérios e achar seu rumo neste objetivo, ao lado de alguns companheiros a bordo do Astral Express, trem espacial que serve como identidade para o jogo."
        }

# Adiciona ao dict principal
data["jogos"].append(Novo_Jogo)

# Escreve no arquivo principal
with open("Jogos.json", "w", encoding="utf-8") as ArquivoSaida:
    print(json.dumps(data, indent=4, separators=(',', ': '), ensure_ascii=False), end='', file=ArquivoSaida)




# Cria listas que serão os índices
IndiceGen = { # Object de json -> dict de python
      "JogosGen":[] # Array de json -> lista/touple de python
      }
IndiceId = {
      "JogosId":[] # Array de json -> lista/touple de python
      }
  
  # Abre ou cria os índices (arquivos de saída)
with open("JogosGen.json", "w", encoding="utf-8") as ArquivoSaida_Gen:
    with open("JogosId.json", "w", encoding="utf-8") as ArquivoSaida_Id:
          # Para cada jogo no arquivo principal, adiciona
          # entrada nos índices
          for item in data["jogos"]:
              # Índice do gênero do jogo
              Dados_Gen = { # Object de json -> dict de python
                  "Genero": item["Genero"],
                  "id": item["id"]
              }
  
              # Índice do nome do jogo
              Dados_Id = { # Object de json -> dict de python
                  "nome": item["nome"],
                  "id": item["id"]
              }
              
              IndiceGen["JogosGen"].append(Dados_Gen)
              IndiceId["JogosId"].append(Dados_Id)
  
          # Escreve os índices nas saídas
          print(json.dumps(IndiceGen, indent=4, separators=(',', ': '), ensure_ascii=False), file=ArquivoSaida_Gen)
          print(json.dumps(IndiceId, indent=4, separators=(',', ': '), ensure_ascii=False), file=ArquivoSaida_Id)
  
          #json.dump(IndiceGen, ArquivoSaida_Gen)
          #json.dump(IndiceId, ArquivoSaida_Id)