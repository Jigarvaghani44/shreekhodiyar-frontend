import React, { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiPlay } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
// import InfiniteLogoCarousel from "./InfiniteLogoCarousel";

const CreativeAgency = () => {
    const navigate = useNavigate();
    const [isVideoHovered, setIsVideoHovered] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const handleButtonClick = () => {
        navigate('/our-work');
    };

    const toggleVideo = () => {
        setVideoPlaying(!videoPlaying);
    };

    const benefits = [
        "Hybrid & cross-platform app solutions",
        "Mobile-first design & development", "E-commerce growth via Shopify & mobile commerce", "Casual & hyper-casual mobile games rising in demand", "AI-driven personalization in apps & games",
        "Effective Marketing Campaigns To Generate Growth",
        "Tailored Branding Strategies To Drive Engagement"
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Floating background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
                            y: [0, 50 * (i % 3)],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        className={`absolute ${i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'} opacity-10 rounded-full`}
                        style={{
                            width: `${100 + i * 50}px`,
                            height: `${100 + i * 50}px`,
                            top: `${10 + i * 15}%`,
                            left: `${5 + i * 10}%`
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <section className="relative z-10">
                {/* Hero section */}
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Award Winning Agency</span>
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                        >
                            <span className="relative inline-block">
                                <span className="relative z-10 ">Creative Tech Agency</span>
                                {/* <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 z-0 transform origin-left"
                                    style={{ bottom: '5px' }}
                                /> */}
                            </span>
                        </motion.h1>

                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                            }}
                            className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 mb-8"
                        >
                            Delivering <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">Custom Solutions</span> That Drive Growth
                        </motion.h2>

                        {/* Benefits list */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { delay: 0.3 } }
                            }}
                            className="grid gap-4 mb-12 max-w-md mx-auto"
                        >
                            {benefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-default"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
                                            <FiCheck className="text-sm" />
                                        </div>
                                    </div>
                                    <p className="ml-3 text-left text-gray-700">{item}</p>
                                </motion.div>
                            ))}
                        </motion.div>


                    </motion.div>


                </div>
                <div className="relative py-16 sm:py-24">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
                        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-purple-400 blur-3xl" />
                    </div>

                    <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-10 shadow-xl"
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">UniTechnoStack</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                <span className='text-blue-600 font-bold'>UniTechnoStack</span> is a forward-thinking  <span className=' font-bold'>IT solutions</span> agency dedicated to crafting exceptional digital experiences. We specialize in game development, web development, Shopify solutions, and mobile app development, helping businesses thrive in today’s fast-paced digital world.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At <span className='text-blue-600 font-bold'>UniTechnoStack</span>, we combine <span className=' font-bold'>creative innovation</span> with technical excellence to deliver custom digital products that drive growth, boost engagement, and generate revenue. Whether you&apos;re a startup or an established brand, our solutions are designed to scale with your vision.<br /><br />
                                🌐 <span className='font-bold'>Our Core Services</span><br />
                                🎮 Game Development (2D/3D, Unity, AR/VR, mobile & PC)<br />

                                💻 Custom Web Development (React, Node.js, Next.js, MongoDB)<br />

                                🛍️ Shopify Store Design & Development (custom themes, apps, optimization)<br />

                                📱 Mobile App Development (iOS & Android, cross-platform, hybrid apps)
                            </p>
                        </motion.div>
                    </div>
                </div>


                {/* Video preview section */}
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
                            See Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> Work In Action</span>
                        </h3>

                        <div
                            className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                            onClick={toggleVideo}
                            onMouseEnter={() => setIsVideoHovered(true)}
                            onMouseLeave={() => setIsVideoHovered(false)}
                        >
                            {/* Video placeholder - replace with actual video component */}
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                <AnimatePresence>
                                    {!videoPlaying && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: isVideoHovered ? 1 : 0.8,
                                                scale: isVideoHovered ? 1.1 : 1
                                            }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110">
                                                <FiPlay className="text-2xl ml-1" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {videoPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                                        <video
                                            controls
                                            autoPlay
                                            className="w-full h-full object-cover"
                                        >
                                            <source
                                                src="https://www.digitalsilk.com/wp-content/uploads/2025/04/Digital-Silk-Showreel-Video.mp4"
                                                type="video/mp4"
                                            />
                                            <track
                                                kind="captions"
                                                src="captions.vtt"
                                                srcLang="en"
                                                label="English"
                                                default
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}
                            </div>

                            <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                                1 MINUTE
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats section */}
                {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600  sm:py-20 text-white">
                    {/* <InfiniteLogoCarousel /> 
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: "50+", label: "Projects Completed" },
                                { number: "100%", label: "Client Satisfaction" },
                                { number: "5★", label: "Average Rating" },
                                { number: "5+", label: "Industry Awards" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-4"
                                >
                                    <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                                    <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </section>
        </div>
    );
};

export default CreativeAgency;