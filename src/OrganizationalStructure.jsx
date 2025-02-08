import React from "react";
import "./styles/Organisation.css";
/**
 * OrganizationalStructure Component
 * 
 * Displays the organizational structure of the institution in a collapsible format.
 * Features:
 * - Expandable sections for detailed information
 * - Numbered sections with visual hierarchy
 * - Arrow indicators between sections
 */
function OrganizationalStructure() {
  // State to track which section is expanded
  const [expandedSection, setExpandedSection] = React.useState(null);
/**
   * Toggles the expanded state of a section
   * @param {string} sectionNumber - The number of the section to toggle
   */
  const handleToggle = (sectionNumber) => {
    setExpandedSection(expandedSection === sectionNumber ? null : sectionNumber);
  };
  
  // Data for organizational sections
  const sections = [
    {
      number: "1",
      title: "Board (Oversight)",
      details: (
        <>
          The Board ensures the organization remains well-managed, fiscally sound, and adheres to its mission.
          <br />
          <span className="org-key-responsibilities">Key responsibilities include:</span>
          <br />
          Duty of Care: Informed planning and decision-making.
          <br />
          Duty of Loyalty: Prioritizing organizational interests.
          <br />
          Duty of Obedience: Compliance with all legal and ethical standards.
          {expandedSection === "1" && (
            <>
              <br />
              <span className="org-key-responsibilities">Board Roles:</span>
              <br />
              Sets organizational direction and monitors progress.
              <br />
              Manages budgeting, expenditure, and financial audits.
              <br />
              Oversees meetings, audits, and legal compliance.
              <br />
              Leads new initiatives and public relations.
              <br />
              Focuses on curriculum and external relationships.
            </>
          )}
          <p className="org-link" onClick={() => handleToggle("1")}>
            {expandedSection === "1" ? "Show Less" : "Know More"}
          </p>
        </>
      ),
    },
    {
      number: "2",
      title: "Advisory Committees (Represent)",
      details: (
        <>
          These committees support the organization's mission and ensure parents, kids, and volunteers' voices are heard.
          <br />
          <span className="org-key-responsibilities">Key responsibilities include:</span>
          <br />
          Managing admissions and finances.
          <br />
          Developing supplemental learning materials.
          <br />
          {expandedSection === "2" && (
            <>
              <br />
              Gathering feedback to identify gaps and improve processes.
            </>
          )}
          <p className="org-link" onClick={() => handleToggle("2")}>
            {expandedSection === "2" ? "Show Less" : "Know More"}
          </p>
        </>
      ),
    },
    {
      number: "3",
      title: "Academic and Operations Committees",
      details: (
        <>
          This group ensures academic goals are achieved through:
          <br />
          Duty of Excellence: Delivering a 32-week academic plan.
          <br />
          Duty of Communication: Regular updates with parents, teachers, and students.
          <br />
          Duty of Evaluation: Fair and transparent student assessments.
        </>
      ),
    },
  ];

  return (
    <div className="org-outer-wrapper">
      <div className="org-wrapper">
        {/* Section Title */}
        <h2 className="org-title">
          Organizational <span className="org-title-highlight">Structure</span>
        </h2>

        {sections.map((section, index) => (
          <div key={index}>
            <div className="org-row">
              

              <div className="org-title-column">{section.title}</div>

              <div className="org-details-column">{section.details}</div>
            </div>
              {/* Arrow Separator (except for last section) */}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganizationalStructure;
