import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link for navigation 
import HomeHeader from './HomeHeader';  // Import the HomeHeader component
import SecondHome from './SecondHome.jsx';
import AboutUs from "./AboutUs.jsx";
import StudentSection from "./StudentSection.jsx";
import ParentsSection from "./ParentsSection.jsx";
import Volunteer from './Volunteer.jsx';
import Academics from "./Academics.jsx";
import Blog from "./Blog.jsx";
import ContactUs from "./ContactUs.jsx";
import ReadMorePage from './ReadMorePage.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Read-more" element={<ReadMorePage />} />
        <Route path="/RTS" element={<SecondHome />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Student-Section" element={<StudentSection />} />
        <Route path="/Parent-Section" element={<ParentsSection />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/Blog & Events" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}


export function FooterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // For showing the success/error message
  const [messageColor, setMessageColor] = useState(""); // For changing the color of the message

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault(); // Prevent default behavior if needed
    if (!email) {
      setMessage("Please enter an email address!");
      setMessageColor("red");
      return;
    }

    const url = "https://script.google.com/macros/s/AKfycbyM_z55HmXjGSquvfmJFidSkhKrODrwylFp1jXOGAX4Gv6xl-RNb49-Ou450rw8lI0F/exec";

    try {
      const response = await fetch(url, {
        method: "POST",  // Use POST method
        headers: {
          "Content-Type": "application/json", // Set content type
        },
        body: JSON.stringify({
          email: email,  // Send the email in the body
          action: "subscribe",
        }), mode: "no-cors",
      });

      const responseText = await response.text(); // Read the response text

      if (response.ok && responseText === "Success") {
        setMessage("Successfully subscribed!");
        setMessageColor("green");
        setEmail('');
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setMessage("Successfully subscribed!.");
        setMessageColor("green");
        setEmail('');
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      setMessage("Error while subscribing. Please try again later.");
      setMessageColor("red");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="footer-container-style py-3">
      <footer className="container-fluid">
        {/* Icons Row */}
        <div className="row text-center mb-3">
          <CreateIcon />
        </div>

        {/* Heading */}
        <h5 className="text-center mb-4">
          <b>Stay updated with the latest news and events. Sign up now!</b>
        </h5>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe}>
          <div className="footer-contain text-dark d-flex flex-column align-items-center justify-content-center">
            <div className="row w-50 px-3 mb-2 footer-row">
              {/* Email Input */}
              <div className="col-xl-6 col-sm-12 col-md-8 mb-3 mb-md-0">
                <input
                  type="email"
                  className="footer-input-sty form-control"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>

              {/* Subscribe Button */}
              <div className="col-xl-6 col-sm-12 col-md-4">
                <button type="submit"
                  className="btn text-white fs-6 regis-btn"
                >
                  Subscribe
                </button>

              </div>
              {/* </form> */}
            </div>

            {/* Display Success/Error Message */}
            {message && (
              <p style={{ color: messageColor, fontWeight: "300" }}>
                {message}
              </p>
            )}

            {/* Contact Information */}
            <p className="bootom-footer text-center mt-3">
              Bellevue,WA 98005 ,USA <br />
              <a href="mailto:info@RedmondTamilSchool.edu" className="text-dark text-decoration-none">
                info@RedmondTamilSchool.edu
              </a>
            </p>
          </div>
        </form>
      </footer>
    </div>
  );
}

function CreateIcon() {
  return (
    <div className="d-flex justify-content-center gap-3">
      {/* Font Awesome Icons */}
      <a href="#" className="web-color" aria-label="Facebook">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a href="#" className="web-color" aria-label="Instagram">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
    </div>
  );
}


export default App;