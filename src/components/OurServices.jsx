import React from 'react';

const HomeBanner = () => {
    const leftColumnImages = [
        { id: 1, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 1' },
        { id: 2, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 2' },
        { id: 3, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 3' },
        { id: 4, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 4' },
        { id: 5, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 5' },
    ];

    const middleColumnImages = [
        { id: 8, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 8' },
        { id: 9, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 9' },
        { id: 10, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 10' },
        { id: 11, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 11' },
        { id: 12, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 12' },
    ];

    const rightColumnImages = [
        { id: 13, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 13' },
        { id: 14, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 14' },
        { id: 15, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 15' },
        { id: 6, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 6' },
        { id: 7, src: 'Screenshot 2025-06-28 093951.webp', alt: 'Brand work 7' },
    ];

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-black">
            {/* Scrolling Image Matrix Background - Mobile optimized */}
            <div className="absolute inset-0 z-0 flex gap-2 md:gap-4 lg:gap-8">
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
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-0" />

            {/* Content - Responsive layout */}
            <div className="max-w-5xl mx-auto relative z-10 h-screen flex items-center px-4 sm:px-6 lg:px-8 ">
                <div className="w-full max-w-2xl lg:max-w-5xl mt-20">
                    {/* Subheading */}
                    <span className="block text-sm sm:text-base md:text-lg lg:text-2xl font-mono text-cyan-400 mb-2 sm:mb-3 md:mb-4 tracking-widest animate-fade-in flex items-center gap-2 sm:gap-3">
                        Writing The Future
                        <span className="hidden sm:inline-block h-px bg-cyan-400 flex-1 max-w-[80px] sm:max-w-[120px] md:max-w-[100px] lg:max-w-[100px]" />
                    </span>


                    {/* Main heading with responsive typography */}
                    <div className="mb-2 sm:mb-3 md:mb-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-tight animate-fadeInUp animation-delay-100">
                            Crafting Powerful
                        </h1>
                    </div>

                    {/* Brand Stories with responsive layout */}
                    <div className="flex flex-col md:flex-row items-start mb-4 sm:mb-6 md:mb-8">
                        <div className="order-2 md:order-1 w-full md:w-1/2 lg:w-2/5">
                            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 md:mb-0 md:mt-5 animate-fadeInUp animation-delay-200 lg:text-xl ">
                                Hey there!, We create trusted, refined, high-impact brands through strategic storytelling, digital marketing, and data-driven design — helping businesses connect and grow globally. 
                            </p>
                        </div>

                        <div className="order-1 md:order-2 w-full md:w-1/2 lg:w-3/5 mb-4 md:mb-0">
                            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold leading-none">
                                <div>BRAND</div>
                                <div>STORIES</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </section>
    );
};

export default HomeBanner;