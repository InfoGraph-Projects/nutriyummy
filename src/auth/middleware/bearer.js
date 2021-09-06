"use strict";

/**
 *This code been formatted using Prettier Code Formatter
 */

// Internal Resources
const users = require("../models/users.js");

// Export the Bearer authentication
module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      _authError();
    }

    const token = req.headers.authorization.split(" ").pop();
    const validUser = await users.authenticateWithToken(token);

    req.user = validUser;
    req.token = validUser.token;
    next();
  } catch (e) {
    _authError();
  }

  function _authError() {
    next("Invalid Login");
  }
};
