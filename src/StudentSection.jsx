import { studentImageAndContent } from "./cardDetails";  // Importing the student image and content data
import { photoGallary } from "./cardDetails.js";  // Importing the photo gallery images
import { Header } from './HomeHeader.jsx';  // Importing Header component
import HomeHeader from "./HomeHeader.jsx";  // Importing HomeHeader component (duplicate import)
import { FooterSection } from "./App";  // Importing the FooterSection component from the App file
import { useState, useEffect } from "react";  // Importing hooks from React
import AOS from 'aos';  // Importing the AOS library for animations on scroll
import 'aos/dist/aos.css';  // Importing AOS stylesheet

// Main component for the student section
export default function StudentSection() {
    // Initialize AOS animations on component mount
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-out', // Animation easing function
            once: false, // Whether to trigger animation once or repeatedly
        });
        window.scrollTo(0, 0);  // Scroll to the top of the page on mount
    }, []);

    return (
        <div id="student-section">
            {/* Render HomeHeader component */}
            <HomeHeader />
            {/* Render Header with title 'Student Section' */}
            <Header headVal={'Student Section'} />
            
            {/* Display student achievements dynamically */}
            <div className="container student-row mt-5" data-aos="fade-up">
                <div className="row text-dark">
                    {studentImageAndContent.map((item, index) => (
                        // For each item, render the StudentAchivement component
                        <StudentAchivement 
                            key={index} 
                            imageVal={item.imagePath} 
                            head={item.name} 
                            textContent={item.details} 
                            isShow={index == 6}  // Conditionally show Read More/Read Less button for 7th item
                        />
                    ))}
                </div>
            </div>

            {/* Render Portal Section (Login) */}
            <div className="container-fluid portal-section d-flex flex-column align-items-center p-3 mt-4 mb-5" data-aos="fade-up">
                <PortalSection heading={"Students Portal"} btnName={"Login"} />
            </div>
            
            {/* Render Photo Gallery section */}
            <h2 className="text-center mt-3 text-dark mt-5 mb-3" data-aos="fade-up">
                <b><span className="web-color">Photo</span> Gallary</b>
            </h2>
            <div className="container" data-aos="fade-up">
                <div className="row mb-5">
                    {/* Render PhotoGallaryFun component for displaying images */}
                    <PhotoGallaryFun pictures={photoGallary} idVal={"photoGalleryCarousel2"} />
                </div>
            </div>

            {/* Render FooterSection component */}
            <FooterSection />
        </div>
    )
}

// Component for displaying each student's achievement with Read More/Read Less functionality
function StudentAchivement({ imageVal, head, textContent, isShow }) {
    let [showReadLess, setReadLess] = useState(false);  // State for controlling Read Less
    let [showReadMore, setReadMore] = useState(isShow);  // State for controlling Read More

    // Function to toggle content and show "Read More"
    function toggleContent(){
        setReadMore(false);  // Hide Read More
        setReadLess(true);  // Show Read Less
    }

    // Function to toggle content and show "Read Less"
    function toggleContent2(){
        setReadMore(true);  // Show Read More
        setReadLess(false);  // Hide Read Less
    }

    return (
        <>
        {showReadMore ? (
            // Display "Read More" button if showReadMore is true
            <div className="text-center mt-5 mb-5">
                <button className="login-style2 fs-6 pt-2 pb-2" onClick={toggleContent}><b>Read More</b></button>
            </div>
        ) : (
            // Display student's achievement details
            <div className="col-sm-6 col-md-4 mt-5  col-xl-4 d-flex flex-column align-items-center">
                <img src={imageVal} className="student-achive-image" alt="" style={{ width: '350px', height: 'auto' }} />
                <h5 className="mt-3 student-achivement-head"><b>{head}</b></h5>
                <p>{textContent}</p>
            </div>
        )}
        {showReadLess ? (
            // Display "Read Less" button if showReadLess is true
            <div className="text-center mt-5 mb-5">
                <button className="login-style2 fs-6 pt-2 pb-2" onClick={toggleContent2}><b>Read Less</b></button>
            </div>
        ) : ''} 
        </>
    )
}

// Component for displaying the Students Portal section with a login button
export function PortalSection({ heading, content, btnName }) {
    return (
        <>
            {/* Display the heading */}
            <h3 className="text-white mt-2 mb-3" data-aos="fade-up"><b>{heading}</b></h3>
            <div className="container text-white" data-aos="fade-up">
                {/* Display content */}
                <p className="text-center fs-6">{content}</p>
                <div className="text-center">
                    {/* Display login button */}
                    <button className="login-style fs-6 pt-2 pb-2">
                        <a href="https://www.catamilacademy.org/cta/login.aspx?ReturnUrl=%2fcta" className="link-sty" target="blank">
                            <b>{btnName}</b>
                        </a>
                    </button>
                </div>
            </div>
        </>
    );
}

// Component for displaying a dynamic photo gallery with zoom functionality
export function PhotoGallaryFun({ pictures = [], idVal }) {
    const [chunkSize, setChunkSize] = useState(4);  // Default to 4 images per row
    const [zoomedImage, setZoomedImage] = useState(null);  // State for the zoomed image

    // Dynamically update chunk size based on screen width
    useEffect(() => {
        const updateChunkSize = () => {
            if (window.innerWidth < 768) {
                setChunkSize(1);  // For mobile view, show 1 image per row
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setChunkSize(3);  // For tablet view, show 3 images per row
            } else {
                setChunkSize(4);  // For larger screens, show 4 images per row
            }
        };
        updateChunkSize();  // Set initial chunk size
        window.addEventListener("resize", updateChunkSize);  // Update chunk size on window resize
        return () => {
            window.removeEventListener("resize", updateChunkSize);  // Cleanup the event listener
        };
    }, []);

    // Split pictures into chunks based on the chunk size
    const chunkedPictures = [];
    for (let i = 0; i < pictures.length; i += chunkSize) {
        chunkedPictures.push(pictures.slice(i, i + chunkSize));
    }

    // Handle image click to show zoomed version
    const handleImageClick = (picture) => {
        setZoomedImage(picture);
    };

    // Close the zoomed image modal
    const handleCloseZoom = () => {
        setZoomedImage(null);
    };

    return (
        <>
            {/* Photo gallery carousel */}
            <div id={idVal} className="carousel slide mb-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {chunkedPictures.map((chunk, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div className="row justify-content-center">
                                {chunk.map((picture, picIndex) => (
                                    <div key={picIndex} className={`col-lg-${12 / chunkSize} col-md-${12 / chunkSize} col-sm-12 d-flex justify-content-center`}>
                                        {/* Image container with click handler to zoom image */}
                                        <div style={{ width: "100%", paddingTop: "100%", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
                                            <img
                                                src={picture}
                                                alt={`Slide ${index + 1} - Image ${picIndex + 1}`}
                                                className="photo-gallary-image"
                                                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                                                onClick={() => handleImageClick(picture)}  // Click to zoom in
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Carousel controls */}
                <button className="carousel-control-prev" type="button" data-bs-target={`#${idVal}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${idVal}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Zoomed image modal */}
            {zoomedImage && (
                <div className="zoomed-image-modal" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1050 }} onClick={handleCloseZoom}>
                    <img src={zoomedImage} alt="Zoomed In" style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "8px" }} />
                </div>
            )}
        </>
    );
}
