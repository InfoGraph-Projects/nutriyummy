"use strict";

/**
 *This code been formatted using Prettier Code Formatter
 */

// Export the capabilities for the users roles
module.exports = (capability) => {
  return (req, res, next) => {
    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      } else {
        next("Access Denied");
      }
    } catch (e) {
      next("Invalid Login");
    }
  };
};
