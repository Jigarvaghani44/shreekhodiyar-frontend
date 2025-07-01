import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DesignProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const scrollerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const processSteps = [
        {
            id: 1,
            title: "Web Strategy",
            image: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-2.png",
            content: [
                "We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.",
                "In this phase, we:",
                ["Identify your target audiences", "Analyze user pain-points & define your UVPs", "Define key performance indicators (KPIs)", "Create a roadmap to growing your brand online"]
            ]
        },
        {
            id: 2,
            title: "Planning & Information Architecture",
            image: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-3.png",
            content: [
                "We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site's structure, we ensure seamless user journeys to key conversion points.",
                "Here's how our team does it:",
                ["We develop a base-level user flow & sitemap", "We utilize wireframing to create a seamless conversion funnel", "We add on-brand, consistent messaging to your structure"]
            ]
        },
        {
            id: 3,
            title: "Creative Design",
            image: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png",
            content: [
                "This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design.",
                "With just 50 milliseconds to make a good first impression, your website needs to stand out. To achieve this, we:",
                ["Thoughtfully place design features to guide to the user journey", "Utilize interactive videos & animations", "Create custom, branded illustrations", "Ensure accessibility & search engine optimization"]
            ]
        },
        {
            id: 4,
            title: "Responsive Development",
            image: "https://www.digitalsilk.com/wp-content/uploads/2024/06/responsive.png",
            content: [
                "A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.",
                "To ensure your website reaches and satisfies every user, we:",
                ["Gather touchpoint & user-channel insights", "Transform your wireframes into a flexible UI", "Test across devices before approval & launch"]
            ]
        },
        {
            id: 5,
            title: "Quality Assurance (QA)",
            image: "https://www.digitalsilk.com/wp-content/uploads/2024/06/quality.png",
            content: [
                "We pride ourselves on delivering measurable results and professional outcomes. By following a strict quality assurance (QA) protocol, we guarantee a high-quality digital experience for your brand.",
                "To achieve this, we:",
                ["Actively involve our clients throughout every project", "Meticulously test all designs to catch errors", "Use tried-and-tested tools to secure before launch"]
            ]
        },
        {
            id: 6,
            title: "Launch & Optimization",
            image: "https://www.digitalsilk.com/wp-content/uploads/2024/06/launch.png",
            content: [
                "Our end-to-end website design services cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
                "Our design specialists make this happen by:",
                ["Following a strict protocol for every website launch", "Offering post-launch maintenance & optimization", "Creating & implementing a digital marketing plan to drive awareness across touchpoints"]
            ]
        }
    ];

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Handle mouse events for drag scrolling
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollerRef.current.offsetLeft);
        setScrollLeft(scrollerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Handle touch events for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollerRef.current.offsetLeft);
        setScrollLeft(scrollerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - scrollerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Auto-scroll to active step
    useEffect(() => {
        if (scrollerRef.current) {
            const container = scrollerRef.current;
            const activeSlide = container.querySelector(`.step-${activeStep}`);
            if (activeSlide) {
                container.scrollTo({
                    left: activeSlide.offsetLeft - container.offsetWidth / 2 + activeSlide.offsetWidth / 2,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeStep]);

    return (
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 md:py-20 lg:py-24 text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                        Our Digital Solutions Process
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300">
                        Take a peek behind the curtain and explore our comprehensive digital solution process.
                        We build custom solutions for brands of all sizes that deliver <a href="/case-studies/" className="text-blue-400 hover:text-blue-300 underline">measurable results</a>.
                    </p>
                </motion.div>

                {/* Process Steps - Desktop */}
                <div className="hidden md:block">
                    <div className="flex justify-center mb-10 lg:mb-12">
                        <div className="relative w-full max-w-6xl">
                            {/* Progress line */}
                            <div className="absolute top-8 lg:top-10 left-0 right-0 h-1 bg-gray-700 z-0">
                                <motion.div
                                    className="h-full bg-blue-500"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* Step indicators */}
                            <div className="flex justify-between relative z-10">
                                {processSteps.map((step, index) => (
                                    <button
                                        key={step.id}
                                        onClick={() => setActiveStep(index)}
                                        className={`flex flex-col items-center w-20 lg:w-24 ${index <= activeStep ? 'text-blue-400' : 'text-gray-400'}`}
                                        aria-label={`Go to ${step.title} step`}
                                    >
                                        <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center mb-1 lg:mb-2 ${index <= activeStep ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
                                            {index + 1}
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-center leading-tight">
                                            {step.title.split(' ')[0]}
                                            {step.title.split(' ')[1] && (
                                                <span className="block">{step.title.split(' ').slice(1).join(' ')}</span>
                                            )}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Step content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                        <motion.div
                            key={processSteps[activeStep].id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:order-2"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-800">
                                <img
                                    src={processSteps[activeStep].image}
                                    alt={processSteps[activeStep].title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <span className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                                    Step {activeStep + 1}
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            key={`content-${processSteps[activeStep].id}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:order-1"
                        >
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-blue-400">
                                {processSteps[activeStep].title}
                            </h3>
                            <div className="space-y-3 md:space-y-4 text-gray-300 text-sm sm:text-base">
                                {processSteps[activeStep].content.map((item, i) => (
                                    <React.Fragment key={i}>
                                        {typeof item === 'string' ? (
                                            <p>{item}</p>
                                        ) : (
                                            <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                                                {item.map((listItem, j) => (
                                                    <li key={j}>{listItem}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-center mt-10 lg:mt-12 space-x-3 sm:space-x-4">
                        <button
                            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                            disabled={activeStep === 0}
                            className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base ${activeStep === 0 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                            aria-label="Previous step"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setActiveStep(prev => Math.min(processSteps.length - 1, prev + 1))}
                            disabled={activeStep === processSteps.length - 1}
                            className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base ${activeStep === processSteps.length - 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                            aria-label="Next step"
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Process Steps - Mobile */}
                <div className="md:hidden">
                    <div
                        ref={scrollerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-3 -mx-4 px-4 touch-pan-x"
                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    >
                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`flex-shrink-0 w-4/5 sm:w-3/5 px-2 snap-center step-${index}`}
                                onClick={(e) => {
                                    // Only set active step if not dragging
                                    if (!isDragging && !e.target.closest('button')) {
                                        setActiveStep(index);
                                    }
                                }}
                            >
                                <div className={`bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all ${activeStep === index ? 'ring-2 ring-blue-500' : 'opacity-90'}`}>
                                    <div className="relative aspect-video">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <span className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                                            Step {index + 1}
                                        </span>
                                    </div>
                                    <div className="p-3 sm:p-4">
                                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-400">{step.title}</h3>
                                        <p className="text-gray-300 text-sm sm:text-base line-clamp-3">
                                            {step.content[0]}
                                        </p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveStep(index);
                                            }}
                                            className="mt-2 text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium"
                                        >
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Expanded content for mobile */}
                    <AnimatePresence>
                        {activeStep !== null && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 bg-gray-800 rounded-xl p-4 sm:p-6"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-400">
                                    {processSteps[activeStep].title}
                                </h3>
                                <div className="space-y-3 text-gray-300 text-sm sm:text-base">
                                    {processSteps[activeStep].content.map((item, i) => (
                                        <React.Fragment key={i}>
                                            {typeof item === 'string' ? (
                                                <p>{item}</p>
                                            ) : (
                                                <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                                                    {item.map((listItem, j) => (
                                                        <li key={j}>{listItem}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4 sm:mt-6 space-x-3">
                                    <button
                                        onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                                        disabled={activeStep === 0}
                                        className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm ${activeStep === 0 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                                        aria-label="Previous step"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setActiveStep(prev => Math.min(processSteps.length - 1, prev + 1))}
                                        disabled={activeStep === processSteps.length - 1}
                                        className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm ${activeStep === processSteps.length - 1 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                                        aria-label="Next step"
                                    >
                                        Next
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;