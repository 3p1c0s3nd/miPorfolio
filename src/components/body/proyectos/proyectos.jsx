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
      PAGINA PROYECTOS
    </div>
  );
};

export default Proyectos;
