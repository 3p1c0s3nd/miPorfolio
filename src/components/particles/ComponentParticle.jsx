import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ComponentParticle = () => {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
      return (
        <div >

          <Particles
      id="tsparticles"
	  init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          image: "url('/assets/fondo.png')", // Ruta a la imagen de fondo
          position: "50% 50%", // Posición del fondo
          size: "110% 100%",
          repeat: "repeat", // Evitar repetición
          color: {
            value: "#000000", // Color de fondo negro
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              particles_nb: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // Color de las partículas (blanco)
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
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
            type: "circle",
          },
          size: {
            random: true,
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
