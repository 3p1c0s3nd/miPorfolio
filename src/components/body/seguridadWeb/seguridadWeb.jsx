import './seguridadWeb.css';

const SeguridadWeb = () =>{

  
    const handleBoton = (selector) => {
        if(document.querySelector(selector).classList.contains('seguridadWeb_mostrar')){
          document.querySelector(selector).classList.remove('seguridadWeb_mostrar');
        }else{
          document.querySelector(selector).classList.add('seguridadWeb_mostrar');
        }
      }


    return(
        <div className="seguridadWeb" onClick={() => handleBoton(".seguridadWeb")}>
               Pentesting Web
        </div>
    );
};


export default SeguridadWeb;