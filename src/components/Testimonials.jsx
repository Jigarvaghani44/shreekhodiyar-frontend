/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { FiChevronLeft, FiStar, FiMessageSquare, FiUser, FiMail, FiBriefcase } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TestimonialsPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        company: '',
        content: '',
        rating: 5,
        project: '',
        date: new Date().toISOString().split('T')[0] // Sets today's date in YYYY-MM-DD format
    });
    const [errors, setErrors] = useState({});
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/testimonial/publishedtestimonial`);
                setTestimonials(response.data.data);
            } catch (error) {
                toast.error('Failed to fetch testimonials');
                console.error('Error fetching testimonials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.role.trim()) newErrors.role = 'Role is required';
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        if (!formData.content.trim()) newErrors.content = 'Testimonial is required';
        if (!formData.project.trim()) newErrors.project = 'Project name is required';
        if (!formData.date.trim()) newErrors.date = 'Date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            setLoading(true);
            await axios.post(`${process.env.REACT_APP_API_URL}/api/testimonials`, formData);
            toast.success('Testimonial submitted successfully!');
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                role: '',
                company: '',
                content: '',
                project: '',
                date: '',
                rating: 5
            });
        } catch (error) {
            toast.error('Failed to submit testimonial');
            console.error('Error submitting testimonial:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading && testimonials.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
            </div>
        );
    }

    const featuredTestimonial = testimonials[0] || {
        name: "Rajesh Sanghvi",
        role: "CEO, Sanghvi & Sons",
        content: "The HRMS transformed our HR operations completely. What used to take days now happens in minutes.",
        rating: 5,
        project: "VASUNDHARA HRMS",
        date: "March 2023"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Helmet>
                <title>Client Testimonials | Trusted Global Digital Agency | ShreeKhodiyar Technostack</title>
                <meta name="description" content="Read what our international clients say about partnering with ShreeKhodiyar Technostack for web, marketing, app, and branding services." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            className="inline-block px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium mb-4 shadow-sm"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        >
                            Client Voices
                        </motion.span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Trusted By
                            </span> {' '}
                            Our Clients
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Testimonial */}
            <section className="py-12 md:py-16">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                <div className="lg:w-1/3">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 text-2xl font-bold shadow-md">
                                            {featuredTestimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-xl">{featuredTestimonial.name}</h3>
                                            <p className="text-gray-600">{featuredTestimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Project</p>
                                        <p className="font-medium text-blue-600">{featuredTestimonial.project}</p>
                                    </div>
                                    <div className="flex items-center mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar
                                                key={i}
                                                className={`w-6 h-6 ${i < featuredTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="hidden lg:block">
                                        <svg className="w-24 h-24 text-blue-100 opacity-70" fill="currentColor" viewBox="0 0 32 32">
                                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <blockquote className="text-lg md:text-xl text-gray-700 relative pl-8">
                                        <FiMessageSquare className="absolute top-0 left-0 text-4xl text-blue-100 opacity-70" />
                                        <p className="mb-6">{featuredTestimonial.content}</p>
                                        <div className="text-right">
                                            <span className="text-sm text-gray-400">{featuredTestimonial.date}</span>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-12 md:py-16 bg-white">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            More <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Success Stories</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover how we've helped businesses like yours achieve their goals.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.slice(1).map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id || index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>

                                <blockquote className="text-gray-600 mb-4 relative pl-6">
                                    <FiMessageSquare className="absolute top-0 left-0 text-xl text-blue-100" />
                                    {testimonial.content}
                                </blockquote>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-sm font-medium text-blue-600">{testimonial.project}</p>
                                    <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Form */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                            <h2 className="text-2xl md:text-3xl font-bold">Share Your Experience</h2>
                            <p className="text-blue-100">We'd love to hear your feedback</p>
                        </div>

                        <div className="p-6 md:p-8">
                            {submitted ? (
                                <motion.div
                                    className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                >
                                    <h3 className="font-bold mb-1">Thank You!</h3>
                                    <p>We appreciate your feedback and will review your testimonial shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                    <FiUser />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`pl-10 w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                    <FiMail />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`pl-10 w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                                                Your Role <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className={`w-full rounded-lg border ${errors.role ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                                placeholder="e.g. Marketing Director"
                                            />
                                            {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                                Company <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                    <FiBriefcase />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className={`pl-10 w-full rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                                    placeholder="Company Name"
                                                />
                                            </div>
                                            {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                                        </div>
                                    </div>
                                    {/* Project Field */}
                                    <div className="mt-4">
                                        <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                                            Project Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="project"
                                            name="project"
                                            value={formData.project}
                                            onChange={handleChange}
                                            className={`w-full rounded-lg border ${errors.project ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="Project Name"
                                        />
                                        {errors.project && <p className="mt-1 text-sm text-red-600">{errors.project}</p>}
                                    </div>

                                    {/* Date Field */}
                                    <div className="mt-4">
                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                            Date <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className={`w-full rounded-lg border ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                        />
                                        {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Rating <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center space-x-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, rating: star })}
                                                    onMouseEnter={() => setHoverRating(star)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                    className="focus:outline-none"
                                                >
                                                    <FiStar
                                                        className={`w-8 h-8 ${(hoverRating || formData.rating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Testimonial <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="content"
                                            name="content"
                                            rows={5}
                                            value={formData.testimonial}
                                            onChange={handleChange}
                                            className={`w-full rounded-lg border ${errors.testimonial ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="Share your experience working with us..."
                                        />
                                        {errors.testimonial && <p className="mt-1 text-sm text-red-600">{errors.testimonial}</p>}
                                    </div>

                                    <div className="flex justify-end">
                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {loading ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Submitting...
                                                </>
                                            ) : 'Submit Testimonial'}
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6  text-white">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join our growing list of satisfied clients and experience the difference.
                        </p>
                        <motion.button
                            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/quickenquiry')}
                        >
                            Get Started
                            <FiChevronLeft className="ml-2 transform rotate-180" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;