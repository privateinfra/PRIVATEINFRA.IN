import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import DashboardChart from "../components/DashboardChart";
import DashboardStats from "../components/DashboardStats";
import SearchBar from "../components/SearchBar";
import EnquiryTable from "../components/EnquiryTable";
import EnquiryModal from "../components/EnquiryModal";

function Dashboard() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin", { replace: true });
      return;
    }

    fetchContacts();
  }, [navigate]);

  const fetchContacts = async () => {
    try {
const token = localStorage.getItem("token");

const res = await fetch("http://localhost:5000/api/contact", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});      const data = await res.json();

      if (data.success) {
        setContacts(data.contacts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

const res = await fetch(
  `http://localhost:5000/api/contact/${id}`,
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  }
);
      const data = await res.json();

      if (data.success) {
        fetchContacts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      const token = localStorage.getItem("token");

const res = await fetch(
  `http://localhost:5000/api/contact/${id}`,
  {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      const data = await res.json();

      if (data.success) {
        alert("Deleted Successfully");
        fetchContacts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      contacts.map((item) => ({
        Name: item.name,
        Email: item.email,
        Phone: item.phone,
        Service: item.service,
        Status: item.status,
        Message: item.message,
      }))
    );

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Enquiries"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(file, "PrivateInfra_Enquiries.xlsx");
  };

  const newCount = contacts.filter(
    (item) => item.status === "New"
  ).length;

  const contactedCount = contacts.filter(
    (item) => item.status === "Contacted"
  ).length;

  const completedCount = contacts.filter(
    (item) => item.status === "Completed"
  ).length;

  const today = new Date().toDateString();

  const todayCount = contacts.filter(
    (item) =>
      new Date(item.createdAt).toDateString() === today
  ).length;

  const thisMonthCount = contacts.filter((item) => {
    const d = new Date(item.createdAt);
    const now = new Date();

    return (
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    );
  }).length;

  const filteredContacts = contacts.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      item.service.includes(search)
  );
    return (
    <>
      <Sidebar />

      <div
        style={{
          minHeight: "100vh",
          background: "#08101f",
          color: "white",
          padding: "30px",
          marginLeft: "260px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ color: "#00C2FF" }}>
            Private Infra Admin Dashboard
          </h1>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/admin");
            }}
            style={{
              background: "#ff3b30",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        </div>

        <DashboardCards
          total={contacts.length}
          newCount={newCount}
          contactedCount={contactedCount}
          completedCount={completedCount}
        />

        <DashboardChart
          newCount={newCount}
          contactedCount={contactedCount}
          completedCount={completedCount}
        />

        <DashboardStats
          todayCount={todayCount}
          thisMonthCount={thisMonthCount}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
          exportToExcel={exportToExcel}
        />

        <EnquiryTable
          contacts={filteredContacts}
          updateStatus={updateStatus}
          deleteContact={deleteContact}
          setSelectedContact={setSelectedContact}
        />

        <EnquiryModal
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
        />
      </div>
    </>
  );
}

export default Dashboard;