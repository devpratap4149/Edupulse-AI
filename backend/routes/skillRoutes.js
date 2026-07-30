const express = require("express");
const Skill = require("../models/Skill");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let skills = await Skill.find().sort({ createdAt: -1 });

    if (skills.length === 0) {
      skills = await Skill.insertMany([
        {
          studentName: "Aman Sharma",
          title: "Python Basics Certificate",
          category: "Certification",
          description: "Completed beginner-level Python programming certification.",
          verifiedBy: "EduPulse AI",
          status: "Verified",
        },
        {
          studentName: "Priya Verma",
          title: "AI Science Fair Winner",
          category: "Hackathon",
          description: "Built an AI-based school innovation project.",
          verifiedBy: "Science Department",
          status: "Verified",
        },
        {
          studentName: "Rohan Singh",
          title: "District Football Player",
          category: "Sports",
          description: "Represented school at district-level football competition.",
          verifiedBy: "Sports Department",
          status: "Verified",
        },
      ]);
    }

    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch skills" });
  }
});

router.post("/", async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: "Failed to create skill", error });
  }
});

module.exports = router;