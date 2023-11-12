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
      
      <div className="proyectos__contenedor">
      <h1 className="mr-10 pt-24 pl-10 text-3xl font-bold">Mis Proyectos</h1>
        <ul>
          <li className="text-2xl p-4 flex flex-col"><span className="text-3xl font-bold">Fortune Cookies</span>  <a href="https://github.com/3p1c0s3nd/fortune-cookies"> https://github.com/3p1c0s3nd/fortune-cookies</a></li>
          <li className="text-2xl p-4 flex flex-col"><span className="text-3xl font-bold">Weather App</span>  <a href="https://github.com/3p1c0s3nd/AplicacionClima"> https://github.com/3p1c0s3nd/AplicacionClima</a></li>
          <li className="text-2xl p-4 flex flex-col"><span className="text-3xl font-bold">UseApi Rick and Morty</span>  <a href="https://github.com/3p1c0s3nd/RickandMortyUseApi"> https://github.com/3p1c0s3nd/RickandMortyUseApi</a></li>
          <li className="text-2xl p-4 flex flex-col"><span className="text-3xl font-bold">Pentesting</span></li>
        </ul>
       
   
        </div>
    </div>
  );
};

export default Proyectos;
