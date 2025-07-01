import React from 'react';

const GamingHeroSection = () => {
    // Gaming-themed image data
    // const leftColumnImages = [
    //     { id: 1, src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e', alt: 'Esports' },
    //     { id: 2, src: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8', alt: 'Console' },
    //     { id: 3, src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd', alt: 'VR' },
    //     { id: 4, src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420', alt: 'Gaming Setup' },
    //     { id: 5, src: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e', alt: 'Controller' },
    // ];

    // const middleColumnImages = [
    //     { id: 6, src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0', alt: 'Streaming' },
    //     { id: 7, src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620', alt: 'Mobile Game' },
    //     { id: 8, src: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1', alt: 'Gaming PC' },
    //     { id: 9, src: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f', alt: 'Arcade' },
    //     { id: 10, src: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa', alt: 'Retro' },
    // ];

    // const rightColumnImages = [
    //     { id: 11, src: 'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc', alt: 'FPS' },
    //     { id: 12, src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e', alt: 'Esports' },
    //     { id: 13, src: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8', alt: 'RPG' },
    //     { id: 14, src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd', alt: 'Strategy' },
    //     { id: 15, src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420', alt: 'MMO' },
    // ];

    // const gamingClients = [
    //     { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Epic_Games_logo.png/800px-Epic_Games_logo.png', alt: 'Epic Games', width: 120, height: 40 },
    //     { id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png', alt: 'Steam', width: 40, height: 40 },
    //     { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Nintendo_Switch_Logo.svg/1200px-Nintendo_Switch_Logo.svg.png', alt: 'Nintendo', width: 120, height: 40 },
    //     { id: 4, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Xbox_logo_%282019%29.svg/1024px-Xbox_logo_%282019%29.svg.png', alt: 'Xbox', width: 80, height: 40 },
    //     { id: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png', alt: 'PlayStation', width: 120, height: 30 },
    //     { id: 6, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Riot_Games_logo.png/800px-Riot_Games_logo.png', alt: 'Riot Games', width: 100, height: 40 },
    //     { id: 7, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ubisoft_logo.svg/1200px-Ubisoft_logo.svg.png', alt: 'Ubisoft', width: 120, height: 40 },
    //     { id: 8, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/1200px-Rockstar_Games_Logo.svg.png', alt: 'Rockstar', width: 120, height: 40 },
    // ];
    const leftColumnImages = [
        { id: 1, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/1.jpg', alt: '1' },
        { id: 2, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/2.jpg', alt: '2' },
        { id: 3, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/3.jpg', alt: '3' },
        { id: 4, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/4.jpg', alt: '4' },
        { id: 5, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/5.jpg', alt: '5' },
    ];

    const middleColumnImages = [
        { id: 8, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/8.jpg', alt: '8' },
        { id: 9, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/9.jpg', alt: '9' },
        { id: 10, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/10.jpg', alt: '10' },
        { id: 11, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/11.jpg', alt: '11' },
        { id: 12, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/12.jpg', alt: '12' },
    ];

    const rightColumnImages = [
        { id: 13, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/13.jpg', alt: '13' },
        { id: 14, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/14.jpg', alt: '14' },
        { id: 15, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/15.jpg', alt: '15' },
        { id: 6, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/6.jpg', alt: '6' },
        { id: 7, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/7.jpg', alt: '7' },
    ];

    const gamingClients = [
        { id: 1, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/xerox_logo-1.png', alt: 'xerox', width: 91, height: 21 },
        { id: 2, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png', alt: 'sony', width: 106, height: 19 },
        { id: 3, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/PG_logo-1.png', alt: 'p&g', width: 63, height: 27 },
        { id: 4, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/nyc_logo-1.png', alt: 'nyc', width: 85, height: 29 },
        { id: 5, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/nfl_logo-1.png', alt: 'nfl', width: 42, height: 55 },
        { id: 6, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png', alt: 'microsoft', width: 46, height: 45 },
        { id: 7, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/mcds_logo-1.png', alt: 'mcdonalds', width: 65, height: 55 },
        { id: 8, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png', alt: 'grenco', width: 103, height: 35 },
        { id: 9, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/g2_logo-1.png', alt: 'g2', width: 49, height: 55 },
        { id: 10, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png', alt: 'enchant', width: 133, height: 31 },
        { id: 11, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png', alt: 'bru', width: 125, height: 27 },
    ];
    return (
        <section className="relative  bg-gray-900 text-white">
            {/* Background image columns with gaming aesthetic */}
            <div className="absolute inset-0 z-0 flex gap-8 overflow-hidden">
                {/* Left column */}
                <div className="w-full md:-right-28 md:w-1/3  relative -top-16 h-[1000px]  -rotate-12 overflow-hidden opacity-70">
                    <div className="absolute gap-5 inset-0 flex flex-col animate-scroll-up">
                        {[...leftColumnImages, ...leftColumnImages].map((img, index) => (
                            <div key={`left-${img.id}-${index}`} className="h-1/3 flex-shrink-0">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle column */}
                <div className="hidden md:block w-1/3 md:-right-28 relative -top-16 h-[1000px]   -rotate-12 overflow-hidden opacity-70">
                    <div className="absolute inset-0 gap-5 flex flex-col animate-scroll-down h-full">
                        {[...middleColumnImages, ...middleColumnImages].map((img, index) => (
                            <div key={`middle-${img.id}-${index}`} className="h-1/3 flex-shrink-0">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column */}
                <div className=" hidden md:block w-1/3 md:-right-28 relative -rotate-12 -top-16 h-[1000px]  overflow-hidden opacity-70">
                    <div className="absolute inset-0 gap-5 flex flex-col animate-scroll-up">
                        {[...rightColumnImages, ...rightColumnImages].map((img, index) => (
                            <div key={`right-${img.id}-${index}`} className="h-1/3 flex-shrink-0">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Neon gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-blue-900/50 to-black/70" />
                {/* Pixel grid overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/crisp-paper-ruffles.png')] opacity-10" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
                <div className="max-w-4xl mx-auto text-center">
                    <div className=" mt-10">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 text-purple-300">Next-Level Game Development Studio</h1>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
                            Crafting Immersive Gaming Experiences
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300">
                            Game Development • Esports Solutions • VR/AR Experiences • Game Porting
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-16">
                        <a
                            href="/quickenquiry"
                            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-purple-500/30"
                        >
                            Start Your Project
                            <span className="ml-2">🎮</span>
                        </a>
                        <a
                            href="/portfolio"
                            className="inline-block border-2 border-purple-400 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-900/50 transition-colors duration-300"
                        >
                            View Our Games
                            <span className="ml-2">🕹️</span>
                        </a>
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16">
                        <div className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Unity_Technologies_logo.svg/1200px-Unity_Technologies_logo.svg.png"
                                alt="Unity Certified"
                                className="w-8 h-8 object-contain"
                            />
                            <div>
                                <p className="text-sm">Certified Unity Developers</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg">
                            <p className="text-sm">Best Game Studio 2023</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Client slider */}
            <div className="relative z-10 bg-white/10 backdrop-blur-lg py-6  overflow-hidden border-t border-b border-purple-900/50">
                <div className="flex animate-scroll-left">
                    {[...gamingClients, ...gamingClients].map((client, index) => (
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

export default GamingHeroSection;