const mongoose = require("mongoose");

const interventionSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    issueType: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String,
      default: "Class Teacher",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved"],
      default: "Pending",
    },
    recommendedAction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Intervention", interventionSchema);