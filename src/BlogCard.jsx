import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({
    gradimg, // Image for the card
    author, // Author of the event/news
    blogimgid, // Unique ID for the image
    h1cont, // Title of the card
    h1id, // Unique ID for the title
    graddate, // Date of the event/news
    maincont, // Short description of the event/news
    dateid, // Unique ID for the date
    maincontid, // Unique ID for the main content
    btnid, // Unique ID for the "Read More" button
    readContentFullDetails, // Full details for the card
    cardType // Type of the card ("Events" or "LatestNews")
}) {
    // Initialize the navigation hook to navigate between pages
    const navigate = useNavigate(); 

    // Function to handle the 'Read More' button click
    const handleReadMore = () => {
        navigate("/Read-more", {
            state: {
                cardData: readContentFullDetails, // Pass the entire card data to the next page
                title: h1cont, // Pass the title for reference
                cardType: cardType // Pass the card type ("Events" or "LatestNews")
            }
        });
    };

    // Format the date to add ordinal suffix and convert it to a readable format
    const date = formatDateToOrdinal(graddate);

    return (
        <div className='card blog-card-style'>
            <div>
                {/* Render the card image */}
                <img src={gradimg} alt="grad-img" className="blog-card-img" id={blogimgid} />
            </div>
            <div className="card-body">
                {/* Render the title of the blog card */}
                <h4 id={h1id} className="blog-card-header text-center"><strong>{h1cont}</strong></h4>
                
                {/* Render the author of the event/news */}
                <b className="text-center fs-6 ">{author}</b>
                
                {/* Render the formatted date */}
                <p className="text-muted text-center fs-5" id={dateid}>{date}</p>
                
                {/* Render the short description of the event/news */}
                <p id={maincontid} className='text-justify'>
                    {maincont}
                </p>
                
                {/* 'Read More' button */}
                <div className="text-center m-3">
                    <button
                        className="login-style2 fs-6 pt-2 pb-2"
                        onClick={handleReadMore} // Trigger the 'Read More' functionality
                        id={btnid} // Assign unique ID to the button
                    >
                        <b>Read More</b>
                    </button>
                </div>
            </div>
        </div>
    );
}

// Function to format the date into a readable string with ordinal suffix (e.g., 1st, 2nd, 3rd, etc.)
function formatDateToOrdinal(dateString) {
    const date = new Date(dateString); // Convert string to Date object
    const day = date.getDate(); // Get day
    const month = date.toLocaleString('en-US', { month: 'long' }); // Get full month name
    const year = date.getFullYear(); // Get year

    // Function to add ordinal suffix (1st, 2nd, 3rd, etc.)
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return "th"; // Handles the 11th-13th cases
        switch (day % 10) {
            case 1: return "st"; // 1st
            case 2: return "nd"; // 2nd
            case 3: return "rd"; // 3rd
            default: return "th"; // 4th, 5th, etc.
        }
    }

    // Return the formatted date as a string with the ordinal suffix
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}
