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
            description: "We thrive on innovation, crafting solutions that truly stand out. Our tech experts stay abreast of the latest technologies and integrate them into developing your solutions.",
            emoji: "🚀"
        },
        {
            icon: <FaMoneyBillWave className="text-green-500" size={28} />,
            title: "Cost Effectiveness",
            description: "Investing in your business idea is significant, and we guarantee top-notch software development services with the latest technology at the most affordable prices.",
            emoji: "💰"
        },
        {
            icon: <FaUsers className="text-blue-400" size={28} />,
            title: "Dedicated Team",
            description: "Since our inception, we've been proud of our exceptionally creative team, which has allowed us to successfully complete over 800 projects.",
            emoji: "👥"
        },
        {
            icon: <FaChartLine className="text-purple-500" size={28} />,
            title: "Industry Expertise",
            description: "Our persistent team thrives on exploring new horizons, crafting innovative IT solutions that cater to a wide range of industries and audiences.",
            emoji: "🧠"
        },
        {
            icon: <FaCheckCircle className="text-red-500" size={28} />,
            title: "Assured Quality",
            description: "We rigorously test each solution for compatibility, performance, errors, functionality issues, and bugs, delivering only after multiple tests on the specific platform.",
            emoji: "✅"
        },
        {
            icon: <FaTools className="text-orange-500" size={28} />,
            title: "Customized Solutions",
            description: "We specialize in creating tailored software solutions that precisely meet your unique business needs, ensuring efficiency and strategic alignment.",
            emoji: "🛠️"
        }
    ];

    const benefits = [
        {
            icon: <FaRocket className="text-blue-500" size={24} />,
            title: "Driven by Innovation",
            text: "We push boundaries to design future-ready solutions"
        },
        {
            icon: <FaBrain className="text-purple-500" size={24} />,
            title: "Deep Industry Knowledge",
            text: "Our professionals bring insights from diverse sectors"
        },
        {
            icon: <FaHandHoldingUsd className="text-green-500" size={24} />,
            title: "Affordable Excellence",
            text: "High-quality development with budget-conscious pricing"
        },
        {
            icon: <FaShieldAlt className="text-red-500" size={24} />,
            title: "Uncompromised Quality",
            text: "Rigorous multi-phase testing for flawless performance"
        },
        {
            icon: <FaUserTie className="text-yellow-500" size={24} />,
            title: "Skilled & Dedicated",
            text: "800+ success stories delivered by our talented team"
        },
        {
            icon: <FaCogs className="text-orange-500" size={24} />,
            title: "Tailored for Your Needs",
            text: "Custom solutions matching your specific goals"
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
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            ref={ref}
            className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
            itemScope
            itemType="http://schema.org/WebPage"
        >
            <div className="max-w-7xl mx-auto">
                {/* SEO-optimized header */}
                <header className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                        itemProp="headline"
                    >
                        Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">UniTechnoStack</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6"
                    >
                        What Sets Us Apart in the Digital Landscape
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-4xl mx-auto"
                        itemProp="description"
                    >
                        We understand that the digital landscape is constantly evolving. That&apos;s why we are dedicated to staying ahead of the curve, harnessing the latest technologies and methodologies to create robust, scalable, and innovative software solutions.
                    </motion.p>
                </header>

                {/* Animated decorative elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative mb-16"
                >
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-10" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm max-w-5xl mx-auto border border-gray-200"
                    >
                        <p className="text-xl text-gray-700">
                            At <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">UniTechnoStack</span>, we redefine excellence through a commitment to unparalleled service and innovation. Here&apos;s why choosing us is your best decision:
                        </p>
                    </motion.div>
                </motion.div>

                {/* Features Grid with advanced animations */}
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
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 text-6xl opacity-10 transform translate-x-4 -translate-y-4">
                                    {feature.emoji}
                                </div>
                                <div className="flex items-center mb-6 z-10 relative">
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        className="p-4 rounded-2xl bg-opacity-20 bg-gray-100 mr-4"
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900" itemProp="name">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 z-10 relative" itemProp="description">
                                    {feature.description}
                                </p>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Benefits section with staggered animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                        Why Partner With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Us</span>
                    </h3>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                        Empowering Innovation, Delivering Results<br />
                        In the ever-evolving world of technology, we stay ahead by embracing change, leveraging cutting-edge tools, and delivering software solutions that are both visionary and reliable.
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
                                className="bg-white rounded-xl p-6 text-left shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 rounded-lg bg-opacity-20 bg-gray-100 mr-4">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900">{benefit.title}</h4>
                                </div>
                                <p className="text-gray-600">{benefit.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Animated CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-0.5">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl text-lg"
                        >
                            <a href="/quickenquiry">Start Your Project Today</a>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;