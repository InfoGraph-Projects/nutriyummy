"use strict";

/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User Schema
const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin"],
  },
});

// Create Token
users.virtual("token").get(function () {
  let tokenObject = {
    username: this.username,
  };
  return jwt.sign(tokenObject, process.env.SECRET);
});

// Create capability
users.virtual("capabilities").get(function () {
  let acl = {
    user: ["read", "create",],
    admin: ["read", "create", "update", "delete"],
  };
  return acl[this.role];
});

// Check the password
users.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// Basic authentication
users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username });
  const valid = await bcrypt.compare(password, user.password);
  if (valid) {
    return user;
  }
  throw new Error("Invalid User");
};

// Bearer authentication
users.statics.authenticateWithToken = async function (token) {
  try {
    const parsedToken = jwt.verify(token, process.env.SECRET);
    const user = this.findOne({ username: parsedToken.username });
    if (user) {
      return user;
    }
    throw new Error("User Not Found");
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = mongoose.model("users", users);
