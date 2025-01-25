import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cardDetails from "./cardDetails.js";
import { imageWithContent } from './cardDetails.js';
import { imageCardValues } from "./cardDetails.js";
import { admissionImagesWithDetails } from "./cardDetails.js";
import { photoGallary } from "./cardDetails.js";
import { Header } from './HomeHeader.jsx';
import HomeHeader from './HomeHeader';
import { FooterSection } from "./App.jsx";
import imag1 from './assets/hoverImage.jpeg';
import dott from './assets/dott.png';
import Timeline from './TimeLine.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VolunteerCommitmentIcon from "./assets/Volunteer Commitment.png";
import FinancialIcon from "./assets/Financial Policies.png";
import EthicsIcon from "./assets/Ethical Standards.png";
import LeadershipIcon from "./assets/Leadership Tenure.png";
import AmendmentsIcon from "./assets/Amendments and Accountability.png";
import BackgroundCheckIcon from "./assets/Background Checks.png";
import OrganizationalStructure from "./OrganizationalStructure.jsx";
import PoliciesAndGuidelines from "./PoliciesAndGuideliness.jsx";


function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: false,
    });
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="about-us">
      <HomeHeader></HomeHeader>
      <Header headVal={'About Us'} />
      <div className="container mt-3 card-container mt-5 mb-5" data-aos="fade-up">
        <div className="align-items-center">
          <div className="row g-3 card-row about-us2">
            {/* {cardDetails.map((item, index) => (
                            <Card
                                heading={item.heading}
                                subHeading={item.subHead}
                                content={item.content}
                                index={index}
                                styleContent={index % 2 === 0 ? true : false}
                            />
                        ))} */}
            <Timeline />
          </div>
        </div>
        <RowColCard />
      </div>

      <div className="container-fluid mt-5 p-3 text-dark fluid-section mb-5">
        <h2 className="text-center mb-5 mt-4" data-aos="fade-up"><b>Accreditation and <span className="web-color"> Affiliation</span></b></h2>
        <div className="container" data-aos="fade-up">
          <div className="row">
            {imageCardValues.map((item, index) => (
              <ImageCol imageLink={item} />
            ))}
          </div>
        </div>
      </div>
      <PrinciplesAndGoals />
     <OrganizationalStructure/>
     <PoliciesAndGuidelines/>
      <Conclusion />
      <FooterSection />
    </div>
  );
};


function Card({ heading, subHeading, content, index, styleContent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="col-xl-3 col-md-3">
        <div
          className="card card-styles p-2"
          style={styleContent || hovered ? { backgroundColor: "white" } : { backgroundColor: "#D4302B" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {
            hovered ? (
              <img
                src={imag1}
                alt=""
                className="cards-images"
                //styles added(kalai)
                style={{ width: '100%', objectFit: 'cover' }}
              />
            ) :
              (
                <div className={index == 0 ? 'm-auto' : ''}>
                  <h2 style={styleContent ? { color: "#D4302B" } : { color: "white" }} className="text-center"><b>{heading}</b></h2>
                  <h5 style={styleContent ? { color: "black" } : { color: "white" }}><b>{subHeading}</b></h5>
                  <p style={styleContent ? { color: "black" } : { color: "white" }}>{content}</p>
                </div>
              )
          }
        </div>
      </div>

      {(index === 2 || index === 5) ? (
        index === 2 ? (
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <p className="left-arrow"></p>
            </div>
          </div>
        ) : ""
      ) : (
        <div className="col-xl-1 col-md-1 col-sm-6">
          {index === 3 || index === 4 ? (
            <p className="left-dashed-arrow"></p>
          ) : (
            <p className="dashed-arrow"></p>
          )}
        </div>
      )}
    </>
  );
}

function RowColCard() {
  return (
    <div className="text-dark container image-with-text-container" data-aos="fade-up">
      <h1 className="text-center mt-5 mb-3">
        <b>Our <span className="web-color"> Core Area Of Focus, Our objectives</span></b>
      </h1>
      <div className="row">
        {imageWithContent.map((item, index) => (
          <CardCol imgVal={item.imageValue} cardHead={item.headValue} subHead={item.subHead}
            cardText={item.contentValue} isVal={index % 2 === 0 ? true : false} />
        ))}
      </div>
    </div>
  );
}


function CardCol({ imgVal, cardHead, subHead, cardText, isVal }) {
  return (
    <>
      {isVal ? (
        <div className="row image-with-text-container g-3 d-flex flex-row align-items-center">
          <div className="col-sm-6 col-md-4 d-flex flex-column">
            <img
              src={imgVal}
              alt="Illustration"
              className="img-fluid rounded"
              style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>

          <div className="col-sm-6 col-md-8 align-items-center ">
            <h5 className="web-color text-center"><b>{cardHead}</b></h5>
            <div>
              {subHead && <h6><b>{subHead}</b></h6>} {/* Use subHead instead of item.subHead */}
              {cardText.map((content, idx) => (  /* Use cardText instead of item.contentValue */
                <p key={idx} className="m-auto"><img src={dott} id="dott" /> {content}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="row d-flex flex-row align-items-center">
          <div className="col-sm-6 col-md-8 d-md-block d-xl-block d-sm-block d-none">
            <h5 className="web-color text-center"><b>{cardHead}</b></h5>
            {subHead && <h3>{subHead}</h3>} {/* Use subHead instead of item.subHead */}
            {cardText.map((content, idx) => (
              <p key={idx} className="m-auto"><img src={dott} id="dott" /> {content}</p>
            ))}
          </div>

          <div className="col-sm-6 col-md-4 d-flex flex-column d-sm-block d-md-block d-xl-block d-none">
            <img
              src={imgVal}
              alt="Illustration"
              className="img-fluid rounded"
              style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>
          {/* Mobile view  */}
          <div className="col-12 d-md-none d-xl-none d-sm-none d-block">
            <img
              src={imgVal}
              alt="Illustration"
              className="img-fluid rounded"
              style={{ width: '300%', maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>

          <div className="col-12 d-flex flex-column d-md-none d-xl-none d-sm-none d-block">
            <h5 className="web-color text-center"><b>{cardHead}</b></h5>
            {subHead && <h3>{subHead}</h3>} {/* Use subHead instead of item.subHead */}
            {cardText.map((content, idx) => (  /* Use cardText instead of item.contentValue */
              <p key={idx} className="m-auto"><img src={dott} id="dott" /> {content}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}


function ImageCol({ imageLink }) {
  return (
    <div className="col-xl-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
      <img
        src={imageLink}
        alt="Accredited"
        style={{ width: '200px', height: 'auto' }}
      />
      <h4 className="text-center mt-3">Accredited</h4>
    </div>
  );
}


export function AdmissionColImages({ personImage, personName, personDetails, fullDetails }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded view for additional details
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col-xl-4 col-sm-6 d-flex flex-column align-items-center mt-5" data-aos="fade-up">
      <img
        src={personImage}
        alt={personName}
        className="rounded-circle"
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'cover', // Ensure image fits in the circle
        }}
      />

      <h3 className="text-center web-color mt-3"><b>{personName}</b></h3>
      <p className="text-center">{personDetails}</p>

      {/* Check if additional full details are available */}
      {fullDetails && (
        <>
          <p className="text-center">
            {isExpanded ? fullDetails : `${fullDetails.substring(0, 80)}...`}
          </p>
          <div className="text-center">
            <button
              className="btn read-more-btn"
              onClick={toggleContent}
            >
              <b>{isExpanded ? 'Show Less' : 'Read More'}</b>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// import React, { useState, useEffect } from "react";

export function PhotoGallaryFun({ pictures = [], idVal }) {
  const [chunkSize, setChunkSize] = useState(4); // Default to laptop view chunk size
  const [zoomedImage, setZoomedImage] = useState(null); // Track the zoomed image

  // Dynamically update chunk size based on screen width
  useEffect(() => {
    const updateChunkSize = () => {
      if (window.innerWidth < 768) {
        setChunkSize(1); // Mobile view: 1 card per row
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setChunkSize(3); // Tablet view: 3 cards per row
      } else {
        setChunkSize(4); // Laptop/Desktop view: 4 cards per row
      }
    };

    updateChunkSize(); // Set chunk size initially
    window.addEventListener("resize", updateChunkSize);

    return () => {
      window.removeEventListener("resize", updateChunkSize);
    };
  }, []);

  // Split pictures into chunks
  const chunkedPictures = [];
  for (let i = 0; i < pictures.length; i += chunkSize) {
    chunkedPictures.push(pictures.slice(i, i + chunkSize));
  }

  const handleImageClick = (picture) => {
    setZoomedImage(picture);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <>
      <div id={idVal} className="carousel slide mb-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedPictures.map((chunk, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">
                {chunk.map((picture, picIndex) => (
                  <div
                    key={picIndex}
                    className={`col-lg-${12 / chunkSize} col-md-${12 / chunkSize} col-sm-12 d-flex justify-content-center`}
                  >
                    <div
                      style={{
                        width: "100%",
                        paddingTop: "100%",
                        position: "relative",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={picture}
                        alt={`Slide ${index + 1} - Image ${picIndex + 1}`}
                        className="photo-gallary-image"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageClick(picture)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${idVal}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${idVal}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {zoomedImage && (
        <div
          className="zoomed-image-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
          }}
          onClick={handleCloseZoom}
        >
          <img
            src={zoomedImage}
            alt="Zoomed In"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </>
  );
}

function PrinciplesAndGoals() {
  return (
    <div style={{ padding: "2px", margin: "0 auto", maxWidth: "800px", textAlign: "center" }} data-aos="fade-up" >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Allows the sections to stack on smaller screens
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* Principles Section */}
        <div style={{ flex: "1 1 300px" }}> {/* Sets flexible width with a minimum */}
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Principles</h2>
          <ul style={{ textAlign: "left", listStyleType: "disc", margin: "1px", lineHeight: "1.6" }}>
            <li>Autonomous and trustworthy organizational structure.</li>
            <li>Well-defined roles and accountability.</li>
            <li>Inclusive representation from all parents.</li>
            <li>Commitment to continuous improvement and adaptability.</li>
            <li>Organizational Structure.</li>
          </ul>
        </div>
        {/* Goals Section */}
        <div style={{ flex: "1 1 300px" }}> {/* Same responsive behavior for Goals */}
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Goals</h2>
          <ul style={{ textAlign: "left", listStyleType: "disc", margin: "1px", lineHeight: "1.6" }}>
            <li>Create an engaging, consistent learning environment.</li>
            <li>Offer long-term learning opportunities for students to grow their Tamil language skills and cultural understanding. </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


// function OrganizationalStructure() {
//   const styles = {
//     outerWrapper: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minHeight: "100vh",
//       padding: "0 20px",
//     },
//     wrapper: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "40px",
//       backgroundColor: "#fff",
//       borderRadius: "12px",
//       maxWidth: "1093px",
//       width: "100%",
//       padding: "20px",
//       boxSizing: "border-box",
//     },
//     sectionTitle: {
//       textAlign: "center",
//       fontSize: "35px",
//       fontFamily: "Outfit",
//       fontWeight: "bold",
//       color: "#333",
//       marginTop: "20px",
//     },
//     titleHighlight: {
//       color: "#e63946",
//       fontWeight: "bold",
//     },
//     row: {
//       display: "flex",
//       alignItems: "anchor-center",
//       gap: "78px",
//       position: "relative",
//     },
//     numberColumn: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       flex: "0 0 60px",
//       paddingTop: "3px",
//       position: "relative",

//     },
//     numberCircle: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#D4302B",
//       color: "#fff",
//       borderRadius: "50%",
//       width: "70px",
//       height: "70px",
//       fontSize: "30px",
//       fontWeight: "bold",
//       position: "relative",
//       zIndex: "2",
//     },
//     arrowContainer: {
//       display: "flex",

//       position: "relative",
//       width: "100%",
//       marginTop: "-1rem",
//     },
//     arrowLine: {
//       marginTop: "2px",
//       height: "80px",
//       width: "2px",
//       backgroundColor: "transparent",
//       borderLeft: "2px dashed #f46565",
//       position: "relative",
//       left: "35px",
//     },
//     arrowHead: {
//       content: '""',
//       position: "absolute",
//       top: "77px",
//       left: "31px",
//       width: "0",
//       height: "0",
//       borderLeft: "6px solid transparent",
//       borderRight: "6px solid transparent",
//       borderTop: "6px solid #f46565",
//     },
//     titleColumn: {
//       flex: "1",
//       fontSize: "18px",
//       fontWeight: "bold",
//       color: "#333",
//       textAlign: "center",
//       padding: "10px",
//     },
//     detailsColumn: {
//       flex: "5",
//       padding: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       lineHeight: "1.6",
//       fontSize: "15px",
//       textAlign: "left",
//       fontFamily: "Outfit",
//     },
//     keyResponsibilities: {
//       color: "#e63946",
//       fontWeight: "bold",
//     },
//     link: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "10px",
//       color: "black",
//       textDecoration: "underline",
//       cursor: "pointer",

//     },
//     // Responsive styles
//     "@media (max-width: 768px)": {
//       row: {
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "10px", // Reduce the gap between elements for a cleaner layout
//       },
//       numberColumn: {
//         flexDirection: "row",
//         justifyContent: "center",
//         marginBottom: "10px", // Add spacing below the number
//       },
//       titleColumn: {
//         textAlign: "center",
//         padding: "5px 0", // Reduce padding for smaller screens
//       },
//       detailsColumn: {
//         fontSize: "14px", // Slightly smaller font for readability
//         padding: "15px", // Reduce padding for better fit
//         textAlign: "center", // Center text for smaller screens
//       },
//       arrowContainer: {
//         display: "none", // Hide the arrow container on mobile
//       },
//     },
//   };

//   const [expandedSection, setExpandedSection] = React.useState(null);

//   const handleToggle = (sectionNumber) => {
//     setExpandedSection(expandedSection === sectionNumber ? null : sectionNumber);
//   };

//   const sections = [
//     {
//       number: "1",
//       title: "Board (Oversight)",
//       details: (
//         <>
//           The Board ensures the organization remains well-managed, fiscally sound, and adheres to its mission.
//           <br />
//           <span style={styles.keyResponsibilities}>Key responsibilities include:</span>
//           <br />
//           Duty of Care: Informed planning and decision-making.
//           <br />
//           Duty of Loyalty: Prioritizing organizational interests.
//           <br />
//           Duty of Obedience: Compliance with all legal and ethical standards.
//           {expandedSection === "1" && (
//             <>
//               <br />
//               <span style={styles.keyResponsibilities}>Board Roles:</span>
//               <br />
//               Sets organizational direction and monitors progress.
//               <br />
//               Manages budgeting, expenditure, and financial audits.
//               <br />
//               Oversees meetings, audits, and legal compliance.
//               <br />
//               Leads new initiatives and public relations.
//               <br />
//               Focuses on curriculum and external relationships.
//             </>
//           )}
//           <span style={styles.link} onClick={() => handleToggle("1")}>
//             {expandedSection === "1" ? "Show Less" : "Know More"}
//           </span>
//         </>
//       ),
//     },
//     {
//       number: "2",
//       title: "Advisory Committees (Represent)",
//       details: (
//         <>
//           These committees support the organization's mission and ensure parents, kids, and volunteers' voices are heard.
//           <br />
//           <span style={styles.keyResponsibilities}>Key responsibilities include:</span>
//           <br />
//           Managing admissions and finances.
//           <br />
//           Developing supplemental learning materials.
//           <br />
//           {expandedSection === "2" && (
//             <>
//               <br />
//               Gathering feedback to identify gaps and improve processes.
//             </>
//           )}
//           <span style={styles.link} onClick={() => handleToggle("2")}>
//             {expandedSection === "2" ? "Show Less" : "Know More"}
//           </span>
//         </>
//       ),
//     },
//     {
//       number: "3",
//       title: "Academic and Operations Committees",
//       details: (
//         <>
//           This group ensures academic goals are achieved through:
//           <br />
//           Duty of Excellence: Delivering a 32-week academic plan.
//           <br />
//           Duty of Communication: Regular updates with parents, teachers, and students.
//           <br />
//           Duty of Evaluation: Fair and transparent student assessments.
//         </>
//       ),
//     },
//   ];

//   return (
//     <div style={styles.outerWrapper} data-aos="fade-up">
//       <div style={styles.wrapper}>
//         <h2 style={styles.sectionTitle}>
//           Organizational <span style={styles.titleHighlight}>Structure</span>
//         </h2>

//         {sections.map((section, index) => (
//           <>
//             <div key={index} style={styles.row}>
//               <div style={styles.numberColumn}>
//                 <div style={styles.numberCircle}>{section.number}</div>


//               </div>

//               <div style={styles.titleColumn}>{section.title}</div>

//               <div style={styles.detailsColumn}>{section.details}</div>
//             </div>
//             <div>
//               {index < sections.length - 1 && (
//                 <div style={styles.arrowContainer}>
//                   <div style={styles.arrowLine}></div>
//                   <div style={styles.arrowHead}></div>
//                 </div>
//               )}

//             </div>


//           </>
//         ))}
//       </div>
//     </div>
//   );
// }


// function PoliciesAndGuidelines() {
//   const styles = {
//     titleWrapper: {
//       textAlign: "center",
//       marginBottom: "40px",
//     },
//     title: {
//       fontSize: "32px",
//       fontWeight: "bold",
//       fontfamily: "outfit",
//     },
//     titleGuidelines: {
//       color: "#e63946",
//     },
//     wrapper: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "20px",
//       alignItems: "center",
//       padding: "20px",
//       backgroundColor: "rgb(249, 220, 225)",
//     },
//     cardContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "10px",
//       alignItems: "center",
//     },
    
//     card: {
//       textAlign: "center",
//       padding: "15px",
//       maxWidth: "400px", // Ensure the cards don't stretch too wide
//       width: "100%",
//       wordWrap: "break-word", // Ensure long text breaks and fits
//     },
//     icon: {
//       width: "80px",
//       marginBottom: "15px",
//     },
//     heading: {
//       color: "#e63946",
//       fontSize: "18px",
//       fontWeight: "bold",
//       fontfamily: "outfit",
//       marginBottom: "10px",
//     },
//     list: {
//       listStyleType: "disc",
//       textAlign: "left",
//       paddingLeft: "20px",
//       fontSize: "16px",
//       fontfamily: "outfit",
//       lineHeight: "1.6",
//       color: "#333",
//     },
//   };

//   const policies = [
//     {
//       icon: VolunteerCommitmentIcon,
//       title: "Volunteer Commitment",
//       items: [
//         "Each family contributes 20 volunteer hours annually.",
//         "Failure to meet this requirement may affect admission for the following year.",
//       ],
//     },
//     {
//       icon: FinancialIcon,
//       title: "Financial Policies",
//       items: [
//         "Matching funds from corporations are utilized for non-operating expenses. ",
//         "Annual budgets prioritize transparency and fiscal responsibility.",
//       ],
//     },
//     {
//       icon: EthicsIcon,
//       title: "Ethical Standards",
//       items: [
//         "Leaders and members must demonstrate high commitment, collaboration, and ethics.",
//         "Conflicts are resolved transparently, with the Board intervening if necessary.",
//       ],
//     },
//     {
//       icon: LeadershipIcon,
//       title: "Leadership Tenure",
//       items: [
//         "Committee members: 2 years.",
//         "Committee leads and academic principals: 2 years.",
//         "Board members: 3 years.",
//       ],
//     },
//     {
//       icon: AmendmentsIcon,
//       title: "Amendments and Accountability",
//       items: [
//         "Any donor can propose amendments to by-laws.",
//         "The Board maintains ultimate accountability for legal, financial, and operational matters.",
//       ],
//     },
//     {
//       icon: BackgroundCheckIcon,
//       title: "Background Checks",
//       items: [
//         "Required for all volunteers participating in on-premises or contact-based roles.",
//       ],
//     },
//   ];

//   return (
//     <div style={styles.wrapper} data-aos="fade-up">
//       {/* Title Section */}
//       <div style={styles.titleWrapper}>
//         <h1 style={styles.title}>
//           Policies <span style={styles.titleGuidelines}>and Guidelines</span>
//         </h1>
//       </div>

//       {/* Cards Section */}
//       <div style={styles.cardContainer}>
//         {policies.map((policy, index) => (
//           <div key={index} style={styles.card}>
//             <img src={policy.icon} alt={policy.title} style={styles.icon} />
//             <h3 style={styles.heading}>{policy.title}</h3>
//             <ul style={styles.list}>
//               {policy.items.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



function Conclusion() {
  return (
    <div style={styles.container} data-aos="fade-up">
      <h2 style={styles.title}>Conclusion</h2>
      <p style={styles.text}>
        RTS is a 100% volunteer-driven organization dedicated to preserving and teaching Tamil language and culture. By fostering an inclusive and collaborative environment, <br />RTS ensures that every child receives a meaningful and enriching learning experience.
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '40px',
    marginBottom:'20px',
  },
  title: {
    color: '#FF0000', // Red color for the title
    fontWeight: 'bold',
  },
  text: {
    color: '#000', // Black color for the text
    fontSize: '16px',
    lineHeight: '1.5',
  },
};


export default AboutUs;