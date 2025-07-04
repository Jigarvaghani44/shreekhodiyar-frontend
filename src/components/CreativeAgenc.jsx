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
            title: "Digital Marketing",
            icon: "📈",
            description: "Data-driven campaigns for maximum ROI",
            features: [
                "SEO & Content Marketing",
                "Social Media Management",
                "PPC & Performance Marketing",
                "Email Marketing Automation"
            ]
        },
        {
            title: "Web Development",
            icon: "🌐",
            description: "High-performance websites & web apps",
            features: [
                "Custom CMS Development",
                "E-Commerce Solutions",
                "Responsive Design",
                "API Integrations"
            ]
        },
        // {
        //     title: "Mobile Apps",
        //     icon: "📱",
        //     description: "Cross-platform mobile solutions",
        //     features: [
        //         "iOS & Android Development",
        //         "React Native Apps",
        //         "App Store Optimization",
        //         "Enterprise Mobility"
        //     ]
        // },
        {
            title: "Software Solutions",
            icon: "💻",
            description: "Custom business applications",
            features: [
                "ERP/CRM Development",
                "Cloud Solutions",
                "AI & ML Integration",
                "Legacy System Modernization"
            ]
        }
    ];

    const stats = [
        { value: "50+", label: "Projects Completed" },
        { value: "100%", label: "Client Retention" },
        { value: "3+", label: "Years Experience" },
        { value: "50+", label: "Happy Clients" }
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
                    className="mb-20"
                >
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    About <span className="text-blue-600">ShreeKhodiyar TechnoStack</span>
                                </h2>
                                <div className="prose text-gray-600 max-w-none">
                                    <p>
                                        <strong>ShreeKhodiyarTechnoStack</strong> is a premier digital solutions provider specializing in comprehensive <strong>digital marketing services</strong> and <strong>custom software development</strong>. We combine technical expertise with creative marketing strategies to deliver measurable business results.
                                    </p>
                                    <p>
                                        Our team of certified professionals stays ahead of industry trends to provide cutting-edge solutions in <strong>SEO, social media marketing, web development, mobile applications</strong>, and <strong>enterprise software solutions</strong>.
                                    </p>
                                    <p>
                                        We pride ourselves on building long-term partnerships with our clients, helping them navigate the digital landscape with confidence and achieve sustainable growth.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div
                                    className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                                    onClick={toggleVideo}
                                    onMouseEnter={() => setIsVideoHovered(true)}
                                    onMouseLeave={() => setIsVideoHovered(false)}
                                >
                                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                        <AnimatePresence>
                                            {!videoPlaying && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{
                                                        opacity: isVideoHovered ? 1 : 0.8,
                                                        scale: isVideoHovered ? 1.1 : 1
                                                    }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute inset-0 flex items-center justify-center"
                                                >
                                                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110">
                                                        <FiPlay className="text-2xl ml-1" />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {videoPlaying && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black">
                                                <video
                                                    controls
                                                    autoPlay
                                                    className="w-full h-full object-cover"
                                                >
                                                    <source
                                                        src="/company-showreel.mp4"
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