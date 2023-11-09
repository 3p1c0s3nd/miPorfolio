import './seguridadWeb.css';

const SeguridadWeb = () =>{

    const handleBoton = () => {
      
          document.querySelector('.seguridadWeb').style.transform = 'translateX(-400%)';

      }
    return(
        <div className="seguridadWeb" onClick={() => handleBoton()}>
               Pentesting Web
        </div>
    );
};


export default SeguridadWeb;