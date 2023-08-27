import React, { useEffect } from 'react';
import { useLottie } from 'lottie-react';
import loadAnimation from '../Lotties/loading2.json';
import { MovingComponent } from 'react-moving-text';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  // Defina a duração da animação em milissegundos
  const animationDuration = 7000; // 5 segundos

  const options = {
    animationData: loadAnimation,
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options);

  // Use useEffect para lidar com a transição após a animação
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, animationDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#2e2d30',
        fontSize: '5vh',
        color: 'white',
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
        fillMode="none"
      >
        Carregando os melhores jogos para você...
      </MovingComponent>

      <div style={{ margin: '50px' }}>
        {View}
      </div>
    </div>
  );
}

export default SplashScreen;
