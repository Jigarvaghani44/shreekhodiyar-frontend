import React from 'react';

const VisualBusinessJourney = () => {
    const stages = [
        {
            title: "Market Research & Business Idea Validation",
            description: "Validate your business idea through global market research, competitor analysis, and industry trend insights tailored for startups and enterprises.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            yourRole: "We research market trends, analyze competitors, and help shape your product strategy for India, USA, Australia, and Europe.",
            color: "bg-blue-100",
        },
        {
            title: "Brand Strategy & Website Design",
            description: "Create a powerful brand identity with high-conversion websites, responsive design, and UI/UX experiences optimized for global reach.",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            yourRole: "We design logos, brand kits, and SEO-friendly websites to build trust and drive global engagement across all platforms.",
            color: "bg-purple-100",
        },
        {
            title: "Digital Marketing & Lead Generation",
            description: "Boost visibility and conversions with SEO, social media marketing, and PPC campaigns targeting India, USA, Australia, and Europe.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            yourRole: "We execute keyword-targeted campaigns, optimize your funnel, and drive measurable ROI through digital marketing strategies.",
            color: "bg-amber-100",
        },
        {
            title: "Secure Payment Gateway Integration",
            description: "Integrate global payment solutions with SSL security and fraud protection for a seamless and trustworthy eCommerce experience.",
            image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            yourRole: "We implement PCI-compliant payment systems that support your international transactions securely and reliably.",
            color: "bg-cyan-100",
        },
        {
            title: "Business Growth & Global Scaling",
            description: "Scale efficiently with data-driven analytics, marketing automation, and global growth strategies tailored to your industry.",
            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            yourRole: "We optimize your operations, automate outreach, and guide your international expansion using performance insights.",
            color: "bg-indigo-100",
        },
    ];


    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* SEO-Optimized Heading */}
                <div className="text-center mb-12">
                    <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                        FROM IDEA TO GLOBAL BUSINESS
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                        Your <span className="text-indigo-600">E-Commerce Journey</span>, Simplified
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We handle the tech, marketing, and growth—so you can focus on your vision.
                    </p>
                </div>

                {/* Visual Timeline (Mobile: Stacked, Desktop: Alternating Sides) */}
                <div className="space-y-12 lg:space-y-0">
                    {stages.map((stage, index) => (
                        <div
                            key={index}
                            className={`lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
                        >
                            {/* Image (Full-width on mobile, half on desktop) */}
                            <div className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src={stage.image}
                                    alt={stage.title}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>

                            {/* Text Content */}
                            <div className={`lg:w-1/2 p-6 lg:p-8 rounded-xl ${stage.color} dark:bg-gray-800`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stage.title}</h3>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{stage.description}</p>
                                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                    <p className="font-semibold text-indigo-600 dark:text-indigo-400">How We Help:</p>
                                    <p className="text-gray-800 dark:text-gray-200">{stage.yourRole}</p>
                                </div>
                                {index === stages.length - 1 && (
                                    <a href="/quickenquiry"><button
                                        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
                                        aria-label="Start Your Journey"
                                    >
                                        Start Your Journey
                                    </button></a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisualBusinessJourney;