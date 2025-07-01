// components/DigitalMarketingPage.jsx
import React, { useState } from 'react';
import { FiArrowRight, FiSearch, FiCheck, FiBarChart2, FiTrendingUp, FiTarget, FiDollarSign, FiMail, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const DigitalMarketingPage = () => {
    const [activeTab, setActiveTab] = useState('seo');

    const services = {
        seo: {
            title: "SEO Services",
            description: "Dominate search rankings with our comprehensive SEO strategies that drive organic traffic and sustainable growth.",
            features: [
                "Keyword research & strategy",
                "On-page optimization",
                "Technical SEO audits",
                "Content strategy development",
                "Local SEO optimization",
                "Monthly performance reporting"
            ],
            results: "85% of our clients achieve page 1 rankings within 6-9 months"
        },
        ppc: {
            title: "PPC Advertising",
            description: "Get immediate traffic and conversions with precisely targeted pay-per-click campaigns.",
            features: [
                "Google Ads management",
                "Facebook/Instagram ads",
                "LinkedIn advertising",
                "Display network campaigns",
                "Conversion rate optimization",
                "ROI tracking & optimization"
            ],
            results: "Average 3-5x ROI on ad spend for our clients"
        },
        social: {
            title: "Social Media Marketing",
            description: "Build your brand and engage your audience across all major social platforms.",
            features: [
                "Platform strategy development",
                "Content calendar creation",
                "Community management",
                "Influencer partnerships",
                "Paid social campaigns",
                "Performance analytics"
            ],
            results: "Average 40% increase in engagement within first 3 months"
        },
        content: {
            title: "Content Marketing",
            description: "Attract and retain customers through strategic content that builds authority.",
            features: [
                "Content strategy development",
                "Blog writing & optimization",
                "Video content production",
                "Infographic creation",
                "Email marketing campaigns",
                "Content performance analysis"
            ],
            results: "3x more leads than traditional marketing at 62% lower cost"
        },
        email: {
            title: "Email Marketing",
            description: "Nurture leads and boost sales with automated, personalized email sequences.",
            features: [
                "List segmentation strategy",
                "Automated drip campaigns",
                "Newsletter design",
                "A/B testing",
                "Conversion tracking",
                "Monthly performance reports"
            ],
            results: "Average open rates of 25-40% (industry avg: 15-20%)"
        },
        digital: {
            title: "Digital Marketing Handling",
            description: "End-to-end management of your entire digital marketing ecosystem—so you can focus on scaling your business.",
            features: [
                "360° digital strategy creation",
                "Campaign execution across SEO, PPC, social, content, and email",
                "Omni-channel brand consistency",
                "Weekly optimization & A/B testing",
                "Real-time analytics dashboard access",
                "Dedicated marketing success manager"
            ],
            results: "Clients typically experience a 2x increase in leads and 50% drop in cost-per-acquisition within 4-6 months"
        }
    };


    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-28 px-4 sm:px-6 lg:px-8">
                {/* Dynamic background elements */}
                <div className="absolute inset-0 opacity-30 overflow-hidden">
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
                            className="absolute rounded-lg bg-white"
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
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 mt-28">
                            Data-Driven <span className="text-indigo-300">Digital Marketing</span> Solutions
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            We deliver measurable results through strategic marketing campaigns tailored to your business goals.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Proven</span> Results
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We measure success by the growth we create for our clients
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <FiTrendingUp size={32} className="text-indigo-600" />, value: "300%+", label: "Average Traffic Growth" },
                            { icon: <FiDollarSign size={32} className="text-indigo-600" />, value: "5.2x", label: "Average ROI" },
                            { icon: <FiTarget size={32} className="text-indigo-600" />, value: "85%", label: "Client Retention Rate" },
                            { icon: <FiBarChart2 size={32} className="text-indigo-600" />, value: "10M+", label: "Monthly Impressions" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm text-center"
                            >
                                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Tabs */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Marketing</span> Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive strategies tailored to your business objectives
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {Object.keys(services).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === key ? 'bg-gradient-to-r from-blue-700 to-purple-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                {services[key].title}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{services[activeTab].title}</h3>
                                <p className="text-gray-600 mb-6 text-lg">{services[activeTab].description}</p>

                                <div className="mb-8">
                                    <h4 className="font-semibold text-gray-900 mb-3">Service Includes:</h4>
                                    <ul className="space-y-2">
                                        {services[activeTab].features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <p className="text-indigo-700 font-medium">
                                        <FiTrendingUp className="inline mr-2" />
                                        {services[activeTab].results}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 md:p-12 flex items-center justify-center">
                                <div className="bg-white p-6 rounded-lg shadow-xs border border-gray-200 w-full max-w-md">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Get Your Free {services[activeTab].title} Audit</h4>
                                    <form className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="url"
                                                placeholder="Website URL"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-700 to-purple-800 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                                        >
                                            Get Free Audit <FiArrowRight className="inline ml-2" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">4-Step</span> Process
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A structured approach that delivers consistent results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery & Strategy",
                                description: "We analyze your business, competitors, and audience to develop a customized marketing plan.",
                                icon: <FiSearch size={24} className="text-indigo-600" />
                            },
                            {
                                step: "02",
                                title: "Implementation",
                                description: "Our team executes the strategy with precision, using best practices and cutting-edge tools.",
                                icon: <FiCheck size={24} className="text-indigo-600" />
                            },
                            {
                                step: "03",
                                title: "Optimization",
                                description: "Continuous testing and refinement to maximize your campaign performance.",
                                icon: <FiTrendingUp size={24} className="text-indigo-600" />
                            },
                            {
                                step: "04",
                                title: "Reporting",
                                description: "Transparent monthly reports with actionable insights and growth recommendations.",
                                icon: <FiBarChart2 size={24} className="text-indigo-600" />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm"
                            >
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                    {item.icon && <span className="mr-2">{item.icon}</span>}
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6  text-white">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Ready to Grow Your Business Online?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Schedule a free consultation with our marketing experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl">
                            Get Started Now
                        </button>
                        <button className="bg-transparent hover:bg-indigo-800 font-semibold py-3 px-8 rounded-lg transition-all border border-white">
                            0203 488 0423
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingPage;