import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicioCard from "./components/ServicioCard";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-dark">
      <>
        <Navbar />
        <Hero />
        <Home />
        {/* <Gallery /> */}
        <Contact />
        <Footer />
      </>
    </div>
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
