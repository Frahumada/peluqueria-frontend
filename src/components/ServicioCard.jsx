function ServicioCard({ servicio }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>{servicio.nombre}</h3>
      <p>Precio: ${servicio.precio}</p>
    </div>
  );
}

export default ServicioCard;
