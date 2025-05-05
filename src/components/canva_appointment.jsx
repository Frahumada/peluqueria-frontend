    
function canva_appointment () {
    return (
            //<!-- Appointment Section -->
            <section class="py-5 bg-secondary-section" id="cita">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="card border-0 shadow" style="background-color: var(--gray);">
                                <div class="card-body p-5">
                                    <h2 class="text-center mb-4 text-primary">RESERVA TU CITA</h2>
                                    <div class="divider"></div>
                                    <form id="appointment-form">
                                        <div class="mb-3">
                                            <label for="name" class="form-label">Nombre Completo</label>
                                            <input type="text" class="form-control" id="name" required/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email" required/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="phone" class="form-label">Teléfono</label>
                                            <input type="tel" class="form-control" id="phone" required/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="service" class="form-label">Servicio</label>
                                            <select class="form-select" id="service" required style="background-color: rgba(255, 255, 255, 0.1); color: var(--light);">
                                                <option value="" selected disabled>Selecciona un servicio</option>
                                                <option value="corte">Corte de Cabello</option>
                                                <option value="afeitado">Afeitado Tradicional</option>
                                                <option value="barba">Arreglo de Barba</option>
                                                <option value="ritual">Ritual de Fuego</option>
                                                <option value="color">Coloración</option>
                                                <option value="facial">Tratamiento Facial</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="date" class="form-label">Fecha</label>
                                            <input type="date" class="form-control" id="date" required/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="time" class="form-label">Hora</label>
                                            <input type="time" class="form-control" id="time" required/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="message" class="form-label">Mensaje (opcional)</label>
                                            <textarea class="form-control" id="message" rows="3"></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100">RESERVAR AHORA</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default canva_appointment