import './Contact.css';
import { FaWhatsapp } from "react-icons/fa";   // ✅ Add this import

function Contact() {
    return (
        <div className="contact-wrapper">
            <div className="contact-info">
                <h2>How can we help you?</h2>
                <p>
                    Our team is here to help you access capital and grow on your terms.
                    Check out the resources below and reach out directly if you have any questions.
                </p>

                <div className="contact-buttons">
                    <button className="btn primary-btn">Call Us</button>
                    <button className="btn secondary-btn">Email Us</button>
                </div>
            </div>

            <div className="contact-form-container">
                <h1>Contact Us</h1>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Submit</button>
                </form>

                <div className="contact-footer">
                    <hr />
                    <div className="contact-details">
                        <div className="left-column">
                            <p> triangleautos@hotmail.com</p>

                            {/* ✅ Number replaced with WhatsApp icon */}
                            <a 
                                href="https://wa.me/923362046379" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="whatsapp-link"
                            >
                                <FaWhatsapp className="whatsapp-icon" />
                            </a>
                        </div>
                        <div className="right-column">
                            <p>Karachi,Pakistan</p>
                            <p> Plot# B - 292 & 293, Block - 1, <br />
                                Metroville - 1, S.I.T.E, <br />
                                Pakistan, Karachi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
