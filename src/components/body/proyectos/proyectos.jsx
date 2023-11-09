import "./proyectos.css";

const Proyectos = () => {
  const handleBoton = () => {
    document.querySelector(".proyectos").style.transform = "translateX(-400%)";
  };
  return (
    <div className="proyectos" onClick={() => handleBoton()}>
      PAGINA PROYECTOS
    </div>
  );
};

export default Proyectos;
