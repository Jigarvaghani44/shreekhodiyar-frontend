import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaCogs, FaCloud, FaUsers, FaGamepad, FaDrawPolygon, FaShapes, FaCube, FaShoppingCart, FaVrCardboard, FaBullhorn, FaShareAlt, FaHandsHelping, FaPalette, FaSearch, FaChartLine, FaDatabase, FaCode } from 'react-icons/fa';

const ServicesSection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            title: "Social Media Marketing",
            icon: <FaShareAlt />,
            description: "Boost brand awareness and engagement across Instagram, Facebook, and LinkedIn with targeted social media strategies.",
            category: "digital-marketing",
            keywords: ["social media marketing", "instagram strategy", "facebook advertising", "linkedin marketing"],
            color: "from-sky-500 to-blue-500"
        },
        {
            title: "Social Media Management",
            icon: <FaHandsHelping />,
            description: "Build trust and community with expert handling of your social media profiles and content schedules.",
            category: "digital-marketing",
            keywords: ["social media management", "page handling", "community management", "content scheduling"],
            color: "from-cyan-500 to-teal-500"
        },
        {
            title: "Google & Meta Ads",
            icon: <FaBullhorn />,
            description: "Run high-ROI ad campaigns on Google Search, YouTube, Facebook & Instagram to drive leads and sales.",
            category: "digital-marketing",
            keywords: ["google ads", "meta ads", "facebook ads", "instagram ads", "performance marketing"],
            color: "from-yellow-500 to-amber-500"
        },
        {
            title: "Graphic Design & Branding",
            icon: <FaPalette />,
            description: "Create memorable visual identities through high-impact graphics, logos, and brand elements.",
            category: "design",
            keywords: ["graphic design", "branding", "logo design", "visual identity"],
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "SEO (Search Engine Optimization)",
            icon: <FaSearch />,
            description: "Improve organic rankings and drive traffic with advanced on-page and off-page SEO strategies.",
            category: "digital-marketing",
            keywords: ["search engine optimization", "on-page SEO", "link building", "organic traffic", "technical SEO"],
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Performance Marketing",
            icon: <FaChartLine />,
            description: "Maximize return on ad spend through data-driven campaigns, A/B testing, and funnel optimization.",
            category: "digital-marketing",
            keywords: ["ROI marketing", "conversion optimization", "data-driven campaigns", "paid performance marketing"],
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Web Development",
            icon: <FaCloud />,
            description: "Build fast, responsive websites and scalable web applications using modern technologies.",
            category: "development",
            keywords: ["web development", "responsive website", "web applications", "frontend backend solutions"],
            color: "from-blue-600 to-indigo-600"
        },
        {
            title: "Mobile App Development",
            icon: <FaCogs />,
            description: "Launch cross-platform mobile apps for iOS & Android with seamless performance and UX.",
            category: "development",
            keywords: ["mobile app development", "iOS apps", "Android apps", "cross-platform apps"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Shopify Web Development",
            icon: <FaShoppingCart />,
            description: "Create high-converting, fully customizable Shopify stores optimized for global e-commerce growth.",
            category: "development",
            keywords: ["shopify development", "ecommerce website", "shopify store customization", "online shop"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "MVP & Product Development",
            icon: <FaUsers />,
            description: "Bring your ideas to life quickly with scalable MVPs and agile product development workflows.",
            category: "development",
            keywords: ["MVP development", "product development", "startup launch", "rapid prototyping"],
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "UI/UX & Prototyping",
            icon: <FaDrawPolygon />,
            description: "Design intuitive, engaging interfaces and prototypes focused on user experience and usability.",
            category: "design",
            keywords: ["UI design", "UX research", "interactive prototyping", "user experience design"],
            color: "from-fuchsia-500 to-purple-500"
        },
        {
            title: "Quality Assurance & Testing",
            icon: <FaShapes />,
            description: "Ensure software reliability and performance through manual & automated QA testing processes.",
            category: "consulting",
            keywords: ["QA testing", "software quality assurance", "bug fixing", "automated testing"],
            color: "from-emerald-500 to-teal-500"
        },
        {
            title: "Digital Innovation Consulting",
            icon: <FaCube />,
            description: "Leverage digital transformation strategies to innovate business models and operational workflows.",
            category: "consulting",
            keywords: ["digital transformation", "tech consulting", "innovation strategy", "business automation"],
            color: "from-indigo-500 to-violet-500"
        },
        {
            title: "ERP & CRM Development (Django)",
            icon: <FaDatabase />,
            description: "Build scalable ERP and CRM solutions using Python/Django for efficient business management.",
            category: "software-solutions",
            keywords: ["ERP development", "CRM system", "Django development", "business automation tools"],
            color: "from-indigo-500 to-blue-500"
        },
        {
            title: "Custom Software Solutions",
            icon: <FaCode />,
            description: "Tailor-made software products to digitize, automate, and streamline your operations.",
            category: "software-solutions",
            keywords: ["custom software", "enterprise software", "business applications", "software development services"],
            color: "from-violet-500 to-purple-500"
        },
        {
            title: '2D/3D Gaming Apps',
            icon: <FaGamepad />,
            description: 'Engaging mobile and desktop games built with immersive 2D and 3D environments.',
            category: 'development',
            keywords: ['2D game development', '3D game development', 'Unity game apps', 'mobile game development', 'iOS Android games'],
            color: 'from-red-500 to-pink-500'
        },
        {
            title: 'AR/VR Gaming Apps',
            icon: <FaVrCardboard />,
            description: 'Next-gen augmented and virtual reality gaming experiences for mobile and wearable devices.',
            category: 'development',
            keywords: ['AR gaming', 'VR gaming', 'augmented reality apps', 'virtual reality game development', 'interactive AR/VR experiences'],
            color: 'from-teal-500 to-cyan-500'
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
                    <div className="text-lg font-medium text-blue-400 mb-3">Why ShreeKhodiyar TechnoStack??</div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Comprehensive Digital Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        From strategy and design to development and marketing, we offer end-to-end digital solutions including web & mobile app development, e-commerce platforms, SEO, and performance-driven digital marketing—empowering brands across <strong>India</strong>, <strong>USA</strong>, <strong>Australia</strong>, and <strong>Europe</strong> to grow and scale online.
                    </p>
                </motion.div>

                {!isMobile ? (
                    <div className="flex relative">
                        {/* Fixed Left Column */}
                        <div className="w-1/2 pr-8 sticky top-24 h-[calc(100vh-8rem)]">
                            <div className="h-full flex flex-col justify-center">
                                <p className="text-lg text-gray-300 mb-8">
                                    At <strong>ShreeKhodiyar TechnoStack</strong>, we empower brands to thrive online with performance-driven digital marketing solutions. From SEO services and social media marketing to Google Ads, content strategy, and conversion optimization — our custom campaigns are designed to deliver measurable business growth. We offer complete digital transformation services, tailored to your unique goals — from strategic planning and development to execution and long-term scaling.
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