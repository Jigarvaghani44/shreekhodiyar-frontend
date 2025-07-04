import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBox, FiSearch, FiLayers, FiTarget, FiUsers, FiTrendingUp, FiCheck, FiArrowRight } from "react-icons/fi";

const ProductCentricBranding = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Revised branding process starting with product analysis
    const brandingProcess = [
        {
            title: "Product Deep Dive",
            icon: <FiBox className="text-2xl" />,
            description: "We start by thoroughly understanding your product's core value",
            keyActions: [
                "Product feature analysis",
                "Unique selling proposition extraction",
                "User benefit mapping",
                "Competitive product comparison"
            ],
            outcome: "Clear product-market fit understanding",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Market Positioning",
            icon: <FiSearch className="text-2xl" />,
            description: "Determining where your product fits in the competitive landscape",
            keyActions: [
                "Target audience identification",
                "Competitive gap analysis",
                "Price positioning strategy",
                "Brand personality alignment"
            ],
            outcome: "Strategic market position blueprint",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Brand Foundation",
            icon: <FiLayers className="text-2xl" />,
            description: "Building the strategic core of your brand",
            keyActions: [
                "Brand promise formulation",
                "Core messaging development",
                "Brand archetype identification",
                "Tone of voice definition"
            ],
            outcome: "Comprehensive brand strategy document",
            color: "from-teal-500 to-teal-600"
        },
        {
            title: "Visual Identity",
            icon: <FiTarget className="text-2xl" />,
            description: "Translating strategy into distinctive visual language",
            keyActions: [
                "Logo design inspired by product benefits",
                "Color psychology application",
                "Typography system creation",
                "Visual storytelling elements"
            ],
            outcome: "Complete brand identity system",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Go-To-Market",
            icon: <FiUsers className="text-2xl" />,
            description: "Launching your product with compelling branding",
            keyActions: [
                "Packaging design (if physical product)",
                "Digital presence development",
                "Launch campaign strategy",
                "Brand guidelines creation"
            ],
            outcome: "Market-ready branded product",
            color: "from-green-500 to-green-600"
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-6 uppercase">
                    PRODUCT-FIRST BRANDING
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Product-Centric</span> Branding Approach
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We build brands that authentically represent your product's unique value and market position.
                </p>
            </div>

            {/* Process Navigation */}
            <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar">
                <div className="flex space-x-2 mx-auto">
                    {brandingProcess.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`px-5 py-3 rounded-full font-medium text-sm sm:text-base whitespace-nowrap transition-all ${activeStep === index
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-gray-200'
                                }`}
                        >
                            {step.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Process Content */}
            <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 mb-16"
                    >
                        <div className="grid md:grid-cols-2">
                            {/* Left Side - Process Details */}
                            <div className={`bg-gradient-to-br ${brandingProcess[activeStep].color} p-8 md:p-10 text-white`}>
                                <div className="flex items-center mb-6">
                                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                                        {brandingProcess[activeStep].icon}
                                    </div>
                                    <h2 className="text-2xl font-bold">{brandingProcess[activeStep].title}</h2>
                                </div>
                                <p className="text-lg mb-6">{brandingProcess[activeStep].description}</p>

                                <h3 className="font-semibold text-lg mb-3">Key Actions:</h3>
                                <ul className="space-y-3 mb-6">
                                    {brandingProcess[activeStep].keyActions.map((action, i) => (
                                        <li key={i} className="flex items-start">
                                            <FiCheck className="mt-1 mr-3 flex-shrink-0" />
                                            <span>{action}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-white/10 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Outcome:</h4>
                                    <p>{brandingProcess[activeStep].outcome}</p>
                                </div>
                            </div>

                            {/* Right Side - Visual Example */}
                            <div className="p-8 md:p-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">How This Benefits Your Product</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                                            <FiBox className="text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Product-Centric</h4>
                                            <p className="text-gray-600">Every branding decision ties back to your product's core features and benefits</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4">
                                            <FiTarget className="text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Market-Aligned</h4>
                                            <p className="text-gray-600">Positioning that highlights your product's unique advantages</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-teal-100 text-teal-600 p-3 rounded-lg mr-4">
                                            <FiTrendingUp className="text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Conversion-Focused</h4>
                                            <p className="text-gray-600">Branding designed to drive product adoption and sales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>


            </div>

            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default ProductCentricBranding;