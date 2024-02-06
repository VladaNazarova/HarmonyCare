const express = require("express");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const { User } = require("../../db/models");

userRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("Cookie");
    res.json({ msg: "Logged out" });
  });
});

userRouter.post("/register", async (req, res) => {
  const { email, login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({ err: "User is already exists" });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, login, password: hash });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.json({ msg: "User registered", newUser: newUser.login });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/login", async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.login;
        req.session.save(() => {
          res.json({ msg: "Authorization succesfully completed" });
        });
      } else {
        res.json({ err: "Incorrect password" });
      }
    } else {
      res.json({ err: "Such user not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ err: "Authorization error" });
  }
});

module.exports = userRouter;
