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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  from: `"Aditya Portfolio" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `Portfolio Contact From ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
});

return res.status(200).json({
  success: true,
  message: "Message sent successfully!",
});

} catch (error) {
console.error("Contact email error:", error);

return res.status(500).json({
  success: false,
  message: "Failed to send message. Please try again later.",
});

}
};