import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  const [form, setForm] = useState({
    name: "",
    company: "",
    rating: 5,
    message: "",
  });

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/testimonials"
      );

      const data = await res.json();

      if (data.success) {
        setTestimonials(data.testimonials);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const addTestimonial = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "http://localhost:5000/api/testimonials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      setForm({
        name: "",
        company: "",
        rating: 5,
        message: "",
      });

      fetchTestimonials();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm("Delete testimonial?")) return;

    try {
      await fetch(
        `http://localhost:5000/api/testimonials/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchTestimonials();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          background: "#08101f",
          color: "#fff",
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "#00C2FF",
            marginBottom: "20px",
          }}
        >
          ⭐ Testimonials Management
        </h1>

        <div
          style={{
            background: "#111827",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "30px",
          }}
        >
          <form onSubmit={addTestimonial}>
            <input
              type="text"
              placeholder="Customer Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <input
              type="text"
              placeholder="Company"
              value={form.company}
              onChange={(e) =>
                setForm({
                  ...form,
                  company: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <input
              type="number"
              min="1"
              max="5"
              value={form.rating}
              onChange={(e) =>
                setForm({
                  ...form,
                  rating: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <textarea
              rows="4"
              placeholder="Review Message"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#00C2FF",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add Testimonial
            </button>
          </form>
        </div>

        <h2>All Testimonials</h2>

        {testimonials.length === 0 ? (
          <p>No testimonials found.</p>
        ) : (
          testimonials.map((item) => (
            <div
              key={item._id}
              style={{
                background: "#111827",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            >
              <h3>{item.name}</h3>

              <p>{item.company}</p>

              <p>
                {"⭐".repeat(item.rating)}
              </p>

              <p>{item.message}</p>

              <button
                onClick={() =>
                  deleteTestimonial(item._id)
                }
                style={{
                  background: "#ef4444",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Testimonials;