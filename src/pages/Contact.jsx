// src/pages/Contact.jsx
import '../styles/contact.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp 
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p className="welcome-text">I'd love to hear from you! Feel free to reach out via any of the options below.</p>

      <div className="contact-grid">
        <div className="contact-card">
          <FaPhoneAlt className="icon phone" />
          <a href="tel:+2348132571643">+2348132571643</a>
        </div>

        <div className="contact-card">
          <FaWhatsapp className="icon whatsapp" />
          <a href="https://wa.me/2348132571643?text=Hi%20Jofilatech%2C%20I%20am%20contacting%20via%20your%20website.">
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon email" />
          <div className="multi-email">
            <a href="mailto:jofilatech@gmail.com">jofilatech@gmail.com</a>
            <a href="mailto:developer@jofilatech.com">developer@jofilatech.com</a>
          </div>
        </div>

        <div className="contact-card">
          <FaGithub className="icon github" />
          <a href="https://github.com/jofilacode" target="_blank" rel="noopener noreferrer">
            github.com/jofilacode
          </a>
        </div>

        <div className="contact-card">
          <FaFacebookF className="icon facebook" />
          <a href="https://web.facebook.com/gabrielin.jofila" target="_blank" rel="noopener noreferrer">
            facebook.com/gabrielin.jofila
          </a>
        </div>

        <div className="contact-card">
          <FaTwitter className="icon twitter" />
          <a href="https://x.com/jofilatech" target="_blank" rel="noopener noreferrer">
            x.com/jofilatech
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedinIn className="icon linkedin" />
          <a href="https://linkedin.com/in/gabriel-shobande-261a05301" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/gabriel-shobande-261a05301
          </a>
        </div>
      </div>
    </section>
  );
}
