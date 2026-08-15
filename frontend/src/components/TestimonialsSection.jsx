import { useState } from "react";

function TestimonialsSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "120px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            fontWeight: "700",
            color: "#08101f",
            marginBottom: "20px",
          }}
        >
          Client Testimonials
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "22px",
            marginBottom: "80px",
          }}
        >
          Don't just take our word for it - hear what our
          clients have to say
        </p>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            marginBottom: "40px",
          }}
        >
          No reviews yet. Be the first to share your
          experience!
        </p>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            background: "#0f172a",
            color: "#fff",
            border: "none",
            padding: "16px 40px",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          + Write a Review
        </button>

        {showForm && (
          <form
            style={{
              marginTop: "50px",
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Company Name"
              style={inputStyle}
            />

            <select style={inputStyle}>
              <option>⭐⭐⭐⭐⭐</option>
              <option>⭐⭐⭐⭐</option>
              <option>⭐⭐⭐</option>
              <option>⭐⭐</option>
              <option>⭐</option>
            </select>

            <textarea
              placeholder="Write your review..."
              rows="5"
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                background: "#00C2FF",
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: "10px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Submit Review
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "16px",
};

export default TestimonialsSection;