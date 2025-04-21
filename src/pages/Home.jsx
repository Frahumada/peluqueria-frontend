import { useEffect, useState } from 'react';
import axios from 'axios';
import ServicioCard from '../components/ServicioCard';

function Home() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios.get('https://peluqueriacarlos.com.ar/api/servicios') // se asume que será proxy
      .then(res => {
  	console.log("Respuesta de API:", res.data);
  	if (Array.isArray(res.data)) {
    		setServicios(res.data);
  	} else {
    		console.error("La respuesta no es un array:", res.data);
    		setServicios([]); // prevenimos que explote
  }
})

      .catch(err => console.error("Error cargando servicios:", err));
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Peluquería Carlos</h1>
      <h2>Servicios</h2>
      {servicios.length ? servicios.map((s, i) => (
        <ServicioCard key={i} servicio={s} />
      )) : <p>Cargando...</p>}
    </div>
  );
}

export default Home;
