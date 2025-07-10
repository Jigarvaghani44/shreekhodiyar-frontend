/* eslint-disable no-console */
/* eslint-disable no-alert */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import {
    FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
    FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
    FaChevronUp
} from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import LocationFooter from './LocationFooter';


// import { SiUpwork, SiFiverr } from 'react-icons/si';

const Footer = () => {
    const [formData, setFormData] = useState({
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm);

        const contactPayload = {
            email: data.email,
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactPayload),
            });

            if (!response.ok) {
                throw new Error("Failed to submit contact form");
            }

            setIsSubmitted(true);
        } catch (err) {
            console.error("Submission error:", err);
            alert("Failed to submit form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const footerLinks = [
        {
            title: "Services",
            links: [
                { name: "Degital marketing", url: "/digmarket" },
                { name: "Web Development", url: "/webdev" },
                { name: "Mobile Apps", url: "/mobileapp" },
                { name: "Game Development", url: "/gamedev" },
                { name: "UI/UX Design", url: "/uiux" },
                { name: "Shopify Webdevelopment", url: "/shopdev" },

            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", url: "/about" },
                { name: "Careers", url: "/carrer" },
                { name: "Contact", url: "/quickenquiry" },
                { name: "Faqs", url: "/faqspage" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", url: "/blogs" },
                // { name: "Case Studies", url: "/casestudy" },
                { name: "Work", url: "/portfolio" },
                { name: "Testimonials", url: "/testimonials" }

            ]
        }
    ];



    const socialLinks = [
        { icon: <FaFacebook />, url: "#", name: "Facebook" },
        // { icon: <FaTwitter />, url: "#", name: "Twitter" },
        { icon: <FaLinkedin />, url: "#", name: "LinkedIn" },
        { icon: <FaInstagram />, url: "#", name: "Instagram" },
        // { icon: <SiUpwork />, url: "#", name: "Upwork" },
        // { icon: <SiFiverr />, url: "#", name: "Fiverr" }
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
                    {/* Company info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            <img src="shreelogo.png" alt="ShreeKhodiyarTechnoStack" />
                        </h3>
                        <p className="text-gray-300">
                            Transforming ideas into digital reality through innovative technology solutions and creative design.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.slice(0, 4).map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.name}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="text-gray-300 hover:text-white transition-colors text-xl"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            {socialLinks.slice(4).map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.name}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="text-gray-300 hover:text-white transition-colors text-xl"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Footer links */}
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-4"
                        >
                            <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <motion.a
                                            href={link.url}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                                        >
                                            <span className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Contact info */}

                </div>
                <LocationFooter />

                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 mb-12 border border-gray-700/50"
                >

                    {isSubmitted ? (
                        <div className=" rounded-2xl  sm:p-10 text-center">
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring" }}
                                className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto "
                            >
                                <FiCheck className="text-green-500 text-4xl" />
                            </motion.div>
                            <h2 className="text-2xl font-bold  text-white">Thank You!</h2>
                            <p className="text-white ">
                                You&apos;ve successfully subscribed to our newsletter. Stay tuned for updates and offers!.
                            </p>

                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
                                <p className="text-gray-300">Subscribe to our newsletter for the latest updates</p>
                            </div>
                            <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    className="px-4 py-3 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    aria-label="Email for newsletter subscription"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-r-lg font-medium hover:opacity-90 transition-opacity"
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                        </div>)}


                </motion.div>

                {/* Bottom footer */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-gray-400 text-sm mb-4 md:mb-0"
                    >
                        © {new Date().getFullYear()} ShreeKhodiyarTechnoStack. All rights reserved.
                    </motion.p>

                    <div className="flex space-x-6">
                        <motion.a
                            href="/privacy"
                            whileHover={{ scale: 1.05 }}
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a
                            href="/termsconditions"
                            whileHover={{ scale: 1.05 }}
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Terms of Service
                        </motion.a>
                        <motion.a
                            href="/cookiepolicy"
                            whileHover={{ scale: 1.05 }}
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            Cookie Policy
                        </motion.a>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Scroll to top"
                        className="mt-4 md:mt-0 flex items-center justify-center w-10 h-10 rounded-full md:mr-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    >
                        <FaChevronUp />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;