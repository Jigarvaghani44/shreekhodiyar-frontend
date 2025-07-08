import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ClientShowcase = () => {
    // Client data organized by industry
    const industries = [

        {
            name: "RETAIL",
            clients: [
                { name: "Buddha Brands", logo: "nuvistalogo.png" },
                { name: "Babies R Us", logo: "shreelogo.png" },
                { name: "Paul Stuart", logo: "nuvistalogo.png" },
                { name: "Absolute Dogger", logo: "shreelogo.png" }
            ],
            color: "from-purple-600 to-indigo-600"
        },
        {
            name: "TECHNOLOGY",
            clients: [
                { name: "unitechnostack", logo: "unitechlogo2.png" },
                { name: "Nuvista", logo: "nuvistalogo.png" },
                { name: "Mitsui", logo: "shreelogo.png" },
                { name: "Puma Energy", logo: "nuvistalogo.png" }
            ],
            color: "from-amber-500 to-orange-500"
        },
    ];

    const [activeIndustry, setActiveIndustry] = useState(0);
    const containerRef = useRef(null);
    const controls = useAnimation();
    const [scrollWidth, setScrollWidth] = useState(0);

    // For infinite horizontal scrolling
    useEffect(() => {
        const calculateWidth = () => {
            if (containerRef.current) {
                setScrollWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        return () => window.removeEventListener('resize', calculateWidth);
    }, []);

    // Auto-scroll animation
    useEffect(() => {
        controls.start({
            x: [-scrollWidth, 0],
            transition: {
                x: {
                    duration: 40,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                }
            }
        });
    }, [scrollWidth, controls]);

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 bg-gray overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-400 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            CLIENTS ACROSS INDUSTRIES
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl font-medium text-gray-600 mb-4">
                        Full-Service Web Design Agency
                    </p>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                        From startups to Fortune 50 companies, we create custom solutions that grow brands online
                    </p>
                </motion.header>

                {/* Industry selector */}
                <div className="flex justify-center mb-12 lg:mb-16">
                    <div className="inline-flex rounded-full bg-gray-100 p-1">
                        {industries.map((industry, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndustry(index)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeIndustry === index ? `text-white bg-gradient-to-r ${industry.color}` : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {industry.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Logo carousel */}
                <div className="relative">
                    {/* Gradient fades */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

                    <motion.div
                        ref={containerRef}
                        className="overflow-hidden"
                    >
                        <motion.div
                            animate={controls}
                            className="flex py-4"
                        >
                            {/* Double the logos for seamless looping */}
                            {[...industries[activeIndustry].clients, ...industries[activeIndustry].clients].map((client, index) => (
                                <motion.div
                                    key={`${client.name}-${index}`}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex-shrink-0 px-8 sm:px-12 lg:px-16"
                                >
                                    <div className="h-16 w-32 sm:h-20 sm:w-40 flex items-center justify-center">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="h-full w-full object-contain hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* CTA button
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 lg:mt-16"
                >
                    <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        EXPLORE ALL SERVICES
                        <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </button>
                </motion.div> */}
            </div>

            {/* SEO structured data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Client Showcase",
                    "description": "Full-service web design agency serving clients across multiple industries",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": industries.flatMap((industry, i) =>
                            industry.clients.map((client, j) => ({
                                "@type": "ListItem",
                                "position": i * industry.clients.length + j + 1,
                                "item": {
                                    "@type": "Brand",
                                    "name": client.name,
                                    "logo": client.logo
                                }
                            }))
                        )
                    }
                })}
            </script>
        </section>
    );
};

export default ClientShowcase;