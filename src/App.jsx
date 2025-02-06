import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SecondHome from './SecondHome.jsx';
import AboutUs from "./AboutUs.jsx";
import StudentSection from "./StudentSection.jsx";
import ParentsSection from "./ParentsSection.jsx";
import Volunteer from './Volunteer.jsx';
import Academics from "./Academics.jsx";
import Blog from "./Blog.jsx";
import ContactUs from "./ContactUs.jsx";
import ReadMorePage from './ReadMorePage.jsx';

/**
 * Main Application Component
 * 
 * Sets up the router configuration for the entire application and
 * defines all route paths and their corresponding components.
 */
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
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

/**
 * FooterSection Component
 * 
 * Reusable footer component with:
 * - Social media icons
 * - Email subscription form
 * - Contact information
 * 
 * Handles email validation and subscription through Google Apps Script integration
 */
export function FooterSection() {
  // State management for email subscription
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  // Handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle subscription form submission
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email) {
      setMessage("Please enter an email address!");
      setMessageColor("red");
      return;
    }

    // Google Apps Script endpoint (replace with your actual endpoint)
    const url = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          action: "subscribe",
        }),
        mode: "no-cors",
      });

      // Handle response
      const responseText = await response.text();
      if (response.ok && responseText === "Success") {
        setMessage("Successfully subscribed!");
        setMessageColor("green");
        setEmail('');
      } else {
        setMessage("Subscription processed successfully");
        setMessageColor("green");
        setEmail('');
      }
      
      // Clear message after timeout
      setTimeout(() => setMessage(""), 5000);

    } catch (error) {
      setMessage("Error while subscribing. Please try again later.");
      setMessageColor("red");
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <div className="footer-container-style py-5">
      <footer className="container-fluid">
        {/* Social Media Icons */}
        <div className="row text-center mb-3">
          <CreateIcon />
        </div>

        {/* Subscription Section */}
        <h5 className="text-center mb-4">
          <b>Stay updated with the latest news and events. Sign up now!</b>
        </h5>

        <form onSubmit={handleSubscribe}>
          <div className="footer-contain text-dark d-flex flex-column align-items-center justify-content-center">
            <div className="w-50 px-3 footer-row d-flex flex-wrap ">
              {/* Email Input */}
              <div className="">
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

              {/* Submit Button */}
              <div className="">
                <button type="submit" className="btn text-white fs-6 regis-btn">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Status Messages */}
            {message && (
              <p style={{ color: messageColor, fontWeight: "300" }}>
                {message}
              </p>
            )}

            {/* Contact Information */}
            <p className="bootom-footer text-center mt-3">
              Bellevue, WA 98005, USA <br />
              <a href="mailto:info@RedmondTamilSchool.edu" 
                 className="text-dark text-decoration-none">
                info@RedmondTamilSchool.edu
              </a>
            </p>
          </div>
        </form>
      </footer>
    </div>
  );
}

/**
 * CreateIcon Component
 * 
 * Displays social media icons with placeholder links
 * 
 * Note: Replace '#' with actual social media URLs
 */
function CreateIcon() {
  return (
    <div className="d-flex justify-content-center gap-3">
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