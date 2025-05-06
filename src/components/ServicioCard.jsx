function ServicioCard({ servicio, invert }) {
  const { nombre, descripcion, precio, duracion, imagenUrl } = servicio;

  // clases flex: columna en xs, fila en md; y si invert=true aplico row-reverse
  const flexClass = invert
    ? "flex-column flex-md-row-reverse"
    : "flex-column flex-md-row";

  return (
    <div className="col-12 my-2">
      <div className={`card h-100 d-flex ${flexClass} bg-dark `}>
        {/* Imagen ocupa 50% en md+, full width en xs */}
        {imagenUrl && (
          <img
            src={imagenUrl}
            alt={nombre}
            className="img-fluid"
            style={{
              width: "100%",
              maxWidth: "500px", // ajusta al gusto
              objectFit: "cover",
            }}
          />
        )}

        <div className="card-body d-flex flex-column text-secondary text-center">
          <h2 className="card-title text-white">{nombre}</h2>
          <p className="card-text flex-grow-1">{descripcion}</p>
          <p className="card-text mb-2">
            <strong className="text-white">Precio:</strong> ${precio}
          </p>
          <p className="card-text mb-3">
            <strong className="text-white">Duración:</strong> {duracion} min
          </p>
          {/* <button className="btn btn-primary mt-auto">Reservar</button> */}
        </div>
      </div>
      <hr className="my-2" />
    </div>
    
  );
}

export default ServicioCard;
