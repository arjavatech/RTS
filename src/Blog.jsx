import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from "./HomeHeader";
import { FooterSection } from "./App";
import HomeHeader from "./HomeHeader";
import BlogCard from './BlogCard';
import Logo from "./assets/logo.png";
import { truncateText } from './CardWithContentDetails';

// URLs for fetching event and news data
const sheetUrls = {
    events: "https://script.google.com/macros/s/AKfycby0RsNTM3YdU95YeTr0UlG-hfEnB8f6g3MFnZV9f0Ci1R7oIudYFoI4-P7cWKuIUHSu/exec?sheet=Events",
    latestNews: "https://script.google.com/macros/s/AKfycby0RsNTM3YdU95YeTr0UlG-hfEnB8f6g3MFnZV9f0Ci1R7oIudYFoI4-P7cWKuIUHSu/exec?sheet=LatestNews"
};

export default function Blog() {
    let isblog=true;
    // State hooks for controlling 'show more' functionality
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);

    // State hooks for storing event and news data
    const [storedEvents, setStoredEvents] = useState([]);
    const [storedNews, setStoredNews] = useState([]);

    // Initialize AOS (Animate on Scroll) on component mount
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-out', // Easing function
            once: false, // Animation should repeat on scroll
        });
        window.scrollTo(0, 0); // Scroll to top when the page loads
    }, []);

    // Fetch data from provided URL and update the respective state
    const fetchData = async (url, setter) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (Array.isArray(data)) {
                // Sort data by date in descending order (most recent first)
                setter(data.sort((a, b) => new Date(b.Date) - new Date(a.Date)));
            } else {
                throw new Error("Invalid data format");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Fetch events and news data on component mount
    useEffect(() => {
        fetchData(sheetUrls.events, setStoredEvents);
        fetchData(sheetUrls.latestNews, setStoredNews);
    }, []);

    // Toggle 'show more' functionality for events and news
    const toggleShowMore = () => setShowMore(!showMore);
    const toggleShowMore2 = () => setShowMore2(!showMore2);

    // Determine which cards to display based on the 'show more' state
    const displayedCards = showMore ? storedEvents : storedEvents.slice(0, 3);
    const displayedCards2 = showMore2 ? storedNews : storedNews.slice(0, 3);

    return (
        <div className="about-us">
            {/* Render Header and HomeHeader components */}
            <HomeHeader />
            <Header headVal={'Blog & Events'} />
            
            {/* Section for displaying school news   (temporarly hided) */}
            <h2 className='text-center mt-5 mb-5'><b>School <span className='web-color'>News</span></b></h2>
            <div className="blog-container mt-5 text-dark mb-5 fs-3" data-aos="fade-up">
                <div className="row g-3 blog-card" data-aos="fade-up">
                    {displayedCards2.map((card, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="blog-card1">
                                <BlogCard
                                    gradimg={Logo} // Image for the card
                                    author={card.EventOrganizer} // Author of the event/news
                                    blogimgid={"grad-img" + (index + 1)} // Unique ID for the image
                                    h1cont={card.Title} // Title of the event/news
                                    h1id={"grad" + (index + 1) + "-cont1"} // Unique ID for the title
                                    graddate={card.Date} // Date of the event/news
                                    dateid={"graddate" + (index + 1)} // Unique ID for the date
                                    cardType={"LatestNews"} // Type of the card (for styling)
                                    maincont={truncateText(card.DetailDescription,isblog)} // Short description of the event/news
                                    excescont={card.DetailDescription} // Full description of the event/news
                                    maincontid={"main-cont-id"} // ID for the main content
                                    btnid={"readmore-grad" + (index + 1)} // Unique ID for the 'Read More' button
                                    readContentFullDetails={card} // Full details for the 'Read More' button
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Toggle between showing more or less news */}
            <div className="text-center m-3">
                <h2 className="text-decoration-underline fs-5 pt-2 pb-2 mb-5 web-color" onClick={toggleShowMore2}>
                    {showMore2 ? 'View Less' : 'View More'}
                </h2>
            </div>

            {/* Section for displaying event updates */}
            <h2 className='text-center mt-5 mb-5'><b>Event <span className='web-color'>Updates</span></b></h2>
            <div className="blog-container mt-5 text-dark mb-5 fs-3" data-aos="fade-up">
                <div className="row g-3 blog-card" data-aos="fade-up">
                    {/* Map over the stored events data and display each item as a BlogCard */}
                    {displayedCards.map((card, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="blog-card1">
                                <BlogCard
                                
                                    gradimg={Logo} // Image for the card
                                    author={card.EventOrganizer} // Author of the event
                                    blogimgid={"grad-img" + (index + 1)} // Unique ID for the image
                                    h1cont={card.Title} // Title of the event
                                    h1id={"grad" + (index + 1) + "-cont1"} // Unique ID for the title
                                    graddate={card.Date} // Date of the event
                                    cardType={"Events"} // Type of the card (for styling)
                                    dateid={"graddate" + (index + 1)} // Unique ID for the date
                                    maincont={truncateText(card.DetailDescription,isblog)} // Short description of the event
                                    excescont={card.DetailDescription} // Full description of the event
                                    maincontid={"main-cont-id"} // ID for the main content
                                    btnid={"readmore-grad" + (index + 1)} // Unique ID for the 'Read More' button
                                    readContentFullDetails={card} // Full details for the 'Read More' button
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Toggle between showing more or less events */}
            <div className="text-center m-3">
                <h2 className="text-decoration-underline fs-5 pt-2 pb-2 mb-5 web-color" onClick={toggleShowMore}>
                    {showMore ? 'View Less' : 'View More'}
                </h2>
            </div>
            {/* Render Footer */}
            <FooterSection />
        </div>
    );
}
