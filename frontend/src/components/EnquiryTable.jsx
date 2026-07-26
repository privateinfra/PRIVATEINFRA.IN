function EnquiryTable({
  contacts,
  updateStatus,
  deleteContact,
  setSelectedContact,
}) {
  return (
    <table
      style={{
        width: "100%",
        marginTop: "20px",
        borderCollapse: "collapse",
        background: "#111827",
        color: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <thead>
        <tr style={{ background: "#1F2937" }}>
          <th style={th}>Name</th>
          <th style={th}>Phone</th>
          <th style={th}>Service</th>
          <th style={th}>Status</th>
          <th style={th}>Action</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((item) => (
          <tr key={item._id}>
            <td style={td}>{item.name}</td>

            <td style={td}>{item.phone}</td>

            <td style={td}>{item.service}</td>

            <td style={td}>
              <select
                value={item.status}
                onChange={(e) =>
                  updateStatus(item._id, e.target.value)
                }
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                }}
              >
                <option value="New">New</option>

                <option value="Contacted">
                  Contacted
                </option>

                <option value="Completed">
                  Completed
                </option>
              </select>
            </td>

            <td style={td}>
              <button
                onClick={() => setSelectedContact(item)}
                style={{
                  background: "#00C2FF",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                View
              </button>

              <button
                onClick={() => deleteContact(item._id)}
                style={{
                  background: "#ff3b30",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const th = {
  padding: "14px",
  borderBottom: "1px solid #374151",
};

const td = {
  padding: "12px",
  textAlign: "center",
  borderBottom: "1px solid #374151",
};

export default EnquiryTable;