import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ComponentParticle = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // Puedes inicializar la instancia tsParticles (main) aquí, agregando formas personalizadas o configuraciones
    await loadFull(main);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            image: "url('/fondogif.gif')", // Ruta a la imagen de fondo
            position: '50% 50%', // Posición del fondo
            size: '110% 100%',
            repeat: 'repeat', // Evitar repetición
            color: {
              value: '#FFFFFF', // Color de fondo blanco
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                particles_nb: 4,
                quantity: 90,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#000', // Color de las partículas (negro)
            },
            links: {
              color: '#0f0',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800, // Cambia esto para ajustar la densidad
              },
              value: 80, // Cantidad de partículas
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              min: 1,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ComponentParticle;
