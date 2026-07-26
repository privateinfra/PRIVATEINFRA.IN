import "./Services.css";

const services = [
  {
    title: "Networking",
    icon: "🌐",
    desc: "Enterprise networking solutions for offices and businesses."
  },
  {
    title: "CCTV Installation",
    icon: "📹",
    desc: "HD & IP surveillance systems with remote monitoring."
  },
  {
    title: "Wi-Fi Solutions",
    icon: "📡",
    desc: "High-speed wireless coverage for homes and offices."
  },
  {
    title: "Biometric Systems",
    icon: "🛂",
    desc: "Attendance and access control systems."
  },
  {
    title: "Maintenance & Support",
    icon: "🛠️",
    desc: "AMC and on-site technical support."
  },
  {
    title: "Consultation",
    icon: "💡",
    desc: "Expert IT infrastructure planning and consulting."
  }
];

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;