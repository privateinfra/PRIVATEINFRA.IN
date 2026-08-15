function RecentActivity({ contacts }) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "25px",
        color: "#fff",
      }}
    >
      <h2>🕒 Recent Activity</h2>

      {contacts.length === 0 ? (
        <p>No Recent Activity</p>
      ) : (
        contacts.slice(0, 5).map((item) => (
          <div
            key={item._id}
            style={{
              borderBottom: "1px solid #333",
              padding: "12px 0",
            }}
          >
            <b>{item.name}</b>

            <div
              style={{
                color: "#9CA3AF",
                marginTop: "4px",
              }}
            >
              Requested <b>{item.service}</b>
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#6B7280",
              }}
            >
              {new Date(item.createdAt).toLocaleString()}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecentActivity;