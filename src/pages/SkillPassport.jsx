import skills from "../data/skills";

export default function SkillPassport() {
  return (
    <div className="page">
      <h1>Student Skill Passport</h1>
      <p className="page-subtitle">
        Verified digital portfolio of student achievements beyond marks.
      </p>

      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <span className="skill-category">{skill.category}</span>

            <h2>{skill.title}</h2>

            <p>
              <strong>Student:</strong> {skill.studentName}
            </p>

            <p>
              <strong>Issued By:</strong> {skill.issuedBy}
            </p>

            <p>
              <strong>Date:</strong> {skill.date}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span className={skill.verified ? "verified" : "not-verified"}>
                {skill.verified ? "Verified" : "Pending Verification"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}