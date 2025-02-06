import { Header } from "./HomeHeader.jsx";
import image1 from './assets/homeFirstImg.jpg';
import { AdmissionColImages } from './AboutUs.jsx';
import { admissionImagesWithDetails } from "./cardDetails.js";
import HomeHeader from "./HomeHeader.jsx";
import { FooterSection } from "./App.jsx";
import { AcedemicCalunder } from './ParentsSection.jsx'
import { libraryInformation } from './cardDetails.js';
import CurriculamOverview from './CurriculamOverview.jsx';
import { ADVANCE_LEVEL } from './cardDetails.js';
import { INTERMEDIATE_LEVEL } from './cardDetails.js';
import { BASIC_LEVEL } from './cardDetails.js';
import { AssestmentSystemPoints } from './cardDetails.js';
import { classSchedulePoints } from './cardDetails.js';
import { assesMentTable } from './cardDetails.js';
import { useEffect } from "react";
import dott from './assets/dott.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Academics Component
 * 
 * Main component for the Academics page showing:
 * - Curriculum structure
 * - Class schedules
 * - Library information
 * - Assessment system
 * - Teacher volunteers
 * - Academic calendar
 * 
 * Uses AOS for scroll animations and maintains consistent page structure
 */
function Academics() {
  // Initialize AOS animations and reset scroll position
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
      <Header headVal={'Academics'} />
      
      {/* Curriculum Section */}
      <div className="container text-dark mt-5 curriculam-container mb-5">
        <h2 className='text-center mb-3' data-aos="fade-up"><b>Curriculum<span className='web-color'> overview</span></b></h2>
        <CurriculamOverview head={'BASIC LEVEL'} curriculamDetail={BASIC_LEVEL} />
        <CurriculamOverview head={'INTERMEDIATE LEVEL'} curriculamDetail={INTERMEDIATE_LEVEL} />
        <CurriculamOverview head={'ADVANCE LEVEL'} curriculamDetail={ADVANCE_LEVEL} />
      </div>

      {/* Class Schedule Section */}
      <div className="container text-dark  py-5">
        <h2 className="text-center mb-4" data-aos="fade-up"><b>Class <span className="web-color">Schedule</span></b></h2>
        {classSchedulePoints.map((item, index) => {
          if (typeof item === "object" && item.Details) {
            return (
              <ul key={index} data-aos="fade-up">
                {item.Details.map((detail, i) => (
                  <li key={i} id="cls-shedule" className="list-item-spacing">{detail}</li>
                ))}
              </ul>
            );
          } else {
            return <p key={index} data-aos="fade-up">{item}</p>;
          }
        })}

        {/* Library Information Section */}
        <h2 className='text-center mt-5 mb-5' data-aos="fade-up"><b>Library<span className='web-color'> information</span></b></h2>
        {libraryInformation.map((item, index) => (
          <LibraryInformationFunction
            head={item.heading}
            subHead={item.subHeading}
            point={item.points}
          />
        ))}

        {/* Assessment System Section */}
        <h2 className='text-center mt-5 mb-5' data-aos="fade-up"><b>Assessment<span className='web-color'> system</span></b></h2>
        <h5 data-aos="fade-up"><b>Assessment for RTS is based on ITA guidelines. The ITS guidelines for current ITA students are as follows</b></h5>
        <div className="row d-flex flex-direction-column align-items-center  " data-aos="fade-up">
          <div className="col-lg-6 col-md-12  ">
            <p className="text-center ">
              {AssestmentSystemPoints.map((item, index) => (
                <AssestMentSystemFunction key={index} point={item} />
              ))}
            </p>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <img
              src={image1}
              alt="Accredited"
              className="img-fluid"
              style={{
                maxWidth: '50%',
                maxWidth: ' 61%',
                maxHeight: '33%',
                marginLeft: '11%',
                marginTop: '12px',
              }}
            />
          </div>
        </div>

        {/* Assessment Table */}
        {assesMentTable && assesMentTable.map((item, index) => (
          <AssesmentTableFunction
            key={index}
            headVal={item.heading || []}
            firstCol={item.firstCol || []}
            secondCol={item.secondCol || []}
          />
        ))}

        {/* Teacher Volunteers Section */}
        <div className="text-center mt-5">
          <h2 data-aos="fade-up" className="text-center pt-5"><b>Teacher<span className='web-color'> Volunteers</span></b></h2>
        </div>
        <div className="row ">
          {admissionImagesWithDetails.map((item, index) => (
            <AdmissionColImages key={index} personImage={item.imagePath} personName={item.name} personDetails={item.details} fullDetails={item.fullDetails} />
          ))}
        </div>
        {/* Acedemic Calender section */}
        <AcedemicCalunder />
      </div>
      <FooterSection />
    </div>
  )
}

/**
 * Assessment System Point Component
 * 
 * Renders individual assessment system points with custom bullet
 * @param {string} point - The text content for the assessment point
 */
function AssestMentSystemFunction({ point }) {
  return (
    <>
      <p className="text-justify "><img src={dott} id="dott" />{point}</p>
    </>
  )
}

/**
 * Assessment Table Component
 * 
 * Creates a responsive table for displaying assessment criteria
 * @param {string[]} headVal - Array of table headings
 * @param {string[]} firstCol - Data for first column
 * @param {string[]} secondCol - Data for second column
 */
function AssesmentTableFunction({ headVal = [], firstCol = [], secondCol = [] }) {
  return (
    <div className="table-responsive m-5" data-aos="fade-up">
      <table
        className="schedule-table"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr>
            {headVal.map((item, index) => (
              <th
                key={index}
                className="table-head-style"
                style={{
                  border: "1px solid #F9E1E0",
                  padding: "10px",
                  backgroundColor: "#f4f4f4",
                  textAlign: "center",
                  width: `${100 / headVal.length}%`,
                }}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {firstCol.length > 0 &&
            secondCol.length > 0 &&
            firstCol.map((data, index) => (
              <tr key={index}>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    textAlign: "left",
                    width: "50%",
                  }}
                >
                  {data}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    textAlign: "left",
                    width: "50%",
                  }}
                >
                  {secondCol[index] || ""}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Library Information Component
 * 
 * Displays library information sections with headings and bullet points
 * @param {string} head - Main heading for the section
 * @param {string} subHead - Subheading text
 * @param {string[]} point - Array of information points
 */
function LibraryInformationFunction({ head, subHead, point }) {
  return (
    <div className="m-3" data-aos="fade-up">
      <h4 className="text-center mb-4" style={{ fontFamily: 'Outfit' }}>
        <b id="head-acad">{head}</b>
      </h4>
      <p id="sub-heading">{subHead}</p>
      {point.map((content, idx) => (
        <p key={idx} className="m-auto dott-margin"><img src={dott} id="dott" /> {content}</p>
      ))}
    </div>
  )
}

export default Academics;