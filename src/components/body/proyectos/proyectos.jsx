import "./proyectos.css";
import  funciones  from "../../../funciones/funciones";
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
      <h1 className=" text-center  text-3xl font-bold mt-32 misproyectos">Mis Proyectos</h1>
        <ul>
          <li className="text-2xl p-4 flex flex-col"><span className="text-3xl font-bold" onClick={() => funciones.gotoLocation("https://galleta-de-la-fortuna-pi.vercel.app/")} style={{cursor:"pointer"}}>Fortune Cookies</span> <p >https://galleta-de-la-fortuna-pi.vercel.app/</p> </li>
          <li className="text-2xl p-4 flex flex-col"><span className="text-3xl font-bold" onClick={() => funciones.gotoLocation("https://aplicacion-clima-ten.vercel.app/")} style={{cursor:"pointer"}}>Weather App</span>  <p >https://aplicacion-clima-ten.vercel.app/</p></li>
          <li className="text-2xl p-4 flex flex-col"><span className="text-3xl font-bold" onClick={() => funciones.gotoLocation("https://rickand-morty-use-api.vercel.app/")} style={{cursor:"pointer"}}>UseApi Rick and Morty</span>  <p >https://rickand-morty-use-api.vercel.app/</p></li>
          <li className="text-2xl p-4 flex flex-col"><span className="text-3xl font-bold">....</span></li>
        </ul>
       
   
        </div>
    </div>
  );
};

export default Proyectos;
