"use strict";

/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
const express = require("express");
const authRouter = express.Router();

// Internal Resources
const User = require("./models/users.js");
const basicAuth = require("./middleware/basic.js");

// Signup route
authRouter.post("/signup", async (req, res, next) => {
  try {
    let user = new User(req.body);
    const userRecord = await user.save();
    const output = {
      user: userRecord,
      token: userRecord.token,
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message);
  }
});

// Signin route
authRouter.post("/signin", basicAuth, (req, res, next) => {
  console.log("user", req.user);
  const user = {
    user: req.user,
    token: req.user.token,
  };
  res.status(200).json(user);
});

module.exports = authRouter;