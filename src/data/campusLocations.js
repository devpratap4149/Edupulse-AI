const campusLocations = [
  {
    id: 1,
    name: "Back Gate",
    type: "Outdoor",
    crowdLevel: "Medium",
    reportCount: 7,
    riskLevel: "High",
    insight:
      "Repeated bullying reports after school hours. Increase monitoring.",
  },
  {
    id: 2,
    name: "Library",
    type: "Academic",
    crowdLevel: "High",
    reportCount: 1,
    riskLevel: "Medium",
    insight:
      "Overcrowded between 12 PM and 2 PM. Shift some students to Lab 2.",
  },
  {
    id: 3,
    name: "Lab 2",
    type: "Computer Lab",
    crowdLevel: "Low",
    reportCount: 0,
    riskLevel: "Low",
    insight:
      "Underused infrastructure. Can be used for skill sessions or extra classes.",
  },
  {
    id: 4,
    name: "Sports Ground",
    type: "Outdoor",
    crowdLevel: "Medium",
    reportCount: 3,
    riskLevel: "Medium",
    insight:
      "Safety concern reported due to poor lighting after evening practice.",
  },
];

export default campusLocations;