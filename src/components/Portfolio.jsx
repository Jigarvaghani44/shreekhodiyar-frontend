/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { FiChevronDown, FiBriefcase, FiGithub, FiAward, FiTrendingUp, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import HomeTestimonials from './HomeTestimonials';
import BusinessStartup from "./businessStartup";
import OurApproch from "./OurApproach";
import CampaignResultsPage from './CampainResultsPage';

const Portfolio = () => {
    // const [activeFilter, setActiveFilter] = useState('all');
    // const [expandedProject, setExpandedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const projectsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [portfolioItems, setportfolioItems] = useState([]);
    const [portfolioItemsTemp, setportfolioItemsTemp] = useState([{
        _id: "6853a6293a6e5415f7163bba",
        title: "VASUNDHARA HRMS",
        category: "Shopify Web Development",
        year: "2023",
        client: "Sanghvi & Sons",
        description:
            "A comprehensive Human Resource Management System designed to streamline HR processes, employee management, and organizational workflows.",
        longDescription:
            "The VASUNDHARA HRMS revolutionizes traditional HR operations by integrating advanced automation, real-time analytics, and mobile-first accessibility into one cohesive platform.",
        duration: "4 months",
        teamSize: "5 specialists",
        features: [
            "Automated recruitment pipeline with AI-powered candidate screening",
            "Integrated payroll system with tax compliance",
            "Real-time performance analytics dashboard",
            "Employee self-service portal",
            "Customizable workflow automation",
            "Mobile-responsive design for on-the-go access"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "GraphQL",
            "Tailwind CSS",
            "Docker",
            "Payment Gateway"
        ],
        image: "laptop.webp",
        alt: "E-commerce website interface on multiple devices",
        liveUrl: "",       // Add actual URL if available
        codeUrl: "",       // Add GitHub or repo URL if public
        testimonial: {
            text: "The HRMS transformed our HR operations completely. What used to take days is now handled in hours with complete transparency.",
            author: "Rajesh Sanghvi",
            role: "CEO, Sanghvi & Sons"
        },
        stats: [
            { value: "75%", label: "Process Efficiency" },
            { value: "40%", label: "Time Savings" },
            { value: "95%", label: "User Satisfaction" }
        ],
        challenges: [
            "Legacy system integration",
            "Mobile conversion optimization",
            "Real-time inventory management"
        ],
        awards: [
            "2023 Webby Award Nominee",
            "Awwwards Honorable Mention"
        ],
        status: "published",
        updatedAt: "2025-06-25T03:48:49.590Z"
    }, {
        _id: "6853a6293a6e5415f7163bba",
        title: "VASUNDHARA HRMS",
        category: "Shopify Web Development",
        year: "2023",
        client: "Sanghvi & Sons",
        description:
            "A comprehensive Human Resource Management System designed to streamline HR processes, employee management, and organizational workflows.",
        longDescription:
            "The VASUNDHARA HRMS revolutionizes traditional HR operations by integrating advanced automation, real-time analytics, and mobile-first accessibility into one cohesive platform.",
        duration: "4 months",
        teamSize: "5 specialists",
        features: [
            "Automated recruitment pipeline with AI-powered candidate screening",
            "Integrated payroll system with tax compliance",
            "Real-time performance analytics dashboard",
            "Employee self-service portal",
            "Customizable workflow automation",
            "Mobile-responsive design for on-the-go access"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "GraphQL",
            "Tailwind CSS",
            "Docker",
            "Payment Gateway"
        ],
        image: "laptop.webp",
        alt: "E-commerce website interface on multiple devices",
        liveUrl: "",       // Add actual URL if available
        codeUrl: "",       // Add GitHub or repo URL if public
        testimonial: {
            text: "The HRMS transformed our HR operations completely. What used to take days is now handled in hours with complete transparency.",
            author: "Rajesh Sanghvi",
            role: "CEO, Sanghvi & Sons"
        },
        stats: [
            { value: "75%", label: "Process Efficiency" },
            { value: "40%", label: "Time Savings" },
            { value: "95%", label: "User Satisfaction" }
        ],
        challenges: [
            "Legacy system integration",
            "Mobile conversion optimization",
            "Real-time inventory management"
        ],
        awards: [
            "2023 Webby Award Nominee",
            "Awwwards Honorable Mention"
        ],
        status: "published",
        updatedAt: "2025-06-25T03:48:49.590Z"
    }, {
        _id: "6853a6293a6e5415f7163bba",
        title: "VASUNDHARA HRMS",
        category: "Shopify Web Development",
        year: "2023",
        client: "Sanghvi & Sons",
        description:
            "A comprehensive Human Resource Management System designed to streamline HR processes, employee management, and organizational workflows.",
        longDescription:
            "The VASUNDHARA HRMS revolutionizes traditional HR operations by integrating advanced automation, real-time analytics, and mobile-first accessibility into one cohesive platform.",
        duration: "4 months",
        teamSize: "5 specialists",
        features: [
            "Automated recruitment pipeline with AI-powered candidate screening",
            "Integrated payroll system with tax compliance",
            "Real-time performance analytics dashboard",
            "Employee self-service portal",
            "Customizable workflow automation",
            "Mobile-responsive design for on-the-go access"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "GraphQL",
            "Tailwind CSS",
            "Docker",
            "Payment Gateway"
        ],
        image: "laptop.webp",
        alt: "E-commerce website interface on multiple devices",
        liveUrl: "",       // Add actual URL if available
        codeUrl: "",       // Add GitHub or repo URL if public
        testimonial: {
            text: "The HRMS transformed our HR operations completely. What used to take days is now handled in hours with complete transparency.",
            author: "Rajesh Sanghvi",
            role: "CEO, Sanghvi & Sons"
        },
        stats: [
            { value: "75%", label: "Process Efficiency" },
            { value: "40%", label: "Time Savings" },
            { value: "95%", label: "User Satisfaction" }
        ],
        challenges: [
            "Legacy system integration",
            "Mobile conversion optimization",
            "Real-time inventory management"
        ],
        awards: [
            "2023 Webby Award Nominee",
            "Awwwards Honorable Mention"
        ],
        status: "published",
        updatedAt: "2025-06-25T03:48:49.590Z"
    }, {
        _id: "6853a6293a6e5415f7163bba",
        title: "VASUNDHARA HRMS",
        category: "Shopify Web Development",
        year: "2023",
        client: "Sanghvi & Sons",
        description:
            "A comprehensive Human Resource Management System designed to streamline HR processes, employee management, and organizational workflows.",
        longDescription:
            "The VASUNDHARA HRMS revolutionizes traditional HR operations by integrating advanced automation, real-time analytics, and mobile-first accessibility into one cohesive platform.",
        duration: "4 months",
        teamSize: "5 specialists",
        features: [
            "Automated recruitment pipeline with AI-powered candidate screening",
            "Integrated payroll system with tax compliance",
            "Real-time performance analytics dashboard",
            "Employee self-service portal",
            "Customizable workflow automation",
            "Mobile-responsive design for on-the-go access"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "GraphQL",
            "Tailwind CSS",
            "Docker",
            "Payment Gateway"
        ],
        image: "laptop.webp",
        alt: "E-commerce website interface on multiple devices",
        liveUrl: "",       // Add actual URL if available
        codeUrl: "",       // Add GitHub or repo URL if public
        testimonial: {
            text: "The HRMS transformed our HR operations completely. What used to take days is now handled in hours with complete transparency.",
            author: "Rajesh Sanghvi",
            role: "CEO, Sanghvi & Sons"
        },
        stats: [
            { value: "75%", label: "Process Efficiency" },
            { value: "40%", label: "Time Savings" },
            { value: "95%", label: "User Satisfaction" }
        ],
        challenges: [
            "Legacy system integration",
            "Mobile conversion optimization",
            "Real-time inventory management"
        ],
        awards: [
            "2023 Webby Award Nominee",
            "Awwwards Honorable Mention"
        ],
        status: "published",
        updatedAt: "2025-06-25T03:48:49.590Z"
    }, {
        _id: "6853a6293a6e5415f7163bba",
        title: "VASUNDHARA HRMS",
        category: "Shopify Web Development",
        year: "2023",
        client: "Sanghvi & Sons",
        description:
            "A comprehensive Human Resource Management System designed to streamline HR processes, employee management, and organizational workflows.",
        longDescription:
            "The VASUNDHARA HRMS revolutionizes traditional HR operations by integrating advanced automation, real-time analytics, and mobile-first accessibility into one cohesive platform.",
        duration: "4 months",
        teamSize: "5 specialists",
        features: [
            "Automated recruitment pipeline with AI-powered candidate screening",
            "Integrated payroll system with tax compliance",
            "Real-time performance analytics dashboard",
            "Employee self-service portal",
            "Customizable workflow automation",
            "Mobile-responsive design for on-the-go access"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "GraphQL",
            "Tailwind CSS",
            "Docker",
            "Payment Gateway"
        ],
        image: "laptop.webp",
        alt: "E-commerce website interface on multiple devices",
        liveUrl: "",       // Add actual URL if available
        codeUrl: "",       // Add GitHub or repo URL if public
        testimonial: {
            text: "The HRMS transformed our HR operations completely. What used to take days is now handled in hours with complete transparency.",
            author: "Rajesh Sanghvi",
            role: "CEO, Sanghvi & Sons"
        },
        stats: [
            { value: "75%", label: "Process Efficiency" },
            { value: "40%", label: "Time Savings" },
            { value: "95%", label: "User Satisfaction" }
        ],
        challenges: [
            "Legacy system integration",
            "Mobile conversion optimization",
            "Real-time inventory management"
        ],
        awards: [
            "2023 Webby Award Nominee",
            "Awwwards Honorable Mention"
        ],
        status: "published",
        updatedAt: "2025-06-25T03:48:49.590Z"
    }, {
        _id: "6853a6293a6e5415f7163bba",
        title: "VASUNDHARA HRMS",
        category: "Shopify Web Development",
        year: "2023",
        client: "Sanghvi & Sons",
        description:
            "A comprehensive Human Resource Management System designed to streamline HR processes, employee management, and organizational workflows.",
        longDescription:
            "The VASUNDHARA HRMS revolutionizes traditional HR operations by integrating advanced automation, real-time analytics, and mobile-first accessibility into one cohesive platform.",
        duration: "4 months",
        teamSize: "5 specialists",
        features: [
            "Automated recruitment pipeline with AI-powered candidate screening",
            "Integrated payroll system with tax compliance",
            "Real-time performance analytics dashboard",
            "Employee self-service portal",
            "Customizable workflow automation",
            "Mobile-responsive design for on-the-go access"
        ],
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "GraphQL",
            "Tailwind CSS",
            "Docker",
            "Payment Gateway"
        ],
        image: "laptop.webp",
        alt: "E-commerce website interface on multiple devices",
        liveUrl: "",       // Add actual URL if available
        codeUrl: "",       // Add GitHub or repo URL if public
        testimonial: {
            text: "The HRMS transformed our HR operations completely. What used to take days is now handled in hours with complete transparency.",
            author: "Rajesh Sanghvi",
            role: "CEO, Sanghvi & Sons"
        },
        stats: [
            { value: "75%", label: "Process Efficiency" },
            { value: "40%", label: "Time Savings" },
            { value: "95%", label: "User Satisfaction" }
        ],
        challenges: [
            "Legacy system integration",
            "Mobile conversion optimization",
            "Real-time inventory management"
        ],
        awards: [
            "2023 Webby Award Nominee",
            "Awwwards Honorable Mention"
        ],
        status: "published",
        updatedAt: "2025-06-25T03:48:49.590Z"
    },]);
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/publishedportfolio`);
                // console.log("response", response.data);

                setportfolioItems(response.data.data); // Set returned portfolios
            } catch (error) {
                console.error('Error fetching portfolio per category:', error);
                setportfolioItems(portfolioItemsTemp);
            }
        };

        fetchPortfolios();
    }, [portfolioItemsTemp]);

    const categories = ['All', ...new Set(portfolioItems.map(p => p.category))];
    const filteredProjects = activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(project => project.category === activeCategory);

    // const toggleExpandProject = (id) => {
    //     setExpandedProject(expandedProject === id ? null : id);
    // };
    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="bg-gray-50">
            <Helmet>
                <title>Our Work | Digital Campaigns, Websites & Mobile Apps | ShreeKhodiyar Technostack</title>
                <meta name="description" content="Discover how our digital agency has empowered startups and enterprises worldwide with impactful branding, development, and marketing projects." />
            </Helmet>

            {/* Hero Section */}
            {/* Minimalist Portfolio Hero */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center px-6 overflow-hidden bg-gray-50">
                {/* Dynamic gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 z-0" />

                {/* Floating background elements */}
                {/* Floating Settings Icons Background */}
                <div className="absolute inset-0 overflow-hidden opacity-1000 pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                rotate: 360,
                                y: [0, Math.random() * 60 - 30],
                                x: [0, Math.random() * 40 - 20]
                            }}
                            transition={{
                                duration: 30 + Math.random() * 30,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            }}
                            className="absolute text-blue-400/20"
                            style={{
                                fontSize: `${Math.random() * 24 + 16}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                        >
                            <FiBriefcase className="w-full h-full" />
                        </motion.div>
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    {/* Creative headline with animated gradient */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight">
                        Crafting <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-shift">Digital Experiences</span><br />
                        That Tell Your Story
                    </h1>

                    {/* Poetic description */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Where pixels meet purpose, and code transforms into captivating journeys.
                        Each project is a canvas for innovation and human connection.
                    </p>

                    {/* Interactive CTA */}
                    <div className="group">
                        <a
                            href="#portfolio"
                            className="inline-block px-8 py-4 text-lg font-medium relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <span>Explore Our Work</span>
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="absolute inset-0 border-2 border-gray-300 rounded-full group-hover:border-transparent transition-all duration-300" />
                        </a>
                    </div>
                </div>

                {/* Subtle scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <FiChevronDown className="text-gray-400 w-8 h-8" />
                </div>

                {/* CSS for animations */}
                <style jsx>{`
    @keyframes float-slow {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(20px, 30px) rotate(5deg); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-15px, -20px) rotate(-3deg); }
    }
    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
    .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
    .animate-gradient-shift { 
      background-size: 200% 200%;
      animation: gradient-shift 8s ease infinite; 
    }
  `}</style>
            </section>
            {/* Category Filters */}
            {/* <div className="flex flex-wrap justify-center gap-3 mb-10 mt-10">
                {categories.map(category => (
                    <motion.button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeCategory === category
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div> */}

            {/* Portfolio Grid */}
            <section id="portfolio" className="py-12 px-4 max-w-6xl mx-auto">
                {/* Portfolio Header with Stats */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Work</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Selected projects from our portfolio of 50+ successful deliveries
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 min-w-[150px]">
                            <p className="text-3xl font-bold text-blue-600">50+</p>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 min-w-[150px]">
                            <p className="text-3xl font-bold text-purple-600">12</p>
                            <p className="text-gray-600">Featured Projects</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 min-w-[150px]">
                            <p className="text-3xl font-bold text-indigo-600">100%</p>
                            <p className="text-gray-600">Client Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* Projects Grid - Showing all 12 projects without pagination */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProjects.map((item) => (
                        <motion.div
                            key={item.id}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <span className="text-sm font-medium text-white">{item.client}</span>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                    </div>
                                    <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                        {item.year}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-light">{item.category}</span>
                                    <button className="flex items-center text-white group-hover:text-blue-300 transition-colors">
                                        <a href={`/projectshow/${item._id}`}>View Project</a>
                                        <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-600 mb-6">
                        Want to see more of our work? Contact us for our full portfolio.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all">
                        Request Full Portfolio
                    </button>
                </div>
            </section>
            <CampaignResultsPage />
            {/* Process Section */}
            <section className="py-5 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Proven</span> Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            How we deliver exceptional results every time
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Discovery',
                                description: 'Deep dive into your business objectives and user needs',
                                icon: '🔍'
                            },
                            {
                                title: 'Strategy',
                                description: 'Data-driven approach to solving core challenges',
                                icon: '♟️'
                            },
                            {
                                title: 'Execution',
                                description: 'Agile development with continuous feedback loops',
                                icon: '⚡'
                            },
                            {
                                title: 'Optimization',
                                description: 'Iterative improvements based on real metrics',
                                icon: '📈'
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-indigo-300 transition-all"
                            >
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <BusinessStartup />
            <OurApproch />



            <HomeTestimonials />


            {/* CTA Section */}
            <section className="py-28 px-6 bg-white">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can help you achieve your business goals with our expertise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            Get Started Today
                        </a>
                        <a
                            href="/portfolio"
                            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                        >
                            View More Work
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;