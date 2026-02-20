
import "./Contact.css"
function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Comece sua transformação hoje</h2>
            <form id="contactForm">
                <input type="text" placeholder="Seunome" required />
                <input type="emali" placeholder="Seu e-mail" required />
                <textarea placeholder="Qual seu objetivo"></textarea>
                <button type="submit">Quer minha avaliação gratuita</button>
            </form>
        </section>
    )
}

export default Contact