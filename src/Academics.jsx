import { Header } from "./HomeHeader.jsx";
import image1 from './assets/classroom.jpg';
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
// import { stringify } from "uuid";
import { assesMentTable } from './cardDetails.js';
import { useEffect } from "react";
import dott from './assets/dott.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Academics(){
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
      <div className="container text-dark mt-5 curriculam-container">
        <h2 className='text-center mb-3' data-aos="fade-up"><b>Curriculum<span className='web-color'> overview</span></b></h2>
        {/* <p className='text-center'>At Redmond Tamil School, we are dedicated to preserving and promoting Tamil language and culture through comprehensive and engaging academic programs. Our curriculum is designed to nurture proficiency in reading, writing, and speaking Tamil, while also fostering an appreciation for Tamil culture, literature, history, and traditions. </p>
        <p className='text-center'>we create a dynamic learning environment where students of all ages can connect, grow, and develop a lasting appreciation for Tamil heritage.</p>
        <p className='text-center mb-5'>As an affiliated institution of the International Tamil Academy (ITA), formerly known as the California Tamil Academy (CTA), RTS provides a curriculum that caters to students from diverse backgrounds in a welcoming and inclusive atmosphere.</p> */}
        <CurriculamOverview head={'BASIC LEVEL'} curriculamDetail={BASIC_LEVEL} />
        <CurriculamOverview head={'INTERMEDIATE LEVEL'} curriculamDetail={INTERMEDIATE_LEVEL} />
        <CurriculamOverview head={'ADVANCE LEVEL'} curriculamDetail={ADVANCE_LEVEL} />
      </div>

      {/* <ScheduleTable /> */}

      <div className="container text-dark">
    <h2 className="text-center mb-3" data-aos="fade-up"><b>Class <span className="web-color">Schedule</span></b></h2>
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
        // Render plain text items
        return <p key={index} data-aos="fade-up">{item}</p>;
      }
    })}
        <h2 className='text-center mt-5 mb-4' data-aos="fade-up"><b>Library<span className='web-color'> information</span></b></h2>
        {libraryInformation.map((item, index) => (
          <LibraryInformationFunction
            head={item.heading}
            subHead={item.subHeading}
            point={item.points}
          />
        ))}
        <h2 className='text-center mt-5 mb-5' data-aos="fade-up"><b>Assessment<span className='web-color'> system</span></b></h2>
        <h5 data-aos="fade-up"><b>Assessment for RTS is based on ITA guidelines. The ITS guidelines for current ITA students are as follows</b></h5>
        <div className="row d-flex flex-direction-column align-items-center  " data-aos="fade-up">
          <div className="col-lg-6 col-md-12  ">
            <p className="text-center ">
              {AssestmentSystemPoints.map((item, index) => (
                <AssestMentSystemFunction key={index}
                  point={item}
                />
              ))}
            </p>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <img
              src={image1}
              alt="Accredited"
              className="img-fluid"
              style={{ maxWidth: '50%', maxHeight: '50%',marginLeft:'20%' }}
            />
          </div>
        </div>

        {/* TABLE */}
        {assesMentTable && assesMentTable.map((item, index) => (
          <AssesmentTableFunction
            key={index}
            headVal={item.heading || []}  // Default to empty array if undefined
            firstCol={item.firstCol || []}  // Default to empty array if undefined
            secondCol={item.secondCol || []}  // Default to empty array if undefined
          />
        ))}

        <div className="text-center mt-2 mb-3">
          <h2 data-aos="fade-up"><b>Teacher<span className='web-color'> Volunteers</span></b></h2>
        </div>
        <div className="row">
          {admissionImagesWithDetails.map((item, index) => (
            <AdmissionColImages key={index} personImage={item.imagePath} personName={item.name} personDetails={item.details} fullDetails={item.fullDetails} />
          ))}
        </div>
        <AcedemicCalunder />
        {/* <div className="text-center m-4">
          <h2><b>Academic<span className='web-color'> calendar</span></b></h2>
        </div>
        <div className="d-flex flex-column align-items-center mb-3 mb-5">
          <iframe src="https://www.catamilacademy.org/RedmondTamilSchoolSchedule.html" className='iframe-style' height="400" width="900" title="Iframe Example" style={{ backgroundColor: 'gray', borderRadius: '10px' }}></iframe>
        </div> */}

      </div>
      <FooterSection />
    </div>
  )
}

function ClassSchedule({ points, text }) {
  return (
    <>
      {points.map((point, index) => (
        <p key={index}><img src={dott} id="dott"/> {point}</p>
      ))}
      <p>{text}</p>
    </>
  )
}

function AssestMentSystemFunction({ point }) {
  return (
    <>
      <p className="text-justify "><img src={dott} id="dott"/>{point}</p>
    </>
  )
}


function AssesmentTableFunction({ headVal = [], firstCol = [], secondCol = [] }) {
  return (
    <div className="table-responsive m-5" data-aos="fade-up">
      <table
        className="schedule-table"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed", // Ensures equal column width
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
                  textAlign: "center", // Center-align the headings
                  width: `${100 / headVal.length}%`, // Equal width for each column
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
                    width: "50%", // Equal division for each column
                  }}
                >
                  {data}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    textAlign: "left",
                    width: "50%", // Equal division for each column
                  }}
                >
                  {secondCol[index] || ""} {/* Handle missing second column data */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}


const ScheduleTable = () => {
  const periods = ["Period 1", "Period 2", "Period 3", "Period 4"];
  const days = ["Monday", "Monday", "Monday", "Monday", "Monday", "Monday", "Monday"];

  return (
    <div className="schedule-container text-dark">
      <h1 className="m-2">
        <b>
          Class <span className="highlight">Schedules</span></b>
      </h1>
      <div className="table-responsive">
        <table className="schedule-table">
          <thead>
            <tr>
              <th></th>
              {periods.map((period, index) => (
                <th key={index} className="table-head-style">
                  {period.split(' ')[0]} <span className="web-color">{period.split(' ')[1]}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((day, rowIndex) => (
              <tr key={rowIndex}>
                <td>{day}</td>
                {periods.map((_, colIndex) => (
                  <td key={colIndex}>
                    <p>8:00-9:00</p>
                    <p>Tamil Basic</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function LibraryInformationFunction({ head, subHead, point }) {
  return (
    <div className="m-3" data-aos="fade-up">
      <h4 className="text-center mb-4" style={{ fontFamily:'Outfit'}}>
    <b id="head-acad">{head}</b>
</h4>
      <p id="sub-heading">{subHead}</p>
      {point.map((content, idx) => (
        <p key={idx} className="m-auto dott-margin"><img src={dott} id="dott"/> {content}</p>
      ))}
    </div>
  )
}
export default Academics;