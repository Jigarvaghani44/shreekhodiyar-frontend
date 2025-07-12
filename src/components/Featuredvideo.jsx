/* eslint-disable no-console */
import React, { useRef, useState } from 'react';

const FeaturedVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const togglePlay = async () => {
        if (!videoRef.current) return;

        try {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                setIsLoading(true);
                setHasError(false);

                // Reset video to start if it's ended
                if (videoRef.current.ended) {
                    videoRef.current.currentTime = 0;
                }

                const playPromise = videoRef.current.play();

                if (playPromise !== undefined) {
                    await playPromise
                        .then(() => {
                            setIsPlaying(true);
                        })
                        .catch(error => {
                            console.error('Playback failed:', error);
                            setHasError(true);
                        })
                        .finally(() => {
                            setIsLoading(false);
                        });
                }
            }
        } catch (error) {
            console.error('Error toggling video:', error);
            setHasError(true);
            setIsLoading(false);
        }
    };

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 mix-blend-overlay" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Video Player Section */}
                    <div className="w-full lg:w-7/12">
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1"
                        >
                            <video
                                ref={videoRef}
                                className="w-full h-auto aspect-video object-cover cursor-pointer"
                                poster="https://www.digitalsilk.com/wp-content/uploads/2025/04/Digital-Silk-Showreel-Video.mp4"
                                preload="auto"
                                aria-label="Digital Silk Showreel"
                                title="Digital Silk Showreel Video"
                                loop
                                autoPlay
                                muted
                                playsInline
                                onClick={togglePlay}
                                onWaiting={() => setIsLoading(true)}
                                onPlaying={() => {
                                    setIsLoading(false);
                                    setIsPlaying(true);
                                }}
                                onError={() => {
                                    setHasError(true);
                                    setIsLoading(false);
                                }}
                            >
                                <source
                                    src="https://www.digitalsilk.com/wp-content/uploads/2025/04/Digital-Silk-Showreel-Video.mp4"
                                    type="video/mp4"
                                />
                                <track
                                    kind="captions"
                                    srcLang="en"
                                    src="/path-to-captions.vtt"
                                    label="English"
                                    default
                                />
                                Your browser doesn&apos;t support HTML5 video.
                            </video>

                            {/* Loading overlay */}
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500" />
                                </div>
                            )}

                            {/* Error state */}
                            {hasError && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-4 text-center">
                                    <svg className="w-12 h-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-white text-lg font-medium">Failed to load video</p>
                                    <button
                                        onClick={togglePlay}
                                        className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                                    >
                                        Retry
                                    </button>
                                </div>
                            )}

                            {/* Play button overlay when paused */}
                            {!isPlaying && !isLoading && !hasError && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 cursor-pointer"
                                    onClick={togglePlay}
                                >
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-all transform hover:scale-110">
                                        <svg
                                            className="w-10 h-10 text-red-600 ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* Progress bar */}
                            {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <div className="w-full bg-gray-600 rounded-full h-1.5">
                                    <div className="bg-red-600 h-1.5 rounded-full" style={{ width: '30%' }} />
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-5/12 text-white">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-red-400 uppercase rounded-full bg-red-900/30 mb-4">
                                Showcase
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                                Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Excellence</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Our showreel demonstrates the passion, precision, and innovation we bring to every digital experience we create for global brands.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <button
                                onClick={togglePlay}
                                disabled={isLoading}
                                className={`flex items-center justify-center px-8 py-4 ${isLoading
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                                    } text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]`}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Loading...
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            className="w-6 h-6 mr-3"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                        {isPlaying ? 'Pause Showreel' : 'Play Showreel'}
                                    </>
                                )}
                            </button>

                            {/* Rest of your content remains the same */}
                            {/* <div className="grid grid-cols-2 gap-4"> */}
                            {/* <a
                                    href="/portfolio"
                                    className="px-6 py-3 text-center text-white hover:text-gray-200 font-medium rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Portfolio
                                </a>
                                <a
                                    href="/"
                                    className="px-6 py-3 text-center text-white hover:text-gray-200 font-medium rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact Us
                                </a> */}
                            {/* </div> */}
                        </div>

                        {/* Key Features Grid (same as before) */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedVideo;