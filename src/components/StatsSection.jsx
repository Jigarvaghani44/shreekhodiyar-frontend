import { motion } from 'framer-motion';
import { FiAward, FiStar, FiThumbsUp, FiCheckCircle } from 'react-icons/fi';

const StatsSection = () => {
    const stats = [
        {
            number: "50+",
            label: "Projects Completed",
            icon: <FiCheckCircle className="w-8 h-8" />,
            color: "from-emerald-400 to-teal-500"
        },
        {
            number: "100%",
            label: "Client Satisfaction",
            icon: <FiThumbsUp className="w-8 h-8" />,
            color: "from-blue-400 to-cyan-500"
        },
        {
            number: "5★",
            label: "Average Rating",
            icon: <FiStar className="w-8 h-8" />,
            color: "from-amber-400 to-orange-500"
        },
        {
            number: "5+",
            label: "Industry Awards",
            icon: <FiAward className="w-8 h-8" />,
            color: "from-purple-400 to-fuchsia-500"
        }
    ];

    return (
        <div className="relative py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                        Quantifying our commitment to excellence and client success
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="relative"
                        >
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.color} opacity-20 blur-md`} />
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 overflow-hidden">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto rounded-full bg-white/10">
                                    <div className="text-white">
                                        {stat.icon}
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm sm:text-base text-blue-100 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 40 - 20, 0],
                            opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                            duration: 8 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute rounded-full bg-white opacity-30"
                        style={{
                            width: `${2 + Math.random() * 3}px`,
                            height: `${2 + Math.random() * 3}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatsSection;