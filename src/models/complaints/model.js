"use strict";

/**
 *This code been formatted using Prettier Code Formatter
 */

// 3rd Party Resources
const mongoose = require("mongoose");

// Complaints Schema
const complaintsSchema = mongoose.Schema({
  user: { type: String, required: true },
  complaint: { type: String, required: true },
  status: {
    type: String,
    enum: ["resolved", "pending", "dismissed"],
    default: "pending",
    required: true,
  },
  created: { type: Date, default: Date.now },
});

// Complaints Model
const complaintsModel = mongoose.model("complaints", complaintsSchema);

module.exports = complaintsModel;
