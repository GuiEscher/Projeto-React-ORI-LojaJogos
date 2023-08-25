import React, { useState } from 'react';
import RegisterForm from './FormRegistro';
import LoginForm from './LoginForm';

function App() {
  const [message, setMessage] = useState('');

  const handleRegister = async userData => {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  const handleLogin = async userData => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    setMessage(data.message);
    
  };

  return (
    <div style={{
        background:'#2e2d30',
        marginRight: '10vw',
        marginLeft: ' 10vw ',
        marginBottom:'1vh',
        borderRadius: '15px',
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '5vh',
        fontWeight: ' bold ',
        textAlign: ' center ',
        textShadow: '1.5px 1.5px #9391c5',
      }}>Cadastro e Login</h1>


      <RegisterForm onRegister={handleRegister} />
      <LoginForm onLogin={handleLogin} />
      <p>{message}</p>
    </div>
  );
}

export default App;
