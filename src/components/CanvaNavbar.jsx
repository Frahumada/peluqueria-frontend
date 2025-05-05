import React from "react";

function CanvaNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Marca como logo SVG inline */}
        <a className="navbar-brand " href="#">
          <img className="logo" src="./img/logoPeluqueria_colores_correctos_white.svg" alt="Logotipo Peluqueria Carlos" width={"120px"}/>
        </a>

        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                INICIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                SERVICIOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#equipo">
                EQUIPO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#galeria">
                GALERÍA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#precios">
                PRECIOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                CONTACTO
              </a>
            </li>
          </ul>
          <a href="#cita" className="btn btn-primary ms-lg-3">
            RESERVAR
          </a>
        </div>
      </div>
    </nav>
  );
}

export default CanvaNavbar;
