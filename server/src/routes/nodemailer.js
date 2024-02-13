const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harmonycarebot@gmail.com',
      pass: 'mlde mvbr tngc pcwk'
    }
  });
  
  const mailOptions = {
    const {email} = req.body,
    from: 'harmonycarebot@gmail.com',
    to: email,
    subject: 'Password reset',
    text: 'Random text'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200)
    }
  });