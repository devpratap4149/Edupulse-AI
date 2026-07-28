// import { useState } from "react";
// import API_BASE_URL from "../api";

// export default function SilentSOS() {
//   const [message, setMessage] = useState("");
//   const [location, setLocation] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!message.trim() || !location.trim()) {
//       alert("Please enter both message and location.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch(`${API_BASE_URL}/sos`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           message,
//           location,
//         }),
//       });

//       const data = await res.json();

//       setResult(data);
//       setMessage("");
//       setLocation("");
//     } catch (error) {
//       console.error("Failed to submit SOS report:", error);
//       alert("Failed to submit report. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page sos-page">
//       <div className="sos-hero">
//         <span className="sos-top-badge">STUDENT SAFETY SYSTEM</span>

//         <h1>SilentSOS</h1>

//         <p>
//           Anonymous student safety and wellbeing reporting system powered by
//           backend classification logic.
//         </p>
//       </div>

//       <div className={result ? "sos-layout has-result" : "sos-layout"}>
//         <form className="sos-form" onSubmit={handleSubmit}>
//           <span className="sos-badge">Anonymous Report</span>

//           <h2>Submit a Safety or Wellbeing Concern</h2>

//           <p className="sos-form-text">
//             Students can safely report bullying, mental pressure, harassment,
//             unsafe areas, or other concerns without revealing their identity.
//           </p>

//           <label>Report Message</label>

//           <textarea
//             placeholder="Example: Some students are bullying juniors near the back gate..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />

//           <label>Location</label>

//           <input
//             type="text"
//             placeholder="Example: Back Gate, Library, Sports Ground"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />

//           <button type="submit" className="primary-btn sos-submit-btn" disabled={loading}>
//             {loading ? "Analyzing Report..." : "Submit Anonymous Report"}
//           </button>
//         </form>

//         {result && (
//           <div className="sos-result-card">
//             <span className="sos-result-badge">AI CLASSIFICATION RESULT</span>

//             <h2>{result.category}</h2>

//             <p className="sos-result-desc">
//               The report has been analyzed by backend logic and stored securely
//               in MongoDB with an anonymous ID.
//             </p>

//             <div className="sos-result-grid">
//               <div>
//                 <p>Severity</p>
//                 <strong
//                   className={`severity-text ${result.severity
//                     .toLowerCase()
//                     .replace(" ", "-")}`}
//                 >
//                   {result.severity}
//                 </strong>
//               </div>

//               <div>
//                 <p>Urgency Score</p>
//                 <strong>{result.urgencyScore}/100</strong>
//               </div>

//               <div>
//                 <p>Assigned To</p>
//                 <strong>{result.assignedTo}</strong>
//               </div>

//               <div>
//                 <p>Status</p>
//                 <strong>{result.status}</strong>
//               </div>
//             </div>

//             <div className="sos-report-summary">
//               <p>
//                 <strong>Anonymous ID:</strong> {result.anonymousId}
//               </p>

//               <p>
//                 <strong>Location:</strong> {result.location}
//               </p>

//               <p>
//                 <strong>Submitted Message:</strong> {result.message}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import API_BASE_URL from "../api";

export default function SilentSOS() {
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim() || !location.trim()) {
      alert("Please enter both message and location.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/sos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          location,
        }),
      });

      const data = await res.json();

      setResult(data);
      setMessage("");
      setLocation("");
    } catch (error) {
      console.error("Failed to submit SOS report:", error);
      alert("Failed to submit report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page sos-page">
      <div className="sos-hero">
  <div className="sos-hero-card">
    <span className="sos-top-badge">STUDENT SAFETY SYSTEM</span>

    <h1>SilentSOS</h1>

    <p>
      A secure anonymous reporting system that helps students raise safety,
      bullying, harassment, and wellbeing concerns. Reports are classified by
      backend AI-style logic and stored in MongoDB for quick action.
    </p>

    <div className="sos-hero-points">
      <span>Anonymous Reporting</span>
      <span>AI Classification</span>
      <span>MongoDB Storage</span>
    </div>
  </div>
</div>

      <div className={result ? "sos-layout has-result" : "sos-layout"}>
        <form className="sos-form" onSubmit={handleSubmit}>
          <span className="sos-badge">Anonymous Report</span>

          <h2>Submit a Safety or Wellbeing Concern</h2>

          <p className="sos-form-text">
            Students can safely report bullying, mental pressure, harassment,
            unsafe areas, or other concerns without revealing their identity.
          </p>

          <label>Report Message</label>

          <textarea
            placeholder="Example: Some students are bullying juniors near the back gate..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <label>Location</label>

          <input
            type="text"
            placeholder="Example: Back Gate, Library, Sports Ground"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button type="submit" className="primary-btn sos-submit-btn" disabled={loading}>
            {loading ? "Analyzing Report..." : "Submit Anonymous Report"}
          </button>
        </form>

        {result && (
          <div className="sos-result-card">
            <span className="sos-result-badge">AI CLASSIFICATION RESULT</span>

            <h2>{result.category}</h2>

            <p className="sos-result-desc">
              The report has been analyzed by backend logic and stored securely
              in MongoDB with an anonymous ID.
            </p>

            <div className="sos-result-grid">
              <div>
                <p>Severity</p>
                <strong
                  className={`severity-text ${result.severity
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {result.severity}
                </strong>
              </div>

              <div>
                <p>Urgency Score</p>
                <strong>{result.urgencyScore}/100</strong>
              </div>

              <div>
                <p>Assigned To</p>
                <strong>{result.assignedTo}</strong>
              </div>

              <div>
                <p>Status</p>
                <strong>{result.status}</strong>
              </div>
            </div>

            <div className="sos-report-summary">
              <p>
                <strong>Anonymous ID:</strong> {result.anonymousId}
              </p>

              <p>
                <strong>Location:</strong> {result.location}
              </p>

              <p>
                <strong>Submitted Message:</strong> {result.message}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}