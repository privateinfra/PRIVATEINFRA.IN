import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Corporate Office Network",
      desc: "Complete LAN, Wi-Fi and Firewall setup."
    },
    {
      title: "CCTV Installation",
      desc: "64 Camera IP Surveillance System."
    },
    {
      title: "Server Room",
      desc: "Rack Installation and Structured Cabling."
    }
  ];

  return (
    <section className="projects">
      <h2>Our Recent Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image"></div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;