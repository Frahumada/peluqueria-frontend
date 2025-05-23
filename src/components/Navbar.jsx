import React from "react";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Fifth navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Peluqueria Carlos</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample05">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#hero">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#servicios">
                Servicios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ¿Quienes somos?
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Ubicacion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

