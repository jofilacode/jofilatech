import '../styles/about.css';

export default function About() {
  return (
   <section className="about">
  <div className="about-container">
    <div className="about-text">
      <h2>About Me</h2>
      <p>👋 Hi, I’m <strong>@jofilacode</strong></p>
      <p>
        I'm a passionate and results-driven <strong>Full-Stack Developer</strong> with over <strong>10 years of experience</strong> building secure, scalable, and high-performance solutions across <strong>web and desktop platforms</strong>. My core expertise includes <strong>React, Node.js, ASP.NET Core, MongoDB, SQL Server</strong>, and <strong>Python</strong>—technologies I use to craft user-centric, reliable software.
      </p>
      <p>
        Over the years, I’ve had the privilege of working in key roles across several companies:
      </p>
      <ul>
        <li><strong>Project Supervisor at Imagination Tools</strong> – Leading architecture and full-cycle development for innovative digital products.</li>
        <li><strong>Software Engineer & Lead Data Analysis Tutor at OMNI MEDIA</strong> – Building tools and platforms while mentoring aspiring data professionals.</li>
        <li><strong>Lead Developer at Incredible Wealth Coin (IWC)</strong> – Driving blockchain-based crypto solutions and decentralized app development.</li>
      </ul>
      <p>
        I'm currently diving deep into future-forward technologies including <strong>Web3, Artificial Intelligence, Robotic Systems</strong>, and <strong>Machine Learning</strong>. I believe these fields are shaping the next generation of tech, and I’m committed to evolving alongside them.
      </p>
      <p>
        Whether I’m writing code, leading a team, or teaching others, my mission remains the same: <em>to create intelligent solutions that solve real-world problems and deliver impact.</em>
      </p>
    </div>

    <div className="about-profile">
      <img src="/logo.png" alt="Profile" />
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