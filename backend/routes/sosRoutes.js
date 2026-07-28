const express = require("express");
const SosReport = require("../models/SosReport");
const classifySOS = require("../utils/sosClassifier");

const router = express.Router();

// GET all SOS reports
router.get("/", async (req, res) => {
  try {
    const reports = await SosReport.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch SOS reports" });
  }
});

// POST submit SOS report
router.post("/", async (req, res) => {
  try {
    const { message, location } = req.body;

    const classification = classifySOS(message, location);

    const report = await SosReport.create({
      message,
      location,
      ...classification,
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ message: "Failed to submit SOS report" });
  }
});

// PUT update SOS status
router.put("/:id/status", async (req, res) => {
  try {
    const report = await SosReport.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.json(report);
  } catch (error) {
    res.status(400).json({ message: "Failed to update report status" });
  }
});

module.exports = router;