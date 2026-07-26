function DashboardStats({ todayCount, thisMonthCount }) {
  const boxStyle = {
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
        marginTop: "30px",
      }}
    >
      <div style={boxStyle}>
        <h3>📅 Today</h3>
        <h1>{todayCount}</h1>
      </div>

      <div style={boxStyle}>
        <h3>🗓 This Month</h3>
        <h1>{thisMonthCount}</h1>
      </div>
    </div>
  );
}

export default DashboardStats;