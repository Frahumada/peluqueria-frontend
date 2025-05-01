function ServicioCard(servicio) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>{servicio.nombre}</h3>
      <p>Precio: ${servicio.precio}</p>
    </div>
  );
}

// function ServicioCard(servicio) {
//   return (
//     <section id="servicios" className="container py-5">
//       <h2 className="mb-4">Servicios</h2>
//       <div className="row g-4">
//         <div className="col-md-4">
//           <div className="card h-100">
//             <img
//               src="/assets/corte.jpg"
//               className="card-img-top"
//               alt="Corte clásico"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{servicio.nombre}</h5>
//               <p className="card-text">{servicio.descripcion}</p>
//               <p className="card-text">Precio: ${servicio.precio}</p>
//             </div>
//           </div>
//         </div>
//         {/* Repite para cada servicio */}
//       </div>
//     </section>
//   );
// }

export default ServicioCard;
