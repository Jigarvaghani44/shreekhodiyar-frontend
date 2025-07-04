import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    FaLightbulb, FaMoneyBillWave, FaUsers,
    FaChartLine, FaCheckCircle, FaTools,
    FaRocket, FaBrain, FaHandHoldingUsd,
    FaShieldAlt, FaUserTie, FaCogs
} from 'react-icons/fa';

const WhyChooseUs = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    const features = [
        {
            icon: <FaLightbulb className="text-yellow-400" size={28} />,
            title: "Innovation Driven",
            description: "We thrive on innovation, crafting solutions that truly stand out. Our tech experts stay abreast of the latest technologies to deliver cutting-edge solutions.",
            emoji: "🚀"
        },
        {
            icon: <FaMoneyBillWave className="text-green-400" size={28} />,
            title: "Cost Effective",
            description: "We deliver premium software development services with the latest technology at competitive prices, ensuring maximum ROI for your investment.",
            emoji: "💰"
        },
        {
            icon: <FaUsers className="text-blue-400" size={28} />,
            title: "Dedicated Team",
            description: "Our team of creative professionals has successfully delivered hundreds of projects with exceptional quality and attention to detail.",
            emoji: "👥"
        },
        {
            icon: <FaChartLine className="text-purple-400" size={28} />,
            title: "Industry Expertise",
            description: "We create innovative IT solutions tailored to diverse industries, combining technical excellence with deep domain knowledge.",
            emoji: "🧠"
        },
        {
            icon: <FaCheckCircle className="text-red-400" size={28} />,
            title: "Quality Assurance",
            description: "Rigorous testing for compatibility, performance, and functionality ensures we deliver flawless solutions that perform exceptionally.",
            emoji: "✅"
        },
        {
            icon: <FaTools className="text-orange-400" size={28} />,
            title: "Custom Solutions",
            description: "We specialize in tailored software that precisely meets your business needs, ensuring optimal efficiency and strategic alignment.",
            emoji: "🛠️"
        }
    ];

    const benefits = [
        {
            icon: <FaRocket className="text-blue-400" size={24} />,
            title: "Innovation Focused",
            text: "We push boundaries to design future-ready digital solutions"
        },
        {
            icon: <FaBrain className="text-purple-400" size={24} />,
            title: "Technical Expertise",
            text: "Our professionals bring deep technical knowledge across platforms"
        },
        {
            icon: <FaHandHoldingUsd className="text-green-400" size={24} />,
            title: "Competitive Pricing",
            text: "Premium development services with budget-friendly pricing"
        },
        {
            icon: <FaShieldAlt className="text-red-400" size={24} />,
            title: "Quality Commitment",
            text: "Multi-phase testing ensures flawless performance"
        },
        {
            icon: <FaUserTie className="text-yellow-400" size={24} />,
            title: "Experienced Team",
            text: "Proven track record with numerous success stories"
        },
        {
            icon: <FaCogs className="text-orange-400" size={24} />,
            title: "Tailored Approach",
            text: "Custom solutions designed for your specific requirements"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardHoverVariants = {
        hover: {
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            ref={ref}
            className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
            itemScope
            itemType="http://schema.org/WebPage"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <header className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                        itemProp="headline"
                    >
                        Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Shree Khodiyar Technostack</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6"
                    >
                        Delivering Excellence in Digital Solutions
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-4xl mx-auto"
                        itemProp="description"
                    >
                        In today's rapidly evolving digital landscape, we combine cutting-edge technology with innovative thinking to create robust, scalable solutions that drive your business forward.
                    </motion.p>
                </header>

                {/* Animated decorative elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative mb-16"
                >
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-600 rounded-full filter blur-3xl opacity-20" />
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-600 rounded-full filter blur-3xl opacity-20" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-sm max-w-5xl mx-auto border border-gray-700"
                    >
                        <p className="text-xl text-gray-300">
                            At <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Shree Khodiyar Technostack</span>, we redefine digital excellence through innovation, quality, and client-focused solutions. Here's what makes us different:
                        </p>
                    </motion.div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {features.map((feature, index) => (
                        <motion.article
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            className="relative group"
                            itemScope
                            itemType="https://schema.org/Service"
                        >
                            <motion.div
                                variants={cardHoverVariants}
                                className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-700 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 text-6xl opacity-10 transform translate-x-4 -translate-y-4">
                                    {feature.emoji}
                                </div>
                                <div className="flex items-center mb-6 z-10 relative">
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        className="p-4 rounded-2xl bg-opacity-20 bg-gray-700 mr-4"
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white" itemProp="name">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 z-10 relative" itemProp="description">
                                    {feature.description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Advantages</span>
                    </h3>
                    <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
                        Combining technical expertise with business acumen to deliver solutions that matter.<br />
                        We stay ahead by embracing innovation while maintaining unwavering commitment to quality and client satisfaction.
                    </p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : {}}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                className="bg-gray-800 rounded-xl p-6 text-left shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-opacity-20 bg-gray-700 mr-4">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white">{benefit.title}</h4>
                                </div>
                                <p className="text-gray-400">{benefit.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-0.5">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gray-900 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            Start Your Project Today
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;