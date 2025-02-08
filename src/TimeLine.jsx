import React, { useState, useEffect } from "react";
import "./Timeline.css";
import img from "./assets/hoverImage.jpeg";

const Timeline = () => {
  // State to keep track of the active timeline box
  const [activeBox, setActiveBox] = useState(null);
  // State to track which boxes are being hovered
  const [hoveredBoxes, setHoveredBoxes] = useState({});
  // State to detect if the device is a touch device
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Function to check if the device supports hover events
    const checkTouchDevice = () => {
      setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    };
    // Initial check when component mounts
    checkTouchDevice();

    // Event listener to detect window resize
    window.addEventListener("resize", checkTouchDevice);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  // Handle click event for boxes (touch devices only)
  const handleBoxClick = (index) => {
    if (isTouchDevice) {
      // Toggle active box for touch devices
      setActiveBox(activeBox === index ? null : index);
    }
  };

  // Handle mouse enter event for non-touch devices (hover effect)
  const handleMouseEnter = (index) => {
    if (!isTouchDevice) {
      setHoveredBoxes((prev) => ({ ...prev, [index]: true }));
    }
  };

  // Handle mouse leave event for non-touch devices (remove hover effect)
  const handleMouseLeave = (index) => {
    if (!isTouchDevice) {
      setHoveredBoxes((prev) => ({ ...prev, [index]: false }));
    }
  };

  // Determine if a box should be shown as active (either via click or hover)
  const isBoxActive = (index) => {
    if (isTouchDevice) {
      return activeBox === index;
    } else {
      return hoveredBoxes[index];
    }
  };

  return (
    <div className="timeline-container margin-space">
      {/* First Row */}
      <div className="timeline-row">
        {/* Timeline Box for School History */}
        <div
          className="timeline-box school-history"
          onClick={() => handleBoxClick(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          {/* Display image when box is active, otherwise show text */}
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
        {/* Timeline Box for Foundation of Redmond Tamil School */}
        <div
          className="timeline-box red-bg"
          onClick={() => handleBoxClick(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          {/* Display image when box is active, otherwise show text */}
          {isBoxActive(1) ? (
            <img
              src={img}
              alt="Foundation of Redmond Tamil School"
              className="timeline-image"
            />
          ) : (
            <>
           
              <h3>2001</h3>
              <h4>First Year Milestone</h4>
              <p>Celebrated the first successful year with 50 students enrolled.</p>
            
              
            </>
          )}
        </div>
        <div className="timeline-arrow horizontal rightarrow"></div>
        {/* Timeline Box for First Year Milestone */}
        <div
          className="timeline-box white-bg"
          onClick={() => handleBoxClick(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          {/* Display image when box is active, otherwise show text */}
          {isBoxActive(2) ? (
            <img src={img} alt="First Year Milestone" className="timeline-image" />
          ) : (
            <>
             <h3>2005</h3>
              <h4>Expansion</h4>
              <p>The school introduced advanced courses and new facilities.</p>
              
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
        {/* Timeline Box for Expansion */}
        <div
          className="timeline-box red-bg"
          onClick={() => handleBoxClick(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          {/* Display image when box is active, otherwise show text */}
          {isBoxActive(3) ? (
            <img src={img} alt="Expansion" className="timeline-image" />
          ) : (
            <>
              <h3>2020</h3>
              <h4>20th Anniversary</h4>
              <p>Celebrated two decades of excellence in Tamil education.</p>
            </>
          )}
        </div>
        <div className="timeline-arrow horizontal leftarrow"></div>
        {/* Timeline Box for Recognized Institution */}
        <div
          className="timeline-box white-bg"
          onClick={() => handleBoxClick(4)}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          {/* Display image when box is active, otherwise show text */}
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
        {/* Timeline Box for 20th Anniversary */}
        <div
          className="timeline-box red-bg"
          onClick={() => handleBoxClick(5)}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave(5)}
        >
          {/* Display image when box is active, otherwise show text */}
          {isBoxActive(5) ? (
            <img src={img} alt="20th Anniversary" className="timeline-image" />
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
      </div>
    </div>
  );
};

export default Timeline;
