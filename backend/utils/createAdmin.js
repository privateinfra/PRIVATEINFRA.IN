import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

const createAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash("Privateinfra@2026", 10);

    const admin = await Admin.create({
      name: "Shriyansh",
      email: "shriyansh@privateinfra.in",
      password: hashedPassword,
    });

    console.log("✅ Admin Created Successfully");
    console.log(admin);

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

createAdmin();