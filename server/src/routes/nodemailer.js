const nodemailer = require('nodemailer');
const express = require('express');
const passwordRouter = express.Router();
const { User } = require('../../db/models');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'harmonycarebot@gmail.com',
    pass: 'mlde mvbr tngc pcwk'
  }
});

const passwordResetTokens = {};
console.log(passwordResetTokens);

passwordRouter.post('/sendmail', (req, res) => {
  const { email } = req.body;
  const token = crypto.randomBytes(20).toString('hex');
  passwordResetTokens[email] = token;
  const resetLink = `http://localhost:5173/resetpassword/${token}`;
  const mailOptions = {
    from: 'harmonycarebot@gmail.com',
    to: email,
    subject: 'Password reset',
    text: `To reset your password, click on the following link: ${resetLink}`
  };

  fs.writeFile('password_reset_tokens.json', JSON.stringify(passwordResetTokens), (err) => {
    if (err) {
      return res.status(500).send('Error saving password reset tokens');
    }
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).send('Error sending email');
    } else {
      res.status(200).send('Email sent successfully');
    }
  });
});

passwordRouter.post('/resetpassword/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const tokenFileContent = fs.readFileSync('password_reset_tokens.json', 'utf8');
    const passwordResetTokens = JSON.parse(tokenFileContent);
    const email = Object.keys(passwordResetTokens).find(
      (key) => passwordResetTokens[key] === token
    );
    if (!email) {
      return res.status(400).send('Invalid or expired token 1');
    }

    delete passwordResetTokens[email];
    fs.writeFileSync('password_reset_tokens.json', JSON.stringify(passwordResetTokens));

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const hash = await bcrypt.hash(password, 10);
    user.password = hash;
    await user.save();
    res.status(200).send('Password reset successfully');
  } catch (error) {
    res.status(400).send('Что-то сломалось');
  }
});

module.exports = passwordRouter;
