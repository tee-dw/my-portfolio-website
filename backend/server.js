const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:3002',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// POST endpoint to handle form submission
app.post('/api/send-email', (req, res) => {
    const { firstname, lastname, email, message } = req.body;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Configure email data
    const mailOptions = {
        from: email,
        to: 'tboltz1808@gmail.com',
        subject: `New Contact Form Submission from ${firstname} ${lastname}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p>You have received a new message from your website contact form. Here are the details:</p>
            <p><strong>First Name:</strong> ${firstname}</p>
            <p><strong>Last Name:</strong> ${lastname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
