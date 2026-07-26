function SearchBar({
  search,
  setSearch,
  exportToExcel,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "25px 0",
        gap: "20px",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search by Name or Phone or Service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #444",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <button
        onClick={exportToExcel}
        style={{
          background: "#16a34a",
          color: "#fff",
          border: "none",
          padding: "12px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        📥 Export Excel
      </button>
    </div>
  );
}

export default SearchBar;