import { useEffect, useState } from 'react';
import axios from 'axios';
import ServicioCard from '../components/ServicioCard';

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
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Encabezado principal */}
      <header style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '10px' }}>Peluquería Carlos</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Estilo clásico y atención personalizada para el hombre de hoy</p>
      </header>

      {/* Sección de servicios */}
      <section style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Servicios</h2>
        {servicios.length ? (
          servicios.map((s, i) => <ServicioCard key={i} servicio={s} />)
        ) : (
          <p>Cargando...</p>
        )}
      </section>

      {/* Sección quiénes somos */}
      <section style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Quiénes somos</h2>
        <p>
          Carlos lleva más de 30 años brindando cortes clásicos, prolijos y con la calidez de siempre. Una peluquería de barrio con esencia tradicional.
        </p>
      </section>

      {/* Sección galería */}
      <section style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>Galería</h2>
        <p>Próximamente imágenes del local y nuestros cortes destacados.</p>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/549351XXXXXXX"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whatsapp-icon.svg" alt="WhatsApp" width="50" height="50" />
      </a>
    </div>
  );
}

export default Home;
