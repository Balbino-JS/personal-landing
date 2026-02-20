import "./Hero.css"
function Hero(){

    return (
        <section id="home" className="hero">
            <div className="hero-text">
                <h1>Transforme seu corpo em 90 dias</h1>
                <p>Treinnameto personalizados, acompanhamento individual e resultados reais.</p>
                <a href="#contact" className="hero-btn">Quero mudar agora</a>
            </div>
            <div className="hero-images">
                <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e" alt="Treino Academia" />
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" alt="Personal Trainer" />
            </div>
        </section>
    )

}

export default Hero