import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendAutoReply = async (name, email) => {
  await transporter.sendMail({
    from: `"Private Infra" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Thank You For Contacting Private Infra",

    html: `
      <div style="font-family:Arial,sans-serif;padding:20px;">
        <h2 style="color:#00C2FF;">
          Thank You ${name}!
        </h2>

        <p>
          We have received your enquiry successfully.
        </p>

        <p>
          Our team will contact you shortly.
        </p>

        <hr>

        <h3>Private Infra</h3>

        <p>
          Trusted Security & Networking Solutions
        </p>

        <p>
          📧 info@privateinfra.in
        </p>
      </div>
    `,
  });
};

export default sendAutoReply;