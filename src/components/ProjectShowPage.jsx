/* eslint-disable no-console */
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiGithub, FiChevronLeft } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const ProjectShowPage = () => {
    const navigate = useNavigate();
    const [project, setProject] = useState([]);
    const { id } = useParams();
    // Sample project data
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/getbyid/${id}`);
                // console.log("response", response.data.data);

                setProject(response.data.data); // Set returned portfolios
            } catch (error) {
                console.error('Error fetching portfolio per category:', error);
            }
        };

        fetchPortfolios();
    }, [id]);
    console.log("project", project)
    // const project = {
    //     id: 1,
    //     title: "VASUNDHARA HRMS",
    //     category: "Web Development",
    //     year: "2023",
    //     client: "Sanghvi & Sons",
    //     description: "A comprehensive Human Resource Management System designed to streamline HR processes, employee management, and organizational workflows.",
    //     longDescription: "The VASUNDHARA HRMS revolutionizes traditional HR operations by integrating all essential functions into a single, user-friendly platform. Our solution addresses critical pain points in recruitment, onboarding, performance tracking, and payroll management, delivering measurable improvements in operational efficiency and employee satisfaction.",
    //     features: [
    //         "Automated recruitment pipeline with AI-powered candidate screening",
    //         "Integrated payroll system with tax compliance",
    //         "Real-time performance analytics dashboard",
    //         "Employee self-service portal",
    //         "Customizable workflow automation",
    //         "Mobile-responsive design for on-the-go access"
    //     ],
    //     technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS", "Docker"],
    //     image: "laptop.webp",
    //     secondaryImages: [
    //         "https://source.unsplash.com/random/800x600/?mobile,app",
    //         "https://source.unsplash.com/random/800x600/?office,team",
    //         "https://source.unsplash.com/random/800x600/?analytics,data"
    //     ],
    //     liveUrl: "#",
    //     codeUrl: "#",
    //     testimonial: {
    //         text: "The HRMS transformed our HR operations completely. What used to take days now happens in minutes, and our employees love the intuitive interface.",
    //         author: "Rajesh Sanghvi",
    //         role: "CEO, Sanghvi & Sons"
    //     },
    //     stats: [
    //         { value: "75%", label: "Process Efficiency" },
    //         { value: "40%", label: "Time Savings" },
    //         { value: "95%", label: "User Satisfaction" }
    //     ]
    // };

    // SEO metadata
    const seoTitle = `${project.title} | ${project.category} Project`;
    const seoDescription = project.description;
    const seoImage = project.image;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                <meta property="og:image" content={seoImage} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                <meta name="twitter:image" content={seoImage} />
            </Helmet>

            {/* Floating Particles Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-100 opacity-20"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5
                        }}
                        animate={{
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>

            {/* Back Button */}
            <div className="container mx-auto px-4 sm:px-6 pt-8 relative z-10">
                <motion.button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Go back to portfolio"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <FiChevronLeft className="mr-1 transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </motion.button>
            </div>

            {/* Project Header */}
            <motion.header
                className="relative py-12 md:py-16 lg:py-20 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
                        {/* Project Info */}
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <motion.span
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-4"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 500 }}
                                >
                                    {project.category}
                                </motion.span>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                                    {project.title}
                                </h1>

                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-gray-600">{project.client}</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-gray-600">{project.year}</span>
                                </div>

                                <p className="text-lg md:text-xl text-gray-700 mb-8">{project.description}</p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {project.stats?.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                                            <p className="text-xs text-gray-500">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 md:mb-12">
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all text-sm sm:text-base group"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label="View live demo"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <FiExternalLink className="mr-2 transition-transform group-hover:rotate-12" />
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Main Project Image */}
                        <motion.div
                            className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 blur-lg" />
                                <div className="rounded-2xl overflow-hidden shadow-2xl relative group transform transition-all hover:shadow-xl">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} main screenshot`}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                        loading="eager"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.header>

            {/* Project Details */}
            <section className="relative py-12 md:py-16 bg-white">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-white" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-4xl mx-auto">
                        {/* Detailed Description */}
                        <motion.div
                            className="mb-12 md:mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-4" />
                                Project Overview
                            </h2>
                            <div className="prose prose-sm sm:prose-lg text-gray-700">
                                <p>{project.longDescription}</p>
                            </div>
                        </motion.div>

                        {/* Features & Technologies */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                            {/* Key Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                                    Key Features
                                </h3>
                                <ul className="space-y-3 md:space-y-4">
                                    {project.features?.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Technologies */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {project.technologies?.map((tech, index) => (
                                        <motion.span
                                            key={index}
                                            className="px-3 py-1.5 bg-gradient-to-br from-gray-50 to-white text-gray-800 rounded-lg text-xs md:text-sm font-medium shadow-sm border border-gray-100"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -3, backgroundColor: "#EFF6FF" }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Gallery */}
                        {project.secondaryImages && project.secondaryImages.length > 0 && (
                            <motion.div
                                className="mb-12 md:mb-16"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center">
                                    <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mr-4" />
                                    Project Gallery
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                    {project.secondaryImages?.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all relative group"
                                            whileHover={{ y: -5 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                                <img
                                                    src={image}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <span className="text-white font-medium text-sm md:text-base translate-y-2 group-hover:translate-y-0 transition-transform">
                                                    {index === 0 ? 'Mobile View' : index === 1 ? 'Desktop View' : 'Dashboard View'}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Testimonial */}
                        {project.testimonial && (
                            <motion.div
                                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-100"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="max-w-3xl mx-auto text-center">
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-500">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                    <blockquote className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6 relative">
                                        <span className="absolute -top-4 -left-2 text-4xl text-blue-200">&ldquo;</span>
                                        <span className="relative">{project.testimonial.text}</span>
                                        <span className="absolute -bottom-6 -right-2 text-4xl text-blue-200">&ldquo;</span>
                                    </blockquote>
                                    <div className="font-medium">
                                        <p className="text-gray-900 text-lg">{project.testimonial.author}</p>
                                        <p className="text-gray-600 text-sm md:text-base">{project.testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 px-6 z-10 bg-white">
                <motion.div
                    className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-2xl p-8 sm:p-10 md:p-12 lg:p-14 text-center mx-auto max-w-5xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                            Ready to start your project?
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
                            Let&apos;s collaborate to bring your ideas to life with our expertise and creativity.
                        </p>
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all text-sm md:text-base shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Contact us"
                        >
                            Get in Touch
                            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            {/* Structured Data for SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "name": project.title,
                    "description": project.description,
                    "dateCreated": project.year,
                    "creator": {
                        "@type": "Organization",
                        "name": "Your Company Name"
                    },
                    "image": project.image,
                    "keywords": [project.technologies, project.category].join(", ")
                })}
            </script>
        </div>
    );
};

export default ProjectShowPage;