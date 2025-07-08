import { motion } from 'framer-motion';
import { FiArrowRight, FiLayout, FiUsers, FiCode, FiSmartphone, FiMonitor, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const UIDesignPage = () => {
    const [activeService, setActiveService] = useState(0);
    // const [isHovering, setIsHovering] = useState(false);

    const services = [
        {
            title: "User Research & Analysis",
            description: "We uncover actionable insights through comprehensive user research methods including interviews, surveys, and analytics.",
            icon: <FiUsers className="text-4xl" />,
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Interface Design",
            description: "Pixel-perfect UI designs that balance aesthetics with functionality for seamless user experiences.",
            icon: <FiLayout className="text-4xl" />,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Prototyping",
            description: "Interactive prototypes that bring your product to life before development begins.",
            icon: <FiMonitor className="text-4xl" />,
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Mobile UX",
            description: "Thumb-friendly mobile experiences designed for engagement and conversions.",
            icon: <FiSmartphone className="text-4xl" />,
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Design Systems",
            description: "Scalable component libraries and style guides for consistent brand experiences.",
            icon: <FiCode className="text-4xl" />,
            color: "from-indigo-500 to-purple-500"
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section with SEO-rich content */}
            <Helmet>
                <title>UI/UX Design Agency | Web & App Design Experts | ShreeKhodiyar Technostack</title>
                <meta name="description" content="Our agency creates user-first designs with modern UX strategy, intuitive interfaces, and stunning visuals for web and mobile platforms." />
            </Helmet>

            <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-600 text-white">
                {/* Dynamic background elements */}
                <div className="absolute inset-0 opacity-40">
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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                Transformative UI/UX Design
                            </span><br />
                            That Drives Engagement
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mb-10">
                            We craft intuitive, beautiful digital experiences that increase user satisfaction and boost conversions for businesses worldwide.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="/quickenquiry"><button className="px-20 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-xl transition-all shadow-lg flex items-center">
                                Get Your Free Audit
                                <FiArrowRight className="ml-3" />
                            </button></a>

                            {/* <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all">
                                View Case Studies
                            </button> */}
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Services Showcase - Interactive 3D Cards */}
            <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            UI/UX Design Services
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Comprehensive solutions tailored to your business goals and user needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                    {services.map((service, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveService(index)}
                            className={`py-4 px-2 rounded-lg transition-all ${activeService === index ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                            <div className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-2`}>
                                    {service.icon}
                                </div>
                                <span className="font-medium text-sm">{service.title.split(" ")[0]}</span>
                            </div>
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                >
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8 md:p-12">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center text-white mb-6`}>
                                {services[activeService].icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{services[activeService].title}</h3>
                            <p className="text-gray-700 mb-6">{services[activeService].description}</p>
                            <ul className="space-y-3 mb-8">
                                {[1, 2, 3].map((item) => (
                                    <li key={item} className="flex items-start">
                                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700">Feature benefit {item} related to {services[activeService].title.toLowerCase()}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/quickenquiry"><button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all flex items-center">
                                Request a quick enquiry
                                <FiArrowRight className="ml-2" />
                            </button></a>

                        </div>
                        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
                            <div className="relative w-full h-64 md:h-full">
                                {/* Placeholder for service image/demo */}
                                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${services[activeService].color} opacity-20`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-5xl font-bold text-gray-700 opacity-30">
                                        {services[activeService].title.split(" ")[0]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Design Process
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        A structured approach to delivering exceptional results
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline for desktop */}
                    <div className="hidden lg:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2" />

                    {/* Process Steps */}
                    <div className="space-y-12 lg:space-y-0">
                        {[
                            {
                                title: "Discover",
                                description: "Research and understand user needs",
                                step: "1"
                            },
                            {
                                title: "Define",
                                description: "Establish requirements and goals",
                                step: "2"
                            },
                            {
                                title: "Design",
                                description: "Create wireframes and prototypes",
                                step: "3"
                            },
                            {
                                title: "Develop",
                                description: "Implement and test the solution",
                                step: "4"
                            },
                            {
                                title: "Deliver",
                                description: "Launch and measure success",
                                step: "5"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative lg:flex items-center"
                            >
                                {/* Timeline dot for desktop */}
                                <div className="hidden lg:block absolute left-1/2 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2 -translate-y-1/2 z-10" />

                                {/* Content - alternates sides on desktop */}
                                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'} mb-6 lg:mb-0`}>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mb-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 px-4 sm:px-6 ">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Digital Experience?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Let&apos;s collaborate to create interfaces that delight users and drive business growth
                    </p>
                    <a href="/quickenquiry"><button className="px-10 py-5 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg flex items-center mx-auto">
                        Start Your Project Now
                        <FiArrowRight className="ml-3" />
                    </button></a>

                </div>
            </section>
        </div>
    );
};

export default UIDesignPage;