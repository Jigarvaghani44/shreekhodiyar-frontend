/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
// import { Helmet } from 'react-helmet';

const InteractiveServices = () => {
    const services = [
        {
            title: "E-commerce Solutions",
            description: "Get a fully functional, secure, and scalable e-commerce website that drives sales and enhances customer experience.",
            icon: "🛒",
            color: "bg-gradient-to-br from-purple-600 to-indigo-600"
        },
        {
            title: "Custom Web Design",
            description: "Your business is unique, and so should be your website! We craft stunning, user-friendly designs tailored to your brand.",
            icon: "🎨",
            color: "bg-gradient-to-br from-blue-500 to-cyan-500"
        },
        {
            title: "Landing Page Development",
            description: "Increase conversions with high-converting, SEO-optimized landing pages designed to capture leads and boost sales!",
            icon: "📈",
            color: "bg-gradient-to-br from-green-500 to-teal-600"
        },
        {
            title: "Facebook & Google Ads",
            description: "Expand your reach with data-driven ad strategies tailored to your business goals for maximum ROI.",
            icon: "📢",
            color: "bg-gradient-to-br from-amber-500 to-orange-500"
        },
        {
            title: "On-Page SEO",
            description: "Rank higher on search engines with expert SEO strategies to optimize content, structure, and performance.",
            icon: "🔍",
            color: "bg-gradient-to-br from-red-500 to-pink-600"
        },
        {
            title: "Website Optimization",
            description: "Enhance speed, security, and performance for a seamless user experience that keeps visitors engaged.",
            icon: "⚡",
            color: "bg-gradient-to-br from-emerald-500 to-green-600"
        },
        {
            title: "Paid Advertising Management",
            description: "Maximize ROI with highly targeted Facebook & Google Ads campaigns that drive real results!",
            icon: "💰",
            color: "bg-gradient-to-br from-yellow-500 to-amber-500"
        },
        {
            title: "Creative Content Creation",
            description: "From compelling ad creatives to engaging social media posts, we craft high-quality content.",
            icon: "✏️",
            color: "bg-gradient-to-br from-fuchsia-500 to-purple-500"
        },
        {
            title: "Software Solutions",
            description: "We provide dedicated solutions to keep your online business running smoothly with expert consultation.",
            icon: "💻",
            color: "bg-gradient-to-br from-gray-600 to-blue-500"
        }
    ];

    const [expandedCard, setExpandedCard] = useState(null);

    const ServiceCard = ({ service, index }) => {
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        const handleMouseMove = (e) => {
            const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - left - width / 2);
            mouseY.set(e.clientY - top - height / 2);
        };

        //     const transform = useMotionTemplate`
        //   rotateX(${mouseY}deg)
        //   rotateY(${mouseX}deg)
        //   scale(${expandedCard === index ? 1.05 : 1})
        // `;

        return (
            <motion.div
                className={`relative rounded-2xl overflow-hidden cursor-pointer ${expandedCard === index ? 'z-10' : ''}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    mouseX.set(0);
                    mouseY.set(0);
                }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                // style={{ transform }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <div className={`absolute inset-0 ${service.color} opacity-90`} />
                <div className="relative z-10 p-6 h-full flex flex-col">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <AnimatePresence>
                        {expandedCard === index && (
                            <motion.p
                                className="text-gray-200"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {service.description}
                            </motion.p>
                        )}
                    </AnimatePresence>
                    <div className="mt-auto pt-4">
                        <div className={`w-8 h-1 rounded-full ${expandedCard === index ? 'bg-white' : 'bg-white/50'}`} />
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">

            <title>Digital Marketing Agency | SEO, Social Media, Ads | ShreeKhodiyar Technostack</title>
            <meta name="description" content="Boost your brand with a full-service digital marketing agency offering SEO, PPC, social media marketing, and content strategies." />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Our Digital Services
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Tap any card to reveal how we can transform your online presence
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-xl transition-all">
                        Start Your Digital Transformation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InteractiveServices;