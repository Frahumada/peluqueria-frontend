import { useEffect, useState } from 'react';
import ServicioCard from '../components/ServicioCard';

function Home() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch('/api/servicios')
      .then(r => r.json())
      .then(setServicios)
      .catch(console.error);
  }, []);

  return (
    <section id="servicios" className="container p-0 text-white">
      <h2 className="mb-1">Servicios</h2>
      <div className="row g-0">
        {servicios.map((s, idx) => (
          // pasamos "invert" cuando idx es impar
          <ServicioCard key={s._id} servicio={s} invert={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
export default Home