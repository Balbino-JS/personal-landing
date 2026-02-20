import "./Testimonials.css"
function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Resultados reais</h2>
      <div className="testimonial-cards">
        <div className="testimonial">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
          <p>Perdi 12kg em 4 meses! Melhor investimento da minha vida." </p>
          <strong>Maria Silva</strong>
        </div>

        <div className="testimonial">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
            <p>"Ganhei massa muscular e cofiança. Recomendamos de mais!"</p>
            <strong>João Suza</strong>
        </div>

        
      </div>
    </section>
  );
}

export default Testimonials;
