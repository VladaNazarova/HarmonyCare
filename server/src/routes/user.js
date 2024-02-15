const express = require('express');
const bcrypt = require('bcrypt');
const userRouter = express.Router();
const { User } = require('../../db/models');
const fileMiddleWare = require('../middleware/file');

userRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('Cookie');
    res.json({ msg: 'Logged out' });
  });
});

userRouter.get('/auth', (req, res) => {
  res.json({ user: req.session.email || '' });
});

userRouter.get('/role', async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const role = user.role;
    res.json({ role });
  } catch (error) {
    console.error('Error fetching user role:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

userRouter.post('/register', async (req, res) => {
  const { email, login, phone_number, password, role } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ error: 'User is already exists' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ role, email, login, phone_number, password: hash });
      req.session.email = newUser.email;
      console.log(req.session.email);
      req.session.save(() => {
        res.json({ msg: 'User registered', newUser });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.post('/registerDoc', fileMiddleWare.single('img'), async (req, res) => {
  const { email, login, phone_number, password, role, specialization, experience, doctor_id } =
    req.body;

  try {
    if (req.file) {
      const img = req.file.originalname;
      console.log('File exists');
      const user = await User.findOne({ where: { email } });
      if (user) {
        return res.json({ error: 'User is already exists' });
      }
      const hash = await bcrypt.hash(password, 10);
      const docUser = await User.create({
        email,
        login,
        phone_number,
        password: hash,
        role,
        specialization,
        experience,
        img,
        doctor_id
      });
      return res.json({ msg: 'User registered', docUser });
    } else {
      console.log('File does not exist');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

userRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.email = user.email;
        console.log(req.session.email);
        req.session.save(() => {
          res.json({
            msg: 'Authorization succesfully completed',
            email: user.email,
            role: user.role
          });
        });
        console.log('🚀 ~ req.session.save ~ session:', req.session);
      } else {
        res.json({ error: 'Incorrect password' });
      }
    } else {
      res.json({ error: 'Such user not found' });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: 'Authorization error' });
  }
});

module.exports = userRouter;
