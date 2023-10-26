

const ComponentMainSite = () =>{

    const clasesBoton = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:font-bold active:bg-blue-900 m-8";
    const menu = ["Inicio","Contacto","Proyectos"];
    const renderMenu = menu.map((item) => (
        <button className={clasesBoton}>{item}</button>
    ));

    return(
        <div className="menu">
           {renderMenu}
        </div>
    )
}

export default ComponentMainSite