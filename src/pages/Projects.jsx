import '../styles/projects.css';

export default function Projects() {
  const projects = [
    {
      title: "SmartJob Portal",
      description: "Job platform with user auth and real-time listings.",
      stack: "React, Node.js, MongoDB",
      live: "https://smartjob.netlify.app",
      github: "https://github.com/jofilacode/smartjob"
    },
    {
      title: "SecureBank",
      description: "Bank simulator using C# and .NET.",
      stack: "ASP.NET Core, SQL Server",
      live: "https://securebank.netlify.app",
      github: "https://github.com/jofilacode/securebank"
    },
    {
      title: "SmartJob Portal",
      description: "Job platform with user auth and real-time listings.",
      stack: "React, Node.js, MongoDB",
      live: "https://smartjob.netlify.app",
      github: "https://github.com/jofilacode/smartjob"
    },
    {
      title: "SecureBank",
      description: "Bank simulator using C# and .NET.",
      stack: "ASP.NET Core, SQL Server",
      live: "https://securebank.netlify.app",
      github: "https://github.com/jofilacode/securebank"
    },
    {
      title: "SmartJob Portal",
      description: "Job platform with user auth and real-time listings.",
      stack: "React, Node.js, MongoDB",
      live: "https://smartjob.netlify.app",
      github: "https://github.com/jofilacode/smartjob"
    },
    {
      title: "SecureBank",
      description: "Bank simulator using C# and .NET.",
      stack: "ASP.NET Core, SQL Server",
      live: "https://securebank.netlify.app",
      github: "https://github.com/jofilacode/securebank"
    }
    
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><strong>Stack:</strong> {p.stack}</p>
            <a href={p.live} target="_blank">🌐 Live</a> | <a href={p.github} target="_blank">🔗 GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
