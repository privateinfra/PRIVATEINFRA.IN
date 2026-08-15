function ServiceStats({ contacts }) {
  const services = {};

  contacts.forEach((item) => {
    services[item.service] = (services[item.service] || 0) + 1;
  });

  return (
    <div
      style={{
        background: "#111827",
        padding: "20px",
        borderRadius: "12px",
        color: "#fff",
        marginTop: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>📊 Service Statistics</h2>

      {Object.keys(services).length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        Object.entries(services).map(([service, count]) => (
          <div
            key={service}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
              borderBottom: "1px solid #374151",
              paddingBottom: "8px",
            }}
          >
            <span>{service}</span>

            <span
              style={{
                background: "#00C2FF",
                padding: "4px 10px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {count}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default ServiceStats;