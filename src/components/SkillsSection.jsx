import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiServer, FiSmartphone, FiDatabase, FiCloud, FiTrendingUp, FiPlay, FiShoppingCart, FiGlobe, FiCpu } from 'react-icons/fi';

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on mount and resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Skill categories data
    const categories = [
        {
            title: "Frontend Development",
            icon: <FiCode />,
            skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", ".Net"],
            description: "Modern frontend frameworks and libraries we specialize in",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Backend Development",
            icon: <FiServer />,
            skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "HapiJs", "Asp.Net"],
            description: "Server-side technologies and API development expertise",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Game Development",
            icon: <FiPlay />,
            skills: ["Unity", "C#", "C++", "Blender", "3D Modeling"],
            description: "End-to-end game design and development for 2D and 3D games",
            color: "from-teal-500 to-teal-600"
        },
        {
            title: "Mobile Development",
            icon: <FiSmartphone />,
            skills: ["React Native", "Flutter", "Swift", "Kotlin"],
            description: "Cross-platform and native mobile app development",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Database & Storage",
            icon: <FiDatabase />,
            skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL", "Elasticsearch"],
            description: "Database management and data storage solutions",
            color: "from-yellow-500 to-yellow-600"
        },
        {
            title: "Cloud & DevOps",
            icon: <FiCloud />,
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Serverless"],
            description: "Cloud infrastructure and deployment automation",
            color: "from-red-500 to-red-600"
        },
        {
            title: "Project Management",
            icon: <FiTrendingUp />,
            skills: ["Agile", "Scrum", "Jira", "Git", "Figma", "Notion"],
            description: "Development methodologies and collaboration tools",
            color: "from-indigo-500 to-indigo-600"
        },
        {
            title: "Shopify Development",
            icon: <FiShoppingCart />,
            skills: ["Shopify", "Liquid", "Theme Customization", "Shopify Apps"],
            description: "Custom Shopify store setup, theme development, and integrations",
            color: "from-pink-500 to-pink-600"
        },
        // {
        //     title: "Digital Marketing",
        //     icon: <FiGlobe />,
        //     skills: ["SEO", "Google Ads", "Meta Ads", "Email Marketing", "Analytics", "Content Marketing"],
        //     description: "Growth-focused digital marketing strategies across platforms",
        //     color: "from-orange-500 to-orange-600"
        // },
        {
            title: "Software Solutions",
            icon: <FiCpu />,
            skills: ["ERP", "CRM", "SaaS", "Custom Web Apps", "Desktop Apps"],
            description: "End-to-end custom software development for any business need",
            color: "from-purple-500 to-purple-600"
        }
    ];


    // Safe access to current category
    const currentCategory = categories[activeCategory] || categories[0];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Technical Skills</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Select a category to view our specialized expertise
                    </p>
                </motion.div>

                {/* Navigation and Content */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Mobile Dropdown */}
                    {isMobile ? (
                        <select
                            onChange={(e) => setActiveCategory(parseInt(e.target.value, 10))}
                            value={activeCategory}
                            className="block w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="flex flex-col gap-1  w-full md:w-64"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {categories.map((category, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveCategory(index)}
                                    className={`flex items-center gap-3 p-4 rounded-lg text-left transition-colors ${activeCategory === index
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-white hover:bg-gray-100 text-gray-700 shadow-sm'}`}
                                    whileHover={{ scale: activeCategory === index ? 1 : 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    aria-label={`View ${category.title} skills`}
                                >
                                    <span className={`p-2 rounded-md ${activeCategory === index ? 'bg-white/20' : 'bg-gray-100'}`}>
                                        {category.icon}
                                    </span>
                                    <span className="font-medium">{category.title}</span>
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
                                className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
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
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                        {currentCategory.skills.map((skill, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                className="flex items-center p-3 bg-gray-50 rounded-lg"
                                            >
                                                <span className={`w-3 h-3 rounded-full mr-3 ${currentCategory.color.includes('blue') ? 'bg-blue-500' :
                                                    currentCategory.color.includes('purple') ? 'bg-purple-500' :
                                                        currentCategory.color.includes('green') ? 'bg-green-500' :
                                                            currentCategory.color.includes('yellow') ? 'bg-yellow-500' :
                                                                currentCategory.color.includes('red') ? 'bg-red-500' : 'bg-indigo-500'
                                                    }`} />
                                                <span className="font-medium text-gray-800">{skill}</span>
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