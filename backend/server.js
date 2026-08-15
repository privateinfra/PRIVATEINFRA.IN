import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { createServer } from "http";
import { Server } from "socket.io";
import testimonialRoutes from "./routes/testimonialRoutes.js";

dotenv.config();

console.log("SERVER HOST =", process.env.EMAIL_HOST);
console.log("SERVER USER =", process.env.EMAIL_USER);

connectDB();

const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.set("io", io);

io.on("connection", (socket) => {
  console.log("✅ Client Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client Disconnected:", socket.id);
  });
});

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

app.use("/api/testimonials", testimonialRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Private Infra Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});