import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Wrap in an async IIFE so we can use await.
 export const sendEmail = async (to: string, subject: string, body: string) => {
  const info = await transporter.sendMail({
    from: process.env.FROM_EMAIL || '"Clash Support" <sehajmakkar007@gmail.com>',
    to: to,
    subject: subject,
    html: body, 
  });

  console.log("Message sent:", info.messageId);
};