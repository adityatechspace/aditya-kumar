import nodemailer from "nodemailer";

export const sendContactMessage = async (req, res) => {
try {
const { name, email, message } = req.body;

if (!name || !email || !message) {
  return res.status(400).json({
    success: false,
    message: "Please fill in all fields.",
  });
}

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Email configuration error: EMAIL_USER or EMAIL_PASS not set");
  return res.status(500).json({
    success: false,
    message: "Server email configuration error. Please contact the administrator.",
  });
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test the connection
await transporter.verify();

await transporter.sendMail({
  from: `"Aditya Portfolio" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `Portfolio Contact From ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
});

console.log(`Email sent successfully from ${email}`);

return res.status(200).json({
  success: true,
  message: "Message sent successfully!",
});

} catch (error) {
console.error("Contact email error:", {
  message: error.message,
  code: error.code,
  response: error.response,
});

return res.status(500).json({
  success: false,
  message: "Failed to send message. Please try again later.",
});

}
};