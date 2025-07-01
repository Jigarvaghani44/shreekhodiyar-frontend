import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaCogs, FaCloud, FaUsers, FaGamepad, FaDrawPolygon, FaShapes, FaCube, FaShoppingCart, FaVrCardboard, FaBullhorn, FaShareAlt, FaHandsHelping, FaPalette, FaSearch, FaChartLine, FaDatabase, FaCode } from 'react-icons/fa';

const ServicesSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            title: 'Mobile Development',
            icon: <FaCogs />,
            description: 'Build seamless mobile apps for iOS and Android platforms.',
            category: 'development',
            keywords: ['mobile app development', 'iOS apps', 'Android apps'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Web Development',
            icon: <FaCloud />,
            description: 'Responsive, high-performance websites and web applications.',
            category: 'development',
            keywords: ['web development', 'responsive design', 'web applications'],
            color: 'from-blue-600 to-indigo-600'
        },
        {
            title: 'Shopify Web Development',
            icon: <FaShoppingCart />,
            description: 'Custom Shopify stores that are fast, responsive, and designed to convert visitors into customers.',
            category: 'development',
            keywords: ['shopify development', 'ecommerce website', 'shopify theme customization', 'online store'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'MVP & Product Development',
            icon: <FaUsers />,
            description: 'Bring your ideas to life with rapid MVP development.',
            category: 'development',
            keywords: ['MVP development', 'product development', 'rapid prototyping'],
            color: 'from-amber-500 to-orange-500'
        },
        {
            title: 'Prototyping & UI/UX',
            icon: <FaDrawPolygon />,
            description: 'Craft stunning user experiences and intuitive interfaces.',
            category: 'design',
            keywords: ['UI/UX design', 'prototyping', 'user experience'],
            color: 'from-fuchsia-500 to-purple-500'
        },
        {
            title: 'Quality Assurance',
            icon: <FaShapes />,
            description: 'Ensure flawless performance with rigorous testing and QA.',
            category: 'consulting',
            keywords: ['QA testing', 'quality assurance', 'software testing'],
            color: 'from-emerald-500 to-teal-500'
        },
        {
            title: 'Innovation Consulting',
            icon: <FaCube />,
            description: 'Strategic guidance for innovative digital solutions.',
            category: 'consulting',
            keywords: ['tech consulting', 'innovation strategy', 'digital transformation'],
            color: 'from-indigo-500 to-violet-500'
        },
        {
            title: '2D & 3D Game Development',
            icon: <FaGamepad />,
            description: 'Create engaging 2D and 3D games with stunning graphics.',
            category: 'gaming',
            keywords: ['game development', '2D games', '3D games'],
            color: 'from-red-500 to-pink-500'
        },
        {
            title: 'AR/VR Game Development',
            icon: <FaVrCardboard />,
            description: 'Immersive augmented and virtual reality gaming experiences.',
            category: 'gaming',
            keywords: ['AR development', 'VR games', 'mixed reality'],
            color: 'from-purple-600 to-blue-600'
        },
        // {
        //     title: 'Social Media Marketing',
        //     icon: <FaShareAlt />,
        //     description: 'Grow your brand across platforms with strategic content and engagement.',
        //     category: 'digital-marketing',
        //     keywords: ['social media', 'instagram marketing', 'facebook strategy'],
        //     color: 'from-sky-500 to-blue-500'
        // },
        // {
        //     title: 'Social Media Handling',
        //     icon: <FaHandsHelping />,
        //     description: 'Professional management of your social profiles to build trust and community.',
        //     category: 'digital-marketing',
        //     keywords: ['social media management', 'page handling', 'community building'],
        //     color: 'from-cyan-500 to-teal-500'
        // },
        // {
        //     title: 'Google & Meta Ads',
        //     icon: <FaBullhorn />,
        //     description: 'Drive traffic and leads with powerful ad campaigns across Google and Meta.',
        //     category: 'digital-marketing',
        //     keywords: ['google ads', 'meta ads', 'paid ads', 'performance marketing'],
        //     color: 'from-yellow-500 to-amber-500'
        // },
        {
            title: 'Graphics Design',
            icon: <FaPalette />,
            description: 'Visual storytelling through eye-catching and effective designs.',
            category: 'design',
            keywords: ['graphic design', 'branding', 'visual identity'],
            color: 'from-pink-500 to-rose-500'
        },
        // {
        //     title: 'SEO',
        //     icon: <FaSearch />,
        //     description: 'Improve your online visibility with keyword-focused SEO strategies.',
        //     category: 'digital-marketing',
        //     keywords: ['search engine optimization', 'on-page SEO', 'organic traffic'],
        //     color: 'from-green-500 to-emerald-500'
        // },
        // {
        //     title: 'Performance Marketing',
        //     icon: <FaChartLine />,
        //     description: 'Maximize ROI with data-driven advertising and conversion optimization.',
        //     category: 'digital-marketing',
        //     keywords: ['ROI marketing', 'data-driven ads', 'conversion strategy'],
        //     color: 'from-orange-500 to-red-500'
        // },
        {
            title: 'ERP & CRM Solutions (Python/Django)',
            icon: <FaDatabase />,
            description: 'Custom ERP and CRM systems built with Django for seamless business operations.',
            category: 'software-solutions',
            keywords: ['ERP system', 'CRM software', 'django development', 'business automation'],
            color: 'from-indigo-500 to-blue-500'
        },
        {
            title: 'Software Solutions',
            icon: <FaCode />,
            description: 'Tailored software applications to streamline and automate your business processes.',
            category: 'software-solutions',
            keywords: ['custom software', 'business software', 'software development'],
            color: 'from-violet-500 to-purple-500'
        }
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-advance services on desktop
    useEffect(() => {
        let interval;
        if (!isMobile) {
            interval = setInterval(() => {
                setActiveService(prev => (prev + 1) % services.length);
            }, 5000);

        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isMobile, services.length]);

    return (
        <section className="relative py-12 md:py-20 bg-gray-900">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-400 blur-3xl" />
            </div>

            <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-lg font-medium text-blue-400 mb-3">Why UniTechnoStack??</div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Comprehensive Digital Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        End-to-end services to transform your digital presence
                    </p>
                </motion.div>

                {!isMobile ? (
                    <div className="flex relative">
                        {/* Fixed Left Column */}
                        <div className="w-1/2 pr-8 sticky top-24 h-[calc(100vh-8rem)]">
                            <div className="h-full flex flex-col justify-center">
                                <p className="text-lg text-gray-300 mb-8">
                                    We provide complete digital solutions tailored to your business needs,
                                    from initial concept to final implementation and beyond.
                                </p>
                                <div className="relative rounded-xl  aspect-video   overflow-visible ">
                                    <div className="absolute inset-0   flex items-center justify-center ">
                                        <img className='w-full' src="https://www.digitalsilk.com/wp-content/uploads/2024/09/Explore-Our-Web-Design-Services-1.png" alt="UniTechnoStack" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Right Column */}
                        <div className="w-1/2 pl-8">
                            <div className="space-y-6 pb-12">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true, margin: "-150px 0px" }}
                                        className={`p-8 rounded-xl bg-gray-800 border border-gray-700 transition-all duration-300 ${activeService === index ? 'border-blue-500' : ''}`}
                                        onViewportEnter={() => setActiveService(index)}
                                    >
                                        <div className="flex items-start">
                                            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center p-3 mr-6 text-white`}>
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h2>
                                                <p className="text-gray-300 mb-4">{service.description}</p>

                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                            >
                                <div className="flex items-start mb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center p-2 mr-4 text-white`}>
                                        {service.icon}
                                    </div>
                                    <h2 className="text-xl font-bold text-white">{service.title}</h2>
                                </div>
                                <p className="text-gray-300 mb-4">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;