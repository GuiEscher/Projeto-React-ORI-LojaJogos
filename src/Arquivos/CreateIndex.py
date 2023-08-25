import json
import os



# Define nome do arquivo principal (entrada)
ArquivoPrincipal = 'Jogos.json'

# Abre o arquivo de entrada
with open(ArquivoPrincipal, 'r', encoding="utf-8") as ArquivoEntrada:
    data = json.load(ArquivoEntrada)

# Cria listas que serão os índices
IndiceGen = { # Object de json -> dict de python
    "JogosGen":[] # Array de json -> lista/touple de python
    }
IndiceId = {
    "JogosId":[] # Array de json -> lista/touple de python
    }

# Abre ou cria os índices (arquivos de saída)
with open("JogosGen.json", "w", encoding="utf-8") as ArquivoSaida_Gen:
    # Para cada jogo no arquivo principal, adiciona
    # entrada nos índices
    for item in data["jogos"]:
        # Índice do gênero do jogo
        Dados_Gen = { # Object de json -> dict de python
            "Genero": item["Genero"],
            "id": item["id"]
        }
        IndiceGen["JogosGen"].append(Dados_Gen)

    # Escreve os índices nas saídas
    print(json.dumps(IndiceGen, indent=4, separators=(',', ': '), ensure_ascii=False), file=ArquivoSaida_Gen)
    #json.dump(IndiceGen, ArquivoSaida_Gen)


# Abre ou cria os índices (arquivos de saída)
with open("JogosId.json", "w", encoding="utf-8") as ArquivoSaida_Id:
    # Para cada jogo no arquivo principal, adiciona
    # entrada nos índices
    for item in data["jogos"]:
        # Índice do nome do jogo
        Dados_Id = { # Object de json -> dict de python
            "nome": item["nome"],
            "id": item["id"]
        }
        IndiceId["JogosId"].append(Dados_Id)

    # Escreve os índices nas saídas
    print(json.dumps(IndiceId, indent=4, separators=(',', ': '), ensure_ascii=False), file=ArquivoSaida_Id)
    #json.dump(IndiceId, ArquivoSaida_Id)