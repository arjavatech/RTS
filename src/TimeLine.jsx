import React, { useState, useEffect } from "react";
import "./Timeline.css";
import img from "./assets/hoverImage.jpeg";

const Timeline = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [hoveredBoxes, setHoveredBoxes] = useState({});
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {

    const checkTouchDevice = () => {
      setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    };
    checkTouchDevice();

   
    window.addEventListener("resize", checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  const handleBoxClick = (index) => {
    if (isTouchDevice) {
      setActiveBox(activeBox === index ? null : index);
    }
  };

  const handleMouseEnter = (index) => {
    if (!isTouchDevice) {
      setHoveredBoxes((prev) => ({ ...prev, [index]: true }));
    }
  };

  const handleMouseLeave = (index) => {
    if (!isTouchDevice) {
      setHoveredBoxes((prev) => ({ ...prev, [index]: false }));
    }
  };

  const isBoxActive = (index) => {
    if (isTouchDevice) {
      return activeBox === index;
    } else {
      return hoveredBoxes[index];
    }
  };

  return (
    <div className="timeline-container">
      {/* First Row */}
      <div className="timeline-row">
        <div
          className="timeline-box school-history"
          onClick={() => handleBoxClick(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          {isBoxActive(0) ? (
            <img src={img} alt="School History" className="timeline-image" />
          ) : (
            <>
              <h2>School History</h2>
              <p>The Journey of Redmond Tamil School</p>
            </>
          )}
        </div>
        <div className="timeline-arrow horizontal rightarrow"></div>
        <div
          className="timeline-box red-bg"
          onClick={() => handleBoxClick(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          {isBoxActive(1) ? (
            <img
              src={img}
              alt="Foundation of Redmond Tamil School"
              className="timeline-image"
            />
          ) : (
            <>
              <h3>2009</h3>
              <h4>Foundation of Redmond Tamil School</h4>
              <p>
                Founded by Arasu Elangovan and Ram Valliyappan with 16 students{" "}
              </p>
            </>
          )}
        </div>
        <div className="timeline-arrow horizontal rightarrow"></div>
        <div
          className="timeline-box white-bg"
          onClick={() => handleBoxClick(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          {isBoxActive(2) ? (
            <img src={img} alt="First Year Milestone" className="timeline-image" />
          ) : (
            <>
              <h3>2001</h3>
              <h4>First Year Milestone</h4>
              <p>Celebrated the first successful year with 50 students enrolled.</p>
            </>
          )}
        </div>
      </div>

      {/* Vertical Arrow */}
      <div className="vertical-arrow-container">
        <div className="timeline-arrow vertical"></div>
      </div>

      {/* Second Row */}
      <div className="timeline-row">
        <div
          className="timeline-box red-bg"
          onClick={() => handleBoxClick(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          {isBoxActive(3) ? (
            <img src={img} alt="Expansion" className="timeline-image" />
          ) : (
            <>
              <h3>2005</h3>
              <h4>Expansion</h4>
              <p>The school introduced advanced courses and new facilities.</p>
            </>
          )}
        </div>
        <div className="timeline-arrow horizontal leftarrow"></div>
        <div
          className="timeline-box white-bg"
          onClick={() => handleBoxClick(4)}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          {isBoxActive(4) ? (
            <img
              src={img}
              alt="Recognized Institution"
              className="timeline-image"
            />
          ) : (
            <>
              <h3>2010</h3>
              <h4>Recognized Institution</h4>
              <p>The school received accreditation for its innovative curriculum.</p>
            </>
          )}
        </div>
        <div className="timeline-arrow horizontal leftarrow"></div>
        <div
          className="timeline-box red-bg"
          onClick={() => handleBoxClick(5)}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave(5)}
        >
          {isBoxActive(5) ? (
            <img src={img} alt="20th Anniversary" className="timeline-image" />
          ) : (
            <>
              <h3>2020</h3>
              <h4>20th Anniversary</h4>
              <p>Celebrated two decades of excellence in Tamil education.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
