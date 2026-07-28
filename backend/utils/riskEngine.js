const calculateRisk = (student) => {
  let dropoutRisk = 0;
  let academicRisk = 0;
  let engagementRisk = 0;
  const reasons = [];

  if (student.attendance < 75) {
    dropoutRisk += 30;
    engagementRisk += 25;
    reasons.push(`Attendance is low at ${student.attendance}%`);
  }

  if (student.previousAttendance - student.attendance >= 15) {
    dropoutRisk += 15;
    engagementRisk += 15;
    reasons.push(
      `Attendance dropped from ${student.previousAttendance}% to ${student.attendance}%`
    );
  }

  if (student.averageMarks < 50) {
    academicRisk += 35;
    dropoutRisk += 20;
    reasons.push(`Average marks are low at ${student.averageMarks}%`);
  }

  if (student.previousMarks - student.averageMarks >= 15) {
    academicRisk += 25;
    dropoutRisk += 15;
    reasons.push(
      `Marks declined from ${student.previousMarks}% to ${student.averageMarks}%`
    );
  }

  if (student.feeStatus === "Delayed") {
    dropoutRisk += 15;
    reasons.push("Fee payment is delayed");
  }

  if (student.activityParticipation === "Low") {
    engagementRisk += 25;
    dropoutRisk += 10;
    reasons.push("Low participation in activities");
  }

  if (student.counsellingHistory) {
    dropoutRisk += 10;
    engagementRisk += 10;
    reasons.push("Counselling history available");
  }

  dropoutRisk = Math.min(dropoutRisk, 100);
  academicRisk = Math.min(academicRisk, 100);
  engagementRisk = Math.min(engagementRisk, 100);

  let riskLevel = "Low";

  if (dropoutRisk >= 61) {
    riskLevel = "High";
  } else if (dropoutRisk >= 31) {
    riskLevel = "Medium";
  }

  let suggestedAction = "Continue regular monitoring.";

  if (riskLevel === "High") {
    suggestedAction =
      "Immediate counselling session, parent meeting, and academic mentor assignment recommended.";
  } else if (riskLevel === "Medium") {
    suggestedAction =
      "Teacher should monitor progress and schedule a follow-up if decline continues.";
  }

  return {
    dropoutRisk,
    academicRisk,
    engagementRisk,
    riskLevel,
    reasons,
    suggestedAction,
  };
};

module.exports = calculateRisk;