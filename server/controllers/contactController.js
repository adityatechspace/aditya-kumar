import nodemailer from "nodemailer";

export const sendContactMessage = async (
  req,
  res
) => {
  try {
    const { name, email, message } = req.body;

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    await transporter.sendMail({
      from: email,

      to: process.env.EMAIL_USER,

      subject: `Portfolio Contact From ${name}`,

      text: `
Name: ${name}

Email: ${email}

Message:

${message}
`
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message"
    });
  }
};