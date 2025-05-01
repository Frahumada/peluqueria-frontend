function Hero() {
  return (
    <header className="bg-dark text-white text-center py-5 hero p-2" id="inicio">
      <div className="container bg-dark bg-opacity-50">
        <h1 className="display-4">Peluquería Carlos</h1>
        <p className="lead">Estilo clásico y atención personalizada</p>
        <a href="#servicios" className="btn btn-primary btn-lg">
          Ver servicios
        </a>
      </div>
    </header>
  );
}
export default Hero;
