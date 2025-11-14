import '../styles/home.css';
import profile from '/profile.png';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={profile} alt="Gabriel Ayodeji" className="profile-pic" />
        <h1>👋 Hi, I’m <span className="highlight">@jofilacode</span></h1>
        <p className="home-intro">
          I’m a Full-Stack & Web3 Developer with 10+ years of experience building modern web, mobile, and desktop applications.  
          I craft secure, scalable, and high-performance digital solutions for businesses and innovators.
        </p>
        <p className="home-focus">
          Exploring Web3, Blockchain, AI, Robotics, and Machine Learning to deliver innovative projects.
        </p>

        <a
          href="https://wa.me/2348132571643?text=Hi%20Jofilatech%2C%20I%20am%20contacting%20via%20your%20website."
          className="btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" /> Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
