    
function canva_ubication () {
    return(
        // <!-- Map Section -->
        <section class="py-5 bg-secondary-section">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="section-title">ENCUÉNTRANOS</h2>
                    <div class="divider"></div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="bg-dark p-4 rounded-0" style="height: 400px; border: 2px solid var(--primary);">
                            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
                                <rect width="800" height="400" fill="#1a1a1a" />
                                <path d="M0 100 Q 400 50 800 150 L 800 400 L 0 400 Z" fill="#333333" />
                                <circle cx="400" cy="200" r="20" fill="#d4af37" />
                                <text x="400" y="205" text-anchor="middle" fill="black" font-weight="bold" font-size="12">AQUÍ</text>
                                <line x1="350" y1="200" x2="250" y2="200" stroke="#d4af37" stroke-width="2" />
                                <line x1="450" y1="200" x2="550" y2="200" stroke="#d4af37" stroke-width="2" />
                                <line x1="400" y1="150" x2="400" y2="100" stroke="#d4af37" stroke-width="2" />
                                <line x1="400" y1="250" x2="400" y2="300" stroke="#d4af37" stroke-width="2" />
                                
                                {/* <!-- Calles --> */}
                                <line x1="100" y1="50" x2="700" y2="50" stroke="#444" stroke-width="5" />
                                <line x1="100" y1="150" x2="700" y2="150" stroke="#444" stroke-width="5" />
                                <line x1="100" y1="250" x2="700" y2="250" stroke="#444" stroke-width="5" />
                                <line x1="100" y1="350" x2="700" y2="350" stroke="#444" stroke-width="5" />
                                
                                <line x1="100" y1="50" x2="100" y2="350" stroke="#444" stroke-width="5" />
                                <line x1="300" y1="50" x2="300" y2="350" stroke="#444" stroke-width="5" />
                                <line x1="500" y1="50" x2="500" y2="350" stroke="#444" stroke-width="5" />
                                <line x1="700" y1="50" x2="700" y2="350" stroke="#444" stroke-width="5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}    
export default canva_ubication