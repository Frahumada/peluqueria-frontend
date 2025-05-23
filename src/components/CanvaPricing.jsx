// function CanvaPricing () {
//     return(
//         //<!-- Pricing Section -->
//         <section className="py-5 bg-dark-section" id="precios">
//             <div className="container">
//                 <div className="text-center mb-5">
//                     <h2 className="section-title">NUESTRAS TARIFAS</h2>
//                     <div className="divider"></div>
//                     <p className="text-muted">Servicios de calidad a precios competitivos</p>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-4 col-md-6">
//                         <div className="price-card">
//                             <div className="price-header">
//                                 <h3>SERVICIOS BÁSICOS</h3>
//                             </div>
//                             <div className="price-body">
//                                 <div className="price">Desde €25</div>
//                                 <ul className="list-unstyled">
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Corte de Cabello</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Lavado y Peinado</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Arreglo de Barba Básico</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Bebida de Cortesía</li>
//                                     <li className="mb-3 text-muted"><i className="fas fa-times me-2"></i> Afeitado Tradicional</li>
//                                     <li className="mb-3 text-muted"><i className="fas fa-times me-2"></i> Tratamientos Especiales</li>
//                                 </ul>
//                                 <a href="#cita" className="btn btn-primary w-100 mt-3">RESERVAR</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6">
//                         <div className="price-card">
//                             <div className="price-header">
//                                 <h3>SERVICIOS PREMIUM</h3>
//                             </div>
//                             <div className="price-body">
//                                 <div className="price">Desde €45</div>
//                                 <ul className="list-unstyled">
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Corte de Cabello</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Lavado y Peinado</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Afeitado Tradicional</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Arreglo de Barba Completo</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Bebida Premium</li>
//                                     <li className="mb-3 text-muted"><i className="fas fa-times me-2"></i> Ritual de Fuego</li>
//                                 </ul>
//                                 <a href="#cita" className="btn btn-primary w-100 mt-3">RESERVAR</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 mx-auto">
//                         <div className="price-card">
//                             <div className="price-header">
//                                 <h3>EXPERIENCIA GOLDEN</h3>
//                             </div>
//                             <div className="price-body">
//                                 <div className="price">Desde €75</div>
//                                 <ul className="list-unstyled">
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Corte de Cabello</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Lavado y Peinado</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Afeitado Tradicional</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Ritual de Fuego</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Tratamiento Facial</li>
//                                     <li className="mb-3"><i className="fas fa-check me-2" style="color: var(--primary);"></i> Whisky o Coñac Premium</li>
//                                 </ul>
//                                 <a href="#cita" className="btn btn-primary w-100 mt-3">RESERVAR</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default CanvaPricing

function CanvaPricing({ price }) {
  const { nombre, descripcion, precio, duracion, imagenUrl } = price;

  return (
    <div className="col-md-4 d-flex">
      <div className="price-card d-flex flex-column flex-fill">
        <div className="price-header">
          <h3>{nombre}</h3>
        </div>
        <div className="price-body flex-grow-1">
          <div className="price">Desde ${precio}</div>
          <div className="row row-cols-2">
            <div className="col-1">
              <i className="fas fa-check me-2" style={{color: 'var(--primary)'}}/>
            </div>
            <div className="col-10">
              <p>
                {descripcion}
              </p>
            </div>
          </div>
          <div className="row row-cols-2">
            <div className="col-1">
              <i className="fas fa-check me-2" style={{color: 'var(--primary)'}}/>
            </div>
            <div className="col-10">
              <p>
                Duracion: {duracion} min.
              </p>
            </div>
          </div>

          <div>

          {imagenUrl && (
            <img
              src={imagenUrl}
              alt={nombre}
              className="ratio ratio-4x3 mb-3"
              style={{
                objectFit: "cover",
              }}
            />
          )}
          </div>
          <div className="price-footer mt-3">
            <a href="#cita" className="btn btn-primary w-100 mt-3">
              RESERVAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanvaPricing;
