const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    attendance: {
      type: Number,
      required: true,
    },
    previousAttendance: {
      type: Number,
      default: 0,
    },
    averageMarks: {
      type: Number,
      required: true,
    },
    previousMarks: {
      type: Number,
      default: 0,
    },
    feeStatus: {
      type: String,
      enum: ["Paid", "Delayed", "Partial"],
      default: "Paid",
    },
    feeDelayCount: {
      type: Number,
      default: 0,
    },
    activityParticipation: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    counsellingHistory: {
      type: Boolean,
      default: false,
    },
    dropoutRisk: {
      type: Number,
      default: 0,
    },
    academicRisk: {
      type: Number,
      default: 0,
    },
    engagementRisk: {
      type: Number,
      default: 0,
    },
    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    reasons: {
      type: [String],
      default: [],
    },
    suggestedAction: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);