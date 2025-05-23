import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicioCard from "./components/ServicioCard";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CanvaNavbar from "./components/CanvaNavbar"
import CanvaAbout from "./components/CanvaAbout";
import CanvaHero from "./components/CanvaHero";
import CanvaFeatures from "./components/CanvaFeatures";
import Pricing from "./components/Pricing";





function App() {
  return (
    <div className="container-fluid p-0">
      <>
        <CanvaNavbar/>
        <CanvaHero/>
        <CanvaAbout/>
        <CanvaFeatures/>
        <Pricing/>
      </>
    </div>
  );
}

export default App;
