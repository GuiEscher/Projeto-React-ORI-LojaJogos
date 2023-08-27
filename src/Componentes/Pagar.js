import React from "react";
import { useLottie } from 'lottie-react';
import cardAnimation from '../Lotties/card2.json';

function Pagar() {
  const cardAnimationOptions = {
    animationData: cardAnimation,
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(cardAnimationOptions);

  return (
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'white',
    }}> <h1 style={{
        padding: '1px',
        marginBottom:'50vh',
        right:'25px'
    }}>Insira suas credenciais... </h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginRight: '2vw',
      }}>
        <div style={{
          marginRight: '1vw',
        }}>
          <input
            type="text"
            placeholder="Nome"
            style={{
              marginBottom: '1rem',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '80%',
            }}
          />
          <input
            type="text"
            placeholder="CPF"
            style={{
              marginBottom: '1rem',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '80%',
            }}
          />
          <input
            type="text"
            placeholder="Cartão de Crédito"
            style={{
              marginBottom: '1rem',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '80%',
            }}
          />
          <button
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'green',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Finalizar Pagamento
          </button>
        </div>
        <div style={{
          borderLeft: '1px solid black',
          height: '70vh',
          margin: '0 2vw',
        }}></div>
      </div>
      <div>
        <div style={{
          width: '50vh',
          height: '30vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {View}
        </div>
      </div>
    </div>
  );
}

export default Pagar;
