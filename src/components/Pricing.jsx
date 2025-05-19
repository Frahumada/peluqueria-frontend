import { useEffect, useState } from "react";
import CanvaPricing from "./CanvaPricing";

function Pricing() {
  const [pricing, setpricing] = useState([]);

  useEffect(() => {
    fetch("/api/precios")
      .then((r) => r.json())
      .then(setpricing)
      .catch(console.error);
  }, []);

  console.log(pricing)

  return (
    //<!-- Pricing Section -->
    <section className="py-5 bg-dark-section" id="precios">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">NUESTRAS TARIFAS</h2>
          <div className="divider"></div>
          <p className="text-muted">pricing de calidad a precios competitivos</p>
        </div>
        <div className="row container g-4 align-items-stretch">
        {pricing.map((p) => (
          <CanvaPricing key={p._id} price={p} />
        ))}
        </div>
      </div>
    </section>
  );
}
export default Pricing;
