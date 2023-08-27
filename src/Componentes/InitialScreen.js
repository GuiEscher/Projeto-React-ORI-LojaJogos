import React, { useState } from 'react';
import RegisterForm from './FormRegistro';
import LoginForm from './LoginForm';
import loadAnimation from '../Lotties/play.json'
import { useLottie } from 'lottie-react';

function App() {

  const options = {
    animationData: loadAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
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
      background:'#1a191b',
      height:'100vh',
      width:'100vw',
      margin:0,
      overflow:'hidden',
     
    }}>
    <div style={{
        background:'#1a191b',
        marginRight: '2vw',
        marginLeft: ' 2vw',
        borderRadius: '15px',
        height:'50vh',
        textAlign:'center'
    }}>
      <h1 style={{
        color: 'white',
        fontSize: '5vh',
        fontWeight: ' bold ',
        textAlign: ' center ',
        textShadow: '1.5px 1.5px #9391c5',
        margin:'9vh'
      }}>
       


          Faça login ou registro



      </h1>
      

      <RegisterForm onRegister={handleRegister} />
      <LoginForm onLogin={handleLogin} />
      <p>{message}</p>

    </div> 
  
    <div style={{
      display: 'flex',
      justifyContent: 'center', // Centraliza horizontalmente
      alignItems: 'center', // Centraliza verticalmente
      height: '30vh',
      width: '30vw',
      marginBottom: '15vh',
      
    }}>
    {View}
    </div>
    
    </div>
  );
}

export default App;
