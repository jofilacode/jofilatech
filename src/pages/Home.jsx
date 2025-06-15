import '../styles/home.css';
import profile from '/profile.png';
import { FaWhatsapp } from 'react-icons/fa';



export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={profile} alt="Profile" className="profile-pic" />
        <h1>👋 Hi, I’m @jofilacode</h1>
        <p>I’m a fullstack developer with 10+ years of experience building Web, Mobile, Desktop, DBMS, and Security apps.</p>
        <p style={{marginBottom:'1rem'}}> Exploring Web3, Blockchain, AI/Robotics, and Machine Learning.</p>


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
