import { imageWithContent } from './cardDetails.js';
import dott from './assets/dott.png';

// Main component to display Mission, Vision, and Values
export default function MissionVissionValues() {
    return (
      <div className="text-dark container image-with-text-container margin-space" data-aos="fade-up">
        <h1 className="text-center mt-5 mb-3">
             {/* Page heading */}
          <b>Our <span className="web-color">Mission,Vision and Values</span></b>
        </h1>
        <div className="row  mission-content">
          {imageWithContent.map((item, index) => (
            // Pass individual item details as props to the CardCol component
            <CardCol imgVal={item.imageValue} cardHead={item.headValue} subHead={item.subHead}
              cardText={item.contentValue} isVal={index % 2 === 0 ? true : false} />
          ))}
        </div>
      </div>
    );
  }

// Card component for displaying individual mission/vision/value items
  function CardCol({ imgVal, cardHead, subHead, cardText, isVal }) {
    return (
      <>
        {isVal ? (
            // Layout for even-indexed cards (image on left, text on right)
          <div className="row image-with-text-container   g-3 d-flex flex-row align-items-center">
            <div className="col-sm-6 col-md-4 d-flex flex-column">
             {/* Image column */}
              <img
                src={imgVal}
                alt="Illustration"
                className="img-fluid rounded"
                style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
              />
            </div>
            {/* Text content column */}
            <div className="col-sm-6 col-md-8 align-items-center  ">
              <h5 className="web-color text-center mt-4"><b>{cardHead}</b></h5>
              <div>
                {subHead && <h6><b>{subHead}</b></h6>} 
                 {/* Render paragraph text dynamically */}
                {cardText.map((content, idx) => (  
                  <p key={idx} className="m-auto mission-conetent"> {content}</p>
                ))}
              </div>
            </div>
          </div>
        ) : (
              // Layout for odd-indexed cards (text on left, image on right)
          <div className="row d-flex flex-row align-items-center contents">
             {/* Text content column (hidden in small screens) */}
            <div className="col-sm-6 col-md-8 d-md-block d-xl-block d-sm-block d-none">
                  
              <h5 className="web-color text-center"><b>{cardHead}</b></h5>
              {subHead && <h3>{subHead}</h3>}
              {cardText.map((content, idx) => (
                <p key={idx} className="m-auto "> {content}</p>
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
               {/* Mobile View: Image first, then text */}
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
              {subHead && <h3>{subHead}</h3>} 
              {cardText.map((content, idx) => (  
                <p key={idx} className="m-auto"><img src={dott} id="dott" /> {content}</p>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
  