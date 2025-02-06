// Importing necessary dependencies and assets
import HomeFirstImg from "./assets/homeFirstImg.jpg";
import HomeHeader from "./HomeHeader.jsx";
import heroImgTwo from './assets/Events Section.jpeg';
import heroImgThree from './assets/Achievements Column.jpeg';
import aboutUsBG from './assets/about us bg.png';
import { FooterSection } from "./App";
import { numWithText2 } from './imagesDetails.js';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { numWithText } from "./imagesDetails.js";
import EventPage from "./assets/News Section image one.png";
import CardWithContentDetails from "./CardWithContentDetails.jsx";
import achiveMentImage from "./assets/Events Section image two.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from "./HomeAbout.jsx";

// Main Component
function SecondHome() {
    // Initialize animations and scroll behavior
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: false,
        });
        window.scrollTo(0, 0);
    }, []);
    // Image Carousel State
    const images = [HomeFirstImg,heroImgTwo,heroImgThree];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

  // Manual Navigation Controls Of images
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (
        <div className="about-us">
            {/* Navigation Component Header*/}
            <HomeHeader />

             {/* Hero Section with Image Carousel */}
            <div className="container-fluid text-dark position-relative p-0 mb-5" data-aos="fade-up">
                <img
                    src={images[currentIndex]}
                    alt="Home"
                    className="img-fluid home-image"
                    style={{ objectFit: 'cover', width: '100%', height: '70vh' }}
                />
                <div
                    className="d-flex flex-column align-items-center justify-content-center text-white"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        textAlign: 'center',
                        background: 'rgba(0, 0, 0, 0.4)',
                        padding: '20px',
                    }}
                >
                <div
                    className="image-inside-content"
                    style={{marginTop: '15%', width: '100%', maxWidth: '1000px', 
                            boxSizing: 'border-box',padding: '10px'}}
                >
                <h1 className=" home-bg-img-head">Welcome to Redmond Tamil School</h1>
                <p className="home-bg-img-text">
                    At Redmond Tamil School, we nurture students with Tamil heritage, fostering cultural pride
                    and empowering them with knowledge for a bright future.
                </p>
            </div>
            
                </div>
                {/* Carousel Navigation Buttons */}
                <div className="image-navigation-buttons">
                <div className="carousel-control-prev" onClick={prevImage}>
                    <span className="carousel-control-prev-icon"></span>
                </div>
                <div className="carousel-control-next" onClick={nextImage}>
                    <span className="carousel-control-next-icon"></span>
                </div>

                </div>
            </div>

            {/* Thirukkural Quote Section */}
            <div className="container-fluid tamil-content p-3 text-center text-dark mb-5 fs-4" data-aos="fade-up">
                <p style={{ wordSpacing: '15px' }}>கற்க   கசடறக்   கற்பவை கற்றபின்<br />
                    நிற்க அதற்குத் தக. </p>
            </div>

            {/* About Us Content Section */}
            <div className="container d-flex flex-column align-items-center justify-content-center text-dark mb-5" >
                <AboutUs/>
                {/* temporaliy removed need in future  -(School News) */}
                <div className="row" data-aos="fade-up">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <CardWithContentDetails spanVal={''} heading={'LatestNews '} checkTrue={false}
                            Details={numWithText}
                        />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex d-md-none ">
                        <ShowImages imagePathLink={EventPage} isTabView={false} />
                    </div>
                </div>
                <div className="row tabView-column-show" data-aos="fade-up">
                    <div className="col-md-6 tabView-colum1 ">
                        <ShowImages imagePathLink={EventPage} />
                    </div>
                    <div className="col-md-6 tabView-colum2 ">
                        <ShowImages imagePathLink={achiveMentImage} isTabView={true} />
                    </div>
                </div>  

                {/* Event Section */}
                <div className="row mb-5 not-show-column-mobile mt-5 event" data-aos="fade-up">
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex  acheive-img">
                        <ShowImages imagePathLink={achiveMentImage} isTabView={true} />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 mt-6">
                        <CardWithContentDetails heading={'Events'} checkTrue={true}
                            Details={numWithText2}  cardtype={"Events"}
                        />
                    </div>
                </div>
                {/* Event Section for Mobile View */}
                <div className="row mb-5 show-change-column-mobile" data-aos="fade-up">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <CardWithContentDetails link={'Events'} spanVal={'Events'} checkTrue={true}
                            Details={numWithText2}  cardtype={"Events"}
                        />
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12 d-xl-flex d-md-none acheive-img">
                        <ShowImages imagePathLink={achiveMentImage} />
                    </div>
                </div>
            </div>
             {/* Footer Section */}
            <FooterSection />
        </div>
    )
}


// ShowImages component for displaying images
function ShowImages({ imagePathLink, isTabView }) {
    return (
        <div className="image-container">
            <img
                src={imagePathLink}
                alt=""
                className={isTabView ? "tab-view-image" : "default-view-image"}
            />
        </div>
    );
}




export default SecondHome;