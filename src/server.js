"use strict";

/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Internal Resources


// Prepare the express app
const app = express();

// App restriction and logger
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", v1Routes);

app.use(authRoutes);

// Catch Errors
app.use(notFound);
app.use(errorHandler);

// Export Server
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is lunching on 🚀 this port ➡️ ${port}`);
    });
  },
};
