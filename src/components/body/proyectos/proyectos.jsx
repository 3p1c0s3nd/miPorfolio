import "./proyectos.css";

const Proyectos = () => {
  
  const handleBoton = (selector) => {
    if(document.querySelector(selector).classList.contains('proyectos_mostrar')){
      document.querySelector(selector).classList.remove('proyectos_mostrar');
    }else{
      document.querySelector(selector).classList.add('proyectos_mostrar');
    }
  }

  return (
    <div className="proyectos" onClick={() => handleBoton(".proyectos")}>
      <h1 className="mr-10">Mis Proyectos</h1>
      <div className="proyectos__contenedor">
      
        <ul>
          <li className="text-2xl p-4">Fortune Cookies --- <a href="https://github.com/3p1c0s3nd/fortune-cookies"> https://github.com/3p1c0s3nd/fortune-cookies</a></li>
          <li className="text-2xl p-4">Weather App --- <a href="https://github.com/3p1c0s3nd/AplicacionClima"> https://github.com/3p1c0s3nd/AplicacionClima</a></li>
          <li className="text-2xl p-4">UseApi Rick and Morty --- <a href="https://github.com/3p1c0s3nd/RickandMortyUseApi"> https://github.com/3p1c0s3nd/RickandMortyUseApi</a></li>
          <li className="text-2xl p-4">Pentesting</li>
        </ul>
       
   
        </div>
    </div>
  );
};

export default Proyectos;
