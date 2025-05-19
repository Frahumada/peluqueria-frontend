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
              Peluqueria donde el arte del corte clásico se combina con las
              tendencias modernas para el caballero contemporáneo.
            </p>
            <a href="https://wa.me/3514088532/?text=Hola%20queria%20consultar%20para%20reservar%20un%20turno" className="btn btn-primary btn-lg">
              RESERVAR TURNO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CanvaHero;