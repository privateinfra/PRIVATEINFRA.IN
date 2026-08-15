import Testimonial from "../models/Testimonial.js";

export const createTestimonial = async (req, res) => {
  try {
    const { name, company, rating, message } = req.body;

    const testimonial = await Testimonial.create({
      name,
      company,
      rating,
      message,
    });

    res.status(201).json({
      success: true,
      testimonial,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      testimonials,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};