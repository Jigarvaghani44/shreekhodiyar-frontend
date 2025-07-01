/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub, FiAward, FiTrendingUp, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import axios from 'axios';

const Portfolio = () => {
    // const [activeFilter, setActiveFilter] = useState('all');
    // const [expandedProject, setExpandedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const projectsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [portfolioItems, setportfolioItems] = useState([]);
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/publishedportfolio`);
                // console.log("response", response.data);

                setportfolioItems(response.data.data); // Set returned portfolios
            } catch (error) {
                console.error('Error fetching portfolio per category:', error);
            }
        };

        fetchPortfolios();
    }, []);

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
            {/* Hero Section */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white text-blacks overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" />
                </div>
                <div className="max-w-7xl  mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Portfolio</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                        Where innovative ideas meet exceptional execution
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-blue-50 opacity-70 backdrop-blur-sm p-4 rounded-lg">
                            <p className="text-3xl font-bold">50+</p>
                            <p className="text-sm">Projects Completed</p>
                        </div>
                        <div className="bg-blue-50 opacity-70 backdrop-blur-sm p-4 rounded-lg">
                            <p className="text-3xl font-bold">100%</p>
                            <p className="text-sm">Client Satisfaction</p>
                        </div>
                        <div className="bg-blue-50 opacity-70 backdrop-blur-sm p-4 rounded-lg">
                            <p className="text-3xl font-bold">15</p>
                            <p className="text-sm">Industry Awards</p>
                        </div>
                    </div>
                </div>

                {/* Floating background elements */}
                <div className="absolute inset-0 overflow-hidden opacity-50">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, 40, 0],
                                x: [0, Math.random() * 80 - 40, 0],
                                rotate: [0, Math.random() * 360]
                            }}
                            transition={{
                                duration: 15 + Math.random() * 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute rounded-lg bg-blue-800"
                            style={{
                                width: `${Math.random() * 200 + 50}px`,
                                height: `${Math.random() * 200 + 50}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.3 + 0.1
                            }}
                        />
                    ))}
                </div>
            </section>
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 mt-10">
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
            </div>

            {/* Portfolio Grid */}
            <section className="py- px-4 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            <div className="relative h-80 overflow-hidden">
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
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                        <nav className="flex items-center gap-2">
                            <button
                                onClick={() => paginate(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                            >
                                <FiChevronLeft className="w-5 h-5" />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === number
                                        ? 'bg-blue-600 text-white'
                                        : 'hover:bg-gray-100'
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}

                            <button
                                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                            >
                                <FiChevronRight className="w-5 h-5" />
                            </button>
                        </nav>
                    </div>
                )}
            </section>


            {/* Animated Client Showcase */}
            <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Trusted Partners
                            </span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Collaborating with visionary brands to create exceptional digital experiences
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Animated background elements */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.05 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="w-full max-w-4xl h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-70" />
                        </motion.div>

                        {/* Logo grid with staggered animations */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative z-10">
                            {[
                                { name: 'Google', logo: '/images/logos/google.svg' },
                                { name: 'Microsoft', logo: '/images/logos/microsoft.svg' },
                                { name: 'Amazon', logo: '/images/logos/amazon.svg' },
                                { name: 'Tesla', logo: '/images/logos/tesla.svg' },
                                { name: 'Nike', logo: '/images/logos/nike.svg' },
                                { name: 'Adobe', logo: '/images/logos/adobe.svg' },
                                { name: 'Spotify', logo: '/images/logos/spotify.svg' },
                                { name: 'Airbnb', logo: '/images/logos/airbnb.svg' },
                                { name: 'Uber', logo: '/images/logos/uber.svg' },
                                { name: 'Slack', logo: '/images/logos/slack.svg' },
                            ].map((company, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
                                >
                                    <div className="relative h-16 w-full flex items-center justify-center">
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                                            loading="lazy"
                                        />
                                        {/* Hover tooltip */}
                                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                                {company.name}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Animated call-to-action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center mt-16"
                        >
                            <button className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium overflow-hidden">
                                <span className="relative z-10">Become Our Partner</span>
                                <FiArrowRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1" />
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

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

            {/* Testimonials Carousel */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Client</span> Success Stories</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Don&apos;t just take our word for it
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-start mb-6">
                            <img
                                src="/images/client-avatar2.webp"
                                alt="Client"
                                className="w-16 h-16 rounded-full mr-6"
                            />
                            <div>
                                <p className="italic text-lg mb-4">
                                    &ldquo;Working with this team was transformative for our business. They not only delivered
                                    an exceptional product but became true partners in our growth journey. The results
                                    speak for themselves - 3x increase in customer engagement and 40% reduction in
                                    operational costs.&ldquo;
                                </p>
                                <div>
                                    <p className="font-bold">Michael T.</p>
                                    <p className="text-sm text-gray-500">CTO at TechForward Inc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2">
                            {[1, 2, 3].map((dot) => (
                                <button
                                    key={dot}
                                    className={`w-3 h-3 rounded-full ${dot === 1 ? 'bg-indigo-600' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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