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
            description: "We thrive on innovation, crafting standout digital solutions. Our tech experts continuously adopt the latest technologies to keep your business ahead.",
            emoji: "🚀"
        },
        {
            icon: <FaMoneyBillWave className="text-green-400" size={28} />,
            title: "Cost Effective",
            description: "We provide affordable software development with cutting-edge technologies, delivering maximum return on investment (ROI).",
            emoji: "💰"
        },
        {
            icon: <FaUsers className="text-blue-400" size={28} />,
            title: "Dedicated Team",
            description: "Our skilled professionals consistently deliver high-quality digital products with creativity, agility, and precision.",
            emoji: "👥"
        },
        {
            icon: <FaChartLine className="text-purple-400" size={28} />,
            title: "Industry Expertise",
            description: "We combine domain-specific insights with technical expertise to build tailored IT solutions across industries.",
            emoji: "🧠"
        },
        {
            icon: <FaCheckCircle className="text-red-400" size={28} />,
            title: "Quality Assurance",
            description: "Our QA processes include rigorous testing for compatibility, performance, and security to ensure a flawless product.",
            emoji: "✅"
        },
        {
            icon: <FaTools className="text-orange-400" size={28} />,
            title: "Custom Solutions",
            description: "We develop tailored software applications aligned with your business goals, improving efficiency and performance.",
            emoji: "🛠️"
        }
    ];


    const benefits = [
        {
            icon: <FaRocket className="text-blue-400" size={24} />,
            title: "Innovation Focused",
            text: "We push boundaries to design future-ready digital solutions."
        },
        {
            icon: <FaBrain className="text-purple-400" size={24} />,
            title: "Technical Expertise",
            text: "Our team offers deep platform knowledge across tech stacks and frameworks."
        },
        {
            icon: <FaHandHoldingUsd className="text-green-400" size={24} />,
            title: "Competitive Pricing",
            text: "Enterprise-grade services at affordable prices to maximize value."
        },
        {
            icon: <FaShieldAlt className="text-red-400" size={24} />,
            title: "Quality Commitment",
            text: "Multi-stage QA testing ensures every solution meets the highest standards."
        },
        {
            icon: <FaUserTie className="text-yellow-400" size={24} />,
            title: "Experienced Team",
            text: "We bring a proven track record across global markets and verticals."
        },
        {
            icon: <FaCogs className="text-orange-400" size={24} />,
            title: "Tailored Approach",
            text: "Every project is built with a client-specific strategy for real impact."
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
                        Your Trusted Partner in Digital Innovation
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-4xl mx-auto"
                        itemProp="description"
                    >
                        At <strong>Shree Khodiyar Technostack</strong>, we deliver high-performance digital solutions that help you stand out. Whether it's custom software, mobile apps, web platforms, or marketing strategies — we combine innovation, reliability, and speed to accelerate your business growth globally.
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
                            At <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Shree Khodiyar Technostack</span>, we deliver next-gen digital solutions powered by innovation, precision, and a results-driven mindset. Discover why global businesses trust us to elevate their digital presence.
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
                        At <strong>Shree Khodiyar Technostack</strong>, we merge technical excellence with business intelligence to deliver impactful, scalable digital solutions.<br />
                        By continuously embracing innovation, we ensure high-performance outcomes while staying committed to quality, reliability, and client success worldwide.
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
                        <a href="/quickenquiry"><motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gray-900 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            Start Your Project Today
                        </motion.button></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;