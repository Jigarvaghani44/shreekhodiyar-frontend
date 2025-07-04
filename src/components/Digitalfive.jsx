import React from 'react';
import { motion } from 'framer-motion';

const BusinessJourney = () => {
    const stats = [
        { value: "6+", label: "Years of excellence", color: "from-blue-500 to-cyan-400" },
        { value: "550+", label: "Clients served", color: "from-purple-500 to-pink-400" },
        { value: "35+", label: "Industries", color: "from-amber-500 to-orange-400" },
        { value: "80+", label: "Team experts", color: "from-emerald-500 to-teal-400" }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="md:container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            Our Growth Journey
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Committed to excellence for over six years, delivering exceptional results for our clients.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                            Building meaningful connections through innovation
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Our journey began with a simple mission: to create digital solutions that make a real difference.
                            Over the years, we've grown into a trusted partner for businesses across multiple industries.
                        </p>
                        <p className="text-gray-300">
                            What sets us apart is our commitment to understanding each client's unique needs and delivering
                            tailored solutions that drive measurable results.
                        </p>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full h-64 md:h-80 rounded-xl overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="text-center p-6">
                                        <div className="inline-block text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                                            6+
                                        </div>
                                        <p className="text-lg text-gray-200">Years of experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated dots */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-blue-400/20"
                                style={{
                                    width: `${Math.random() * 20 + 10}px`,
                                    height: `${Math.random() * 20 + 10}px`,
                                    top: `${Math.random() * 80 + 10}%`,
                                    left: `${Math.random() * 80 + 10}%`,
                                }}
                                animate={{
                                    y: [0, (Math.random() - 0.5) * 20],
                                    opacity: [0.4, 0.8, 0.4],
                                }}
                                transition={{
                                    duration: Math.random() * 4 + 3,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: Math.random() * 2
                                }}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700/30 backdrop-blur-sm hover:border-transparent hover:bg-gradient-to-br hover:shadow-lg transition-all duration-300"
                        >
                            <div className={`text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                                {stat.value}
                            </div>
                            <p className="text-gray-300">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BusinessJourney;