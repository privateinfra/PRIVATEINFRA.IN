import "./WhyChoose.css";

function WhyChoose() {

  const items = [
    {
      title: "Certified Engineers",
      desc: "Experienced networking and CCTV professionals."
    },
    {
      title: "24×7 Support",
      desc: "Quick response and technical assistance."
    },
    {
      title: "Premium Equipment",
      desc: "Only trusted brands and enterprise hardware."
    },
    {
      title: "Affordable Pricing",
      desc: "High quality service at competitive prices."
    },
    {
      title: "Warranty",
      desc: "Installation backed by warranty and support."
    },
    {
      title: "Fast Installation",
      desc: "Timely project completion with quality work."
    }
  ];

  return (
    <section className="why">
      <h2>Why Choose Private Infra?</h2>

      <div className="why-grid">
        {items.map((item, index) => (
          <div className="why-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;