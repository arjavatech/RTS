import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';


export default function HomeHeader() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false); // State to toggle fixed class
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev); // Fixed toggle logic
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isSidebarOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                !event.target.classList.contains('navbar-toggler')
            ) {
                setIsSidebarOpen(false);
            }
        };

        const handleScroll = () => {
            // Check scroll position to toggle fixed header
            if (window.scrollY > 50) {
                if (!isFixed) {
                    setIsFixed(true);
                }
            } else {
                if (isFixed) {
                    setIsFixed(false);
                }
            }
        };

        // Add event listeners
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        // Initial scroll check in case the page loads with scroll
        handleScroll();

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSidebarOpen, isFixed]);

    return (
        <>
            <nav className={`navbar navbar-expand-xl navbar-dark nav-style-row ${isFixed ? 'fixed-header' : ''}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            id="logo"
                            alt="Logo"
                            className={isFixed ? 'small-logo' : 'large-logo'}
                        />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSidebar} // Correctly toggles sidebar
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse nav-style" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            {['/RTS', '/About-Us', '/Student-Section', '/Parent-Section', '/Volunteer', '/Academics', '/Blog & Events', '/ContactUs'].map((path, index) => (
                                <li className="nav-item" key={index}>
                                    <Link
                                        className={`nav-link fs-5 text-dark ${location.pathname === path ? 'active' : ''}`}
                                        to={path}
                                    >
                                        {path === '/RTS'
                                            ? 'Home'
                                            : path
                                                .replace('/', '')
                                                .replace(/-/g, ' ')
                                                .replace(/([a-z])([A-Z])/g, '$1 $2')
                                                .trim()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
            >
                <button className="close-btn" onClick={toggleSidebar}>
                    &times;
                </button>
                <ul>
                    {['/RTS', '/About-Us', '/Student-Section', '/Parent-Section', '/Volunteer', '/Academics', '/Blog & Events', '/ContactUs'].map((path, index) => (
                        <li key={index}>
                            <Link
                                className={`sidebar-link ${location.pathname === path ? 'active' : ''}`}
                                to={path}
                                onClick={toggleSidebar}
                            >
                                {path === '/RTS'
                                    ? 'Home'
                                    : path
                                        .replace('/', '')
                                        .replace(/-/g, ' ')
                                        .replace(/([a-z])([A-Z])/g, '$1 $2')
                                        .trim()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}



export function Header({ headVal }) {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="bg-img-header d-flex align-items-center justify-content-center text-center p-4">
                    <h2 className="header-title">{headVal}</h2>
                </div>
            </div>
        </>
    );
}
