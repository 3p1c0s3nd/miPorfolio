import './programador.css';

const Programador = () =>{

    const handleBoton = (selector) => {
        if(document.querySelector(selector).classList.contains('programador_mostrar')){
          document.querySelector(selector).classList.remove('programador_mostrar');
        }else{
          document.querySelector(selector).classList.add('programador_mostrar');
        }
      }

    return(
        <div className="programador" onClick={() => handleBoton(".programador") } style={{cursor:"pointer"}}>
                <div className="programador__contenedor flex flex-row">
                    <h1 className="programador__sobremi mt-20 mr-20 text-3xl">Sobre Mi</h1>

                    <h2 className="programador__descripcion"><p>Soy un apasionado por la
seguridad informática y la
programación, con varios
años de experiencia en el
campo. </p>
<p className='mt-4'>Mi conocimiento
abarca varios lenguajes de
programación, incluyendo
PHP, C++, Python, reactjs, flutter, dart, html, css, y
JavaScript, lo que me ha
permitido comprender en
profundidad los aspectos
técnicos de la seguridad en
línea.</p>
<p className='mt-4'>
Mi enfoque se basa en la
búsqueda constante de
soluciones innovadoras para
proteger la información y los
sistemas.
</p>
</h2>
                  </div>
        </div>
    );
};


export default Programador;