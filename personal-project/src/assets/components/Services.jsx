import "./Services.css";
function Services() {
  return (
    <section id="services" className="services">
      <h2>Serviços pesonalizados</h2>
      <div className="service-cards">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"alt=""/>
          <h3>Treino Presencial</h3>
          <p>Acompanhamento individual na academia com foco total no seuresultado.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61" alt=""/>
          <h3>Treino Online</h3>
          <p>Planilhas personalizadas + suporte direto via whatsapp.</p>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2" alt=""/>
          <h3>Programa de emagrecimento</h3>
          <p>Método validado para perda de gordura com acompanhamento semanal.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
