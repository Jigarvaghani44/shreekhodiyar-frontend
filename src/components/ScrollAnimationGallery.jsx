import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ScrollAnimationGallery = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = [
        "Boost Your Online Presence Globally",
        "Grow Your Business with Digital Marketing",
        "Increase Your Revenue Through SEO & PPC",
        "Dominate Your Market with a Powerful Brand"
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) =>
                prevIndex === texts.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full mix-blend-overlay animate-pulse" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 rounded-full mix-blend-overlay animate-bounce" />
                <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-pink-400 rounded-full mix-blend-overlay animate-spin" />
            </div>

            {/* Main container */}
            <div className="md:container mx-auto px-6 py-24 md:py-32 lg:py-40 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Left Content */}
                    <motion.div
                        className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Digital Marketing Solutions That <span className="text-yellow-300">{texts[currentTextIndex]}</span>
                        </h1>

                        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0">
                            We help businesses like yours increase online visibility, generate more leads, and convert them into loyal customers with our data-driven marketing strategies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all flex items-center"
                            >
                                Get Free Consultation <FiArrowRight className="ml-2" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent hover:bg-white hover:bg-opacity-10 border-2 border-white px-8 py-3 rounded-lg transition-all flex items-center"
                            >
                                Our Services
                            </motion.button>
                        </div>

                        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                            {["SEO Optimized", "Performance Tracking", "ROI Focused"].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <FiCheckCircle className="text-green-300 mr-2" />
                                    <span>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="w-full h-full bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-1">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80"
                                    alt="Digital marketing team"
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                    width="800"
                                    height="600"
                                />
                            </div>

                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-4 rounded-lg shadow-lg hidden md:block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-sm font-semibold">+100%</div>
                                <div className="text-xs">Client Growth</div>
                            </motion.div>

                            <motion.div
                                className="absolute -top-6 -right-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg hidden md:block"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-sm font-semibold">#1</div>
                                <div className="text-xs">In Marketing</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    );
};

export default ScrollAnimationGallery;
