import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiCpu, FiServer, FiUsers, FiMonitor, FiSmartphone, FiLayers, FiPlay, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const GameDevelopmentPage = () => {
    const technologies = [
        { name: "Unity", icon: "U", color: "from-gray-600 to-gray-800" },
        { name: "Custom Engines", icon: "CE", color: "from-red-500 to-red-700" },
        { name: "AR/VR SDKs", icon: "VR", color: "from-yellow-500 to-yellow-600" }
    ];

    const platforms = [
        { name: "Mobile Games", icon: <FiSmartphone size={24} />, description: "iOS and Android gaming experiences" },
        { name: "PC Games", icon: <FiMonitor size={24} />, description: "High-performance desktop gaming" },
        { name: "Console Games", icon: <FiCpu size={24} />, description: "Next-gen console development" },
        { name: "VR/AR Games", icon: <FiLayers size={24} />, description: "Immersive virtual experiences" }
    ];

    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "Cutting-Edge Graphics",
            description: "We implement the latest rendering techniques for stunning visuals",
            icon: <FiPlay />
        },
        {
            title: "Optimized Performance",
            description: "Smooth gameplay across all target platforms and devices",
            icon: <FiCpu />
        },
        {
            title: "Engaging Gameplay",
            description: "Core mechanics designed for maximum player retention",
            icon: <FiCheck />
        }
    ];

    return (
        <div className="bg-gray-900 text-white">
            {/* Hero Section */}
            <Helmet>
                <title>Game Development Agency | Unity, Mobile & 3D Games | ShreeKhodiyar Technostack</title>
                <meta name="description" content="We build engaging mobile and 3D games using Unity. From concept to launch, trust our game development experts for immersive experiences." />
            </Helmet>

            <section className="relative py-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-purple-900 to-gray-900">
                {/* Pixel grid background */}
                <div className="absolute inset-0 opacity-20">
                    {[...Array(100)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.5 + 0.1
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 mt-20"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Professional Game Development
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                    >
                        We build immersive gaming experiences with cutting-edge technology and proven methodologies
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a href="/quickenquiry"> <button className="px-20 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center">
                            Get Started
                        </button></a>

                    </motion.div>
                </div>
            </section>

            {/* Platform Expertise */}
            <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Platform Expertise
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        We develop games for all major platforms with optimized performance
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl mx-auto mb-6">
                                {platform.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                            <p className="text-gray-400">{platform.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 px-4 sm:px-6 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Key Features
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            What makes our game development services stand out
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Feature Selector */}
                        <div className="lg:w-1/3 space-y-4">
                            {features.map((feature, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    onClick={() => setActiveFeature(index)}
                                    className={`w-full text-left p-6 rounded-xl transition-all ${activeFeature === index ? 'bg-gray-700 shadow-lg' : 'bg-gray-900 hover:bg-gray-800'}`}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${activeFeature === index ? 'bg-purple-600' : 'bg-gray-700'}`}>
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-lg font-medium">{feature.title}</h3>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* Feature Content */}
                        <div className="lg:w-2/3 bg-gray-900 rounded-xl p-8 lg:p-12 shadow-lg">
                            <motion.div
                                key={activeFeature}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col justify-center"
                            >
                                <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                                <p className="text-gray-400 text-lg mb-6">{features[activeFeature].description}</p>
                                <ul className="space-y-3">
                                    {[
                                        "Advanced rendering pipelines",
                                        "Custom shader development",
                                        "Real-time lighting solutions",
                                        "Post-processing effects"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <FiCheck className="text-purple-500 mr-2" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Technology Stack
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            We work with industry-leading engines and frameworks
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all"
                            >
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                                    {tech.icon}
                                </div>
                                <h3 className="font-medium">{tech.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-20 px-4 sm:px-6 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Game <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Development Process
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            Our proven methodology ensures quality at every stage
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2" />

                        {/* Process Steps */}
                        <div className="space-y-12 md:space-y-0">
                            {[
                                {
                                    title: "Concept & Design",
                                    description: "We transform your vision into detailed game design documents",
                                    icon: <FiCode />,
                                    details: [
                                        "Game concept development",
                                        "Mechanics design",
                                        "Storyboarding",
                                        "Technical specifications"
                                    ]
                                },
                                {
                                    title: "Prototyping",
                                    description: "Rapid prototypes to test core gameplay mechanics",
                                    icon: <FiCpu />,
                                    details: [
                                        "Core gameplay prototype",
                                        "Mechanics validation",
                                        "Early user testing",
                                        "Iterative refinement"
                                    ]
                                },
                                {
                                    title: "Production",
                                    description: "Full-scale development with iterative testing",
                                    icon: <FiServer />,
                                    details: [
                                        "Asset creation",
                                        "Level design",
                                        "Programming",
                                        "Alpha builds"
                                    ]
                                },
                                {
                                    title: "QA & Polish",
                                    description: "Rigorous testing and refinement for flawless experience",
                                    icon: <FiUsers />,
                                    details: [
                                        "Bug fixing",
                                        "Performance optimization",
                                        "User experience polish",
                                        "Final release"
                                    ]
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                                >
                                    {/* Timeline dot */}
                                    <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-purple-600 transform -translate-x-1/2 -translate-y-1/2" />

                                    {/* Content */}
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-6 md:mb-0`}>
                                        <div className="bg-gray-900 rounded-xl p-8 shadow-lg h-full">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl mb-6">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                            <p className="text-gray-400 mb-6">{step.description}</p>
                                            <ul className="space-y-2">
                                                {step.details.map((detail, i) => (
                                                    <li key={i} className="flex items-center text-gray-300">
                                                        <FiCheck className="text-purple-500 mr-2" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Spacer for even items */}
                                    <div className="md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-xl" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-xl" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                        Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Game Project?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto relative z-10">
                        Our team is ready to bring your vision to life with expert game development services
                    </p>
                    <a href="/quickenquiry"><button className="px-10 py-5 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg relative z-10">
                        Get in Touch
                        <FiArrowRight className="inline ml-3" />
                    </button></a>

                </div>
            </section>
        </div>
    );
};

export default GameDevelopmentPage;