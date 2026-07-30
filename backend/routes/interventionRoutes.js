const express = require("express");
const Intervention = require("../models/Intervention");
const Student = require("../models/Student");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let interventions = await Intervention.find().sort({ createdAt: -1 });

    if (interventions.length === 0) {
      const highRiskStudents = await Student.find({ riskLevel: "High" });

      const generated = highRiskStudents.map((student) => ({
        studentName: student.name,
        issueType: "Dropout Risk",
        assignedTo: "Class Teacher",
        priority: "High",
        status: "In Progress",
        recommendedAction: student.suggestedAction,
      }));

      if (generated.length > 0) {
        interventions = await Intervention.insertMany(generated);
      }
    }

    res.json(interventions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch interventions" });
  }
});

router.post("/", async (req, res) => {
  try {
    const intervention = await Intervention.create(req.body);
    res.status(201).json(intervention);
  } catch (error) {
    res.status(400).json({ message: "Failed to create intervention", error });
  }
});

router.put("/:id/status", async (req, res) => {
  try {
    const intervention = await Intervention.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!intervention) {
      return res.status(404).json({ message: "Intervention not found" });
    }

    res.json(intervention);
  } catch (error) {
    res.status(400).json({ message: "Failed to update intervention" });
  }
});

module.exports = router;