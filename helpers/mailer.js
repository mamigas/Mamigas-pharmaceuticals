import nodemailer from "nodemailer";

export const mailer = async ({ name, email, message, subject = "" }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "mail.mamigaspharmaceuticals.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_CONTACT_USER,
        pass: process.env.EMAIL_PASS, // set this in .env
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: "contact@mamigaspharmaceuticals.com",
      subject: subject || `${name} sent you a message`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Email could not be sent.");
  }
};
