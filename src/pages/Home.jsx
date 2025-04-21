import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero" id="inicio">
        <div className="hero-overlay">
          <h1>Peluquería Carlos</h1>
          <p>Estilo clásico y atención personalizada</p>
          <a href="#servicios" className="hero-btn">Ver servicios</a>
        </div>
      </header>
      <section id="servicios" className="container">
        <h2>Servicios</h2>
        <p>Tarjetas de servicios van acá...</p>
      </section>
    </div>
  );
}

export default Home;