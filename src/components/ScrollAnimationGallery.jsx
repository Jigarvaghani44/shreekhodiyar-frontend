import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Import only the icons you need
import {
    FaCode,
    FaMobileAlt,
    FaGamepad,
    FaServer,
    FaDatabase,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";

const ScrollAnimationGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const autoAdvanceTimeout = useRef(null);
    const containerRef = useRef(null);

    // Check screen size on mount and resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const slides = [
        {
            title: "Turn Players into Fans with Our Game Development Experiences",
            subtitle: "We create immersive and interactive games designed to entertain, engage, and grow your player base across all platforms.",
            image: "dagla.webp",
            cta: "Discuss Your Project",
            roles: ["Developer", "Designer"],
            color: "bg-gradient-to-br from-purple-600 to-indigo-700",
            icon: <FaGamepad className="text-white" />,
            tech: ["Unity", "Unreal", "AR/VR", "Mobile"]
        },
        {
            title: "Transform Clicks into Loyal Customers with App/Web Development Expertise",
            subtitle: "We provide web and mobile app solutions that do more than just engage users — they build long-term brand loyalty.",
            image: "app.webp",
            cta: "Start Your Project",
            roles: ["Developer", "Designer"],
            color: "bg-gradient-to-br from-blue-600 to-cyan-500",
            icon: <FaMobileAlt className="text-white" />,
            tech: ["React", "Flutter", "Node.js", "AWS"]
        },
        {
            title: "Start Your Digital Journey with a Powerful Online Identity",
            subtitle: "We help brands go online with smart, scalable, and strategic digital solutions that build credibility and attract customers",
            image: "laptop.webp",
            cta: "Get in Touch",
            roles: ["Developer", "Designer"],
            color: "bg-gradient-to-br from-emerald-500 to-teal-600",
            icon: <FaMobileAlt className="text-white" />,
            tech: ["SEO", "Content Strategy", "Analytics", "CMS"]
        }
    ];

    // Auto-advance with pause on hover
    useEffect(() => {
        if (!isHovered) {
            autoAdvanceTimeout.current = setTimeout(() => {
                setDirection(1);
                setActiveIndex((prev) => (prev + 1) % slides.length);
            }, 6000);
        }
        return () => clearTimeout(autoAdvanceTimeout.current);
    }, [activeIndex, isHovered, slides.length]);
    const resetAutoAdvance = () => {
        clearTimeout(autoAdvanceTimeout.current);
        autoAdvanceTimeout.current = setTimeout(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
    };
    const goToSlide = (index) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
        resetAutoAdvance();
    };

    const goToPrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
        resetAutoAdvance();
    };

    const goToNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % slides.length);
        resetAutoAdvance();
    };



    // Animation variants
    const slideVariants = {
        enter: (dir) => ({
            x: dir > 0 ? '100%' : '-100%',
            opacity: 0.5,
            scale: 0.95
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1]
            }
        },
        exit: (dir) => ({
            x: dir > 0 ? '-100%' : '100%',
            opacity: 0.5,
            scale: 0.95,
            transition: {
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1]
            }
        })
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const techIconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                type: 'spring',
                stiffness: 100
            }
        })
    };
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/quickenquiry'); // Replace with your target page
    };
    return (
        <section
            className="relative w-full min-h-screen bg-white overflow-hidden"
            aria-label="Featured Services Gallery"
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-400 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
                    <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full bg-teal-400 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
                </div>
            </div>

            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10 mt-10">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
                    >
                        Digital Innovation That Drives Results
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        We create technology solutions that engage audiences and deliver measurable business outcomes
                    </motion.p>
                </motion.div>

                {/* Main gallery */}
                <div className={`relative ${isMobile ? 'h-auto min-h-[500px]' : 'h-[60vh] min-h-[500px] max-h-[700px]'} w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl`}>
                    <AnimatePresence custom={direction} initial={false}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className={`absolute inset-0 ${slides[activeIndex].color} flex flex-col ${isMobile ? '' : 'md:flex-row'} items-center justify-between p-6 sm:p-8 md:p-10 lg:p-12`}
                        >
                            {/* Content */}
                            <div className={`w-full ${isMobile ? 'order-2 mt-6' : 'md:w-1/2 h-full'} flex flex-col justify-center z-10`}>
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        className="flex items-center mb-3 sm:mb-4"
                                    >
                                        <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white bg-opacity-20 backdrop-blur-sm mr-3 sm:mr-4">
                                            {slides[activeIndex].icon}
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold text-white text-opacity-90 tracking-wider uppercase">
                                            Featured Solution
                                        </span>
                                    </motion.div>

                                    <motion.h3
                                        variants={itemVariants}
                                        className={`${isMobile ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl md:text-4xl'} font-bold text-white mb-3 sm:mb-4 leading-tight`}
                                    >
                                        {slides[activeIndex].title}
                                    </motion.h3>

                                    <motion.p
                                        variants={itemVariants}
                                        className="text-sm sm:text-base md:text-lg text-white text-opacity-90 mb-6 sm:mb-8 max-w-lg"
                                    >
                                        {slides[activeIndex].subtitle}
                                    </motion.p>

                                    <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                                        <button className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-full text-sm sm:text-base font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-lg" onClick={handleButtonClick}>
                                            {slides[activeIndex].cta}
                                            <FiArrowRight className="ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                        {slides[activeIndex].tech.map((tech, i) => (
                                            <motion.span
                                                key={tech}
                                                custom={i}
                                                initial="hidden"
                                                animate="visible"
                                                variants={techIconVariants}
                                                className="px-2 sm:px-3 py-1 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Image */}
                            <div className={`w-full ${isMobile ? 'order-1 h-48 sm:h-64' : 'md:w-1/2 h-full'} flex items-center justify-center relative`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className={`relative w-full ${isMobile ? 'h-full' : 'h-full'} max-w-xl max-h-xl`}
                                >
                                    <img
                                        src={slides[activeIndex].image}
                                        alt={slides[activeIndex].title}
                                        className="absolute inset-0 w-full h-full object-contain drop-shadow-lg sm:drop-shadow-xl lg:drop-shadow-2xl"
                                        loading="eager"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-10 rounded-xl sm:rounded-2xl lg:rounded-3xl" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className={`absolute ${isMobile ? 'bottom-4' : 'bottom-6 sm:bottom-8'} left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4 z-20`}>
                        <button
                            onClick={goToPrev}
                            aria-label="Previous slide"
                            className="p-1 sm:p-2 md:p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 text-white text-xs sm:text-sm"
                        >
                            <FaChevronLeft />
                        </button>

                        <div className="flex items-center gap-1 sm:gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white w-4 sm:w-6' : 'bg-white bg-opacity-50'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            aria-label="Next slide"
                            className="p-1 sm:p-2 md:p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 text-white text-xs sm:text-sm"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Tech stack indicator */}
                <div className="mt-8 sm:mt-12 md:mt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6"
                    >
                        <div className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-white rounded-full shadow-sm sm:shadow-md">
                            <FaCode className="text-blue-600 mr-1 sm:mr-2 text-sm sm:text-base" />
                            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800">Web Tech</span>
                        </div>
                        <div className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-white rounded-full shadow-sm sm:shadow-md">
                            <FaMobileAlt className="text-green-600 mr-1 sm:mr-2 text-sm sm:text-base" />
                            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800">Mobile</span>
                        </div>
                        <div className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-white rounded-full shadow-sm sm:shadow-md">
                            <FaServer className="text-purple-600 mr-1 sm:mr-2 text-sm sm:text-base" />
                            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800">Cloud</span>
                        </div>
                        <div className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-white rounded-full shadow-sm sm:shadow-md">
                            <FaDatabase className="text-orange-600 mr-1 sm:mr-2 text-sm sm:text-base" />
                            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800">Data</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Custom animations */}
            <style jsx="true" global="true">{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default ScrollAnimationGallery;