"use strict";

/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
const base64 = require("base-64");

// Internal Resources
const User = require("../models/users.js");

// Export the Basic authentication
module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }

  let basic = req.headers.authorization.split(" ").pop();
  let [user, pass] = base64.decode(basic).split(":");

  try {
    req.user = await User.authenticateBasic(user, pass);
    next();
  } catch (e) {
    _authError();
  }

  function _authError() {
    res.status(403).send("Invalid Login");
  }
};
