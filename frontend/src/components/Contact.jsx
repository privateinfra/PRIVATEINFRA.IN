import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Inquiry Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }

    setLoading(false);
  };

  return (
    <section className="contact">
      <div className="contact-left">
        <h2>Get In Touch</h2>

        <p>
          Looking for CCTV, Networking or IT Infrastructure solutions?
          Contact Private Infra today.
        </p>

        <div className="info">
          <p><strong>📞</strong> +91 96444 70933</p>
          <p><strong>📞</strong> +91 82510 77565</p>
          <p><strong>📧</strong> info@privateinfra.in</p>
          <p><strong>📍</strong> Jabalpur, Madhya Pradesh</p>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="service"
            placeholder="Required Service"
            value={formData.service}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;