import React from "react";
import { FiCheckCircle, FiSearch, FiList, FiUsers, FiAward, FiClock, FiThumbsUp, FiBarChart2, FiTarget, FiDollarSign, FiMail, FiLayers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const DigitalMarketingAgencySection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact");
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8" id="digital-marketing-agency">
            <div className="max-w-6xl mx-auto">
                {/* Hero Heading */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 rounded-full mb-4 uppercase">
                        Premier Digital Marketing Solutions
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Online Presence</span>
                    </h1>
                    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-lg text-gray-600">
                        <p className="leading-relaxed">
                            In today's digital landscape, having a strategic marketing approach is no longer optional. We craft data-driven campaigns that deliver measurable results and real business growth.
                        </p>
                        <p className="leading-relaxed">
                            Our full-service digital marketing agency combines creativity with analytics to help brands stand out, attract qualified leads, and convert them into loyal customers.
                        </p>
                    </div>
                </div>

                {/* Services Overview */}
                <div className="mb-20 bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-center mb-8">Our Core Digital Marketing Services</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { icon: <FiSearch className="mx-auto text-blue-600" size={24} />, label: "SEO", desc: "Search Engine Optimization" },
                            { icon: <FiBarChart2 className="mx-auto text-purple-600" size={24} />, label: "PPC", desc: "Pay-Per-Click Advertising" },
                            { icon: <FiUsers className="mx-auto text-pink-600" size={24} />, label: "Social Media", desc: "Management & Ads" },
                            { icon: <FiMail className="mx-auto text-red-600" size={24} />, label: "Email", desc: "Marketing Automation" },
                            { icon: <FiTarget className="mx-auto text-orange-600" size={24} />, label: "Content", desc: "Strategy & Creation" },
                            { icon: <FiLayers className="mx-auto text-green-600" size={24} />, label: "Conversion", desc: "Rate Optimization" },
                            { icon: <FiDollarSign className="mx-auto text-indigo-600" size={24} />, label: "ROI", desc: "Performance Tracking" },
                            { icon: <FiAward className="mx-auto text-yellow-600" size={24} />, label: "Branding", desc: "Digital Identity" },
                        ].map((service, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors mb-3">
                                    {service.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800">{service.label}</h3>
                                <p className="text-sm text-gray-500 mt-1">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Steps */}
                <div className="space-y-12">
                    {/* Strategy Phase */}
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">1</span>
                                    Discovery & Strategy
                                </h2>
                                <p className="text-gray-600">
                                    We begin by deeply understanding your business, audience, and goals to craft a customized digital marketing roadmap.
                                </p>
                            </div>
                            <div className="md:w-2/3">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-2">Research Components:</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-blue-500 mt-0.5 mr-2" />
                                                <span>Competitor analysis</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-blue-500 mt-0.5 mr-2" />
                                                <span>Keyword research</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-blue-500 mt-0.5 mr-2" />
                                                <span>Audience profiling</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-2">Strategic Outputs:</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-blue-500 mt-0.5 mr-2" />
                                                <span>Channel strategy</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-blue-500 mt-0.5 mr-2" />
                                                <span>Content calendar</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-blue-500 mt-0.5 mr-2" />
                                                <span>KPI framework</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Execution Phase */}
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-3">2</span>
                                    Campaign Execution
                                </h2>
                                <p className="text-gray-600">
                                    Our team implements your strategy with precision, combining creative assets with technical optimization for maximum impact.
                                </p>
                            </div>
                            <div className="md:w-2/3">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-2">Implementation:</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-purple-500 mt-0.5 mr-2" />
                                                <span>SEO technical setup</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-purple-500 mt-0.5 mr-2" />
                                                <span>Ad campaign creation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-purple-500 mt-0.5 mr-2" />
                                                <span>Content production</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-2">Optimization:</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-purple-500 mt-0.5 mr-2" />
                                                <span>A/B testing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-purple-500 mt-0.5 mr-2" />
                                                <span>Bid management</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-purple-500 mt-0.5 mr-2" />
                                                <span>Conversion tracking</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Growth Phase */}
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">3</span>
                                    Growth & Scaling
                                </h2>
                                <p className="text-gray-600">
                                    We continuously analyze performance data to refine strategies and scale what's working for sustainable business growth.
                                </p>
                            </div>
                            <div className="md:w-2/3">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-2">Analysis:</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-green-500 mt-0.5 mr-2" />
                                                <span>Performance reporting</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-green-500 mt-0.5 mr-2" />
                                                <span>ROI measurement</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-green-500 mt-0.5 mr-2" />
                                                <span>Competitor benchmarking</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-2">Scaling:</h3>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-green-500 mt-0.5 mr-2" />
                                                <span>Budget reallocation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-green-500 mt-0.5 mr-2" />
                                                <span>Channel expansion</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FiCheckCircle className="flex-shrink-0 text-green-500 mt-0.5 mr-2" />
                                                <span>Automation implementation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Why Our Digital Marketing Agency Stands Out</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                            <FiTarget className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Data-Driven Strategies</h4>
                                            <p className="text-blue-100 text-sm mt-1">Decisions based on analytics, not assumptions</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                            <FiBarChart2 className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Transparent Reporting</h4>
                                            <p className="text-blue-100 text-sm mt-1">Real-time dashboards with clear metrics</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                            <FiUsers className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Dedicated Account Team</h4>
                                            <p className="text-blue-100 text-sm mt-1">Your personal marketing experts</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Client Success</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                            <FiDollarSign className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Proven ROI</h4>
                                            <p className="text-blue-100 text-sm mt-1">Average 3-5x return on ad spend</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                            <FiClock className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Quick Results</h4>
                                            <p className="text-blue-100 text-sm mt-1">First improvements within 30 days</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                            <FiAward className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Industry Recognition</h4>
                                            <p className="text-blue-100 text-sm mt-1">Award-winning campaign strategies</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            <button
                                onClick={handleClick}
                                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
                            >
                                Get Your Free Marketing Audit
                            </button>
                            <p className="text-blue-100 text-sm mt-3">
                                Discover opportunities to grow your business online
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalMarketingAgencySection;