function Contact() {
  return (
    <section id="contacto" className="bg-black py-5 text-light">
      <div className="container">
        <h2>Contacto</h2>
        <form className="row g-3 ">
          <div className="col-md-6 bg-dark text-light">
            <input type="text" className="form-control bg-dark text-light" placeholder="Nombre" />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control bg-dark text-light" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea
              className="form-control bg-dark text-light"
              rows="4"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-dark border-light px-5">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <a
        href="https://wa.me/5493513936692?text=Hola%20Peluquer%C3%ADa%20Carlos"
        className="btn btn-success position-fixed d-flex align-items-center justify-content-center text-white"
        style={{
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        <i className="bi bi-whatsapp fs-3"></i>
      </a>
    </section>
  );
}
export default Contact;
