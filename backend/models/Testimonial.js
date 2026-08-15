import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
    },

    message: {
      type: String,
      required: true,
    },

    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model(
  "Testimonial",
  testimonialSchema
);

export default Testimonial;