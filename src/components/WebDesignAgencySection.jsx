// components/WebDesignAgencySection.jsx
import React from "react";
import { FiCheckCircle, FiSearch, FiList, FiUsers, FiAward, FiClock, FiThumbsUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WebDesignAgencySection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/quickenquiry");
    };
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8" id="best-web-design-agency">
            <div className="max-w-5xl mx-auto">
                {/* Hero Heading */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-600 bg-indigo-50 rounded-full mb-4 uppercase">
                        Finding & Working With The
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Best <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Right Digital Solutions</span> Partner
                    </h1>
                    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-lg text-gray-600">
                        <p className="leading-relaxed">
                            Whether you&apos;re launching a new business, scaling your digital presence, or optimizing operations, working with a professional technology agency unlocks a world of possibilities.
                        </p>
                        <p className="leading-relaxed">
                            Top agencies combine cutting-edge technology with proven strategies to create high-performing Digital Solutions. Discover how to identify the perfect partner for your project.
                        </p>
                    </div>
                </div>

                {/* Visual Navigation */}
                <div className="mb-20">
                    <h2 className="text-2xl font-semibold text-center mb-8">Your Roadmap to Success</h2>
                    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
                        <div className="grid md:grid-cols-6 gap-4 text-center">
                            {[
                                { icon: <FiSearch className="mx-auto text-indigo-600" size={20} />, label: "Define Needs", id: "step-1" },
                                { icon: <FiSearch className="mx-auto text-indigo-600" size={20} />, label: "Start Search", id: "step-2" },
                                { icon: <FiList className="mx-auto text-indigo-600" size={20} />, label: "Research", id: "step-3" },
                                { icon: <FiUsers className="mx-auto text-indigo-600" size={20} />, label: "Meet Agencies", id: "step-4" },
                                { icon: <FiThumbsUp className="mx-auto text-indigo-600" size={20} />, label: "Decide", id: "step-5" },
                                { icon: <FiAward className="mx-auto text-indigo-600" size={20} />, label: "Why Us", id: "why-choose-us" },
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.id}`}
                                    className="group flex flex-col items-center"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-colors mb-2">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Enhanced Steps */}
                <div className="space-y-16">
                    {/* Step 1 */}
                    <div id="step-1" className="scroll-mt-24">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">1</span>
                                Define Your Project Requirements
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Key Considerations:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>New build vs redesign requirements</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Custom design vs template approach</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>SEO and conversion objectives</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Technical Needs:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>E-commerce functionality</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>CMS platform preferences</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Integration requirements</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div id="step-2" className="scroll-mt-24">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">2</span>
                                Begin Your Agency Search
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Start with these proven methods to find qualified web design partners:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Discovery Channels:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Industry directories (Clutch, DesignRush)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Google search with location filters</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Professional recommendations</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Evaluation Criteria:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Portfolio quality and relevance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Client testimonials and case studies</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Service offerings and expertise</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div id="step-3" className="scroll-mt-24">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">3</span>
                                Research & Shortlist Agencies
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Narrow down your options with these evaluation tactics:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Portfolio Assessment:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Design aesthetics and creativity</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>User experience quality</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Mobile responsiveness</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Client Validation:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Read verified client reviews</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Request client references</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Check industry recognition</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div id="step-4" className="scroll-mt-24">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">4</span>
                                Meet With Potential Agencies
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Conduct productive consultations with these key discussion points:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Process Evaluation:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Design and development methodology</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Project management approach</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Communication protocols</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Practical Considerations:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Realistic timeline expectations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Pricing structure and value</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Post-launch support options</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div id="step-5" className="scroll-mt-24">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">5</span>
                                Make Your Final Decision
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Select the ideal partner using these decisive factors:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Strategic Alignment:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Understanding of your vision</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Strategic recommendations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Cultural fit with your team</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 mb-2">Execution Confidence:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Clear project ownership</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Transparent communication</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiCheckCircle className="flex-shrink-0 text-indigo-500 mt-0.5 mr-2" />
                                            <span>Proven results in your industry</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div id="why-choose-us" className="scroll-mt-24">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
                            <h2 className="text-2xl font-bold mb-6">Why Partner With Unitechnostack?</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Our Differentiators</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                                <FiAward className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Award-Winning Excellence</h4>
                                                <p className="text-indigo-100 text-sm mt-1">Recognized industry leaders with multiple design awards</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                                <FiCheckCircle className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">End-to-End Ownership</h4>
                                                <p className="text-indigo-100 text-sm mt-1">We treat every project as our own, from concept to launch</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                                <FiClock className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Timely Delivery</h4>
                                                <p className="text-indigo-100 text-sm mt-1">90% of projects delivered on or ahead of schedule</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Client Benefits</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                                <FiUsers className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Dedicated Team Approach</h4>
                                                <p className="text-indigo-100 text-sm mt-1">Your own project manager, designer, and developer</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                                <FiCheckCircle className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Transparent Process</h4>
                                                <p className="text-indigo-100 text-sm mt-1">Real-time updates and collaborative decision making</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-white bg-opacity-20 rounded-full p-1.5 mr-3">
                                                <FiThumbsUp className="text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Results Guarantee</h4>
                                                <p className="text-indigo-100 text-sm mt-1">We measure success by your business outcomes</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-indigo-400">
                                <button onClick={handleClick} className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
                                    Schedule Free Consultation
                                </button>
                                <p className="text-indigo-100 text-sm mt-3">
                                    Get a custom proposal within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDesignAgencySection;