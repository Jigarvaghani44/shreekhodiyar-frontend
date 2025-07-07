import React, { useState } from 'react';
import { Helmet } from 'react-helmet';


const CampaignResultsGallery = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    // Sample screenshot data - replace with your actual screenshots
    const campaignScreenshots = {
        overview: [
            {
                id: 1,
                title: "Campaign Performance Dashboard",
                description: "Summary of all key metrics from our India campaign",
                date: "July 2023",
                url: "./compain.jpeg", // Replace with your image path
                metrics: ["8.3M Reach", "9.1% Engagement", "180K Conversions"]
            },
            {
                id: 2,
                title: "Monthly Growth Trends",
                description: "Quarter-over-quarter performance improvement",
                date: "Q2 2023",
                url: "/screenshots/trends.jpg",
                metrics: ["+5% Reach Growth", "+2.1% Engagement Lift"]
            }
        ],
        regional: [
            {
                id: 3,
                title: "Delhi-NCR Performance",
                description: "Top performing metro region results",
                date: "June 2023",
                url: "/screenshots/delhi.jpg",
                metrics: ["22% Engagement Growth", "15% Above Avg CTR"]
            },
            {
                id: 4,
                title: "Tier 2 Cities Growth",
                description: "Emerging market performance metrics",
                date: "May 2023",
                url: "/screenshots/tier2.jpg",
                metrics: ["200% YoY Growth", "35% Mobile Engagement"]
            }
        ],
        platforms: [
            {
                id: 5,
                title: "Facebook Campaign Results",
                description: "Performance across Facebook ads and posts",
                date: "April 2023",
                url: "/screenshots/facebook.jpg",
                metrics: ["3.2M Impressions", "4.8% CTR"]
            },
            {
                id: 6,
                title: "Instagram Engagement",
                description: "Story and post interaction metrics",
                date: "March 2023",
                url: "/screenshots/instagram.jpg",
                metrics: ["1.8M Reach", "6.2% Engagement Rate"]
            }
        ]
    };

    const openLightbox = (tab, index) => {
        setCurrentImage(index);
        setActiveTab(tab);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const navigateImage = (direction) => {
        const currentTabImages = campaignScreenshots[activeTab];
        if (direction === 'prev') {
            setCurrentImage((prev) => (prev === 0 ? currentTabImages.length - 1 : prev - 1));
        } else {
            setCurrentImage((prev) => (prev === currentTabImages.length - 1 ? 0 : prev + 1));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">


            {/* Header */}
            <header className=" ">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Campaign</span> Results</h1>
                    <p className="mt-2 text-lg text-gray-600">Visual proof of our marketing performance</p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {/* Navigation Tabs */}
                <div className=" mb-8">
                    <nav className="-mb-px flex flex-wrap justify-center">
                        {['overview', 'regional', 'platforms'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === tab
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {tab === 'overview' ? 'Overview' : tab === 'regional' ? 'Regional' : 'By Platform'}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Screenshot Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaignScreenshots[activeTab].map((screenshot, index) => (
                        <div
                            key={screenshot.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div
                                className="relative cursor-pointer"
                                onClick={() => openLightbox(activeTab, index)}
                            >
                                {/* Placeholder for image - replace with your Image component */}
                                <img
                                    src={screenshot.url}
                                    alt={`Campaign result: ${screenshot.title}`}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                    <svg className="h-12 w-12 text-white opacity-0 hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">{screenshot.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500">{screenshot.date}</p>
                                    </div>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">{screenshot.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {screenshot.metrics.map((metric, i) => (
                                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results Summary */}
                <div className="mt-12 bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border-l-4 border-indigo-400 pl-4">
                            <h3 className="text-lg font-medium text-gray-900">Exceptional Reach</h3>
                            <p className="mt-2 text-gray-600">Our campaigns achieved over 8.3 million impressions across India, with consistent month-over-month growth.</p>
                        </div>
                        <div className="border-l-4 border-green-400 pl-4">
                            <h3 className="text-lg font-medium text-gray-900">High Engagement</h3>
                            <p className="mt-2 text-gray-600">With a 9.1% average engagement rate, our content significantly outperformed industry benchmarks.</p>
                        </div>
                        <div className="border-l-4 border-purple-400 pl-4">
                            <h3 className="text-lg font-medium text-gray-900">Regional Success</h3>
                            <p className="mt-2 text-gray-600">Particularly strong performance in Delhi-NCR and emerging Tier 2 markets showing 200% YoY growth.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 mt-20">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-200"
                    >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-4 text-white hover:text-gray-200"
                    >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-4 text-white hover:text-gray-200"
                    >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
                        <div className="bg-gray-100 p-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    {campaignScreenshots[activeTab][currentImage].title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {campaignScreenshots[activeTab][currentImage].date}
                                </p>
                            </div>
                            <div className="text-sm text-gray-500">
                                {currentImage + 1} / {campaignScreenshots[activeTab].length}
                            </div>
                        </div>
                        <div className="p-4 flex justify-center">
                            {/* Replace with your actual image component */}
                            <img
                                src={campaignScreenshots[activeTab][currentImage].url}
                                alt={`Campaign result: ${campaignScreenshots[activeTab][currentImage].title}`}
                                className="bg-gray-200 w-full h-full flex items-center justify-center object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-4 border-t border-gray-200">
                            <p className="text-gray-700">
                                {campaignScreenshots[activeTab][currentImage].description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {campaignScreenshots[activeTab][currentImage].metrics.map((metric, i) => (
                                    <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                        {metric}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default CampaignResultsGallery;