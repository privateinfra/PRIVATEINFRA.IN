import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>Private Infra</h2>

          <p>
            Trusted Security & Networking Solutions.
            We provide professional IT Infrastructure,
            CCTV, Networking and Security Solutions.
          </p>
        </div>

        <div className="footer-box">
          <h3>Our Services</h3>

          <ul>
            <li>Networking</li>
            <li>CCTV Installation</li>
            <li>Wi-Fi Solutions</li>
            <li>Biometric Systems</li>
            <li>Maintenance & Support</li>
            <li>Consultation Services</li>
          </ul>

        </div>

        <div className="footer-box">

          <h3>Contact</h3>

          <p>📞 +91 96444 70933</p>
          <p>📞 +91 82510 77565</p>

          <p>📧 info@privateinfra.in</p>

          <p>📍 Jabalpur, Madhya Pradesh</p>

        </div>

      </div>

      <div className="copyright">

        © 2026 Private Infra. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;