import { useEffect, useState } from 'react';
import axios from 'axios';
import ServicioCard from '../components/ServicioCard';
import './Home.css';

function Home() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios.get('https://peluqueriacarlos.com.ar/api/servicios')
      .then(res => {
        console.log("Respuesta de API:", res.data);
        if (Array.isArray(res.data)) {
          setServicios(res.data);
        } else {
          console.error("La respuesta no es un array:", res.data);
          setServicios([]);
        }
      })
      .catch(err => console.error("Error cargando servicios:", err));
  }, []);

  return (
    <div>
      <header>
        <h1>Peluquería Carlos</h1>
        <p>Estilo clásico y atención personalizada para el hombre de hoy</p>
      </header>

      <section className="container">
        <h2>Servicios</h2>
        {servicios.length ? (
          servicios.map((s, i) => <ServicioCard key={i} servicio={s} />)
        ) : (
          <p>Cargando...</p>
        )}
      </section>

      <section>
        <h2>Quiénes somos</h2>
        <p>
          Carlos lleva más de 30 años brindando cortes clásicos, prolijos y con la calidez de siempre. Una peluquería de barrio con esencia tradicional.
        </p>
      </section>

      <section>
        <h2>Galería</h2>
        <p>Próximamente imágenes del local y nuestros cortes destacados.</p>
      </section>

      <a
        href="https://wa.me/549351XXXXXXX"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp-icon.svg" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default Home;
