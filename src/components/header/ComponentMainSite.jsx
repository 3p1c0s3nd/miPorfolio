import  funciones  from "../../funciones/funciones";

const ComponentMainSite = () =>{

    const clasesBoton = "bg-slate-50 hover:bg-slate-200 text-black px-4 py-2 rounded hover:font-bold active:bg-slate-500 m-8 font-bold";
    const menu = ["Inicio","Contacto","Proyectos"];
    const renderMenu = menu.map((item) => (
        <button className={clasesBoton}>{item}</button>
    ));


    
    return(
        <div className="menu">
            <div className="menu__logo text-left mt-9">Logo</div>
            <div>{renderMenu}</div>
           <div className="flex gap-4 mt-9">
               <p><img src="./twitter.png" width={20} height={20} onClick={() => funciones.gotoLocation("https://twitter.com/3p1c0w3nd")} style={{cursor:"pointer"}}/></p>
               <p><img src="./linkenin.png" width={20} height={20} onClick={() => funciones.gotoLocation("https://www.linkedin.com/in/edwin-fajardo-murillo-88a288287/")} style={{cursor:"pointer"}}/></p>
               <p><img src="./github.png" width={20} height={20} onClick={() => funciones.gotoLocation("https://github.com/3p1c0s3nd")} style={{cursor:"pointer"}}/></p>
           </div>
        </div>
    )
}

export default ComponentMainSite