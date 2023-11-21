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
            image: "url('/fondogif.gif')",
            position: '50% 50%',
            size: '110% 100%',
            repeat: 'repeat',
            color: {
              value: '#FFFFFF',
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
              value: '#000',
            },
            links: {
              color: '#0f0',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.5, // Ajusta el ancho de los enlaces
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
                value_area: 800,
              },
              value: 50, // Ajusta la cantidad de partículas
            },
            opacity: {
              value: 0.2, // Ajusta la opacidad
            },
            shape: {
              type: 'circle',
            },
            size: {
              min: 0.5, // Ajusta el tamaño mínimo
              value: 3, // Ajusta el tamaño máximo
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ComponentParticle;
