import React from 'react';

function CanvaAbout() {
  return (
    <div className="py-5 bg-dark-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="p-4 vintage-border">
              <img src="./img/hero.jpg" alt=""  width={"100%"}/>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">NUESTRA HISTORIA</h2>
            <p>
              Bienvenido a Golden Cut, donde la tradición barbera se encuentra con la excelencia moderna. Desde 2010, hemos estado ofreciendo servicios de barbería de primera clase con un equipo de barberos maestros dedicados a perfeccionar el arte del corte masculino.
            </p>
            <p>
              Nuestro establecimiento combina técnicas tradicionales con las últimas tendencias para crear estilos personalizados que se adaptan perfectamente a cada caballero que nos visita.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <div className="d-flex align-items-center mb-3">
                <i className="fas fa-check-circle me-2" style={{ color: 'var(--primary)' }}/>
                  <span>Barberos Expertos</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                <i className="fas fa-check-circle me-2" style={{ color: 'var(--primary)' }}/>
                  <span>Productos Premium</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center mb-3">
                <i className="fas fa-check-circle me-2" style={{ color: 'var(--primary)' }}/>
                  <span>Ambiente Clásico</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                <i className="fas fa-check-circle me-2" style={{ color: 'var(--primary)' }}/>
                  <span>Atención Personalizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanvaAbout;
