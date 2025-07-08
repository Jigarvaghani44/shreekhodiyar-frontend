import React from 'react';

const VisualProcess = () => {
    const processes = [
        {
            step: "01",
            title: "Envision & Ideation",
            description: "Spark innovation with strategic ideation and creative brainstorming. We help global brands imagine powerful digital experiences and growth opportunities.",
            image: "https://granth.ae/wp-content/uploads/2023/01/Envision.png",
            color: "purple",
            position: "left"
        },
        {
            step: "02",
            title: "Establish Brand Trust",
            description: "Build credibility through exceptional user experience, service quality, and brand consistency. We nurture long-lasting relationships for international markets.",
            image: "https://granth.ae/wp-content/uploads/2023/01/Establish.png",
            color: "amber",
            position: "right"
        },
        {
            step: "03",
            title: "Execute Digital Strategy",
            description: "Implement precise web, app & marketing solutions that drive ROI. Our global execution approach ensures measurable results across India, USA, Australia & Europe.",
            image: "https://granth.ae/wp-content/uploads/2023/01/Execute.png",
            color: "green",
            position: "left"
        },
        {
            step: "04",
            title: "Echo & Optimize",
            description: "Amplify success with continuous improvement, customer feedback analysis, and market adaptation. We turn performance data into scalable growth strategies.",
            image: "https://granth.ae/wp-content/uploads/2023/01/Echo.png",
            color: "blue",
            position: "right"
        }
    ];


    const colorMap = {
        purple: "from-purple-600 to-violet-600",
        amber: "from-amber-500 to-orange-500",
        green: "from-emerald-500 to-teal-600",
        blue: "from-blue-500 to-cyan-500"
    };

    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Headline with Gradient */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            Unconventional Approach,
                        </span><br />
                        <span className="text-white">Exceptional Outcomes</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Our methodology breaks conventions to deliver transformative results.
                    </p>
                </div>

                {/* Visual Process Timeline */}
                <div className="space-y-24">
                    {processes.map((process, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col ${process.position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
                        >
                            {/* Step Indicator */}
                            <div className={`absolute ${process.position === 'left' ? 'md:-left-8 -left-4' : 'md:-right-8 -right-4'} top-0 z-10`}>
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br ${colorMap[process.color]} shadow-lg`}>
                                    {process.step}
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className={`flex-1 ${process.position === 'left' ? 'md:pr-8' : 'md:pl-8'}`}>
                                <div className={`p-1 rounded-2xl bg-gradient-to-br ${colorMap[process.color]} bg-opacity-20`}>
                                    <div className="bg-gray-800 rounded-xl overflow-hidden p-6">
                                        <img
                                            src={process.image}
                                            alt={process.title}
                                            className="w-full h-auto max-h-64 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1">
                                <div className="inline-block md:text-left mb-4">
                                    <span className={`text-xs font-semibold tracking-wider uppercase ${process.color === 'purple' ? 'text-purple-400' : process.color === 'amber' ? 'text-amber-400' : process.color === 'green' ? 'text-emerald-400' : 'text-blue-400'}`}>
                                        Phase {process.step}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mt-1">
                                        {process.title}
                                    </h3>
                                </div>
                                <p className="text-lg text-gray-300 md:text-left">
                                    {process.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <a href="/quickenquiry"> <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:shadow-xl hover:shadow-purple-500/20 transition-all">
                        Start Your Transformation Journey
                    </button></a>

                </div>
            </div>
        </section>
    );
};

export default VisualProcess;