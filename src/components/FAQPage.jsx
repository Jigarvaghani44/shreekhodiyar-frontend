import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiChevronDown, FiMessageSquare } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

const FAQPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedId, setExpandedId] = useState(null);

    const categories = [
        {
            id: 'general',
            name: 'General Questions'
        },
        {
            id: 'account',
            name: 'Account & Billing'
        },
        {
            id: 'technical',
            name: 'Technical Support'
        },
        {
            id: 'services',
            name: 'Our Services'
        },
        {
            id: 'privacy',
            name: 'Privacy & Security'
        }
    ];

    const faqs = [
        {
            id: 1,
            question: "What services does ShreeKhodiyar TechnoStack offer?",
            answer: "We provide comprehensive digital solutions including web development, mobile app development, eCommerce solutions, UI/UX design, digital marketing, and custom software development tailored to your business needs.",
            category: 'general',
            featured: true
        },
        {
            id: 2,
            question: "How do I create an account?",
            answer: "Click on the 'Sign Up' button in the top right corner of our website. You'll need to provide your name, email address, and create a password. After email verification, your account will be active.",
            category: 'account'
        },
        {
            id: 3,
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise clients, we also accept checks and can arrange payment plans.",
            category: 'account'
        },
        {
            id: 4,
            question: "Can I cancel my subscription?",
            answer: "Yes, you can cancel anytime from your account dashboard. If you cancel mid-billing cycle, you'll have access until the end of your current period. No partial refunds are provided.",
            category: 'account'
        },
        {
            id: 5,
            question: "What technologies do you work with?",
            answer: "Our tech stack includes React, Angular, Node.js, Python/Django, PHP/Laravel for web development; React Native and Flutter for mobile; Shopify and WooCommerce for eCommerce; and various CMS platforms like WordPress.",
            category: 'technical'
        },
        {
            id: 6,
            question: "Do you provide ongoing maintenance?",
            answer: "Yes, we offer maintenance packages at different tiers (Basic, Standard, Premium) that include regular updates, security patches, performance monitoring, and technical support.",
            category: 'technical'
        },
        {
            id: 7,
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on scope. A basic website takes 4-6 weeks, custom web applications 8-12 weeks, and mobile apps 10-16 weeks. We provide detailed timelines after requirements analysis.",
            category: 'services'
        },
        {
            id: 8,
            question: "Do you offer custom solutions?",
            answer: "Absolutely! We specialize in custom software development tailored to your specific business needs. Our team will work with you to understand your requirements and deliver a solution that fits perfectly.",
            category: 'services'
        },
        {
            id: 9,
            question: "How do you ensure data security?",
            answer: "We implement industry-standard security measures including SSL encryption, regular security audits, role-based access control, and compliance with GDPR and other data protection regulations.",
            category: 'privacy'
        },
        {
            id: 10,
            question: "Where are your servers located?",
            answer: "We use cloud hosting providers with data centers worldwide. Primary locations are in the US (AWS us-east-1), Europe (AWS eu-central-1), and Asia (AWS ap-southeast-1). We can accommodate specific regional requirements.",
            category: 'privacy'
        },
        {
            id: 11,
            question: "What's your refund policy?",
            answer: "We offer a 14-day money-back guarantee for our subscription services. Custom development projects follow a milestone-based payment structure with refunds available for undelivered milestones.",
            category: 'account'
        },
        {
            id: 12,
            question: "How can I contact support?",
            answer: "Our support team is available 24/7 via email at support@shreekhodiyartech.com, live chat on our website, or phone at +91 9574160974 during business hours (9AM-6:30PM EST).",
            category: 'general'
        }
    ];

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredFaqs = faqs.filter(faq => faq.featured);

    return (
        <div className="bg-gray-50  min-h-screen">
            {/* Hero Section */}
            <Helmet>
                <title>FAQs | Digital Services, Pricing & Projects | ShreeKhodiyar Technostack</title>
                <meta name="description" content="Answers to your most common questions about working with our digital agency for websites, mobile apps, branding, and marketing." />
            </Helmet>

            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-70 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                x: [0, Math.random() * 100 - 50],
                                y: [0, Math.random() * 100 - 50],
                                rotate: [0, 180]
                            }}
                            transition={{
                                duration: 15 + Math.random() * 15,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                            className="absolute rounded-lg bg-indigo-900"
                            style={{
                                width: `${Math.random() * 300 + 100}px`,
                                height: `${Math.random() * 300 + 100}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.2 + 0.1
                            }}
                        />
                    ))}
                </div>
                <div className=" relative z-10 mx-auto my-10 px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 mt-20 "
                    >
                        How can we help you?
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto relative"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                className="w-full py-4 px-6 pr-12 rounded-lg border-0 focus:ring-2 focus:ring-blue-400 text-gray-900"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <FiSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="lg:max-w-5xl  mx-auto px-6 py-12">
                {/* Featured FAQs */}
                {!searchQuery && activeCategory === 'general' && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredFaqs.map((faq) => (
                                <motion.div
                                    key={faq.id}
                                    whileHover={{ y: -3 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer"
                                    onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                        <FiChevronDown className={`text-gray-500 transition-transform ${expandedId === faq.id ? 'transform rotate-180' : ''}`} />
                                    </div>
                                    <AnimatePresence>
                                        {expandedId === faq.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="pt-4 text-gray-600">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="relative">
                        {/* Scrollable container with gradient fade */}
                        <div className="relative">
                            <div className="container mx-auto flex flex-wrap gap-2 mt-4 md:mt-0">
                                {[{ id: 'all', name: 'All Questions' }, ...categories].map((category) => (
                                    <button
                                        key={category.id}
                                        className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${activeCategory === category.id
                                            ? 'bg-gradient-to-r from-blue-700 to-purple-800 text-white shadow-md'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                            }`}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                            {/* Gradient fade for visual indication of scrollable content */}
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
                {/* FAQ List */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {filteredFaqs.length > 0 ? (
                        <div className="space-y-4">
                            {filteredFaqs.map((faq) => (
                                <motion.div
                                    key={faq.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                                >
                                    <button
                                        className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                                        onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                                    >
                                        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                        <FiChevronDown className={`text-gray-500 transition-transform ${expandedId === faq.id ? 'transform rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {expandedId === faq.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="px-6 pb-6"
                                            >
                                                <div className="text-gray-600">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                                <FiSearch className="text-gray-400 text-3xl" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                We couldn&apos;t find any FAQs matching your search. Try different keywords or contact our support team.
                            </p>
                        </div>
                    )}
                </motion.section>

                {/* Support CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden"
                >
                    <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
                            <p className="text-gray-600 mb-6 max-w-md">
                                Our support team is ready to help you with any questions you might have about our services and solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/quickenquiry"> <button className="bg-gradient-to-r from-blue-700 to-purple-800 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">

                                    Contact us
                                </button></a>


                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
                                <div className="w-48 h-48 bg-blue-200 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-blue-300 rounded-full flex items-center justify-center">
                                        <FiMessageSquare className="text-blue-600 text-4xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>


        </div>
    );
};

export default FAQPage;