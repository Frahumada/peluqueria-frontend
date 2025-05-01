function Contact() {
  return (
    <section id="contacto" className="bg-light py-5">
      <div className="container">
        <h2>Contacto</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <a
        href="https://wa.me/5493513936692?text=Hola%20Peluquer%C3%ADa%20Carlos"
        className="btn btn-success position-fixed"
        style={{ bottom: "20px", right: "20px", borderRadius: "50%" }}
      >
        <i className="bi bi-whatsapp fs-3"></i>
      </a>
    </section>
  );
}
export default Contact;
