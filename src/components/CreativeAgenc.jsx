/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const ShreeKhodiyarTechnoStack = () => {




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


            </div>
        </div>
    );
};

export default ShreeKhodiyarTechnoStack;