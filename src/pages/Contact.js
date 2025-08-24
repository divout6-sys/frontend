import './Contact.css';

function Contact() {
    return (
        <div className="contact-wrapper">
            <div className="contact-info">
                <h2>How can we help you?</h2>
                <p>
                    Our team is here to help you access capital and grow on your terms.
                    Check out the resources below and reach out directly if you have any questions.
                </p>

                {/* ✅ Buttons inside this div */}
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

                {/* ✅ Footer section with underline and contact details */}
                <div className="contact-footer">
                    <hr />
                    <div className="contact-details">
                        <div className="left-column">
                            <p>hello@email.com</p>
                            <p>+92 300 1234567</p>
                        </div>
                        <div className="right-column">
                            <p>Pakistan</p>
                            <p>123 Street Name, Karachi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
