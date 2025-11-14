import '../styles/about.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>👋 Hi, I’m <strong>@jofilacode</strong></p>
          <p>
            I'm a passionate and results-driven <strong>Full-Stack & Web3 Developer</strong> with over 
            <strong>10 years of experience</strong> building secure, scalable, and high-performance digital solutions. 
            I specialize in modern <strong>web, app, and desktop development</strong>, as well as creating 
            <nbsp/> <strong> blockchain-powered platforms</strong> that combine usability with cutting-edge innovation. 
          </p>
          <p>
            My expertise includes <strong>React, Node.js, ASP.NET Core, MongoDB, PostgreSQL, SQL Server</strong>, 
            and <strong>Python</strong>, with hands-on experience in <strong>Web3 development</strong>, including smart contracts, wallet integrations, dApps, and blockchain APIs.
            I deliver <strong>clean, reliable, and user-centric solutions</strong> designed to help clients build, grow, and scale confidently.
          </p>

          <p>Over the years, I’ve held key roles in multiple companies:</p>
          <ul>
            <li><strong>Project Supervisor at Imagination Tools</strong> – Leading architecture and full-cycle development for innovative digital products.</li>
            <li><strong>Software Engineer & Lead Data Analysis Tutor at OMNI MEDIA</strong> – Building tools and platforms while mentoring aspiring data professionals.</li>
            <li><strong>Lead Developer at Incredible Wealth Coin (IWC)</strong> – Driving blockchain-based crypto solutions and decentralized app development.</li>
          </ul>

          <p>
            I’m currently diving deep into future-forward technologies including <strong>Web3, AI, Robotics</strong>, and <strong>Machine Learning</strong>, shaping the next generation of tech.
          </p>

          <p>
            Whether you need a modern website, a full-scale application, or a powerful Web3 solution, 
            my goal is to bring clarity, quality, and innovation to every project.
          </p>
        </div>

        <div className="about-profile">
          <img src="/logo.png" alt="Professional Logo" />
        </div>
      </div>

      <div className="about-profile-card">
        <img src="/profile.png" alt="Gabriel Ayodeji" className="about-profile-image" />
        <div className="about-profile-info">
          <h3>Gabriel Ayodeji</h3>
          <p><strong>Alias:</strong> JofilaCode</p>
          <p><strong>Stack:</strong> MERN Stack + .NET</p>
          <p className="about-profile-note">
            Passionate about building scalable web solutions and smart integrations that make a difference. Always learning. Always shipping.
          </p>
        </div>
      </div>
    </section>
  );
}


