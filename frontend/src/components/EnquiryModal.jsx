function EnquiryModal({ selectedContact, setSelectedContact }) {
  if (!selectedContact) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: "#111827",
          color: "#fff",
          padding: "30px",
          borderRadius: "12px",
          width: "500px",
          maxWidth: "90%",
        }}
      >
        <h2 style={{ color: "#00C2FF", marginBottom: "20px" }}>
          Enquiry Details
        </h2>

        <p><strong>Name:</strong> {selectedContact.name}</p>

        <p><strong>Email:</strong> {selectedContact.email}</p>

        <p><strong>Phone:</strong> {selectedContact.phone}</p>

        <p><strong>Service:</strong> {selectedContact.service}</p>

        <p><strong>Status:</strong> {selectedContact.status}</p>

        <p style={{ marginTop: "20px" }}>
          <strong>Message:</strong>
        </p>

        <div
          style={{
            background: "#1F2937",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "10px",
            lineHeight: "1.6",
          }}
        >
          {selectedContact.message}
        </div>

        <button
          onClick={() => setSelectedContact(null)}
          style={{
            marginTop: "25px",
            width: "100%",
            background: "#00C2FF",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default EnquiryModal;