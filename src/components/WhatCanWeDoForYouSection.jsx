import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCogs, FaCloud, FaUsers, FaGamepad, FaDrawPolygon,
    FaShapes, FaCube, FaProjectDiagram, FaShoppingCart, FaVrCardboard, FaBullhorn, FaShareAlt, FaHandsHelping, FaPalette, FaSearch, FaChartLine, FaDatabase, FaCode
} from 'react-icons/fa';

const serviceCategories = [
    {
        id: 'development',
        name: 'Development',
        icon: <FaCogs />,
        description: 'End-to-end development services from concept to deployment',
        details: [
            'Custom software solutions tailored to your business needs',
            'Cross-platform mobile applications with native performance',
            'Scalable web applications with modern frameworks',
            'API development and integration services',
            'Cloud-native application development'
        ]
    },
    {
        id: 'design',
        name: 'Design',
        icon: <FaDrawPolygon />,
        description: 'Visual storytelling through stunning designs',
        details: [
            'UI/UX design with user-centered approach',
        ]
    },
    {
        id: 'gaming',
        name: 'Gaming Solutions',
        icon: <FaGamepad />,
        description: 'Immersive gaming experiences across all platforms',
        details: [
            'Full-cycle game development',
            'AR/VR and mixed reality experiences',
            'Game concept art and visual development',
            'Multiplayer and online gaming solutions',
            'Game porting and optimization'
        ]
    },
    {
        id: 'consulting',
        name: 'Consulting',
        icon: <FaUsers />,
        description: 'Strategic guidance for your digital transformation',
        details: [
            'Technology stack evaluation and recommendations',
            'Digital transformation strategy',
            'Process optimization and automation',
            'Technical due diligence',
            'Innovation workshops and training'
        ]
    },
    // {
    //     id: 'digital-marketing',
    //     name: 'Digital Marketing',
    //     icon: <FaBullhorn />, // Suggests a loudspeaker or marketing symbol
    //     description: 'Drive engagement and growth through data-driven marketing strategies',
    //     details: [
    //         'SEO, SEM, and performance-based campaigns',
    //         'Social media marketing and content strategy',
    //         'Email marketing and automation',
    //         'Analytics-driven targeting and optimization'
    //     ]
    // }
];

const services = [
    {
        title: 'Mobile Development',
        icon: <FaCogs />,
        description: 'Build seamless mobile apps for iOS and Android platforms.',
        category: 'development',
        keywords: ['mobile app development', 'iOS apps', 'Android apps']
    },
    {
        title: 'Web Development',
        icon: <FaCloud />,
        description: 'Responsive, high-performance websites and web applications.',
        category: 'development',
        keywords: ['web development', 'responsive design', 'web applications']
    },
    {
        title: 'Shopify Web Development',
        icon: <FaShoppingCart />, // or FaShopify if using a Shopify-specific icon set
        description: 'Custom Shopify stores that are fast, responsive, and designed to convert visitors into customers.',
        category: 'development',
        keywords: ['shopify development', 'ecommerce website', 'shopify theme customization', 'online store']
    },
    {
        title: 'MVP & Product Development',
        icon: <FaUsers />,
        description: 'Bring your ideas to life with rapid MVP development.',
        category: 'development',
        keywords: ['MVP development', 'product development', 'rapid prototyping']
    },
    {
        title: 'Prototyping & UI/UX',
        icon: <FaDrawPolygon />,
        description: 'Craft stunning user experiences and intuitive interfaces.',
        category: 'design',
        keywords: ['UI/UX design', 'prototyping', 'user experience']
    },
    {
        title: 'Quality Assurance',
        icon: <FaShapes />,
        description: 'Ensure flawless performance with rigorous testing and QA.',
        category: 'consulting',
        keywords: ['QA testing', 'quality assurance', 'software testing']
    },
    {
        title: 'Innovation Consulting',
        icon: <FaCube />,
        description: 'Strategic guidance for innovative digital solutions.',
        category: 'consulting',
        keywords: ['tech consulting', 'innovation strategy', 'digital transformation']
    },
    {
        title: '2D & 3D Game Development',
        icon: <FaGamepad />,
        description: 'Create engaging 2D and 3D games with stunning graphics.',
        category: 'gaming',
        keywords: ['game development', '2D games', '3D games']
    },
    {
        title: 'AR/VR Game Development',
        icon: <FaVrCardboard />,
        description: 'Immersive augmented and virtual reality gaming experiences.',
        category: 'gaming',
        keywords: ['AR development', 'VR games', 'mixed reality']
    },
    // {
    //     title: 'Social Media Marketing',
    //     icon: <FaShareAlt />,
    //     description: 'Grow your brand across platforms with strategic content and engagement.',
    //     category: 'digital-marketing',
    //     keywords: ['social media', 'instagram marketing', 'facebook strategy']
    // },
    // {
    //     title: 'Social Media Handling',
    //     icon: <FaHandsHelping />,
    //     description: 'Professional management of your social profiles to build trust and community.',
    //     category: 'digital-marketing',
    //     keywords: ['social media management', 'page handling', 'community building']
    // },
    // {
    //     title: 'Google & Meta Ads',
    //     icon: <FaBullhorn />,
    //     description: 'Drive traffic and leads with powerful ad campaigns across Google and Meta.',
    //     category: 'digital-marketing',
    //     keywords: ['google ads', 'meta ads', 'paid ads', 'performance marketing']
    // },
    {
        title: 'Graphics Design',
        icon: <FaPalette />,
        description: 'Visual storytelling through eye-catching and effective designs.',
        category: 'design',
        keywords: ['graphic design', 'branding', 'visual identity']
    },
    // {
    //     title: 'SEO',
    //     icon: <FaSearch />,
    //     description: 'Improve your online visibility with keyword-focused SEO strategies.',
    //     category: 'digital-marketing',
    //     keywords: ['search engine optimization', 'on-page SEO', 'organic traffic']
    // },
    // {
    //     title: 'Performance Marketing',
    //     icon: <FaChartLine />,
    //     description: 'Maximize ROI with data-driven advertising and conversion optimization.',
    //     category: 'digital-marketing',
    //     keywords: ['ROI marketing', 'data-driven ads', 'conversion strategy']
    // },
    {
        title: 'ERP & CRM Solutions (Python/Django)',
        icon: <FaDatabase />,
        description: 'Custom ERP and CRM systems built with Django for seamless business operations.',
        category: 'software-solutions',
        keywords: ['ERP system', 'CRM software', 'django development', 'business automation']
    },
    {
        title: 'Custom Software Solutions',
        icon: <FaCode />,
        description: 'Tailored software applications to streamline and automate your business processes.',
        category: 'software-solutions',
        keywords: ['custom software', 'business software', 'software development']
    }
    // {
    //     title: '2D & 3D Design Art & Animation',
    //     icon: <FaDrawPolygon />,
    //     description: 'Artistic designs for immersive experiences.',
    //     category: 'design',
    //     keywords: ['game art', '3D modeling', 'digital art', 'animation services', '3D animation', 'motion graphics']
    // },
    // {
    //     title: '3D Character Design & Animation',
    //     icon: <FaCube />,
    //     description: 'Lifelike 3D characters for your stories.',
    //     category: 'design',
    //     keywords: ['character design', '3D characters', 'digital avatars']
    // },
    // {
    //     title: '3D Environment Design',
    //     icon: <FaProjectDiagram />,
    //     description: 'Create immersive 3D worlds for rich storytelling.',
    //     category: 'design',
    //     keywords: ['environment design', '3D worlds', 'virtual environments']
    // },
    // {
    //     title: '3D Game Props Design',
    //     icon: <FaCube />,
    //     description: 'High-quality props for realistic game environments.',
    //     category: 'design',
    //     keywords: ['game assets', '3D props', 'virtual objects']
    // }
];


const WhatCanWeDoForYouSection = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedService, setExpandedService] = useState(null);

    return (
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-8 lg:px-16 xl:px-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Our Comprehensive Services
                </h1>

                <p className="text-center mb-12 max-w-4xl mx-auto text-lg text-gray-300">
                    We deliver end-to-end digital solutions tailored to your unique business needs, combining technical expertise with creative vision.
                </p>

                {/* Category Accordions */}
                <div className="space-y-6 mb-12">
                    {serviceCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="bg-gray-800 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setExpandedCategory(expandedCategory === catIndex ? null : catIndex)}
                                className="w-full flex items-center justify-between p-6 text-left"
                                aria-expanded={expandedCategory === catIndex}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-2xl">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-xl font-bold">{category.name}</h2>
                                </div>
                                <div className="text-gray-400 transform transition-transform duration-300">
                                    {expandedCategory === catIndex ?
                                        <span className="text-2xl">−</span> :
                                        <span className="text-2xl">+</span>}
                                </div>
                            </button>

                            <AnimatePresence>
                                {expandedCategory === catIndex && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="mb-4 text-blue-300">{category.description}</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                            {category.details.map((detail, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-purple-400 mr-2">•</span>
                                                    <span className="text-gray-300">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                            {services
                                                .filter(service => service.category === category.id)
                                                .map((service, serviceIndex) => (
                                                    <motion.div
                                                        key={service.title}
                                                        whileHover={{ scale: 1.02 }}
                                                        className={`bg-gradient-to-br ${expandedService === serviceIndex ? 'from-purple-900 to-blue-900' : 'from-gray-700 to-gray-800'} rounded-xl p-5 cursor-pointer`}
                                                        onClick={() => setExpandedService(expandedService === serviceIndex ? null : serviceIndex)}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="text-3xl p-2 text-blue-400">
                                                                {service.icon}
                                                            </div>
                                                            <div>
                                                                <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                                                                <p className="text-gray-300 text-sm">{service.description}</p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Services */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Featured Solutions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.slice(0,).map((service, index) => (
                            <motion.div
                                key={`featured-${index}`}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700"
                            >
                                <div className="text-4xl mb-4 text-blue-400">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-300 mb-4">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.keywords.slice(0, 3).map((keyword, i) => (
                                        <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WhatCanWeDoForYouSection;