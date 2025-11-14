import '../styles/projects.css';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const projects = [
    { title: "Samkoko Media", description: "NGO / corporate media initiative: Building A Wealthy Society.", stack: "React, Node.js, Firebase", image: "/images/Samkokomedia.png", live: "https://samkokomedia.netlify.app/" },
    { title: "ITranquilcare", description: "Medical Health Care system – Canada.", stack: "Asp.net, C#, SQL", image: "/images/itranquilcare.png", live: "itranquilcare.com" },
    { title: "Bank Management Website", description: "Secure banking & financial management system.", stack: "Asp.net, C#, SQL", image: "/images/bank.png", live: "#" },
    { title: "IWC Prelaunch Coin / Wallet DApp", description: "Prelaunch for the IWC crypto coin, including wallet integration.", stack: "React, Node.js, Web3.js, Solidity", image: "/images/iwcprelaunch.png", live: "#" },
    { title: "Celebrity Management Website", description: "Platform for celebrity actors management, including bookings.", stack: "React, Node.js, MongoDB", image: "/images/celebrity.png", live: "https://celebmanagement.netlify.app/" },
    { title: "AdultBadies Dating Site", description: "Romance meet-up chat website.", stack: "React, Node.js", image: "/images/adultbadies.png", live: "https://adultbadies.netlify.app/" },
    { title: "Airdrop for IWC", description: "Airdrop crypto project for the IWC coin.", stack: "Solidity, React, Web3.js", image: "/images/iwcairdrop.png", live: "#" },
    { title: "HODL Meme Coin", description: "Meme-powered crypto coin emphasizing long-term holding.", stack: "Solidity, React, Web3.js", image: "/images/hodlmeme.png", live: "https://hodlmeme.netlify.app/" },
    { title: "Loan Website", description: "Financial services platform for loan management.", stack: "React, Node.js, PostgreSQL", image: "/images/loan.png", live: "#" },
    { title: "CBT Software", description: "Computer Based Test platform for schools & institutions.", stack: "React, Node.js, MongoDB", image: "/images/cbt.png", live: "#" },
    { title: "Elearning Portal", description: "Online learning management portal for students & teachers.", stack: "Asp.net, C#, SQL", image: "/images/elearning.png", live: "#" },
    { title: "School Website", description: "Professional school website with portal integration.", stack: "React, Node.js, MongoDB", image: "/images/school.png", live: "#" },
    { title: "Skill Enrollment Website", description: "Training platform for course enrollment and skill management.", stack: "React, Node.js, Firebase", image: "/images/upskill.png", live: "#" },
    { title: "Hotel Management Website", description: "Complete hospitality booking and management system.", stack: "Asp.net, C#, SQL", image: "/images/hotel.png", live: "#" },
    { title: "Courier", description: "Logistics and delivery management platform.", stack: "React, Node.js, PostgreSQL", image: "/images/courier.png", live: "#" }
  ];

  const openModal = (img) => {
    setCurrentImg(img);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <p style={{ fontStyle: 'italic', color: '#555', marginTop: '15px', textAlign: 'center' }}>
        All projects can be adapted or rebuilt using alternative technologies or stacks according to client requirements.
      </p>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-img-wrapper" onClick={() => openModal(p.image)}>
              <img src={p.image} alt={p.title} />
              <span className="click-note">Click to view</span>
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <p className="project-stack"><strong>Tech:</strong> {p.stack}</p>
              <div className="project-links">
                <a href={p.live} target="_blank" rel="noreferrer">{p.live === "#" ? "Request for Demo" : "🌐 Live View"}</a>
                <a
                  href={`https://wa.me/2348132571643?text=Hi%20Jofilatech%2C%20I%20am%20interested%20in%20your%20project:%20${encodeURIComponent(p.title)}`}
                  className="btn whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="icon" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontStyle: 'italic', color: '#555', marginTop: '20px', textAlign: 'center' }}>
        These are just a selection of my projects. I have many other online and offline solutions across various topics and industries. 
        If you have a specific project in mind, feel free to request it or send me a message via WhatsApp.
      </p>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}><FaTimes /></button>
            <img src={currentImg} alt="Project Preview" />
          </div>
        </div>
      )}
    </section>
  );
}


