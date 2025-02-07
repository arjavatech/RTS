// Import necessary dependencies
import React, { useEffect, useState } from 'react'; // Import React and hooks for component functionality
import { useLocation } from 'react-router-dom'; // Import useLocation for accessing URL state
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS CSS for styling animations
import { Header } from "./HomeHeader"; // Import Header component
import BlogCard from './BlogCard'; // Import BlogCard component
import Logo from "./assets/logo.png"; // Import logo image
import { FooterSection } from "./App"; // Import FooterSection component
import HomeHeader from "./HomeHeader"; // Import HomeHeader component
import { truncateText } from './CardWithContentDetails';

// ReadMorePage component definition
function ReadMorePage() {
    let sheetname = "Events"; // Define sheet name for Events
    let sheetname2 = "LatestNews"; // Define sheet name for LatestNews
    const location = useLocation(); // Get the current location object (used for URL params)
    const { cardData, title, cardType } = location.state || {}; // Destructure the data passed from BlogCard component

    const [relatedCards, setRelatedCards] = useState([]); // State to hold related cards data
    const [cardOffset, setCardOffset] = useState(0); // State to track the current offset of the displayed cards
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1189); // Check if the current screen width is mobile
    let isblog=true;
    // Initialize AOS animations when the component mounts
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-out', // Easing function
            once: false, // Whether the animation should trigger once
        });
    }, []);

    // Fetch related cards data based on the cardType (LatestNews or Events)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const sheet = cardType === "LatestNews" ? sheetname2 : sheetname; // Select appropriate sheet based on cardType
                const response = await fetch(
                    `https://script.google.com/macros/s/AKfycby0RsNTM3YdU95YeTr0UlG-hfEnB8f6g3MFnZV9f0Ci1R7oIudYFoI4-P7cWKuIUHSu/exec?sheet=${sheet}`
                ); // Fetch data from Google Sheets
                const data = await response.json(); // Parse JSON response
                console.log("Fetched Data:", data); // Debugging log

                // Ensure the response is an array and filter/sort related cards
                if (Array.isArray(data)) {
                    const sortedEvents = [...data].sort((a, b) => new Date(b.Date) - new Date(a.Date)); // Sort by date
                    setRelatedCards(sortedEvents.filter(card => card.Title !== title)); // Set related cards, excluding the current card
                } else {
                    console.error("Unexpected response format:", data); // Handle unexpected data format
                }
            } catch (error) {
                console.error("Error fetching Google Sheets data:", error); // Handle fetch error
            }
        };

        fetchData(); // Call the fetch function
    }, [title, cardType]); // Re-fetch if title or cardType changes

    const [visibleCards, setVisibleCards] = useState([]); // State to hold the currently visible related cards

    // Determine which cards to show based on cardOffset and screen width
    useEffect(() => {
        const numVisibleCards = isMobile ? 1 : 2; // Show 1 card on mobile, 2 on desktop
        setVisibleCards(relatedCards.slice(cardOffset, cardOffset + numVisibleCards)); // Set visible cards based on current offset
    }, [cardOffset, isMobile, relatedCards]); // Recalculate when cardOffset, isMobile, or relatedCards change

    // Handle the next card button click
    const handleNext = () => {
        if (cardOffset + 1 <= relatedCards.length - (isMobile ? 0 : 2)) {
            setCardOffset(cardOffset + 1); // Move to the next set of cards
        }
    };

    // Handle the previous card button click
    const handlePrev = () => {
        if (cardOffset - 1 >= 0) {
            setCardOffset(cardOffset - 1); // Move to the previous set of cards
        }
    };

    // Listen for window resize events to detect mobile screens
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200); // Update isMobile state on window resize
        };
        window.addEventListener("resize", handleResize); // Add event listener for resize
        return () => window.removeEventListener("resize", handleResize); // Cleanup listener on component unmount
    }, []);

    return (
        <div data-aos="fade-up"> {/* AOS animation trigger */}
            <HomeHeader /> {/* Header component */}
            <Header headVal={'Blog & Events'} /> {/* Display header for this page */}
            {cardData ? (
                <div className="readmore mb-5 fs-3"> {/* Main content area */}
                    <div className="row mt-5"> {/* Bootstrap grid */}
                        {/* Main content section */}
                        <div className="col-xl-8 col-md-12 col-sm-12">
                            <ContentAllDetails
                                head={cardData.Title} // Pass card data to ContentAllDetails component
                                date={cardData.Date}
                                authorName={cardData.EventOrganizer}
                                content={cardData.DetailDescription}
                                img={Logo} // Placeholder logo image
                            />
                        </div>

                        {/* Sidebar or additional content */}
                        <div className="col-xl-4 d-xl-block mb-3">
                            <div className="blog-container">
                                {/* Show "Previous" button if there are previous cards */}
                                {cardOffset > 0 && (
                                    <div className="scroll-arrow" onClick={handlePrev}>
                                        <i className={`fa ${isMobile ? "fa-angle-left" : "fa-caret-up"}`}></i>
                                    </div>
                                )}

                                {/* Map over the visible cards and display them */}
                                {visibleCards.map((card, index) => (
                                    <div className="blog-card2 mt-3" key={index}>
                                        <BlogCard
                                            gradimg={Logo} // Gradient image for the card
                                            blogimgid={`related-card-${index}`}
                                            h1cont={card.Title} // Title for the card
                                            h1id={`related-title-${index}`}
                                            graddate={card.Date} // Date for the card
                                            dateid={`related-date-${index}`}
                                            maincont={truncateText(card.DetailDescription,isblog)} // Short description for the card
                                            excescont={card.DetailDescription} // Full description for the card
                                            maincontid={"main-cont-id"}
                                            btnid={`readmore-related-${index}`}
                                            readContentFullDetails={card} // Full card details
                                        />
                                    </div>
                                ))}

                                {/* Show "Next" button if there are more cards */}
                                {cardOffset < relatedCards.length - 1 && (
                                    <div className="scroll-arrow" onClick={handleNext}>
                                        <i className={`fa ${isMobile ? "fa-angle-right" : "fa-caret-down"}`}></i>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No data available</p> // Display if no card data is available
            )}
            <FooterSection /> {/* Footer component */}
        </div>
    );
}

// ContentAllDetails component to display detailed content for the selected card
function ContentAllDetails({ head, authorName, content, date, img }) {
    const date1 = formatDateToOrdinal2(date); // Format date to an ordinal date string
    return (
        <>
            <h3><b>{head}</b></h3>
            <p className="fs-5 text-muted mb-0">{date1}</p> {/* Display formatted date */}
            <p className="fs-5 text-muted">{authorName}</p> {/* Display author name */}
            <div className="text-center">
                <img src={img} alt="" width={500} className="read-more-image" /> {/* Display image */}
            </div>
            <div className="text-justify preStyle" dangerouslySetInnerHTML={{ __html: content }}></div> {/* Display content with HTML formatting */}
        </>
    );
}

// Function to format date string to an ordinal format (e.g., "1st January 2025")
export function formatDateToOrdinal2(dateString) {
    const date = new Date(dateString); // Convert string to Date object
    const day = date.getDate(); // Get day
    const month = date.toLocaleString('en-US', { month: 'long' }); // Get full month name
    const year = date.getFullYear(); // Get year

    // Function to add ordinal suffix
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return "th"; // Covers 11th-13th
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`; // Return formatted date
}

export default ReadMorePage;
