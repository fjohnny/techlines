import nodemailer from 'nodemailer';

//hchz kosm nfya sfcw
//johnnyfra@gmail.com

export const sendPasswordResetEmail = (token, email, name) => {
    const html = `
      <html>
        <body>
          <h3>Dear ${name}</h3>
        
          <p>Please click on the link below to reset your password</p>
          <a href="http://localhost:3001/password-reset/${token}">Click here</a>
        </body>
      </html>`;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'johnnyfra@gmail.com',
            pass: 'hchz kosm nfya sfcw',
        },
    });

    const mailOptions = {
        from: 'johnnyfra@gmail.com',
        to: email,
        subject: 'Tech Lines - Reset your password request',
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
