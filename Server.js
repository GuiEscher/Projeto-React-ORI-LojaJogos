
// /*

//   Os serviços Node.js com Express são aplicativos web construídos usando 
// a estrutura Express.js, que simplifica o desenvolvimento de servidores. O req.body é 
// um objeto usado para acessar os dados enviados no corpo de uma solicitação HTTP, geralmente no formato JSON. 
// res.send é um método que envia uma resposta ao cliente, podendo ser texto, HTML ou JSON. res.status é um método 
// para definir o código de status da resposta, indicando o resultado da operação, como sucesso (200) ou erro (por exemplo, 
// 404 para "não encontrado" ou 500 para "erro interno do servidor").

// */

// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');


// // Inicializando o aplicativo Express
// const app = express();
// const port = 3001; // Porta na qual o servidor será executado

// // Usando o body-parser para processar o corpo das solicitações JSON
// app.use(bodyParser.json());

// // Caminho para o arquivo JSON onde os usuários serão armazenados
// const usersFilePath = '../Projeto-React-ORI-LojaJogos/src/Arquivos/users.json';

// // Função para ler usuários a partir do arquivo JSON
// function readUsersFromFile() {
//   try {
//     // Lendo o conteúdo do arquivo
//     const data = fs.readFileSync(usersFilePath);
//     // Parseando o JSON e retornando
//     return JSON.parse(data);
//   } catch (error) {
//     // Se ocorrer um erro (como o arquivo ainda não existe), retornar um array vazio
//     return [];
   
//   }
// }

// // Função para escrever usuários no arquivo JSON
// function writeUsersToFile(users) {
//   // Escrevendo os usuários no arquivo JSON, formatados com 2 espaços de indentação
//   fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
// }

// // Rota para lidar com o registro de novos usuários
// app.post('/register', (req, res) => {
//   const { username, password } = req.body;
//   const users = readUsersFromFile(); // Lendo os usuários existentes
//   const id = users.length + 1; // Calculando o próximo ID
//   users.push({ id, username, password }); // Adicionando o novo usuário ao array
//   writeUsersToFile(users); // Escrevendo os usuários de volta no arquivo
//   res.status(201).json({ message: 'Usuário registrado com sucesso.' }); // Respondendo com uma mensagem
// });

// // Rota para lidar com o processo de login
// app.post('/login', (req, res) => { // req - requisição do cliente ; res - response do servidor
//   const { username, password } = req.body;
//   const users = readUsersFromFile(); // Lendo os usuários existentes
//   const user = users.find(usuario => usuario.username === username && usuario.password === password); // Procurando o usuário nas credenciais fornecidas
//   if (user) {
//     // Se o usuário for encontrado, responder com uma mensagem de login bem-sucedido
//     res.json({ message: 'Login bem-sucedido.' });
//   } else {
//     // Caso contrário, responder com um status de não autorizado
//     res.status(401).json({ message: 'Credenciais inválidas.' });
//   }
// });

// // Iniciando o servidor na porta especificada
// app.listen(port, () => {
  
//   console.log(`Servidor rodando na porta localhost:${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Importe o pacote cors

const app = express();
const port = 3001;

app.use(cors()); // Use o cors() para habilitar o CORS
app.use(bodyParser.json());

const usersFilePath = '../Projeto-React-ORI-LojaJogos/src/Arquivos/users.json';

function readUsersFromFile() {
  try {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeUsersToFile(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const users = readUsersFromFile();
  const id = users.length + 1;
  users.push({ id, username, password });
  writeUsersToFile(users);
  res.status(201).json({ message: 'Usuário registrado com sucesso.' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsersFromFile();
  const user = users.find(usuario => usuario.username === username && usuario.password === password);
  if (user) {
    res.json({ message: 'Login bem-sucedido.' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
