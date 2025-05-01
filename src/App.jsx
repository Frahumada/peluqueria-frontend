import Home from './pages/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicioCard from './components/ServicioCard';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Home /> */}
      <ServicioCard />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Home />
//       {/* <ServicioCard/> */}
//     </div>
//   );
// }

export default App;
