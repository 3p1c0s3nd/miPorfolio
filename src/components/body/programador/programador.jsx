import './programador.css';

const Programador = () =>{

    const handleBoton = () => {
      
          document.querySelector('.programador').style.transform = 'translateX(-300%)';
      }
    return(
        <div className="programador" onClick={() => handleBoton()}>
                PAGINA PROGRAMADOR
        </div>
    );
};


export default Programador;