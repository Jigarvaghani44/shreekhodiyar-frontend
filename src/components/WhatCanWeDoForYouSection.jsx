import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCogs, FaCloud, FaUsers, FaDrawPolygon,
    FaShoppingCart, FaBullhorn, FaShareAlt,
    FaHandsHelping, FaPalette, FaSearch,
    FaChartLine, FaDatabase, FaCode, FaShapes, FaCube
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
    {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        icon: <FaBullhorn />,
        description: 'Drive engagement and growth through data-driven marketing strategies',
        details: [
            'SEO, SEM, and performance-based campaigns',
            'Social media marketing and content strategy',
            'Email marketing and automation',
            'Analytics-driven targeting and optimization'
        ]
    }
];

const services = [
    {
        title: 'Web Development',
        icon: <FaCloud />,
        description: 'Responsive, high-performance websites and web applications.',
        category: 'development',
        keywords: ['web development', 'responsive design', 'web applications']
    },
    {
        title: 'Shopify Web Development',
        icon: <FaShoppingCart />,
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
        title: 'Social Media Marketing',
        icon: <FaShareAlt />,
        description: 'Grow your brand across platforms with strategic content and engagement.',
        category: 'digital-marketing',
        keywords: ['social media', 'instagram marketing', 'facebook strategy']
    },
    {
        title: 'Social Media Handling',
        icon: <FaHandsHelping />,
        description: 'Professional management of your social profiles to build trust and community.',
        category: 'digital-marketing',
        keywords: ['social media management', 'page handling', 'community building']
    },
    {
        title: 'Google & Meta Ads',
        icon: <FaBullhorn />,
        description: 'Drive traffic and leads with powerful ad campaigns across Google and Meta.',
        category: 'digital-marketing',
        keywords: ['google ads', 'meta ads', 'paid ads', 'performance marketing']
    },
    {
        title: 'Graphics Design',
        icon: <FaPalette />,
        description: 'Visual storytelling through eye-catching and effective designs.',
        category: 'design',
        keywords: ['graphic design', 'branding', 'visual identity']
    },
    {
        title: 'SEO',
        icon: <FaSearch />,
        description: 'Improve your online visibility with keyword-focused SEO strategies.',
        category: 'digital-marketing',
        keywords: ['search engine optimization', 'on-page SEO', 'organic traffic']
    },
    {
        title: 'Performance Marketing',
        icon: <FaChartLine />,
        description: 'Maximize ROI with data-driven advertising and conversion optimization.',
        category: 'digital-marketing',
        keywords: ['ROI marketing', 'data-driven ads', 'conversion strategy']
    },
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
];

const ServicesSection = () => {
    const [activeCategory, setActiveCategory] = useState('development');
    const [hoveredService, setHoveredService] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            {/* Floating background elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-blue-200 blur-xl md:blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5
                    }}
                    className="absolute bottom-1/3 right-1/4 w-36 md:w-72 h-36 md:h-72 rounded-full bg-purple-200 blur-xl md:blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Our Digital Solutions
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive services to transform your digital presence and drive business growth
                    </p>
                </motion.div>

                {/* Mobile Category Dropdown */}
                <div className="lg:hidden mb-6 relative">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 font-medium"
                    >
                        <div className="flex items-center">
                            {serviceCategories.find(c => c.id === activeCategory)?.icon}
                            <span className="ml-2">
                                {serviceCategories.find(c => c.id === activeCategory)?.name}
                            </span>
                        </div>
                        <svg
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${mobileMenuOpen ? 'transform rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                {serviceCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => {
                                            setActiveCategory(category.id);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 flex items-center ${activeCategory === category.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                                    >
                                        <span className="text-lg mr-2">{category.icon}</span>
                                        {category.name}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Desktop Category Navigation */}
                <div className="hidden lg:flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2">
                    <div className="inline-flex rounded-full bg-gray-100 p-1 shadow-inner">
                        {serviceCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 md:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                                        ? 'bg-white text-gray-900 shadow-md'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span className="whitespace-nowrap">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Services List */}
                    <div className="lg:col-span-2">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                        >
                            {services
                                .filter(service => service.category === activeCategory)
                                .map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        whileHover={{ y: -5 }}
                                        onHoverStart={() => setHoveredService(index)}
                                        onHoverEnd={() => setHoveredService(null)}
                                        className={`bg-white rounded-lg md:rounded-xl shadow-sm md:shadow-md overflow-hidden border border-gray-100 transition-all duration-300 ${hoveredService === index ? 'shadow-lg md:shadow-xl ring-1 md:ring-2 ring-blue-500' : ''
                                            }`}
                                    >
                                        <div className="p-4 md:p-6">
                                            <div className="flex items-start gap-3 md:gap-4">
                                                <div
                                                    className={`p-2 md:p-3 rounded-lg text-xl md:text-2xl ${activeCategory === 'development'
                                                            ? 'bg-blue-100 text-blue-600'
                                                            : activeCategory === 'design'
                                                                ? 'bg-purple-100 text-purple-600'
                                                                : activeCategory === 'consulting'
                                                                    ? 'bg-green-100 text-green-600'
                                                                    : 'bg-orange-100 text-orange-600'
                                                        }`}
                                                >
                                                    {service.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-sm md:text-base text-gray-600">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <AnimatePresence>
                                                {hoveredService === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="mt-3 md:mt-4"
                                                    >
                                                        <div className="flex flex-wrap gap-1 md:gap-2">
                                                            {service.keywords.map((keyword, i) => (
                                                                <span
                                                                    key={i}
                                                                    className={`text-xs px-2 md:px-3 py-1 rounded-full ${activeCategory === 'development'
                                                                            ? 'bg-blue-50 text-blue-700'
                                                                            : activeCategory === 'design'
                                                                                ? 'bg-purple-50 text-purple-700'
                                                                                : activeCategory === 'consulting'
                                                                                    ? 'bg-green-50 text-green-700'
                                                                                    : 'bg-orange-50 text-orange-700'
                                                                        }`}
                                                                >
                                                                    {keyword}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                ))}
                        </motion.div>
                    </div>

                    {/* Category Details */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`p-6 md:p-8 rounded-lg md:rounded-xl shadow-md md:shadow-lg h-full ${activeCategory === 'development'
                                    ? 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200'
                                    : activeCategory === 'design'
                                        ? 'bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200'
                                        : activeCategory === 'consulting'
                                            ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200'
                                            : 'bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200'
                                }`}
                        >
                            <div className="text-4xl md:text-5xl mb-3 md:mb-4 opacity-20">
                                {serviceCategories.find(c => c.id === activeCategory)?.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                                {serviceCategories.find(c => c.id === activeCategory)?.name}
                            </h3>
                            <p className="text-base md:text-lg mb-4 md:mb-6">
                                {serviceCategories.find(c => c.id === activeCategory)?.description}
                            </p>

                            <ul className="space-y-2 md:space-y-3">
                                {serviceCategories.find(c => c.id === activeCategory)?.details.map(
                                    (detail, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg
                                                className={`flex-shrink-0 h-4 w-4 md:h-5 md:w-5 mt-1 mr-2 ${activeCategory === 'development'
                                                        ? 'text-blue-500'
                                                        : activeCategory === 'design'
                                                            ? 'text-purple-500'
                                                            : activeCategory === 'consulting'
                                                                ? 'text-green-500'
                                                                : 'text-orange-500'
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-sm md:text-base">{detail}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;