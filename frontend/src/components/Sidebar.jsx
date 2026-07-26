import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/admin");
  };

  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#111827",
        color: "#fff",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#00C2FF" }}>Private Infra</h2>

      <hr />

      <Link
        to="/dashboard"
        style={{
          display: "block",
          color: "#fff",
          marginTop: "25px",
          textDecoration: "none",
        }}
      >
        🏠 Dashboard
      </Link>

      <Link
        to="/dashboard"
        style={{
          display: "block",
          color: "#fff",
          marginTop: "20px",
          textDecoration: "none",
        }}
      >
        📩 Enquiries
      </Link>

      <button
        onClick={logout}
        style={{
          marginTop: "40px",
          width: "100%",
          padding: "12px",
          background: "#ef4444",
          border: "none",
          color: "#fff",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;