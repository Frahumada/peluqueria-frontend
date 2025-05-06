import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicioCard from "./components/ServicioCard";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import CanvaNavbar from "./components/canvaNavbar"
import CanvaAbout from "./components/CanvaAbout";
import CanvaHero from "./components/CanvaHero";
import CanvaFeatures from "./components/CanvaFeatures";
import Pricing from "./components/pricing";





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
