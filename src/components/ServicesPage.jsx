import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiSettings, FiCheck, FiCode, FiSmartphone, FiCpu, FiBarChart2, FiShare2, FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import HomeTestimonials from './HomeTestimonials';
import BusinessStartup from "./businessStartup";
import OurApproch from "./OurApproach";

const ServicesPage = () => {
    const [activeTab, setActiveTab] = useState('web');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    // Services Data
    const services = {
        web: {
            title: "Web Development",
            icon: "🌐",
            description: "Custom websites and web applications optimized for SEO, speed, and global scalability.",
            features: [
                "React.js / Next.js Web App Development",
                "Mobile-First & Cross-Browser Responsive Design",
                "Core Web Vitals Optimization for Google Ranking",
                "Headless CMS Integration (WordPress, Sanity)",
                "Secure, Scalable, and High-Converting UX/UI"
            ],
            stats: [
                { value: "3x", label: "Faster Load Times" },
                { value: "100%", label: "Mobile Responsive" },
                { value: "50+", label: "Websites Launched" },
                { value: "4.8/5", label: "Client Satisfaction" }
            ],
            keywords: [
                "custom web development company", "SEO-optimized websites",
                "React development agency", "Next.js website experts",
                "headless CMS development", "web development services India USA Europe"
            ]
        },

        mobile: {
            title: "Mobile App Development",
            icon: "📱",
            description: "Cross-platform mobile apps for Android and iOS with stunning UI, fast performance, and seamless user experience.",
            features: [
                "React Native & Flutter App Development",
                "Native Android & iOS Apps",
                "Push Notification & Firebase Integration",
                "API Connectivity with Backend Systems",
                "App Store & Google Play Optimization (ASO)"
            ],
            stats: [
                { value: "4.9/5", label: "App Store Rating" },
                { value: "2M+", label: "Downloads" },
                { value: "60%", label: "Faster Development" },
                { value: "4.8/5", label: "Client Satisfaction" }
            ],
            keywords: [
                "mobile app development company", "React Native developers",
                "iOS and Android apps", "Flutter app agency",
                "ASO services", "app development India USA Australia"
            ]
        },

        game: {
            title: "2D/3D Game Development",
            icon: "🎮",
            description: "High-performance 2D/3D games using Unity for mobile, PC, and AR/VR platforms.",
            features: [
                "Unity Engine Game Development",
                "Cross-Platform Game Publishing",
                "AR/VR Game Integration",
                "Multiplayer & In-App Purchases",
                "Custom Physics, AI & Storyboarding"
            ],
            stats: [
                { value: "10+", label: "Games Published" },
                { value: "1M+", label: "Players Worldwide" },
                { value: "4.8/5", label: "Average Player Rating" },
                { value: "98%", label: "Retention Rate" }
            ],
            keywords: [
                "2D 3D game development company", "Unity game developers",
                "AR VR game studio", "mobile game development",
                "cross-platform games", "game development India Europe USA"
            ]
        },

        digitalMarketing: {
            title: "Digital Marketing Services",
            icon: "📈",
            description: "Result-oriented SEO, PPC, content marketing, and email automation to grow your brand visibility and leads.",
            features: [
                "Technical & Local SEO Optimization",
                "Google Ads, Meta Ads, LinkedIn Ads",
                "Email Marketing & Funnel Automation",
                "Blogging, Copywriting, and Content SEO",
                "Conversion Rate Optimization (CRO)"
            ],
            stats: [
                { value: "85%", label: "Client ROI Growth" },
                { value: "3x", label: "Lead Generation" },
                { value: "60%", label: "Lower CPA" },
                { value: "50K+", label: "Monthly Organic Visits" }
            ],
            keywords: [
                "digital marketing agency India", "SEO company USA",
                "Google Ads expert Australia", "performance marketing Europe",
                "content marketing for startups", "email automation for ecommerce"
            ]
        },

        socialMedia: {
            title: "Social Media Management",
            icon: "📢",
            description: "Boost brand engagement, drive community growth, and increase trust with expert-managed social media strategies.",
            features: [
                "Instagram & Facebook Content Strategy",
                "Daily Story, Reels & Post Scheduling",
                "Influencer Collaboration & UGC",
                "Analytics & KPI Reports",
                "Community Engagement & Support"
            ],
            stats: [
                { value: "40%", label: "Engagement Growth" },
                { value: "20K+", label: "Followers Gained" },
                { value: "4.9/5", label: "Client Feedback" },
                { value: "99%", label: "Consistency Rate" }
            ],
            keywords: [
                "social media agency", "Instagram marketing experts",
                "Facebook page management", "social media strategy India USA",
                "UGC content growth", "LinkedIn management service"
            ]
        },

        shopify: {
            title: "Shopify Web Development",
            icon: "🛒",
            description: "Custom Shopify storefronts optimized for conversions, mobile responsiveness, and brand growth.",
            features: [
                "Custom Shopify Themes & Liquid Code",
                "Product Listing & Category Setup",
                "Payment Gateway & Shipping Integration",
                "Third-party App Integrations",
                "Speed & SEO Optimization"
            ],
            stats: [
                { value: "70%", label: "Conversion Rate Boost" },
                { value: "50+", label: "Stores Launched" },
                { value: "100%", label: "Mobile Optimized" },
                { value: "4.9/5", label: "Client Satisfaction" }
            ],
            keywords: [
                "Shopify development India", "Shopify store USA",
                "ecommerce Shopify experts", "custom Shopify theme Australia",
                "Shopify SEO optimization", "Shopify Plus migration"
            ]
        }
    };
    const steps = [
        {
            step: "1",
            title: "Discovery & Strategy",
            description: "Understand your brand, target audience, and business goals to align technology with success metrics.",
            keywords: [
                "project discovery phase", "business strategy for software", "startup tech planning"
            ]
        },
        {
            step: "2",
            title: "UX/UI Planning & Roadmap",
            description: "Craft seamless user experiences and map features to user journeys for optimized engagement.",
            keywords: [
                "UX UI roadmap", "user experience design", "design planning"
            ]
        },
        {
            step: "3",
            title: "Agile Design & Development",
            description: "Iterative development with modern stacks, test-driven coding, and milestone-based sprints.",
            keywords: [
                "agile web development", "sprint based app development", "frontend backend design"
            ]
        },
        {
            step: "4",
            title: "Testing & QA",
            description: "Perform cross-platform, performance, and functionality testing to deliver bug-free, high-quality software.",
            keywords: [
                "software QA testing", "mobile app testing services", "performance testing"
            ]
        },
        {
            step: "5",
            title: "Launch & Continuous Support",
            description: "Go live confidently with support, updates, and growth optimization plans post-launch.",
            keywords: [
                "launch support services", "ongoing website maintenance", "post-launch app updates"
            ]
        }
    ];


    return (
        <div className="bg-gradient-to-b from-gray-50 to-white ">
            <Helmet>
                <title>End-to-End Digital Services | Web, SEO, Apps & Branding | ShreeKhodiyar Technostack</title>
                <meta name="description" content="We are a global digital agency providing full-stack services including SEO, PPC, mobile apps, web development, branding, and UI/UX design." />
            </Helmet>

            {/* **Hero Section with Animated Background** */}
            <section className="relative h-screen min-h-[600px] py-24 px-6 overflow-hidden flex items-center justify-center px-6 overflow-hidden bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto text-center relative z-10 mt-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Digital Services</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        At Shree Khodiyar Technostack, we craft performance-driven digital solutions — from custom software and mobile apps to eCommerce, game development, and global digital marketing. Trusted by startups and enterprises across India, USA, Europe & beyond.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="#explore"
                            className="bg-gradient-to-r from-blue-700 to-purple-800 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors flex items-center gap-2"
                        >
                            Explore Services <FiArrowRight />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Floating background elements */}
                {/* Floating Settings Icons Background */}
                <div className="absolute inset-0 overflow-hidden opacity-1000 pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                rotate: 360,
                                y: [0, Math.random() * 60 - 30],
                                x: [0, Math.random() * 40 - 20]
                            }}
                            transition={{
                                duration: 30 + Math.random() * 30,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            }}
                            className="absolute text-blue-400/20"
                            style={{
                                fontSize: `${Math.random() * 24 + 16}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                        >
                            <FiSettings className="w-full h-full" />
                        </motion.div>
                    ))}
                </div>
                {/* Subtle scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <FiChevronDown className="text-gray-400 w-8 h-8" />
                </div>
            </section>

            {/* **Services Showcase (Interactive Tabs)** */}
            <section id="explore" className="py-16 mt-0 pt-10 px-6 max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.keys(services).map((key) => (
                        <motion.button
                            key={key}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all ${activeTab === key
                                ? 'bg-gradient-to-r from-blue-700 to-purple-800 text-white shadow-lg'
                                : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                        >
                            {services[key].title}
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50">
                                <div className="flex items-center gap-4 mb-6">
                                    {services[activeTab].icon}
                                    <h2 className="text-3xl font-bold">{services[activeTab].title}</h2>
                                </div>
                                <p className="text-gray-700 mb-8 text-lg">
                                    {services[activeTab].description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {services[activeTab].stats.map((stat, i) => (
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            key={i}
                                            className="bg-white p-4 rounded-lg shadow-sm text-center"
                                        >
                                            <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                                            <p className="text-sm text-gray-600">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-block"
                                >
                                    <a
                                        href="/quickenquiry"
                                        className="bg-gradient-to-r from-blue-700 to-purple-800bg-gradient-to-r from-blue-700 to-purple-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                                    >
                                        Get Started <FiArrowRight />
                                    </a>
                                </motion.div>
                            </div>

                            <div className="md:w-1/2 p-8 md:p-12">
                                <h3 className="text-xl font-bold mb-6">What&apos;s Included</h3>
                                <ul className="space-y-4">
                                    {services[activeTab].features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* **Process Timeline (Animated)** */}
            <section className="py-20 px-6 bg-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Our 5-Step Success Process</h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2" />

                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                            >
                                {/* Text Content */}
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                                    <span className="inline-block bg-gradient-to-r from-blue-700 to-purple-800 text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-lg">
                                        {item.step}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>

                                {/* Connector Dot */}
                                <div className="w-1/2 flex justify-center">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <BusinessStartup />
            <OurApproch />
            <HomeTestimonials />

            {/* **CTA Section (3D Effect)** */}
            <section className="px-6 py-20 mt-0 ">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto"
                >
                    <h2 className="container text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can help you achieve your goals with our expertise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/quickenquiry"
                            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                        >
                            Get Free Consultation
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/portfolio"
                            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                        >
                            View Our Work
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ServicesPage;