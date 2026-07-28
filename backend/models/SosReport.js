const mongoose = require("mongoose");

const sosReportSchema = new mongoose.Schema(
  {
    anonymousId: {
      type: String,
      default: () => `ANON-${Math.floor(1000 + Math.random() * 9000)}`,
    },
    message: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "General Concern",
    },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High", "Not Classified"],
      default: "Low",
    },
    urgencyScore: {
      type: Number,
      default: 0,
    },
    assignedTo: {
      type: String,
      default: "Teacher",
    },
    status: {
      type: String,
      enum: ["Pending", "In Review", "Resolved"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SosReport", sosReportSchema);