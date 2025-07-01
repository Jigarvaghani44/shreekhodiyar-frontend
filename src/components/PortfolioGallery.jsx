/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import axios from 'axios';

const PortfolioGallery = () => {
    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState(projects[0]?.category);
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Integrated projects data with category information
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/getOnePerCategory`);
                // console.log("response", response.data);

                setProjects(response.data); // Set returned portfolios
                setActiveCategory(response.data[0]?.category)
            } catch (error) {
                console.error('Error fetching portfolio per category:', error);
            }
        };

        fetchPortfolios();
    }, []);

    // Extract unique categories from projects
    const uniqueCategories = [...new Set(projects.map(project => project.category))];

    // Filter projects by active category
    const filteredProjects = projects.filter(project => project.category === activeCategory);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
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
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <section
            ref={ref}
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
            aria-label="Portfolio Projects Gallery"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Our Portfolio
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our diverse range of projects across different domains and technologies.
                    </p>
                </motion.header>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                    role="tablist"
                    aria-label="Project categories"
                >
                    {uniqueCategories.map((category) => (
                        <motion.button
                            key={category}
                            role="tab"
                            aria-selected={activeCategory === category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm sm:text-base transition-all ${activeCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                : 'bg-white text-gray-800 hover:bg-gray-100 shadow-sm'
                                }`}
                            aria-label={`Show ${category} projects`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : {}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.article
                                key={project.id}
                                variants={itemVariants}
                                whileHover="hover"
                                className="group"
                                aria-labelledby={`project-${project.id}-title`}
                            >
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md h-full flex flex-col border border-gray-100 transition-all duration-300">
                                    <div className="relative overflow-hidden aspect-[4/3]">
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-xs bg-blue-600/90 text-white px-2 py-1 rounded"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="mb-3">
                                            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-2">
                                                {project.category}
                                            </span>
                                            <h2 className="text-xl font-bold text-gray-900">
                                                {project.title}
                                            </h2>
                                        </div>
                                        <p className="text-gray-600 mb-4 flex-1">
                                            {project.description}
                                        </p>
                                        <a
                                            href={`/projectshow/${project._id}`}
                                            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                            aria-label={`View ${project.title} project`}
                                        >
                                            View Project <FaArrowRight className="ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h2>
                    <a
                        href="/portfolio"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
                        aria-label="View our full portfolio"
                    >
                        Browse Full Portfolio
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioGallery;