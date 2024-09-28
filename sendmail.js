// Import the nodemailer module and dotenv to load environment variables
const nodemailer = require('nodemailer');
require('dotenv').config(); // Loads variables from .env file

// Create a transporter object using your SMTP email provider details
let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider here, e.g., Gmail
    auth: {
        user: process.env.EMAIL_USER, // Use your email from the environment variable
        pass: process.env.EMAIL_PASS,  // Use App Password or environment variable for security
    },
});
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let message = document.getElementById('comments').value;


// Email options (sender, receiver, subject, and content)
let mailOptions = {
    from: process.env.EMAIL_USER,       // Sender's email
    to: 'ragh3662@gmail.com',  // Recipient's email
    subject: 'Test Email from Node.js', // Subject of the email
    text: name + " " + email + " " + comments,  // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
