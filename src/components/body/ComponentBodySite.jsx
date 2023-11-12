import "./ComponentBodySite.css";
import "./programador/programador.css";
import Programador from "./programador/programador";
import Proyectos from "./proyectos/proyectos";
import SeguridadWeb from "./seguridadWeb/seguridadWeb";
import Pentesting from "./pentesting/pentesting";

window.onload = function () {
  // Encuentra la imagen por su clase
  var img = document.querySelector(".content__img");
  // Agrega la clase 'visible' para iniciar la transición
  setTimeout(function () {
    img.classList.add("visible");
  }, 100);

  //img.classList.add('visible');
};

/*const handleBoton1 = (selector) => {
      document.querySelector(selector).style.transform = 'translateX(-10%)';
  }

  const handleBoton2 = (selector) => {
    document.querySelector(selector).style.transform = 'translateX(-10%)';
}*/

const handleBoton1 = (selector, nameclass) => {
  if (document.querySelector(selector).classList.contains(nameclass)) {
    document.querySelector(selector).classList.remove(nameclass);
  } else {
    document.querySelector(selector).classList.add(nameclass);
  }
};

const ComponentBodySite = () => {
  return (
    <>
      <div className="content__body__principal">
        <div className="content__left flex flex-col">
          <Programador />
          <div
            className="content__programador"
            onClick={() => handleBoton1(".programador", "programador_mostrar")}
            style={{ cursor: "pointer" }}
          >
            Programador
          </div>

          <Proyectos />
          <span
            className="content__proyectos "
            onClick={() => handleBoton1(".proyectos", "proyectos_mostrar")}
            style={{ cursor: "pointer" }}
          >
            Proyectos
          </span>
        </div>
        <div className="content__center">
          <img className="content__img max-[600px]:w-[300px] max-[600px]:h-[600px] " src="./propia.png" />
        </div>
        <div className="content__right flex flex-col">
          <SeguridadWeb />{" "}
          <div
            className="content__seguridad "
            onClick={() =>
              handleBoton1(".seguridadWeb", "seguridadWeb_mostrar")
            }
            style={{ cursor: "pointer" }}
          >
            Mis Habilidades
          </div>
          <Pentesting />
          <span
            className="content__pentesting "
            onClick={() => handleBoton1(".pentesting", "pentesting_mostrar")}
            style={{ cursor: "pointer" }}
          >
            Contacto
          </span>
        </div>
      </div>
    </>
  );
};

export default ComponentBodySite;
