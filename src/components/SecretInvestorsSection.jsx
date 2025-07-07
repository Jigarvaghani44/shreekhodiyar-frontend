/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiTrendingUp, FiGlobe, FiBriefcase, FiHeart, FiZap, FiClock } from 'react-icons/fi';

// Secret Investors Component
const SecretInvestors = () => {
    const investors = [
        {
            id: 1,
            name: "Discipline",
            icon: "👔",
            image: "abrahimlinkendiciplin.jpeg", // Update with your image path
            description: "Our unwavering commitment to process and excellence",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
        },
        {
            id: 2,
            name: "Humour",
            icon: "😂",
            image: "alonmuskhumore.jpeg",
            description: "Joy and creativity fuel our innovation",
            bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
        },
        {
            id: 3,
            name: "Creativity",
            icon: "🎨",
            image: "stevejobscreativity.jpeg",
            description: "The spark behind every breakthrough solution",
            bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100"
        },
        {
            id: 4,
            name: "Genius",
            icon: "🧠",
            image: "albertainstaingenius.jpeg",
            description: "Exceptional minds solving complex problems",
            bgColor: "bg-gradient-to-br from-green-50 to-green-100"
        },
        {
            id: 5,
            name: "Ethics",
            icon: "⚖️",
            image: "tataethics.jpg",
            description: "Integrity guides every decision we make",
            bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100"
        },
        {
            id: 6,
            name: "Leadership",
            icon: "🛡️",
            image: "sardarpatelleadership.jpeg",
            description: "Steadfast leadership that unites and inspires",
            bgColor: "bg-gradient-to-br from-red-50 to-red-100"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Secret Investors</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The intangible forces that power our innovation and success
                    </p>
                </motion.div>

                {/* Investors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
                    {investors.map((investor, index) => (
                        <motion.div
                            key={investor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="group"
                        >
                            <div className={`${investor.bgColor} rounded-2xl p-1 h-full transition-all duration-300 group-hover:shadow-lg`}>
                                <div className="bg-white rounded-xl p-6 h-full flex flex-col items-center text-center">
                                    {/* Investor Image */}
                                    <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img
                                            src={investor.image}
                                            alt={investor.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                                    </div>

                                    {/* Investor Details */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{investor.name}</h3>
                                    <p className="text-gray-600">{investor.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default SecretInvestors;