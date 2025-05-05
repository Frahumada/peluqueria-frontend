function canva_contact() {
    return (
        //<!-- Contact Section -->
        <section class="py-5 bg-dark-section" id="contacto">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="section-title">CONTÁCTANOS</h2>
                    <div class="divider"></div>
                    <p class="text-muted">Estamos aquí para responder a tus preguntas</p>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="contact-info text-center">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <h4>UBICACIÓN</h4>
                            <p class="text-muted">Calle Principal 123, Ciudad</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-info text-center">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <h4>TELÉFONO</h4>
                            <p class="text-muted">+34 123 456 789</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contact-info text-center">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <h4>EMAIL</h4>
                            <p class="text-muted">info@goldencut.com</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-8 mx-auto">
                        <div class="card border-0 shadow" style="background-color: var(--gray);">
                            <div class="card-body p-5">
                                <h3 class="text-center mb-4 text-primary">ENVÍANOS UN MENSAJE</h3>
                                <div class="divider"></div>
                                <form id="contact-form">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="contact-name" class="form-label">Nombre</label>
                                            <input type="text" class="form-control" id="contact-name" required/>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="contact-email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="contact-email" required/>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="contact-subject" class="form-label">Asunto</label>
                                        <input type="text" class="form-control" id="contact-subject" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="contact-message" class="form-label">Mensaje</label>
                                        <textarea class="form-control" id="contact-message" rows="5" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">ENVIAR MENSAJE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default canva_contact