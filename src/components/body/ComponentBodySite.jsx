import "./ComponentBodySite.css";
import './programador/programador.css';
import Programador from "./programador/programador";
import Proyectos from "./proyectos/proyectos";
import SeguridadWeb from "./seguridadWeb/seguridadWeb";
import Pentesting from "./pentesting/pentesting";

window.onload = function() {
    // Encuentra la imagen por su clase
    var img = document.querySelector('.content__img');
    // Agrega la clase 'visible' para iniciar la transición
    setTimeout(function() {
      img.classList.add('visible');
    }, 100);

    //img.classList.add('visible');
  };

  const handleBoton1 = (selector) => {
      document.querySelector(selector).style.transform = 'translateX(-10%)';
  }

  const handleBoton2 = (selector) => {
    document.querySelector(selector).style.transform = 'translateX(-10%)';
}
const ComponentBodySite = () => {
  return (
    <>
      <div className="content__body__principal">
        <div className="content__left flex flex-col">
        <Programador/><div className="content__programador" onClick={() => handleBoton1(".programador")} style={{cursor:"pointer"}}>Programador</div>

        <Proyectos /><span className="content__proyectos " onClick={() => handleBoton1(".proyectos")} style={{cursor:"pointer"}}>Proyectos</span>
        </div>
        <div className="content__center">
          <div className="content__left__img">
            <img className="content__img" src="./propia.png"  />
          </div>
        </div>
        <div className="content__right flex flex-col">
         <SeguridadWeb /> <div className="content__seguridad " onClick={() => handleBoton2(".seguridadWeb")} style={{cursor:"pointer"}}>Seguridad Web</div>
          <Pentesting /><span className="content__pentesting " onClick={() => handleBoton2(".pentesting")} style={{cursor:"pointer"}}>Pentesting</span>
        </div>
      </div>
    </>
  );
};

export default ComponentBodySite;
