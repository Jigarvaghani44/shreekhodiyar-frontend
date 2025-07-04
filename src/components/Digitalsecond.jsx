// components/DigitalMarketingPage.jsx
import React, { useState } from 'react';
import { FiArrowRight, FiSearch, FiCheck, FiBarChart2, FiTrendingUp, FiTarget, FiDollarSign, FiMail, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Digitalsecond = () => {


    return (
        <div className="bg-white">
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

export default Digitalsecond;