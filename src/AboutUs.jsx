import React, { useEffect, useState } from "react";
import { imageCardValues } from "./cardDetails.js";  // Import card values for accreditation image
import { Header } from './HomeHeader.jsx';  // Header component for displaying main heading
import HomeHeader from './HomeHeader';   
import { FooterSection } from "./App.jsx";
import Timeline from './TimeLine.jsx'; // Timeline component for school history
import AOS from 'aos'; // Library for animations on scroll
import 'aos/dist/aos.css'; // AOS CSS for styling animations
import OrganizationalStructure from "./OrganizationalStructure.jsx"; // Org structure section
import PoliciesAndGuidelines from "./PoliciesAndGuideliness.jsx"; // Policies section
import PrinciplesAndGoals from "./PrinciplesAndGoals.jsx"; // Principles & Goals section
import MissionVissionValues from "./MissionVissionValues.jsx"; // Mission, Vision, and Values section

// AboutUs Component
function AboutUs() {
  // useEffect hook for initializing AOS animation and scroll behavior
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for animations
      easing: 'ease-out', // Easing function for animation
      once: false, // Ensures animations happen every time the element enters the viewport
    });
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []); // Empty dependency array to run effect only once on component mount



  return (
    <div className="about-us">
      {/* HomeHeader and Header sections */}
      <HomeHeader></HomeHeader>
      <Header headVal={'About Us'} />
       {/* Main Content Section */}
      <div className="container mt-3 card-container mt-5 mb-5" data-aos="fade-up">
        <div className="align-items-center">
          <div className="row g-3 card-row about-us2">
             {/* Timeline component for the school history */}
            <Timeline />
          </div>
        </div>
        {/* Mission, Vision, and Values Section */}
        <MissionVissionValues/>
      </div>
      {/* Accreditation and Affiliation Section with Images */}
      <div className="container-fluid mt-6 p-3 text-dark fluid-section mb-5 margin-spaces ">
        <h2 className="text-center mb-5 mt-5" data-aos="fade-up"><b>Accreditation and <span className="web-color"> Affiliation</span></b></h2>
        <div className="container" data-aos="fade-up">
          <div className="row mb-5">
             {/* Mapping over imageCardValues to display accreditation images */}
            {imageCardValues.map((item, index) => (
              <ImageCol imageLink={item} />
            ))}
          </div>
        </div>
      </div>
      {/* PrinciplesAndGoals, OrganizationalStructure ,PoliciesAndGuidelines,Conclusion  Section */}
      <PrinciplesAndGoals/>
      <OrganizationalStructure/>
      <PoliciesAndGuidelines/>
      <Conclusion />
      {/* Footer section */}
      <FooterSection />
    </div>
  );
};
// ImageCol Component for displaying images in Accreditation Section
function ImageCol({ imageLink }) {
  return (
    <div className="col-xl-3 col-sm-6 col-md-6 d-flex flex-column align-items-center">
      <img
        src={imageLink}
        alt="Accredited"
        style={{ width: '200px', height: 'auto' }}
      />
      <h5 className="text-center mt-3">International Tamil Academy</h5>
    </div>
  );
}
/**
 * AdmissionColImages Component for displaying faculty or individual information
 * 
 * This component displays a person's image, name, and details.
 * It also includes a "Read More" button to expand/collapse additional details.
 * 
 * @param {string} personImage - The URL of the person's image.
 * @param {string} personName - The name of the person.
 * @param {string} personDetails - Short details about the person.
 * @param {string} fullDetails - Additional details that can be expanded/collapsed.
 */
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
          objectFit: 'cover',
        }}
      />

      <h3 className="text-center web-color mt-3"><b>{personName}</b></h3>
      <p className="text-center">{personDetails}</p>

     {/* If full details are provided, show them with toggle functionality */}
      {fullDetails && (
        <>
          <p className="text-center">
            {isExpanded ? fullDetails : `${fullDetails.substring(0, 70)}...`}
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
// Conclusion Component
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
    marginTop: '3rem',
    marginBottom:'3rem',
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