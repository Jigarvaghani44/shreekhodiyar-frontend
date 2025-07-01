import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CaseStudyShowPage = () => {
    const navigate = useNavigate();

    // Sample case study data - replace with your actual data
    const caseStudy = {
        id: 1,
        title: "VASUNDHARA HRMS",
        category: "Web Development",
        year: "2023",
        client: "Sanghvi & Sons",
        overview: "A comprehensive Human Resource Management System designed to streamline HR processes.",
        challenge: "The client needed a solution to automate their manual HR processes that were time-consuming and error-prone.",
        solution: "We developed a custom HRMS platform with automated workflows, employee self-service portal, and real-time analytics.",
        results: [
            "75% reduction in HR process time",
            "90% employee adoption rate",
            "40% decrease in payroll errors",
            "Centralized employee database"
        ],
        technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
        images: [
            { url: "/images/hrms-dashboard.jpg", alt: "HRMS Dashboard" },
            { url: "/images/hrms-mobile.jpg", alt: "Mobile View" },
            { url: "/images/hrms-analytics.jpg", alt: "Analytics Dashboard" }
        ],
        liveUrl: "#",
        codeUrl: "#",
        testimonial: {
            text: "The HRMS transformed our HR operations completely. What used to take days now happens in minutes.",
            author: "Rajesh Sanghvi",
            role: "CEO, Sanghvi & Sons"
        }
    };

    // SEO metadata
    const seoTitle = `${caseStudy.title} Case Study | ${caseStudy.client}`;
    const seoDescription = caseStudy.overview;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:type" content="website" />
            </Helmet>

            {/* Back Button */}
            <div className="container mx-auto px-4 sm:px-6 pt-8">
                <motion.button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Go back to case studies"
                >
                    <FiArrowLeft className="mr-1 transition-transform group-hover:-translate-x-1" />
                    Back to Case Studies
                </motion.button>
            </div>

            {/* Case Study Header */}
            <motion.header
                className="py-12 md:py-16 lg:py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
                        {/* Case Study Info */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                                    {caseStudy.category}
                                </span>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    {caseStudy.title}
                                </h1>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-gray-600">{caseStudy.client}</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-gray-600">{caseStudy.year}</span>
                                </div>
                                <p className="text-lg md:text-xl text-gray-600 mb-8">{caseStudy.overview}</p>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 md:mb-12">
                                    {caseStudy.liveUrl && (
                                        <motion.a
                                            href={caseStudy.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label="View live demo"
                                        >
                                            <FiExternalLink className="mr-2" />
                                            Live Demo
                                        </motion.a>
                                    )}

                                </div>
                            </motion.div>
                        </div>

                        {/* Main Case Study Image */}
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="rounded-xl overflow-hidden shadow-2xl relative group">
                                <img
                                    src={caseStudy.images[0].url}
                                    alt={caseStudy.images[0].alt}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.header>

            {/* Case Study Details */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Challenge & Solution */}
                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-8 h-0.5 bg-blue-500 mr-4" />
                                    The &nbsp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Challenge</span>
                                </h2>
                                <p className="text-gray-600">{caseStudy.challenge}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-8 h-0.5 bg-blue-500 mr-4" />
                                    Our &nbsp;<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Solution</span>
                                </h2>
                                <p className="text-gray-600">{caseStudy.solution}</p>
                            </motion.div>
                        </div>

                        {/* Results */}
                        <motion.div
                            className="mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-8 h-0.5 bg-blue-500 mr-4" />
                                The  &nbsp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Results</span>
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {caseStudy.results.map((result, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-start">
                                            <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-600">{result}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            className="mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-8 h-0.5 bg-blue-500 mr-4" />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>  &nbsp; Used
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {caseStudy.technologies.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -2 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Gallery */}
                        <motion.div
                            className="mb-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                <span className="w-8 h-0.5 bg-blue-500 mr-4" />
                                Project   &nbsp;<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Gallery</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {caseStudy.images.slice(1).map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <span className="text-white font-medium">{image.alt}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Testimonial */}
                        {caseStudy.testimonial && (
                            <motion.div
                                className="bg-gray-50 rounded-2xl p-8 md:p-12"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="max-w-3xl mx-auto text-center">
                                    <svg className="w-12 h-12 mx-auto text-blue-700 mb-6" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <blockquote className="text-xl text-gray-700 mb-6">
                                        &ldquo;{caseStudy.testimonial.text}&ldquo;
                                    </blockquote>
                                    <div className="font-medium">
                                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{caseStudy.testimonial.author}</p>
                                        <p className="text-gray-600">{caseStudy.testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6  text-white">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let&apos;s collaborate to bring your ideas to life with our expertise and creativity.
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                            <FiChevronRight className="ml-2" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyShowPage;