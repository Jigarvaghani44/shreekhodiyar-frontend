import React from 'react';


const HeroSection = () => {
    // Image data
    const leftColumnImages = [
        { id: 1, src: 'Screenshot 2025-06-28 093951.webp', alt: '1' },
        { id: 2, src: 'Screenshot 2025-06-28 093951.webp', alt: '2' },
        { id: 3, src: 'Screenshot 2025-06-28 093951.webp', alt: '3' },
        { id: 4, src: 'Screenshot 2025-06-28 093951.webp', alt: '4' },
        { id: 5, src: 'Screenshot 2025-06-28 093951.webp', alt: '5' },
    ];

    const middleColumnImages = [
        { id: 8, src: 'Screenshot 2025-06-28 093951.webp', alt: '8' },
        { id: 9, src: 'Screenshot 2025-06-28 093951.webp', alt: '9' },
        { id: 10, src: 'Screenshot 2025-06-28 093951.webp', alt: '10' },
        { id: 11, src: 'Screenshot 2025-06-28 093951.webp', alt: '11' },
        { id: 12, src: 'Screenshot 2025-06-28 093951.webp', alt: '12' },
    ];

    const rightColumnImages = [
        { id: 13, src: 'Screenshot 2025-06-28 093951.webp', alt: '13' },
        { id: 14, src: 'Screenshot 2025-06-28 093951.webp', alt: '14' },
        { id: 15, src: 'Screenshot 2025-06-28 093951.webp', alt: '15' },
        { id: 6, src: 'Screenshot 2025-06-28 093951.webp', alt: '6' },
        { id: 7, src: 'Screenshot 2025-06-28 093951.webp', alt: '7' },
    ];

    const clients = [
        { id: 1, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/xerox_logo-1.png', alt: 'xerox', width: 91, height: 21 },
        { id: 2, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png', alt: 'sony', width: 106, height: 19 },
        { id: 6, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png', alt: 'microsoft', width: 46, height: 45 },

    ];

    return (
        <section className="relative overflow-hidden bg-black text-white">
            {/* Background image columns */}
            <div className="absolute  inset-0 z-0 flex gap-6">
                {/* Left column */}
                <div className="w-full md:w-1/3 md:-left-28 -top-16 h-[1000px]   relative rotate-12 overflow-hidden opacity-70">
                    <div className="absolute gap-5   inset-0 flex flex-col  animate-scroll-up">
                        {[...leftColumnImages, ...leftColumnImages].map((img, index) => (
                            <div key={`left-${img.id}-${index}`} className="h-1/3 flex-shrink-0 ">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle column */}
                <div className="hidden md:block w-1/3 -left-28 -top-16 h-[1000px] relative rotate-12 overflow-hidden opacity-70">
                    <div className="absolute  inset-0 gap-5 flex flex-col animate-scroll-down">
                        {[...middleColumnImages, ...middleColumnImages].map((img, index) => (
                            <div key={`middle-${img.id}-${index}`} className="h-1/3 flex-shrink-0">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column */}
                <div className=" hidden md:block w-1/3 -left-28 -top-16 h-[1000px] relative rotate-12 overflow-hidden opacity-70">
                    <div className="absolute inset-0  gap-5 flex flex-col animate-scroll-up">
                        {[...rightColumnImages, ...rightColumnImages].map((img, index) => (
                            <div key={`right-${img.id}-${index}`} className="h-1/3 flex-shrink-0">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>


                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10  mx-auto px-4 py-24 md:py-32 lg:py-40">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-4 mt-20">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2">Premium Digital Solutions  Agency</h1>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow">
                            We Grow Brands Online
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300">
                            Custom Websites, Mobile Apps, Games, Branding & Digital Marketing
                        </p>
                    </div>

                    <a
                        href="/quickenquiry"
                        className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 mb-12 md:mb-16"
                    >
                        Request a Quote
                        <span className="ml-2">→</span>
                    </a>

                    {/* Certifications */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 ">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://www.digitalsilk.com/wp-content/uploads/2022/08/industry-left-logo-left-side.png"
                                alt="DesignRush logo"
                                className="w-8 h-11 object-contain"
                            />
                            <div>
                                <p className="text-sm">5 Star DesignRush Reviews</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <p className="text-sm">Best Digital Agency of 2024</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Client slider */}
            <div className="relative z-10 bg-white/10 backdrop-blur-lg py-6 overflow-hidden">
                <div className="flex animate-scroll-left">
                    {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={`client-${client.id}-${index}`}
                            className="flex-shrink-0 px-8 flex items-center justify-center"
                            style={{ minWidth: `${client.width}px` }}
                        >
                            <img
                                src={client.src}
                                alt={client.alt}
                                className="max-h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                                style={{ height: `${client.height}px`, width: `${client.width}px` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;