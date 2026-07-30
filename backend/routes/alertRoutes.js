const express = require("express");
const Student = require("../models/Student");
const SosReport = require("../models/SosReport");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const highRiskStudents = await Student.find({ riskLevel: "High" });
    const highSeverityReports = await SosReport.find({ severity: "High" });

    const studentAlerts = highRiskStudents.map((student) => ({
      title: "High Dropout Risk Alert",
      relatedTo: student.name,
      sentTo: "Parent / Class Teacher",
      priority: "High",
      status: "Generated",
      message: `${student.name} is marked as high risk. Suggested action: ${student.suggestedAction}`,
      type: "Student Risk",
      createdAt: student.updatedAt,
    }));

    const sosAlerts = highSeverityReports.map((report) => ({
      title: "High Severity SOS Alert",
      relatedTo: report.location,
      sentTo: report.assignedTo,
      priority: "High",
      status: report.status,
      message: `${report.category} report detected at ${report.location}. Immediate review is recommended.`,
      type: "Safety",
      createdAt: report.createdAt,
    }));

    res.json([...studentAlerts, ...sosAlerts]);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch alerts" });
  }
});

module.exports = router;