/* eslint-disable no-console */
/* eslint-disable no-alert */
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheck, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const QuickEnquiryPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
        company: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Shopify Web Development",
        "AI Solutions",
        "2d/3D Gaming Application",
        "Ar/Vr Gaming Application",
        "Flutter Applications",
    ];

    const faqs = [
        {
            question: "How soon can I expect a response?",
            answer: "We typically respond within 24 hours during business days."
        },
        {
            question: "Do you offer free consultations?",
            answer: "Yes, we provide a free 30-minute initial consultation for all new clients."
        },
        {
            question: "What are your working hours?",
            answer: "Our team is available Monday to Friday, 9AM to 6PM (EST)."
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm);

        const contactPayload = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            service: data.service,
            company: data.company,
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactPayload),
            });

            if (!response.ok) {
                throw new Error("Failed to submit contact form");
            }

            setIsSubmitted(true);
        } catch (err) {
            console.error("Submission error:", err);
            alert("Failed to submit form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Helmet>
                <title>Request a Proposal | ShreeKhodiyar Technostack Digital Agency</title>
                <meta name="description" content="Get in touch with our digital experts. Request a proposal for custom web development, app design, SEO services, or full digital solutions." />
            </Helmet>

            {/* Hero Header with Floating Elements */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative py-24 px-4 sm:px-6 text-center overflow-hidden"
            >
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

                {/* Gradient overlay */}
                <div className="absolute inset-0 " />

                <div className="relative max-w-4xl mx-auto z-10 mt-28">
                    <motion.h1
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                    >
                        Let&apos;s Build Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Amazing</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl  max-w-2xl mx-auto mb-8"
                    >
                        Share your project details and we&apos;ll get back to you within 24 hours
                    </motion.p>
                </div>
            </motion.header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 -mt-16 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        {isSubmitted ? (
                            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 text-center">
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring" }}
                                    className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <FiCheck className="text-green-500 text-4xl" />
                                </motion.div>
                                <h2 className="text-2xl font-bold mb-3 text-gray-800">Thank You!</h2>
                                <p className="text-gray-600 mb-6">
                                    Your enquiry has been submitted successfully. Our team will contact you shortly.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                                >
                                    Submit Another Enquiry
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                    <h2 className="text-xl sm:text-2xl font-bold">Project Enquiry Form</h2>
                                    <p className="text-blue-100">Fill out the form below to get started</p>
                                </div>

                                <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiUser className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiMail className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiPhone className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                        </div>

                                        {/* Company Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                placeholder="Your company"
                                            />
                                        </div>

                                        {/* Service Dropdown */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                                                Service Interested In <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white"
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service, index) => (
                                                        <option key={index} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <FiChevronDown className="text-gray-400" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message Field */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                Project Details <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute top-3 left-3">
                                                    <FiMessageSquare className="text-gray-400" />
                                                </div>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="5"
                                                    required
                                                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="Tell us about your project requirements, timeline, and budget..."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-8">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-medium text-white transition-all ${isLoading ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg'
                                                }`}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <FiSend className="mr-2" />
                                                    Submit Enquiry
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 space-y-8"
                    >
                        {/* Contact Info Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                <h2 className="text-xl font-bold">Contact Information</h2>
                            </div>
                            <div className="p-6 sm:p-8">
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                                            <FiMail className="text-blue-600 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email us at</p>
                                            <p className="text-gray-800 font-medium">contact@unitechnostack.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                                            <FiPhone className="text-blue-600 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Call us at</p>
                                            <p className="text-gray-800 font-medium">+91 9574160974</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-sm text-gray-500">Office hours:</p>
                                        <p className="text-gray-800 font-medium">Mon-Fri, 9AM-6PM EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
                            </div>
                            <div className="p-6 sm:p-8">
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                                            <button
                                                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                                className="w-full flex justify-between items-center text-left"
                                            >
                                                <h3 className="font-medium text-gray-800">{faq.question}</h3>
                                                <FiChevronDown className={`transition-transform ${activeAccordion === index ? 'transform rotate-180' : ''}`} />
                                            </button>
                                            {activeAccordion === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pt-2 text-gray-600">{faq.answer}</p>
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                <h2 className="text-xl font-bold">Why Choose Us</h2>
                            </div>
                            <div className="p-6 sm:p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "24-48h Response", icon: "⏱️" },
                                        { label: "Free Consultation", icon: "💬" },
                                        { label: "5+ Years Experience", icon: "🏆" },
                                        { label: "Client-Focused", icon: "❤️" }
                                    ].map((item, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                                            <div className="text-2xl mb-2">{item.icon}</div>
                                            <p className="text-sm font-medium text-gray-800">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default QuickEnquiryPage;