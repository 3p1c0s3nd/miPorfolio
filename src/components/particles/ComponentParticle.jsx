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
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
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
            value: "#e68e2e", // Color de las partículas (blanco)
          },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: {default:"bounce"},
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
            type: "circle",
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
