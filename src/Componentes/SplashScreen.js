import React from 'react';
import { useLottie } from 'lottie-react';
import gameAnimation from '../Lotties/gaminho.json';
import loadAnimation from '../Lotties/loading2.json';
import {MovingComponent} from 'react-moving-text'
import { useNavigate } from 'react-router-dom';

function SplashScreen() {

    const navigate = useNavigate();
  const options = {
    animationData: loadAnimation,
    loop: false,
    autoplay: true,
    onanimationend: navigate('/home') ,
  };

  const { View } = useLottie(options);

  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#2e2d30',
        fontSize:'5vh',
        color:'white',
        textShadow: '1px 1px #9391c5',
       
      }}

    >
        <MovingComponent
            type="bounce"
            duration="1700ms"
            delay="1.5s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none">
            Carregando os melhores jogos para você...
        </MovingComponent>
        
      <div style={{ margin: '50px' }}>
        {View}
      </div>
    </div>
  );
}

export default SplashScreen;
