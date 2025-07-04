// components/DigitalMarketingPage.jsx
import React, { useState } from 'react';
import { FiArrowRight, FiSearch, FiCheck, FiBarChart2, FiTrendingUp, FiTarget, FiDollarSign, FiMail, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const DigitalFirst = () => {


    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-28 px-4 sm:px-6 lg:px-8">
                {/* Dynamic background elements */}
                <div className="absolute inset-0 opacity-30 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                x: [0, Math.random() * 100 - 50],
                                y: [0, Math.random() * 100 - 50],
                                rotate: [0, 180]
                            }}
                            transition={{
                                duration: 15 + Math.random() * 15,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                            className="absolute rounded-lg bg-white"
                            style={{
                                width: `${Math.random() * 300 + 100}px`,
                                height: `${Math.random() * 300 + 100}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.2 + 0.1
                            }}
                        />
                    ))}
                </div>
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 mt-28">
                            Data-Driven <span className="text-indigo-300">Digital Marketing</span> Solutions
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            We deliver measurable results through strategic marketing campaigns tailored to your business goals.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Proven</span> Results
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We measure success by the growth we create for our clients
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <FiTrendingUp size={32} className="text-indigo-600" />, value: "300%+", label: "Average Traffic Growth" },
                            { icon: <FiDollarSign size={32} className="text-indigo-600" />, value: "5.2x", label: "Average ROI" },
                            { icon: <FiTarget size={32} className="text-indigo-600" />, value: "85%", label: "Client Retention Rate" },
                            { icon: <FiBarChart2 size={32} className="text-indigo-600" />, value: "10M+", label: "Monthly Impressions" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm text-center"
                            >
                                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>






        </div>
    );
};

export default DigitalFirst;