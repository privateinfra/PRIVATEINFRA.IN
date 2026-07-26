import nodemailer from "nodemailer";

const sendEmail = async ({
  name,
  email,
  phone,
  service,
  message,
}) => {

  console.log("HOST =", process.env.EMAIL_HOST);
  console.log("PORT =", process.env.EMAIL_PORT);
  console.log("USER =", process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER.trim(),
    pass: process.env.EMAIL_PASS.trim(),
  },
  tls: {
    rejectUnauthorized: false,
  },
});

  await transporter.sendMail({
    from: `"Private Infra" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Enquiry",
    html: `
      <h2>New Enquiry</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Service: ${service}</p>
      <p>Message: ${message}</p>
    `,
  });
};

export default sendEmail;