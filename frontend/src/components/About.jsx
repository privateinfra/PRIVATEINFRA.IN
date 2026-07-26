import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-left">
        <h2>About Private Infra</h2>

        <p>
          We are a leading provider of network infrastructure and CCTV security solutions. With over a decade of experience, we help businesses establish secure, reliable, and scalable technology infrastructure that drives growth and protects assets..
        </p>

       
      </div>

      <div className="about-right">
        <div className="box">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>

        <div className="box">
          <h3>250+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="box">
          <h3>100+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="box">
          <h3>24/7</h3>
          <p>Technical Support</p>
        </div>
      </div>
    </section>
  );
}

export default About;