import "./seguridadWeb.css";

const SeguridadWeb = () => {
  const handleBoton = (selector) => {
    if (
      document
        .querySelector(selector)
        .classList.contains("seguridadWeb_mostrar")
    ) {
      document.querySelector(selector).classList.remove("seguridadWeb_mostrar");
    } else {
      document.querySelector(selector).classList.add("seguridadWeb_mostrar");
    }
  };

  return (
    <div className="seguridadWeb" onClick={() => handleBoton(".seguridadWeb")}>
      <div className="flex gap-32">
        
        <div>
        <h1>Mis Habilidades</h1>
          <ul>
            <li className="text-2xl">Hacking Etico</li>
            <li className="text-2xl">Seguridad Informática</li>
            <li className="text-2xl">Ciberseguridad</li>
            <li className="text-2xl">Pentesting</li>
            <li className="text-2xl">Programacion Frontend</li>
            <li className="text-2xl">Programacion Backend</li>
            <li className="text-2xl">Git & Github</li>
            <li className="text-2xl">Automatizacion</li>
            <li className="text-2xl">Web Scrapping</li>
          </ul>
        </div>

        <div>
        <h1>Herramientas que Uso</h1>
          <ul>
            <li className="text-2xl">Burp Suite y OwaspZap</li>
            <li className="text-2xl">Acunetix y Netsparket</li>
            <li className="text-2xl">Immunity Debugger</li>
            <li className="text-2xl">Nessus</li>
            <li className="text-2xl">Nmap</li>
            <li className="text-2xl">Visual Studio Code</li>
            <li className="text-2xl">Linux</li>
            <li className="text-2xl">Putty</li>
            <li className="text-2xl">Owasp Top 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeguridadWeb;
