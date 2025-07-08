/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiPlay, FiArrowRight } from 'react-icons/fi';

const ShreeKhodiyarTechnoStack = () => {
    const [isVideoHovered, setIsVideoHovered] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);

    const toggleVideo = () => {
        setVideoPlaying(!videoPlaying);
    };

    const services = [
        {
            title: "Digital Marketing Services",
            icon: "📈",
            description: "Result-oriented digital marketing campaigns to increase traffic, leads, and revenue worldwide.",
            features: [
                "SEO & Content Marketing for Organic Growth",
                "Social Media Management (Facebook, Instagram, LinkedIn)",
                "Google Ads & Performance Marketing (PPC)",
                "Email Marketing & Automation for Lead Nurturing"
            ]
        },
        {
            title: "Web Development Services",
            icon: "🌐",
            description: "Custom, fast, and SEO-optimized websites built to scale your brand and increase conversions.",
            features: [
                "Custom CMS Development (WordPress, Headless CMS)",
                "E-Commerce Solutions (Shopify, WooCommerce)",
                "Mobile-Responsive & UX-Centric Design",
                "API Integrations & Third-Party Services"
            ]
        },
        {
            title: "Custom Software Solutions",
            icon: "💻",
            description: "Tailored software applications built for scalability, automation, and digital transformation.",
            features: [
                "ERP & CRM Development (Python/Django, Node.js)",
                "Cloud-Based Web & Desktop Solutions",
                "AI & Machine Learning Integration",
                "Legacy System Modernization & Migration"
            ]
        }
    ];




    return (
        <div className="bg-white overflow-hidden">
            {/* Floating background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
                            y: [0, 50 * (i % 3)],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        className={`absolute ${i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'} opacity-5 rounded-full`}
                        style={{
                            width: `${100 + i * 50}px`,
                            height: `${100 + i * 50}px`,
                            top: `${10 + i * 15}%`,
                            left: `${5 + i * 10}%`
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-6"
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            Award-Winning Digital Solutions
                        </span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            ShreeKhodiyar TechnoStack
                        </span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 mb-8 max-w-3xl mx-auto">
                        Transforming businesses with innovative <span className="font-semibold">digital marketing</span> and <span className="font-semibold">software solutions</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2 text-left">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* About Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Text Content */}
                                <div className="p-8 md:p-12 order-2 lg:order-1">
                                    <div className="max-w-lg mx-auto lg:mx-0">
                                        <div className="flex items-center mb-6">
                                            <div className="h-1 w-12 bg-blue-600 rounded-full mr-4" />
                                            <h2 className="text-sm font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 uppercase">
                                                About Us
                                            </h2>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                            Transforming Businesses Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Digital Excellence</span>
                                        </h3>

                                        <div className="space-y-6 text-gray-600">
                                            <p className="text-lg leading-relaxed">
                                                <strong className="text-gray-800">ShreeKhodiyar TechnoStack</strong> is a premier digital solutions provider specializing in  custom software development and data-driven marketing strategies. We combine technical expertise with creative vision to deliver measurable business outcomes.
                                            </p>

                                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                                <p className="text-blue-800">
                                                    "Our mission is to empower businesses with innovative digital solutions that drive growth and create competitive advantages in today's fast-paced market."
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-gray-600">
                                                        <span className="font-medium text-gray-800">50+</span> Successful Projects
                                                    </p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-gray-600">
                                                        <span className="font-medium text-gray-800">15+</span> Industry Verticals
                                                    </p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-gray-600">
                                                        <span className="font-medium text-gray-800">98%</span> Client Satisfaction
                                                    </p>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <p className="ml-3 text-gray-600">
                                                        <span className="font-medium text-gray-800">3+</span> Years Experience
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Video/Image Content */}
                                <div className="relative order-1 lg:order-2">
                                    <div className="aspect-w-16 aspect-h-9 w-full h-full min-h-[400px] lg:min-h-full">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center cursor-pointer"
                                            onClick={toggleVideo}
                                            onMouseEnter={() => setIsVideoHovered(true)}
                                            onMouseLeave={() => setIsVideoHovered(false)}
                                        >
                                            {!videoPlaying ? (
                                                <>
                                                    <AnimatePresence>
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{
                                                                opacity: isVideoHovered ? 1 : 0.9,
                                                                scale: isVideoHovered ? 1.05 : 1
                                                            }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="absolute inset-0 flex items-center justify-center"
                                                        >
                                                            <div className="absolute inset-0 bg-black opacity-30" />
                                                            <div className="relative z-10 w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center text-blue-600 shadow-xl transform transition-all duration-300 hover:scale-110">
                                                                <FiPlay className="text-2xl ml-1" />
                                                            </div>
                                                        </motion.div>
                                                    </AnimatePresence>
                                                    <div className="absolute bottom-6 left-6 z-10">
                                                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-black bg-opacity-50">
                                                            Watch Our Story
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black">
                                                    <video
                                                        controls
                                                        autoPlay
                                                        className="w-full object-cover"
                                                    >
                                                        <source
                                                            src="https://www.digitalsilk.com/wp-content/uploads/2025/04/Digital-Silk-Showreel-Video.mp4"
                                                            type="video/mp4"
                                                        />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>



                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help grow your business with our customized solutions.
                    </p>
                    <a href="/quickenquiry">   <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        Get Started <FiArrowRight className="inline ml-2" />
                    </motion.button></a>

                </motion.section>
            </div>
        </div>
    );
};

export default ShreeKhodiyarTechnoStack;