import React from 'react';
import { motion } from 'framer-motion';

const ToolsTechnologies = () => {
    const tools = [
        { id: 1, img: "https://granth.in/wp-content/uploads/2021/10/17.png", name: "Tool 1" },
        { id: 2, img: "https://granth.in/wp-content/uploads/2021/10/18.png", name: "Tool 2" },
        { id: 3, img: "https://granth.in/wp-content/uploads/2022/05/19.png", name: "Tool 3" },
        { id: 4, img: "https://granth.in/wp-content/uploads/2021/10/20.png", name: "Tool 4" },
        // Add more tools as needed
    ];

    return (
        <section className="py-20 md:py-28 bg-gray-50 text-white">
            <div className="md:container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    <motion.div
                        className="lg:w-7/12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Tools and Technologies
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="lg:w-5/12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-black">
                            For a smooth process, error-free execution, and guaranteed viability, we make optimum utilization of the technology and advanced tools
                        </p>
                    </motion.div>
                </div>

                {/* Tools Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1 }
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gray-300 rounded-xl p-6 flex items-center justify-center border border-gray-700/30 hover:border-blue-400/50 backdrop-blur-sm"
                        >
                            <img
                                src={tool.img}
                                alt={tool.name}
                                className="h-16 w-auto max-w-full object-contain  hover:grayscale-0 transition-all duration-300"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute left-0 right-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default ToolsTechnologies;