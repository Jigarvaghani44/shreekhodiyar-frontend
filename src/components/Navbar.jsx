import { useState, useEffect } from "react";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaTools,
    FaBriefcase,
    FaUserGraduate,
    FaInfoCircle,
    FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: "Home", icon: <FaHome className="nav-icon" />, path: "/" },
        { name: "Service", icon: <FaTools className="nav-icon" />, path: "/services" },
        { name: "Portfolio", icon: <FaBriefcase className="nav-icon" />, path: "/portfolio" },
        { name: "Career", icon: <FaUserGraduate className="nav-icon" />, path: "/carrer" },
        { name: "About Us", icon: <FaInfoCircle className="nav-icon" />, path: "/about" },
    ];

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""} `}>
            <div className="navbar-container">
                {/* Logo */}
                <a href="/" className="navbar-logo">
                    <img
                        src="/unitechlogo1.png"
                        alt="UniTechnoStack logo"
                        className="logo-image"
                    /> &nbsp;&nbsp;<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-2xl font-bold'>UniTechnoStack</span>
                </a>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="desktop-nav">
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.path}
                            className="nav-item"
                        >
                            {item.icon}
                            < span className="nav-text" > {item.name}</span>
                        </a>
                    ))}
                    <button className="enquiry-button">
                        <FaEnvelope className="nav-icon" />
                        <span className="enquiry-text"><a href="/quickenquiry">Quick Enquiry</a></span>
                    </button>
                </div>

                {/* Mobile Menu Button - Hidden on desktop */}
                <button
                    onClick={toggleMenu}
                    className="mobile-menu-button"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div >

            {/* Mobile Menu */}
            < AnimatePresence >
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mobile-menu-overlay"
                            onClick={toggleMenu}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                            className="mobile-menu"
                        >
                            <div className="mobile-menu-header">
                                <a href="/" className="mobile-logo">
                                    {/* <img
                                        src="/s1logo.webp"
                                        alt="softSprite Logo"
                                        className="mobile-logo-image"
                                    /> */}<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-2xl font-bold'>UniTechnoStack</span>
                                </a>
                                {/* <button
                                    onClick={toggleMenu}
                                    className="mobile-close-button"
                                    aria-label="Close Menu"
                                >
                                    <FaTimes size={24} />
                                </button> */}
                            </div>

                            <div className="mobile-nav-items">
                                {navItems.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.path}
                                        className="mobile-nav-item"
                                        onClick={toggleMenu}
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </a>
                                ))}
                                <button className="mobile-enquiry-button ">
                                    <FaEnvelope className="nav-icon" />
                                    <span><a href="/quickenquiry">Quick Enquiry</a></span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence >
        </nav >
    );
};

export default Navbar;