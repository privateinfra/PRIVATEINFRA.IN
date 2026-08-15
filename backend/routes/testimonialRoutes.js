import express from "express";

import {
  createTestimonial,
  getTestimonials,
  deleteTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", getTestimonials);

router.post("/", createTestimonial);

router.delete("/:id", deleteTestimonial);

export default router;