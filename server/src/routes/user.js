const express = require('express');
const bcrypt = require('bcrypt');
const userRouter = express.Router();
const { User } = require('../../db/models');

userRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('Cookie');
    res.json({ msg: 'Logged out' });
  });
});

userRouter.post('/register', async (req, res) => {
  const { email, login, phone_number, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ err: 'User is already exists' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, login, phone_number, password: hash });
      req.session.email = newUser.email;
      req.session.save( () => {
        res.json({ msg: 'User registered', newUser: newUser.email });
      });
    }
  } catch (error) {
    console.log(error);
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
        req.session.save(() => {
          res.json({ msg: 'Authorization succesfully completed' });
        });
      } else {
        res.json({ err: 'Incorrect password' });
      }
    } else {
      res.json({ err: 'Such user not found' });
    }
  } catch (error) {
    console.log(error);
    res.json({ err: 'Authorization error' });
  }
});

module.exports = userRouter;


// router.post('/signup', async (req, res) => {
//   const {
//     email, firstname, password, role, phone,
//   } = req.body;
//   if (email && firstname && password && role && phone) {
//     try {
//       const [user, created] = await User.findOrCreate({
//         where: { email },
//         defaults: {
//           firstname, password: await bcrypt.hash(password, 13), role, phone,
//         },
//       });
//       if (!created) return res.sendStatus(401);

//       const sessionUser = JSON.parse(JSON.stringify(user));
//       delete sessionUser.password;
//       req.session.user = sessionUser;
//       return res.json(sessionUser);
//     } catch (e) {
//       console.log(e);
//       return res.sendStatus(500);
//     }
//   }
//   return res.sendStatus(500);
// });