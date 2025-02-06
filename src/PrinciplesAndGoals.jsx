/**
 * PrinciplesAndGoals Component
 * 
 * Displays the core principles and goals of the organization in a responsive layout.
 * Used in the About Us page to communicate fundamental values and objectives.
 * 
 */ 
 
 export default function PrinciplesAndGoals() {
    return (
      <div className="principles" style={{  margin: "6rem" }}>
   
      <div style={{ padding: "2px", margin: "0 auto", maxWidth: "800px", textAlign: "center" }} data-aos="fade-up" >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", 
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          {/* Principles Section */}
          <div style={{ flex: "1 1 300px" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Principles</h2>
            <ul style={{ textAlign: "left", listStyleType: "disc", margin: "1px", lineHeight: "1.6" }}>
              <li>Autonomous and trustworthy organizational structure.</li>
              <li>Well-defined roles and accountability.</li>
              <li>Inclusive representation from all parents.</li>
              <li>Commitment to continuous improvement and adaptability.</li>
              <li>Organizational Structure.</li>
            </ul>
          </div>
          {/* Goals Section */}
          <div style={{ flex: "1 1 300px"}}> 
            <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Goals</h2>
            <ul style={{ textAlign: "left", listStyleType: "disc", margin: "1px", lineHeight: "1.6" }}>
              <li>Create an engaging, consistent learning environment.</li>
              <li>Offer long-term learning opportunities for students to grow their Tamil language skills and cultural understanding. </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
  