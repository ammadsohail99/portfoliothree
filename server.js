const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Sending Route
app.post("/send-email", async (req, res) => {
  const { username, email, message } = req.body;

  if (!username || !email || !message) {
    return res.status(400).send("Please provide all required fields.");
  }

  try {
    // Configure the transport
    const transporter = nodemailer.createTransport({
      service: "Outlook365", // For Outlook
      auth: {
        user: "your-outlook-email@example.com", // Replace with your Outlook email
        pass: "your-password", // Replace with your Outlook password
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${username}" <${email}>`, // Sender info
      to: "your-outlook-email@example.com", // Your Outlook email
      subject: "New Contact Form Submission",
      text: `You have a new message from: 
      Name: ${username}
      Email: ${email}
      Message: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send the message.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
