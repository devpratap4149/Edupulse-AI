const classifySOS = (message, location) => {
  const text = message.toLowerCase();
  const place = location.toLowerCase();

  if (message.trim().length < 10) {
    return {
      category: "Insufficient Information",
      severity: "Not Classified",
      urgencyScore: 0,
      assignedTo: "Not Assigned",
    };
  }

  if (
    text.includes("bully") ||
    text.includes("bullying") ||
    text.includes("hit") ||
    text.includes("threat") ||
    text.includes("abuse")
  ) {
    return {
      category: "Bullying",
      severity: "High",
      urgencyScore: 88,
      assignedTo: "Counsellor",
    };
  }

  if (
    text.includes("stress") ||
    text.includes("anxiety") ||
    text.includes("pressure") ||
    text.includes("sad") ||
    text.includes("depressed")
  ) {
    return {
      category: "Mental Health",
      severity: "Medium",
      urgencyScore: 65,
      assignedTo: "Counsellor",
    };
  }

  if (
    text.includes("unsafe") ||
    text.includes("dark") ||
    text.includes("parking") ||
    place.includes("gate") ||
    place.includes("sports ground")
  ) {
    return {
      category: "Safety Concern",
      severity: "Medium",
      urgencyScore: 59,
      assignedTo: "Security Team",
    };
  }

  return {
    category: "General Concern",
    severity: "Low",
    urgencyScore: 25,
    assignedTo: "Teacher",
  };
};

module.exports = classifySOS;