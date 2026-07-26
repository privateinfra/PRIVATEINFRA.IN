import protect from "../middleware/authMiddleware.js";
import express from "express";
import {
  createContact,
  getAllContacts,
  deleteContact,
  updateStatus,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);

// Protected Routes
router.get("/", protect, getAllContacts);
router.put("/:id", protect, updateStatus);
router.delete("/:id", protect, deleteContact);

export default router;