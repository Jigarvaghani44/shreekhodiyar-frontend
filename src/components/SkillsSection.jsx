import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiCode,
    FiTrendingUp,
    FiGlobe,
    FiShoppingCart,
    FiSmartphone,
    FiServer,
    FiDatabase,
    FiCloud,
    FiLayers
} from 'react-icons/fi';

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const categories = [
        {
            title: "Digital Marketing",
            icon: <FiTrendingUp />,
            skills: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics"],
            description: "Data-driven marketing strategies that deliver measurable results",
            color: "from-purple-600 to-indigo-600"
        },
        {
            title: "Web Development",
            icon: <FiCode />,
            skills: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "TypeScript", "Headless CMS"],
            description: "Modern web solutions for optimal performance and user experience",
            color: "from-blue-600 to-cyan-600"
        },
        {
            title: "E-Commerce Solutions",
            icon: <FiShoppingCart />,
            skills: ["Shopify Development", "WooCommerce", "Payment Gateways", "Cart Optimization", "Product Feeds", "Custom Apps"],
            description: "Complete e-commerce solutions to boost your online sales",
            color: "from-pink-600 to-rose-600"
        },
        {
            title: "SEO & Content",
            icon: <FiGlobe />,
            skills: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Creation", "Link Building", "Local SEO"],
            description: "Organic growth strategies to increase visibility and traffic",
            color: "from-green-600 to-emerald-600"
        },
        {
            title: "Mobile Solutions",
            icon: <FiSmartphone />,
            skills: ["Responsive Design", "PWA Development", "React Native", "App Store Optimization", "Mobile UX", "AMP"],
            description: "Mobile-first approaches for today's on-the-go audiences",
            color: "from-yellow-600 to-amber-600"
        },
        {
            title: "Backend Systems",
            icon: <FiServer />,
            skills: ["API Development", "Database Design", "Cloud Functions", "Authentication", "Server Optimization", "Microservices"],
            description: "Robust backend architectures to power your digital presence",
            color: "from-red-600 to-orange-600"
        },
        {
            title: "Data & Analytics",
            icon: <FiDatabase />,
            skills: ["Google Analytics", "Data Visualization", "Conversion Tracking", "KPI Dashboards", "Heatmaps", "A/B Testing"],
            description: "Actionable insights to inform your marketing decisions",
            color: "from-indigo-600 to-violet-600"
        },
        {
            title: "Cloud Solutions",
            icon: <FiCloud />,
            skills: ["AWS", "Google Cloud", "Serverless", "CDN Setup", "Hosting Optimization", "CI/CD Pipelines"],
            description: "Scalable infrastructure for your growing business needs",
            color: "from-cyan-600 to-sky-600"
        },
        {
            title: "Full Stack Solutions",
            icon: <FiLayers />,
            skills: ["MERN Stack", "Jamstack", "Headless Commerce", "CMS Integration", "Custom APIs", "Third-party Integrations"],
            description: "End-to-end digital solutions tailored to your requirements",
            color: "from-fuchsia-600 to-purple-600"
        }
    ];

    const currentCategory = categories[activeCategory] || categories[0];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Core Expertise</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive digital marketing and web solutions tailored for your success
                    </p>
                </motion.div>

                {/* Navigation and Content */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Mobile Dropdown */}
                    {isMobile ? (
                        <select
                            onChange={(e) => setActiveCategory(parseInt(e.target.value, 10))}
                            value={activeCategory}
                            className="block w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            aria-label="Select skill category"
                        >
                            {categories.map((category, index) => (
                                <option key={index} value={index}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    ) : (
                        /* Desktop Sidebar Navigation */
                        <motion.div
                            className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 w-full lg:w-64"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {categories.map((category, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveCategory(index)}
                                    className={`flex-shrink-0 flex items-center gap-3 p-3 lg:p-4 rounded-lg text-left transition-colors ${activeCategory === index
                                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                                        : 'bg-gray-800 hover:bg-gray-700 text-gray-300 shadow-sm'}`}
                                    whileHover={{ scale: activeCategory === index ? 1 : 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    aria-label={`View ${category.title} skills`}
                                >
                                    <span className={`p-2 rounded-md ${activeCategory === index ? 'bg-white/20' : 'bg-gray-700'}`}>
                                        {category.icon}
                                    </span>
                                    <span className="font-medium whitespace-nowrap">{category.title}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}

                    {/* Skills Content Area */}
                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full border border-gray-700"
                            >
                                {/* Category Header */}
                                <div className={`bg-gradient-to-r ${currentCategory.color} p-6 text-white`}>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/20 p-3 rounded-lg">
                                            {currentCategory.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold">{currentCategory.title}</h2>
                                            <p className="opacity-90">{currentCategory.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills List */}
                                <div className="p-6">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {currentCategory.skills.map((skill, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                            >
                                                <span className={`w-3 h-3 rounded-full mr-3 ${currentCategory.color.includes('blue') ? 'bg-blue-400' :
                                                    currentCategory.color.includes('purple') ? 'bg-purple-400' :
                                                        currentCategory.color.includes('pink') ? 'bg-pink-400' :
                                                            currentCategory.color.includes('green') ? 'bg-green-400' :
                                                                currentCategory.color.includes('yellow') ? 'bg-yellow-400' :
                                                                    currentCategory.color.includes('red') ? 'bg-red-400' :
                                                                        currentCategory.color.includes('indigo') ? 'bg-indigo-400' : 'bg-cyan-400'
                                                    }`} />
                                                <span className="font-medium text-white">{skill}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;