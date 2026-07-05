const alerts = [
  {
    id: 1,
    title: "Attendance Drop Alert",
    studentName: "Aman Sharma",
    role: "Parent",
    priority: "High",
    message:
      "Aman's attendance has dropped from 86% to 62%. A parent-teacher meeting is recommended.",
    sentTo: "Parent",
    status: "Sent",
  },
  {
    id: 2,
    title: "Academic Decline Alert",
    studentName: "Sneha Khan",
    role: "Teacher",
    priority: "High",
    message:
      "Sneha's average marks have declined from 66% to 42%. Immediate academic support is required.",
    sentTo: "Class Teacher",
    status: "Pending",
  },
  {
    id: 3,
    title: "Wellness Support Alert",
    studentName: "Class 10 Block",
    role: "Counsellor",
    priority: "Medium",
    message:
      "Multiple anonymous reports mention exam pressure and anxiety. Counsellor check-in is recommended.",
    sentTo: "Counsellor",
    status: "In Review",
  },
  {
    id: 4,
    title: "Campus Safety Alert",
    studentName: "Back Gate",
    role: "Security",
    priority: "High",
    message:
      "Repeated bullying reports detected near the Back Gate after school hours. Increase monitoring.",
    sentTo: "Security Team",
    status: "Sent",
  },
];

export default alerts;