import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiCode, FiSmartphone, FiCpu, FiBarChart2, FiShare2, FiShoppingCart } from 'react-icons/fi';

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
            icon: <FiCode className="text-4xl text-blue-600" />,
            description: "We build high-performance, SEO-optimized websites that drive conversions and user engagement.",
            features: [
                "Custom React/Next.js Development",
                "Responsive & Mobile-First Design",
                "SEO Optimization",
                "E-Commerce Solutions",
                "CMS Integration (WordPress, Sanity)"
            ],
            stats: [
                { value: "3x", label: "Faster Load Times" },
                { value: "100%", label: "Mobile Responsive" },
                { value: "50+", label: "Websites Launched" },
                { value: "4.8/5", label: "Client Satisfaction" }
            ]
        },
        mobile: {
            title: "Mobile Development",
            icon: <FiSmartphone className="text-4xl text-purple-600" />,
            description: "Cross-platform mobile apps with seamless UX and cutting-edge performance.",
            features: [
                "React Native & Flutter Apps",
                "iOS & Android Development",
                "Push Notifications",
                "API Integration",
                "App Store Optimization"
            ],
            stats: [
                { value: "4.9/5", label: "App Store Rating" },
                { value: "2M+", label: "Downloads" },
                { value: "60%", label: "Faster Development" },
                { value: "4.8/5", label: "Client Satisfaction" }
            ]
        },
        game: {
            title: "Game Development",
            icon: <FiCpu className="text-4xl text-green-600" />,
            description: "Immersive 2D and 3D games with stunning graphics, smooth controls, and engaging gameplay.",
            features: [
                "Unity Engine Development",
                "Cross-Platform Support (Mobile, PC, Console)",
                "Multiplayer Integration",
                "In-App Purchases & Ads",
                "Custom Game Physics & AI"
            ],
            stats: [
                { value: "100+", label: "Games Published" },
                { value: "1M+", label: "Players Worldwide" },
                { value: "4.8/5", label: "Average Player Rating" },
                { value: "95%", label: "Retention Rate" }
            ]
        },
        digitalMarketing: {
            title: "Digital Marketing",
            icon: <FiBarChart2 className="text-4xl text-orange-500" />,
            description: "Drive measurable growth with powerful strategies across SEO, PPC, email, and content marketing.",
            features: [
                "Search Engine Optimization (SEO)",
                "Pay-Per-Click Advertising (PPC)",
                "Content & Email Marketing",
                "Performance Analytics & Reporting",
                "Conversion Rate Optimization"
            ],
            stats: [
                { value: "85%", label: "Client ROI Growth" },
                { value: "3x", label: "Lead Generation" },
                { value: "60%", label: "Reduced Cost-per-Acquisition" },
                { value: "50K+", label: "Monthly Traffic Increase" }
            ]
        },
        socialMedia: {
            title: "Social Media Handling",
            icon: <FiShare2 className="text-4xl text-pink-600" />,
            description: "Engage your audience and build a loyal community with expert social media management.",
            features: [
                "Content Calendar & Strategy",
                "Daily Posts & Story Designs",
                "Influencer Collaboration",
                "Community Engagement",
                "Platform Growth Analytics"
            ],
            stats: [
                { value: "40%", label: "Avg. Engagement Growth" },
                { value: "20K+", label: "Followers Gained" },
                { value: "4.9/5", label: "Client Feedback" },
                { value: "99%", label: "Consistency Rate" }
            ]
        },
        shopify: {
            title: "Shopify Web Development",
            icon: <FiShoppingCart className="text-4xl text-emerald-600" />,
            description: "Launch and scale high-converting Shopify stores built for performance, UX, and brand identity.",
            features: [
                "Custom Shopify Theme Development",
                "Store Setup & Product Management",
                "Shopify App Integrations",
                "Payment Gateway Configuration",
                "Speed Optimization & Analytics"
            ],
            stats: [
                { value: "70%", label: "Conversion Rate Boost" },
                { value: "50+", label: "Stores Launched" },
                { value: "100%", label: "Mobile Optimized" },
                { value: "4.9/5", label: "Client Satisfaction" }
            ]
        }
    };
    // Testimonials
    const testimonials = [
        {
            quote: "Their web development service transformed our online presence. Traffic increased by 300%!",
            author: "Alex Johnson, CEO of TechCorp",
            role: "SaaS Business"
        },
        // More testimonials...
    ];
    const steps = [
        {
            step: "1",
            title: "Discovery",
            description: "Deep dive into your business goals and requirements to create a clear project roadmap.",
        },
        {
            step: "2",
            title: "Planning",
            description: "Create a detailed plan, set timelines, and allocate resources to ensure smooth project execution.",
        },
        {
            step: "3",
            title: "Design & Development",
            description: "Design user-friendly interfaces and develop high-performance applications tailored to your needs.",
        },
        {
            step: "4",
            title: "Testing & Quality Assurance",
            description: "Thorough testing to identify and fix any bugs, ensuring a seamless user experience.",
        },
        {
            step: "5",
            title: "Launch & Support",
            description: "Deploy the project and provide ongoing support to keep your systems running smoothly.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white ">
            {/* **Hero Section with Animated Background** */}
            <section className="relative py-24 px-6 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto text-center relative z-10 mt-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        We deliver cutting-edge solutions tailored to your business needs.
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
                <div className="absolute inset-0 overflow-hidden opacity-50">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, 40, 0],
                                x: [0, Math.random() * 80 - 40, 0],
                                rotate: [0, Math.random() * 360]
                            }}
                            transition={{
                                duration: 15 + Math.random() * 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute rounded-lg bg-blue-800"
                            style={{
                                width: `${Math.random() * 200 + 50}px`,
                                height: `${Math.random() * 200 + 50}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.3 + 0.1
                            }}
                        />
                    ))}
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

            {/* **Testimonials (Animated Carousel)** */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>

                    <div className="relative h-96 overflow-hidden">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="bg-gray-50 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                                    <p className="text-xl italic mb-6">&ldquo;{testimonial.quote}&ldquo;</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full" />
                                        <div>
                                            <p className="font-bold">{testimonial.author}</p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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