import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";
import sendAutoReply from "../utils/sendAutoReply.js";

export const createContact = async (req, res) => {
  try {
    console.log(req.body);
    
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    const io = req.app.get("io");

    io.emit("newEnquiry", contact);

    try {
  await sendEmail({
    name,
    email,
    phone,
    service,
    message,
  });

  await sendAutoReply(name, email);

  console.log("✅ Email Sent");
} catch (err) {
  console.error("EMAIL ERROR:", err);
}

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const getAllContacts = async (req, res) => {
  
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      total: contacts.length,
      contacts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      success: true,
      contact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};