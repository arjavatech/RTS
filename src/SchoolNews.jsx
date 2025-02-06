import React from "react";
import "./styles/Organisation.css";

function SchoolNews() {
  const [expandedSection, setExpandedSection] = React.useState(null);

  const handleToggle = (sectionNumber) => {
    setExpandedSection(expandedSection === sectionNumber ? null : sectionNumber);
  };

  const sections = [
    {
      number: "1",
      dateValue: "1st November 2024",
      title: "School Reopening Announcement",
      details: (
        <>
          <p id="main-cont-id"> "We're excited to welcome our students back! The school reopens on November 25th for the new term."</p>
        </>
      ),
    },
    {
      number: "2",
      dateValue: "15th October 2024",
      title: "Parent-Teacher Meeting",
      details: (
        <>
          <p id="main-cont-id">Join us for the Parent-Teacher Meeting on October 20th to discuss student progress.</p>
        </>
      ),
    },
    {
      number: "3",
      title: "Teacher's Day Celebration",
      dateValue: "5th September 2024",
      details: (
        <>
         <p id="main-cont-id">We celebrated Teacher's Day to honor and appreciate the hard work of our educators.</p>
        </>
      ),
    },
  ];

  return (
    <div className="org-outer-wrapper">
      <div className="org-wrapper">
        <h2 className="org-title">
          School <span className="org-title-highlight">News</span>
        </h2>

        {sections.map((section, index) => (
          <div key={index}>
            <div className="org-row">
              <div className="org-number-column">
                <div className="org-number-circle">{section.number}</div>
              </div>

              <div className="org-title-column">{section.title}
                <br></br>
               <p className="dates">{section.dateValue}</p></div>

              <div className="org-details-column">{section.details}</div>
            </div>
            {index < sections.length - 1 && (
                
              <div className="org-arrow-container">
              
                <div className="org-arrow-line"></div>
                <div className="org-arrow-head"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchoolNews;
