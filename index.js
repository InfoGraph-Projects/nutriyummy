"use strict";

/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd party
require("dotenv").config();

// server
const server = require("./src/server.js");

// DB Server
const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
server.start(process.env.PORT);
