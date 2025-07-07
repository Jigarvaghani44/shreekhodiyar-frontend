import { motion } from 'framer-motion';
import { FiSmartphone, FiCode, FiLayers, FiDatabase, FiCloud, FiCheck, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const MobileAppsPage = () => {
    const [activePlatform, setActivePlatform] = useState('ios');
    const [expandedFeature, setExpandedFeature] = useState(null);

    const platforms = {
        ios: ['Swift', 'SwiftUI'],
        android: ['Kotlin', 'Android SDK'],
        crossPlatform: ['React Native', 'Flutter']
    };

    const features = [
        {
            title: "Native Performance",
            icon: <FiSmartphone className="text-3xl" />,
            description: "Leverage full device capabilities for buttery-smooth experiences",
            details: "Our apps utilize platform-specific optimizations to deliver performance indistinguishable from built-in apps."
        },
        {
            title: "Custom UI/UX",
            icon: <FiLayers className="text-3xl" />,
            description: "Tailored interfaces that match your brand identity",
            details: "We design pixel-perfect interfaces following platform guidelines while incorporating your unique brand elements."
        },
        {
            title: "Cloud Integration",
            icon: <FiCloud className="text-3xl" />,
            description: "Seamless backend connectivity and data sync",
            details: "Integrated solutions with Firebase, AWS, or custom backends for real-time data and offline capabilities."
        },
        {
            title: "Security First",
            icon: <FiDatabase className="text-3xl" />,
            description: "Enterprise-grade data protection",
            details: "Implementing best practices like encryption, secure storage, and biometric authentication."
        },
        {
            title: "Maintenance Plans",
            icon: <FiCode className="text-3xl" />,
            description: "Ongoing support and updates",
            details: "Post-launch maintenance packages to keep your app current with OS updates and new features."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Mobile App Development Agency | iOS, Android & Hybrid | ShreeKhodiyar Technostack</title>
                <meta name="description" content="We are a digital agency creating intuitive mobile apps with high performance and ROI. Get Android, iOS, and cross-platform solutions." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
                {/* Floating app icons */}
                <div className="absolute inset-0 opacity-70">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                x: [0, Math.random() * 100 - 50],
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 20 + Math.random() * 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            }}
                            className="absolute rounded-lg bg-white"
                            style={{
                                width: `${Math.random() * 80 + 40}px`,
                                height: `${Math.random() * 80 + 40}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.2 + 0.1
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative z-10 mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-sm font-semibold tracking-wider text-blue-300 mb-2 block">
                            MOBILE APP DEVELOPMENT
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                            Transform Your <span className="text-blue-300">Business</span> With Mobile
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Custom mobile solutions designed to engage users and drive growth
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a href="/quickenquiry">  <button className="px-6 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                            Get Free Consultation
                        </button></a>
                        <a href="/portfolio"> <button className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                            View Our Work
                        </button></a>

                    </motion.div>
                </div>
            </section>

            {/* Platform Selector */}
            <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Platform Expertise</span></h2>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        {Object.keys(platforms).map((platform) => (
                            <button
                                key={platform}
                                onClick={() => setActivePlatform(platform)}
                                className={`flex-1 py-4 px-6 rounded-lg transition-all ${activePlatform === platform
                                    ? 'bg-gradient-to-r from-blue-700 to-purple-800 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                <div className="font-medium capitalize">
                                    {(() => {
                                        switch (platform) {
                                            case 'ios':
                                                return 'iOS';
                                            case 'android':
                                                return 'Android';
                                            default:
                                                return 'Cross-Platform';
                                        }
                                    })()}
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                        {platforms[activePlatform].map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 hover:bg-white p-4 rounded-lg border border-gray-200 transition-all"
                            >
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                        <FiCheck className="text-blue-600" />
                                    </div>
                                    <span className="font-medium">{tech}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* App Development Process */}
            <section className="py-16 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Development Process</span>
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            A streamlined approach to deliver exceptional mobile experiences
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                description: "Requirement analysis and planning"
                            },
                            {
                                step: "02",
                                title: "Design",
                                description: "UI/UX prototyping and validation"
                            },
                            {
                                step: "03",
                                title: "Development",
                                description: "Agile sprints with continuous testing"
                            },
                            {
                                step: "04",
                                title: "Deployment",
                                description: "App store optimization and launch"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Why Choose Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Mobile Development</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We combine technical excellence with creative design to deliver exceptional results
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all border-l-4 ${expandedFeature === index
                                ? 'border-blue-600 shadow-lg'
                                : 'border-transparent hover:border-blue-200'
                                }`}
                            onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                        >
                            <div className="flex items-start">
                                <div className="text-blue-600 mr-4">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 mb-3">{feature.description}</p>
                                    {expandedFeature === index && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="text-gray-600 text-sm"
                                        >
                                            {feature.details}
                                        </motion.p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6  ">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Let&apos;s discuss how we can create a custom mobile experience for your business
                    </p>
                    <a href="/quickenquiry"> <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                        Start Your Project
                        <FiArrowRight className="inline ml-2" />
                    </button></a>

                </div>
            </section>
        </div>
    );
};

export default MobileAppsPage;