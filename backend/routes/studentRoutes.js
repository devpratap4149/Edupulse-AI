const express = require("express");
const Student = require("../models/Student");
const calculateRisk = require("../utils/riskEngine");

const router = express.Router();

// GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ dropoutRisk: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students" });
  }
});

// GET single student
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch student" });
  }
});

// POST create student
router.post("/", async (req, res) => {
  try {
    const riskData = calculateRisk(req.body);

    const student = await Student.create({
      ...req.body,
      ...riskData,
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: "Failed to create student", error });
  }
});

// PUT update student
router.put("/:id", async (req, res) => {
  try {
    const riskData = calculateRisk(req.body);

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        ...riskData,
      },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(400).json({ message: "Failed to update student" });
  }
});

// DELETE student
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete student" });
  }
});

module.exports = router;