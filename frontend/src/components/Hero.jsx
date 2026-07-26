import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <span className="hero-badge">
          Trusted Security & Networking Solutions
        </span>

        <h1>
          Secure Your Business with Advanced Infrastructure
        </h1>

        <p>
          Professional network infrastructure and CCTV installation services for businesses.
          Protecting what matters most with cutting-edge technology.
        </p>

        <div className="buttons">
          <button className="primary">Get Free Consultation</button>
          <button className="secondary">Our Services</button>
</div>
      </div>
    </section>
  );
}

export default Hero;