import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';
// App bar 
export default function HomeHeader() {
    const location = useLocation(); // Get the current URL location
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
    const [isFixed, setIsFixed] = useState(false); // State to toggle fixed header on scroll
    const sidebarRef = useRef(null); // Ref for sidebar to detect clicks outside

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        // Function to close sidebar when clicking outside
        const handleClickOutside = (event) => {
            if (
                isSidebarOpen && // Only run if sidebar is open
                sidebarRef.current && 
                !sidebarRef.current.contains(event.target) && // Check if click is outside sidebar
                !event.target.classList.contains('navbar-toggler') // Allow clicking the toggle button
            ) {
                setIsSidebarOpen(false);
            }
        };

        // Function to handle scroll behavior for fixed header
        const handleScroll = () => {
            if (window.scrollY > 50) {
                if (!isFixed) {
                    setIsFixed(true); // Set header as fixed when scrolling down
                }
            } else {
                if (isFixed) {
                    setIsFixed(false); // Remove fixed header when scrolling up
                }
            }
        };

        // Attach event listeners for outside click detection and scroll handling
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        // Initial check in case the page loads with a scrolled position
        handleScroll();

        return () => {
            // Cleanup event listeners when component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSidebarOpen, isFixed]);

    return (
        <>
            {/* Navbar section */}
            <nav className={`navbar navbar-expand-xl navbar-dark nav-style-row ${isFixed ? 'fixed-header' : ''}`}>
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            id="logo"
                            alt="Logo"
                            className={isFixed ? 'small-logo' : 'large-logo'} // Adjust logo size based on scroll state
                        />
                    </a>

                    {/* Sidebar Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSidebar} // Toggle sidebar on button click
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse nav-style" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            {[
                                '/RTS', '/About-Us', '/Student-Section', '/Parent-Section', 
                                '/Volunteer', '/Academics', '/Blog', '/ContactUs'
                            ].map((path, index) => (
                                <li className="nav-item" key={index}>
                                    <Link
                                        className={`nav-link fs-5 text-dark ${location.pathname === path ? 'active' : ''}`}
                                        to={path} // Set link to corresponding route
                                    >
                                        {path === '/RTS'
                                            ? 'Home'
                                            : path === '/Blog' ? 'Blog & Events'
                                            : path.replace('/', '').replace(/-/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim()} 
                                        {/* Format path into readable text */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar section */}
            <div
                ref={sidebarRef}
                className={`sidebar ${isSidebarOpen ? 'open' : ''}`} // Apply 'open' class when sidebar is visible
            >
                {/* Close button */}
                <button className="close-btn" onClick={toggleSidebar}>
                    &times;
                </button>

                {/* Sidebar Links */}
                <ul>
                    {[
                        '/RTS', '/About-Us', '/Student-Section', '/Parent-Section', 
                        '/Volunteer', '/Academics', '/Blog', '/ContactUs'
                    ].map((path, index) => (
                        <li key={index}>
                            <Link
                                className={`sidebar-link ${location.pathname === path ? 'active' : ''}`}
                                to={path}
                                onClick={toggleSidebar} // Close sidebar when link is clicked
                            >
                                {path === '/RTS'
                                    ? 'Home'
                                    : path === '/Blog' ? 'Blog & Events'
                                    : path.replace('/', '').replace(/-/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim()}
                                {/* Format path into readable text */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

// Header component to display section titles
export function Header({ headVal }) {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="bg-img-header d-flex align-items-center justify-content-center text-center p-4">
                    <h2 className="header-title">{headVal}</h2> {/* Display the header title dynamically */}
                </div>
            </div>
        </>
    );
}
