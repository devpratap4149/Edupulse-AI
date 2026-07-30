const express = require("express");
const SosReport = require("../models/SosReport");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reports = await SosReport.find();

    const locationMap = {};

    reports.forEach((report) => {
      const location = report.location.trim().toLowerCase();

      if (!locationMap[location]) {
        locationMap[location] = {
          location: report.location.trim(),
          reportCount: 0,
          highSeverityCount: 0,
        };
      }

      locationMap[location].reportCount += 1;

      if (report.severity === "High") {
        locationMap[location].highSeverityCount += 1;
      }
    });

    const heatmap = Object.values(locationMap).map((item) => {
      let riskLevel = "Low";
      let crowdLevel = "Normal";

      if (item.reportCount >= 3 || item.highSeverityCount >= 1) {
        riskLevel = "High";
        crowdLevel = "High";
      } else if (item.reportCount === 2) {
        riskLevel = "Medium";
        crowdLevel = "Moderate";
      }

      return {
        ...item,
        riskLevel,
        crowdLevel,
        insight:
          riskLevel === "High"
            ? `${item.location} has repeated or high severity reports. Increase monitoring.`
            : `${item.location} is currently under normal observation.`,
      };
    });

    res.json(heatmap);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch heatmap data" });
  }
});

module.exports = router;