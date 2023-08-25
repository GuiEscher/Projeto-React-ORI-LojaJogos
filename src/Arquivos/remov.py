import json
import os

# Caminho para o arquivo JSON
caminho_arquivo = "Jogos.json"

# ID do registro que você deseja excluir
id_para_excluir = "15"

# Passo 1: Ler o arquivo JSON existente
with open(caminho_arquivo, "r", encoding="utf-8") as arquivo:
    dados = json.load(arquivo)

# Passo 2: Localizar e remover o registro
registros = dados["jogos"]
registro_encontrado = None

for registro in registros:
    if registro["id"] == id_para_excluir:
        registro_encontrado = registro
        break

if registro_encontrado:
    registros.remove(registro_encontrado)
    print(f"Registro com ID {id_para_excluir} excluído com sucesso.")
else:
    print(f"Registro com ID {id_para_excluir} não encontrado.")

# Passo 3: Escrever de volta no arquivo
with open(caminho_arquivo, "w", encoding="utf-8") as arquivo:
    json.dump(dados, arquivo, indent=4, ensure_ascii=False)

print("Arquivo atualizado com os registros restantes.")

# Atualizando os indices

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
          for item in dados["jogos"]:
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
          print(json.dumps(IndiceGen, indent=4, separators=(',', ': '),ensure_ascii=False), file=ArquivoSaida_Gen)
          print(json.dumps(IndiceId, indent=4, separators=(',', ': '), ensure_ascii=False), file=ArquivoSaida_Id)
  
          #json.dump(IndiceGen, ArquivoSaida_Gen)
          #json.dump(IndiceId, ArquivoSaida_Id)
