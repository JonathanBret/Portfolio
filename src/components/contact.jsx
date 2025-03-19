import '../style/contact.css'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import place from '../assets/place.png'

const Contact = () => {
    return(
        <div id="contact-section">
            <div className="contact-margin">
                <div className="contact-info">
                    <h1>Let's discuss</h1>
                    <div className="contact-phone">
                        <img src={phone} alt="" />
                        <p>06 03 46 36 44</p>
                    </div>
                    <div className="contact-mail">
                        <img src={mail} alt="" />
                        <p>bret.jonathan@outlook.fr</p>
                    </div>
                    <div className="contact-place">
                        <img src={place} alt="" />
                        <p>Paris</p>
                    </div>
                </div>
                <div className="contact-form">
                    <p><strong>Besoin d'en savoir plus ?</strong> N'hésitez pas à me contacter, toujours disponible pour des opportunités professionnelles.</p>
                    <form action="https://formspree.io/f/xblgdokl" method="POST">
  <label>
    Nom:
    <input type="text" name="name"/>
  </label>
  <label>
    Email:
    <input type="email" name="email"/>
  </label>
  <label>
    Sujet:
    <input type="text" name="subject"/>
  </label>
  <label>
    Message:
    <textarea name="message"></textarea>
  </label>
  <button type="submit">Envoyer</button>
</form>

                </div>
            </div>
        </div>

    )
}

export default Contact