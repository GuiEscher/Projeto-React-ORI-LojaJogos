import React, { useState } from 'react';

function FormRegistro({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    onRegister({ username, password });
  };

  return (
    <div>
      <h2 style={{
        color: 'white',
        fontSize: '4vh',
        fontWeight: ' bold ',
        textAlign: ' center ',
        textShadow: '1.5px 1.5px #9391c5',
      }}>Cadastro</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{
          color: 'white', // Cor do texto
          backgroundColor: 'black', // Cor da caixa de texto
          borderColor: '#9391c5', 
          marginBottom: '15px',
          fontSize: '20px',
          borderRadius:'10px',
          borderWidth:'5px',
          padding:'5px'
          
        }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{
          color: 'white', // Cor do texto
          backgroundColor: 'black', // Cor da caixa de texto
          borderColor: '#9391c5', 
          marginBottom: '15px',
          fontSize: '20px',
          borderRadius:'10px',
          borderWidth:'5px',
          padding:'5px'
  
          }}
      />
      <button 
       style={{
        padding: '10px 15px',
        fontSize: '15px',
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
      
      onClick={handleRegister}>Registrar</button>
    </div>
  );
}

export default FormRegistro;
