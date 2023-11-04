import "./ComponentBodySite.css";
import  funciones  from "../../funciones/funciones";

window.onload = function() {
    // Encuentra la imagen por su clase
    var img = document.querySelector('.content__img');
    // Agrega la clase 'visible' para iniciar la transición
    setTimeout(function() {
      img.classList.add('visible');
    }, 100);
    //img.classList.add('visible');
  };

const ComponentBodySite = () => {
  return (
    <>
      <div className="content__body__principal">
        <div className="content__left flex flex-col">
          <div className="content__programador" onClick={() => funciones.gotoLocation("#")} style={{cursor:"pointer"}}>Programador</div>

          <span className="content__proyectos mt-64" onClick={() => funciones.gotoLocation("#")} style={{cursor:"pointer"}}>Proyectos</span>
        </div>
        <div className="content__center">
          <div className="content__left__img">
            <img className="content__img" src="./propia.png" width={"400vw"} height={"180vh"} />
          </div>
        </div>
        <div className="content__right flex flex-col">
          <div className="content__seguridad" onClick={() => funciones.gotoLocation("#")} style={{cursor:"pointer"}}>Seguridad Web</div>
          <span className="content__pentesting mt-64" onClick={() => funciones.gotoLocation("#")} style={{cursor:"pointer"}}>Pentesting</span>
        </div>
      </div>
    </>
  );
};

export default ComponentBodySite;
