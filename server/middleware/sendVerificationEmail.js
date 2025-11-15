import nodemailer from 'nodemailer';

export const sendVerificationEmail = (token, email, name) => {
    const html = `
      <html>
        <body>
          <h3>Dear ${name}</h3>
          <p>Thank you for signing up at Tech Lines</p>
          <p>Use the link below to verify your email</p>
          <a href="http://localhost:3001/verify-email/${token}">Click here to verify</a>
        </body>
      </html>`;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'johnnyfra@gmail.com',
            pass: process.env.GOOGLE_APP_PASS,
        },
    });

    const mailOptions = {
        from: 'johnnyfra@gmail.com',
        to: email,
        subject: 'Verify your email address',
        html: html,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent to ${email}`);
            console.log(info.response);
        }
    });
};
