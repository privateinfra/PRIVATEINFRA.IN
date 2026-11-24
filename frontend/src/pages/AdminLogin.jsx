import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://www.privateinfra.in/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("admin", JSON.stringify(data.admin));

        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#08101f",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "400px",
          padding: "35px",
          background: "#111827",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#00C2FF", textAlign: "center" }}>
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "25px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "25px",
            background: "#00C2FF",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            borderRadius: "6px",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
