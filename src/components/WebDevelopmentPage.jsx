import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayers, FiSmartphone, FiGlobe, FiShield, FiChevronDown } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const WebDevelopmentPage = () => {
    const [activeTab, setActiveTab] = useState('frontend');
    const [expandedFeature, setExpandedFeature] = useState(null);

    const technologies = {
        frontend: ['React', 'Next.js', 'Vue', 'Angular', 'Tailwind CSS', 'TypeScript', 'dotnet'],
        backend: ['Node.js', 'Express', 'Django', 'Ruby on Rails', 'Laravel', 'Spring Boot', 'ASP.net'],
        databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Elasticsearch'],
        devops: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'NGINX']
    };
    // Safe access to the current tab's technologies
    const currentTechnologies = technologies[activeTab] || [];
    const features = [
        {
            title: "Custom Web Applications",
            icon: <FiCode className="text-3xl" />,
            description: "Tailored solutions designed specifically for your business needs and workflows.",
            details: "From CRM systems to inventory management, we build web apps that streamline operations and boost productivity."
        },
        {
            title: "Responsive Design",
            icon: <FiSmartphone className="text-3xl" />,
            description: "Flawless user experience across all devices and screen sizes.",
            details: "Mobile-first approach ensures your website looks and performs perfectly on smartphones, tablets, and desktops."
        },
        {
            title: "SEO Optimization",
            icon: <FiGlobe className="text-3xl" />,
            description: "Built for visibility with clean code and best practices.",
            details: "Our websites are optimized for search engines from the ground up, helping you rank higher and attract more traffic."
        },
        {
            title: "Performance Focused",
            icon: <FiLayers className="text-3xl" />,
            description: "Lightning-fast load times and smooth interactions.",
            details: "We optimize every aspect for speed, from image compression to code splitting, ensuring exceptional performance."
        },
        {
            title: "Secure Architecture",
            icon: <FiShield className="text-3xl" />,
            description: "Enterprise-grade security protecting your data and users.",
            details: "Implementation of security best practices including HTTPS, data encryption, and regular vulnerability testing."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <Helmet>
                <title>Website Development Agency | Custom Sites & Portals | ShreeKhodiyar Technostack</title>
                <meta name="description" content="We design and build fast, secure, and scalable websites. Partner with our agency for custom web development and CMS integration." />
            </Helmet>

            <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
                {/* Floating elements */}
                <div className="absolute inset-0 opacity-70">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                x: [0, Math.random() * 100 - 50],
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 20 + Math.random() * 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            }}
                            className="absolute rounded-lg bg-white"
                            style={{
                                width: `${Math.random() * 200 + 50}px`,
                                height: `${Math.random() * 200 + 50}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.2 + 0.1
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative z-10 mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-sm font-semibold tracking-wider text-blue-300 mb-2 block">
                            WEB DEVELOPMENT SERVICES
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                            Build the <span className="text-blue-300">Digital Future</span> of Your Business
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Custom web solutions designed to elevate your brand, engage your audience, and drive business growth
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="/quickenquiry"> <button className="px-6 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                            Get a Free Quote
                        </button></a>
                        <a href="/portfolio"> <button className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                            View Our Work
                        </button></a>


                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Web Solutions</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        From simple websites to complex web applications, we deliver exceptional digital experiences
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Website Development",
                            description: "Beautiful, functional websites that convert visitors into customers",
                            icon: "🌐"
                        },
                        {
                            title: "Web Applications",
                            description: "Custom solutions tailored to your specific business needs",
                            icon: "💻"
                        },
                        {
                            title: "E-Commerce",
                            description: "Online stores designed to maximize sales and user experience",
                            icon: "🛒"
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3D Technology Stack Section with Frontend Default */}
            <section className="py-16 px-4 sm:py-20 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                {/* 3D Floating Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                x: [0, Math.random() * 100 - 50],
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 20 + Math.random() * 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            }}
                            className="absolute rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 opacity-20"
                            style={{
                                width: `${Math.random() * 300 + 100}px`,
                                height: `${Math.random() * 300 + 100}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                filter: 'blur(40px)'
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                            OUR TECH STACK
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Built With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Cutting-Edge</span> Technologies
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We leverage modern tools to deliver high-performance, scalable solutions
                        </p>
                    </motion.div>

                    {/* Technology Selector - Responsive */}
                    <div className="mb-8 sm:mb-12">
                        {/* Mobile - Select Dropdown */}
                        <div className="md:hidden relative">
                            <select
                                value={activeTab}
                                onChange={(e) => setActiveTab(e.target.value)}
                                className="w-full px-5 py-3 pr-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white shadow-sm text-blue-700 font-medium"
                            >
                                {Object.keys(technologies).map((category) => (
                                    <option key={category} value={category}>
                                        {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                <FiChevronDown className="text-blue-500" />
                            </div>
                        </div>

                        {/* Desktop - Pill Tabs */}
                        <div className="hidden md:flex justify-center">
                            <div className="inline-flex bg-gray-100 p-1 rounded-full">
                                {Object.keys(technologies).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveTab(category)}
                                        className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${activeTab === category
                                            ? 'bg-white shadow-md text-blue-600'
                                            : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                    >
                                        {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technology Cards - Shows current active tab */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                        {currentTechnologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                }}
                                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:border-blue-100 transition-all overflow-hidden group relative"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: 'perspective(1000px)'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative p-5 sm:p-6 flex flex-col items-center text-center h-full">
                                    {/* Tech Logo Placeholder */}
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all shadow-inner">
                                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                            {tech.charAt(0)}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{tech}</h3>
                                    <p className="text-sm text-gray-600 hidden sm:block">
                                        {tech} specialist with 5+ years experience
                                    </p>

                                    {/* 3D Effect Border */}
                                    <div className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View More Button */}
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md">
                            Explore All Technologies
                            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div> */}
                </div>
            </section>
            {/* Key Features */}
            <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Why Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Web Development</span> Stands Out
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We combine technical excellence with creative design to deliver exceptional results
                    </p>
                </div>

                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-xl transition-all ${expandedFeature === index ? 'bg-white shadow-lg' : 'bg-gray-50 hover:bg-white hover:shadow-md'}`}
                            onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mr-6 text-blue-600">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 mb-2">{feature.description}</p>
                                    {expandedFeature === index && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="text-gray-600 pt-2"
                                        >
                                            {feature.details}
                                        </motion.p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6  text-white">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Build Your Web Solution?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let&apos;s discuss how we can create a custom web experience for your business
                    </p>
                    <a href="/quickenquiry"><button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                        Get Started Today
                        <FiArrowRight className="inline ml-2" />
                    </button></a>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentPage;