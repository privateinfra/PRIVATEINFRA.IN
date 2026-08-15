function StatsCard({ title, value, color, icon }) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "12px",
        padding: "20px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        transition: "0.3s",
      }}
    >
      <div>
        <h4
          style={{
            margin: 0,
            color: "#9CA3AF",
            fontWeight: "500",
          }}
        >
          {title}
        </h4>

        <h1
          style={{
            marginTop: "10px",
            color: color,
            fontSize: "32px",
          }}
        >
          {value}
        </h1>
      </div>

      <div
        style={{
          fontSize: "42px",
        }}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatsCard;