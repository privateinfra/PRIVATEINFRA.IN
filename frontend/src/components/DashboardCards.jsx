function DashboardCards({
  total,
  newCount,
  contactedCount,
  completedCount,
}) {
  const cardStyle = {
    background: "#111827",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginTop: "25px",
      }}
    >
      <div style={cardStyle}>
        <h3>📩 Total Enquiries</h3>
        <h1>{total}</h1>
      </div>

      <div style={cardStyle}>
        <h3>🆕 New</h3>
        <h1>{newCount}</h1>
      </div>

      <div style={cardStyle}>
        <h3>📞 Contacted</h3>
        <h1>{contactedCount}</h1>
      </div>

      <div style={cardStyle}>
        <h3>✅ Completed</h3>
        <h1>{completedCount}</h1>
      </div>
    </div>
  );
}

export default DashboardCards;