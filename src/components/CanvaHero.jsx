function CanvaHero() {
  return (
    <section>
      <div>
        <div className="hero" style={{
            backgroundImage: `url('./img/hero.jpg')`,
            backgroundSize: 'cover',        // ajusta el tamaño para cubrir todo el div
            backgroundPosition: 'center',   // centra la imagen
            backgroundRepeat: 'no-repeat',  // evita repeticiones
          }} id="inicio">
          <div className="bg-dark bg-opacity-75 mx-5 py-5 rounded-5" >
            <h1>ESTILO Y TRADICIÓN</h1>
            <div className="divider"></div>
            <p>
              Barbería premium donde el arte del corte clásico se combina con las
              tendencias modernas para el caballero contemporáneo.
            </p>
            <a href="#cita" className="btn btn-primary btn-lg">
              RESERVAR CITA
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
export default CanvaHero;