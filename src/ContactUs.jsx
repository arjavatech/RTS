import React, { useState,useEffect } from 'react';
import { Header } from "./HomeHeader";
import { FooterSection } from "./App";
import HomeHeader from "./HomeHeader";
import atLogo from "./assets/at-logo.png";
import location from "./assets/location-logo.png";
import phone from "./assets/phone-logo.png";
import map from "./assets/map.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
    useEffect(() => {
              AOS.init({
                  duration: 1000, 
                  easing: 'ease-out', 
                  once: false,
              });
              window.scrollTo(0, 0);
          }, []);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [popUpMessage, setPopUpMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!name) {
        //     setPopUpMessage("Please enter your name.");
        //     return;
        // }

        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!email || !emailPattern.test(email)) {
        //     setPopUpMessage("Please enter a valid email.");
        //     return;
        // }

        // if (!message) {
        //     setPopUpMessage("Please enter your message.");
        //     return;
        // }

        const data = { name, email, message };

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbxxNSBlOJGe4YFqRAkxzrvOfNsERMxCHfKKyaFGjZRpCyLSU9_u-PZ_Y06RDXBA7JwH/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(data),
                }
            );

            const result = await response.text();
            console.log(result);
            if (result.includes("Success")) { // Check if "Success" is part of the response
                setPopUpMessage("Your message has been sent successfully!");
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(() => {
                    setPopUpMessage('')
                }, 5000);
            } else {
                setPopUpMessage("There was an error submitting the form.");
            }
        } catch (error) {
            setPopUpMessage("Network error. Please try again later.");
        }
    };

    return (
        <div className='about-us'>
            <HomeHeader />
            <Header headVal={'Contact Us'} />
            <div className="container form-container my-5 text-dark" data-aos="fade-up">
                <div className="row g-5">
                    {/* Left Section: Contact Details */}
                    <div className="col-xl-6 col-md-6">
    
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <img src={atLogo} alt="at-logo" id="at-logo" />
                                <span id="gmail">info@RedmondTamilSchool.edu</span>
                            </li>
                            <li className="mb-3">
                                <img src={location} alt="location-logo" id="location-logo" />
                                <span id="gmail">Bellevue, WA 98005, USA</span>
                            </li>
                            <li className="">
                                <img src={phone} alt="phone-logo" id="phone-logo" />
                                <span id="gmail">3677273209</span>
                            </li>
                        </ul>
                        {/* <img src={map} alt="Map" className="map-img" /> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.1582087321247!2d-122.1500019!3d47.5859163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c1e512f32d1%3A0x70526e5f329b6b00!2sReception%20Desk!5e0!3m2!1sen!2sus!4v1234567890123"
                            className="map-iframe"
                            title="Google Maps Embed"
                            style={{ border: 0, width: "100%", height: "65%" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="col-xl-6 col-md-6">
                        <div className="p-4 right-section">
                            <h2 className="text-danger contact-form mt-5 contactform-h2 mb-4"><b>Contact Form</b></h2>
                            <h6 className="mb-4 contactUs-h5"><b>How can we help?</b></h6>
                            <p className="mb-4">
                                Have a question or feedback? Fill out the form below, and we will
                                get back to you.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="4"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger w-100 fs-5">Submit</button>
                                <p className='text-success text-center'>{popUpMessage}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pop-up Message */}
            {/* {popUpMessage && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <div className="dialog-header">
                            <h4>Message</h4>
                        </div>
                        <div className="dialog-body">
                            <p>{popUpMessage}</p>
                        </div>
                        <div className="dialog-footer">
                            <button onClick={() => setPopUpMessage('')} className="close-btn">Close</button>
                        </div>
                    </div>
                </div>
            )} */}
            <FooterSection />
        </div>
    );
}