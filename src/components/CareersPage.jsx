/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiAward, FiDollarSign, FiClock, FiMapPin, FiCheck } from 'react-icons/fi';

const CareersPage = () => {
    const [activeDepartment, setActiveDepartment] = useState('all');
    const [expandedJob, setExpandedJob] = useState(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobOpenings, setJobOpenings] = useState([]);
    const [loading, setLoading] = useState(true);

    // Add form state
    const [applicationData, setApplicationData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
        portfolioUrl: ''
    });
    // Job Openings Data
    // const jobOpenings = [
    //     {
    //         id: 1,
    //         title: "Frontend Developer (React)",
    //         department: "engineering",
    //         type: "Full-time",
    //         location: "Remote",
    //         salary: "$90,000 - $120,000",
    //         description: "We're looking for a skilled React developer to build beautiful, performant user interfaces.",
    //         responsibilities: [
    //             "Develop responsive web applications using React.js",
    //             "Collaborate with designers to implement UI/UX",
    //             "Optimize applications for maximum speed",
    //             "Write clean, maintainable code"
    //         ],
    //         requirements: [
    //             "3+ years of React experience",
    //             "Proficient in JavaScript (ES6+)",
    //             "Experience with Redux or Context API",
    //             "Familiarity with RESTful APIs"
    //         ],
    //         perks: [
    //             "Flexible work hours",
    //             "Annual tech budget",
    //             "Health insurance",
    //             "Stock options"
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: "Frontend Developer (React)",
    //         department: "engineering",
    //         type: "Full-time",
    //         location: "Remote",
    //         salary: "$90,000 - $120,000",
    //         description: "We're looking for a skilled React developer to build beautiful, performant user interfaces.",
    //         responsibilities: [
    //             "Develop responsive web applications using React.js",
    //             "Collaborate with designers to implement UI/UX",
    //             "Optimize applications for maximum speed",
    //             "Write clean, maintainable code"
    //         ],
    //         requirements: [
    //             "3+ years of React experience",
    //             "Proficient in JavaScript (ES6+)",
    //             "Experience with Redux or Context API",
    //             "Familiarity with RESTful APIs"
    //         ],
    //         perks: [
    //             "Flexible work hours",
    //             "Annual tech budget",
    //             "Health insurance",
    //             "Stock options"
    //         ]
    //     },
    //     {
    //         id: 3,
    //         title: "Frontend Developer (React)",
    //         department: "engineering",
    //         type: "Full-time",
    //         location: "Remote",
    //         salary: "$90,000 - $120,000",
    //         description: "We're looking for a skilled React developer to build beautiful, performant user interfaces.",
    //         responsibilities: [
    //             "Develop responsive web applications using React.js",
    //             "Collaborate with designers to implement UI/UX",
    //             "Optimize applications for maximum speed",
    //             "Write clean, maintainable code"
    //         ],
    //         requirements: [
    //             "3+ years of React experience",
    //             "Proficient in JavaScript (ES6+)",
    //             "Experience with Redux or Context API",
    //             "Familiarity with RESTful APIs"
    //         ],
    //         perks: [
    //             "Flexible work hours",
    //             "Annual tech budget",
    //             "Health insurance",
    //             "Stock options"
    //         ]
    //     },
    //     {
    //         id: 4,
    //         title: "Frontend Developer (React)",
    //         department: "engineering",
    //         type: "Full-time",
    //         location: "Remote",
    //         salary: "$90,000 - $120,000",
    //         description: "We're looking for a skilled React developer to build beautiful, performant user interfaces.",
    //         responsibilities: [
    //             "Develop responsive web applications using React.js",
    //             "Collaborate with designers to implement UI/UX",
    //             "Optimize applications for maximum speed",
    //             "Write clean, maintainable code"
    //         ],
    //         requirements: [
    //             "3+ years of React experience",
    //             "Proficient in JavaScript (ES6+)",
    //             "Experience with Redux or Context API",
    //             "Familiarity with RESTful APIs"
    //         ],
    //         perks: [
    //             "Flexible work hours",
    //             "Annual tech budget",
    //             "Health insurance",
    //             "Stock options"
    //         ]
    //     },
    //     // More jobs...
    // ];

    // Departments for filtering
    const departments = [
        { id: 'all', name: 'All Departments' },
        { id: 'engineering', name: 'Engineering' },
        { id: 'design', name: 'Design' },
        { id: 'marketing', name: 'Marketing' },
        { id: 'product', name: 'Product' }
    ];

    // Employee testimonials
    const testimonials = [
        {
            quote: "What I love most is the culture of innovation and the trust to experiment with new technologies.",
            name: "Sarah Chen",
            role: "Senior Frontend Developer",
            tenure: "2 years"
        },
        // More testimonials...
    ];

    // Culture highlights
    const cultureHighlights = [
        {
            icon: <FiUsers className="text-3xl text-blue-600" />,
            title: "Collaborative Teams",
            description: "Cross-functional squads working towards common goals"
        },
        // More highlights...
    ];

    // Filter jobs by department
    const filteredJobs = activeDepartment === 'all'
        ? jobOpenings
        : jobOpenings.filter(job => job.department === activeDepartment);



    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApplicationData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle file upload
    const handleFileChange = (e) => {
        setApplicationData(prev => ({
            ...prev,
            [e.target.name]: e.target.files[0]
        }));
    };
    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/careerApplicants`);
                setJobOpenings(response.data?.data || []);
            } catch (err) {
                console.error("Failed to fetch careers:", err.response?.data || err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCareers();
    }, []);

    if (loading) return <div>Loading...</div>;
    // Handle form submission
    // console.log("expandedJob", expandedJob);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Submitting application:', { ...applicationData, position: selectedJob.title });
        // Reset form after submission
        // setShowApplicationForm(false);
        // setApplicationData({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     resume: '',
        //     coverLetter: '',
        //     portfolioUrl: ''
        // });
        const formData = new FormData();
        formData.append('name', applicationData.name);
        formData.append('email', applicationData.email);
        formData.append('phone', applicationData.phone);
        formData.append('resume', applicationData.resume); // File object from <input type="file" />
        formData.append('coverLetter', applicationData.coverLetter);
        formData.append('portfolioUrl', applicationData.portfolioUrl);
        await axios.post(
            `${process.env.REACT_APP_API_URL}/api/careers/${expandedJob}`,
            formData);
        setShowApplicationForm(false)
    };

    // Open application form
    const handleApplyNow = (job) => {
        setSelectedJob(job);
        setShowApplicationForm(true);
    };
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
            {/* **Hero Section** */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6 mt-10"
                    >
                        Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Career</span> With Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
                    >
                        Join a team that values innovation, creativity, and professional growth.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#openings"
                            className="bg-blue-100 opacity-100 text-blue-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                        >
                            View Open Positions
                        </a>
                        <a
                            href="#culture"
                            className=" bg-blue-100 opacity-100 text-blue-800 px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                        >
                            Our Culture
                        </a>
                    </motion.div>
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

            {/* **Why Join Us** */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why You&apos;ll Love <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Working Here</span></h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We&apos;re building more than products - we&apos;re building an environment where talent thrives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FiAward className="text-4xl text-blue-600 mb-4" />,
                            title: "Professional Growth",
                            description: "Annual $5,000 learning budget and mentorship programs"
                        },
                        {
                            icon: <FiDollarSign className="text-4xl text-green-600 mb-4" />,
                            title: "Competitive Compensation",
                            description: "Salary, bonuses, and equity packages"
                        },
                        {
                            icon: <FiClock className="text-4xl text-purple-600 mb-4" />,
                            title: "Flexible Work",
                            description: "Remote options and flexible hours"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* **Our Culture** */}
            <section id="culture" className="py-20 px-6 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> Culture</span></h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The values that define how we work and grow together
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {cultureHighlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-lg shadow-md"
                            >
                                <div className="text-blue-600 mb-4">{highlight.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                                <p className="text-gray-600">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Employee Testimonials */}
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <h3 className="text-2xl font-bold mb-8">Hear From <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Our Team</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="border-l-4 border-blue-500 pl-6"
                                >
                                    <p className="italic text-lg mb-4">&ldquo;{testimonial.quote}</p>
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                        <p className="text-sm text-gray-500">{testimonial.tenure} at company</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {showApplicationForm && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowApplicationForm(false)}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold">Apply for {selectedJob?.title}</h3>
                                <button
                                    onClick={() => setShowApplicationForm(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Full Name*</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={applicationData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Email*</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={applicationData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={applicationData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Portfolio/Website</label>
                                        <input
                                            type="url"
                                            name="portfolioUrl"
                                            value={applicationData.portfolioUrl}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="https://"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-gray-700 mb-2">Cover Letter</label>
                                        <textarea
                                            name="coverLetter"
                                            value={applicationData.coverLetter}
                                            onChange={handleInputChange}
                                            rows="4"
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Tell us why you're a great fit for this position..."
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-gray-700 mb-2">Resume/CV*</label>
                                        <div className="flex items-center">
                                            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg border border-gray-300 transition-colors">
                                                <input
                                                    type="file"
                                                    name="resume"
                                                    onChange={handleFileChange}
                                                    className=""
                                                    accept=".pdf,.doc,.docx"
                                                    required
                                                />
                                                Choose File
                                            </label>
                                            <span className="ml-3 text-gray-600">
                                                {applicationData.resume ? applicationData.resume.name : "No file chosen"}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowApplicationForm(false)}
                                        className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        // onClick={() => setShowApplicationForm(false)}
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            {/* **Job Openings** */}
            <section id="openings" className="py-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Current <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Openings</span></h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Browse our available positions and find your perfect fit
                    </p>
                </div>




                {/* Job Listings */}
                <div className="space-y-4">
                    {filteredJobs.map((job) => (
                        <motion.div
                            key={job._id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <button
                                onClick={() => setExpandedJob(expandedJob === job._id ? null : job._id)}
                                className="w-full text-left p-6 md:p-8 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{job.title}</h3>
                                        <div className="flex flex-wrap gap-3 mt-2">
                                            <span className="flex items-center gap-1 text-gray-600">
                                                <FiMapPin className="text-blue-500" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1 text-gray-600">
                                                <FiClock className="text-blue-500" /> {job.type}
                                            </span>
                                            <span className="flex items-center gap-1 text-gray-600">
                                                <FiDollarSign className="text-blue-500" /> {job.salary}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`transition-transform ${expandedJob === job._id ? 'rotate-90' : ''}`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </button>

                            {/* Expanded Job Details */}
                            <AnimatePresence>
                                {expandedJob === job._id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 md:px-8 pb-8"
                                    >
                                        <div className="border-t border-gray-200 pt-6">
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <div className="md:col-span-2">
                                                    <h4 className="text-lg font-bold mb-4">Job Description</h4>
                                                    <p className="text-gray-700 mb-6">{job.description}</p>

                                                    <h4 className="text-lg font-bold mb-4">Responsibilities</h4>
                                                    <ul className="space-y-2 mb-6">
                                                        {job.responsibilities}
                                                    </ul>

                                                    <h4 className="text-lg font-bold mb-4">Requirements</h4>
                                                    <ul className="space-y-2">
                                                        {job.requirements}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-bold mb-4">Perks & Benefits</h4>
                                                    <ul className="space-y-3">
                                                        {job.perks?.map((perk, i) => (
                                                            <li key={i} className="flex items-start gap-3">
                                                                <span className="bg-blue-100 text-blue-600 rounded-full p-1">
                                                                    <FiCheck className="w-4 h-4" />
                                                                </span>
                                                                <span>{perk}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="mt-8">
                                                        <a
                                                            onClick={() => handleApplyNow(job)}
                                                            className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors cursor-pointer"
                                                        >
                                                            Apply Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* No Jobs Fallback */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-12">
                        <h3 className="text-xl font-bold mb-2">No current openings in this department</h3>
                        <p className="text-gray-600 mb-4">Check back later or browse all positions</p>
                        <button
                            onClick={() => setActiveDepartment('all')}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            View all departments
                        </button>
                    </div>
                )}
            </section>
            {/* 
            {/* **Application CTA** 
            <section className="py-20 px-6  text-white">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Don&apos;t See Your Dream Role?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We&apos;re always looking for talented people. Send us your resume!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/apply"
                            className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            Submit General Application
                        </a>
                        <a
                            href="/contact"
                            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                        >
                            Contact Our Team
                        </a>
                    </div>
                </div>
            </section> */}

            {/* Company Culture Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 relative">
                            <motion.img
                                src="team.webp"
                                alt="Innovative team working together"
                                className="rounded-xl shadow-lg w-full"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md hidden lg:block">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                                        <FiUsers className="text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Join Our Team</p>
                                        <p className="text-sm text-gray-600">50+ Open Positions</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <motion.h2
                                className="text-3xl font-bold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Innovate. Grow. Succeed – Be Part of Our Story
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="space-y-4 text-gray-700"
                            >
                                <p>
                                    At our company, we embrace diversity and celebrate differences. Our team is more than just colleagues - we're a community that supports, encourages, and uplifts one another.
                                </p>
                                <p>
                                    We believe in the continuous growth of our team. Our workplace is a hub for mentorship, skill-building, and the best career opportunities. Your success is our success!
                                </p>
                                <p>
                                    You'll be surrounded by talented professionals who inspire and uplift each other, creating an environment where great ideas flourish.
                                </p>
                                <p className="font-medium">
                                    Bring your passion, creativity, and skills, and let's create something amazing together. Apply now and be part of our family!
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="mt-8"
                            >
                                <a
                                    href="#openings"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                                >
                                    View Current Openings
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Career Benefits Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Let Your Career <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Take Flight</span></h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We don't just offer jobs, we create a space where passion meets innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10.5263H4.21053V20H0V10.5263ZM14.7368 6.31579H18.9474V20H14.7368V6.31579ZM7.36842 0H11.5789V20H7.36842V0Z" fill="#0094EE" />
                                    </svg>
                                ),
                                title: "Growth-Focused",
                                description: "We keep employee growth in mind, with each development step and project we take up."
                            },
                            {
                                icon: (
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7895 17.8947H5.26316V18.9474C5.26316 19.5287 4.79187 20 4.21053 20H2.10526C1.52392 20 1.05263 19.5287 1.05263 18.9474V9.47368H0V5.26316H1.05263V2.10526C1.05263 0.942558 1.99519 0 3.15789 0H17.8947C19.0575 0 20 0.942558 20 2.10526V5.26316H21.0526V9.47368H20V18.9474C20 19.5287 19.5287 20 18.9474 20H16.8421C16.2607 20 15.7895 19.5287 15.7895 18.9474V17.8947ZM3.15789 2.10526V9.47368H17.8947V2.10526H3.15789ZM5.78947 15.7895C6.66151 15.7895 7.36842 15.0825 7.36842 14.2105C7.36842 13.3385 6.66151 12.6316 5.78947 12.6316C4.91744 12.6316 4.21053 13.3385 4.21053 14.2105C4.21053 15.0825 4.91744 15.7895 5.78947 15.7895ZM15.2632 15.7895C16.1352 15.7895 16.8421 15.0825 16.8421 14.2105C16.8421 13.3385 16.1352 12.6316 15.2632 12.6316C14.3912 12.6316 13.6842 13.3385 13.6842 14.2105C13.6842 15.0825 14.3912 15.7895 15.2632 15.7895Z" fill="#F8A02D" />
                                    </svg>
                                ),
                                title: "Regular Outings",
                                description: "Outings like picnic, movie day, sports day and more are organized for mental and physical balance."
                            },
                            {
                                icon: (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.47717 20 0 15.5229 0 9.99998C0 4.47716 4.47717 0 10 0C15.5229 0 20.0001 4.47716 20.0001 9.99998C20.0001 15.5229 15.5229 20 10 20ZM6.50002 12V14H9.00004V16H11V14H12.0001C13.3808 14 14.5001 12.8808 14.5001 11.5C14.5001 10.1193 13.3808 8.99997 12.0001 8.99997H8.00004C7.72388 8.99997 7.50002 8.77617 7.50002 8.49997C7.50002 8.22387 7.72388 7.99997 8.00004 7.99997H13.5001V6.00002H11V4.00001H9.00004V6.00002H8.00004C6.61931 6.00002 5.50001 7.1193 5.50001 8.49997C5.50001 9.88078 6.61931 11 8.00004 11H12.0001C12.2762 11 12.5001 11.2239 12.5001 11.5C12.5001 11.7762 12.2762 12 12.0001 12H6.50002Z" fill="#1ADB92" />
                                    </svg>
                                ),
                                title: "Bonus & Compensations",
                                description: "Timely appraisals, bonus and compensations are made based on performance."
                            },
                            {
                                icon: (
                                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9999 0L0 6.99997L11.9999 13.9999L21.9999 8.16666V15.4999H23.9999V6.99997L11.9999 0ZM3.999 11.4904V16C5.82341 18.4289 8.72808 20 11.9997 20C15.2713 20 18.176 18.4289 20.0004 16L20 11.4912L12.0002 16.1578L3.999 11.4904Z" fill="#599FFA" />
                                    </svg>
                                ),
                                title: "Periodic Upskilling",
                                description: "We believe in constant learning and provide training sessions regularly for employee growth."
                            },
                            {
                                icon: (
                                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3143 3.04714H13.2043C9.83852 3.04714 7.10999 5.77564 7.10999 9.14143C7.10999 12.5072 9.83852 15.2357 13.2043 15.2357H20.3143V17.2671C20.3143 17.8281 19.8596 18.2829 19.2986 18.2829H1.01571C0.454755 18.2829 0 17.8281 0 17.2671V1.01571C0 0.454745 0.454755 0 1.01571 0H19.2986C19.8596 0 20.3143 0.454745 20.3143 1.01571V3.04714ZM13.2043 5.07857H21.33V13.2043H13.2043C10.9604 13.2043 9.14144 11.3852 9.14144 9.14143C9.14144 6.89757 10.9604 5.07857 13.2043 5.07857ZM13.2043 8.12572V10.1571H16.2514V8.12572H13.2043Z" fill="#1B5F1C" />
                                    </svg>
                                ),
                                title: "Supportive Environment",
                                description: "The atmosphere challenges and nurtures you with a supportive team."
                            },
                            {
                                icon: (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM11 10V5H9V12H15V10H11Z" fill="#D92A2A" />
                                    </svg>
                                ),
                                title: "Flexible Hours",
                                description: "Flexible work timing increases productivity without stress."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div >
    );
};

export default CareersPage;