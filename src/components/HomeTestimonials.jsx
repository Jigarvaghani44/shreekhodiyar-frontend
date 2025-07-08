/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const HomeTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [testimonialTemp, setTestimonialTemp] = useState([{
        _id: "6857d2c857724456389cd20d",
        name: "Sanjana Reddy",
        role: "Product Manager, HealthTrack",
        company: "Vaghani Solutions",
        companyLogo: "company6.svg",
        image: "person-photo.jpg",
        content: "The team's ability to understand our vision and translate it into a high-performing health monitoring solution was exceptional. They were professional, responsive, and delivered with top-tier quality.",
        rating: 4,
        project: "Health Monitoring System",
        date: "2025-06-03",
        featured: true,
        status: "published",
        email: "200303124025@paruluniversity.ac.in",
        createdAt: "2025-06-22T09:54:16.332Z",
        updatedAt: "2025-06-25T04:29:37.867Z"
    }, {
        _id: "6857d4c381e575543f70c147",
        name: "bgremove",
        role: "gh ghg gh",
        companyLogo: "laptop.webp",
        image: "laptop.webp",
        content: "rtgg tth dgh th",
        rating: 5,
        project: "hdfh",
        date: "April 2002",
        featured: true,
        status: "published",
        createdAt: "2025-06-22T10:02:43.264Z",
        updatedAt: "2025-06-23T04:27:16.812Z"
    }]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // Fetch testimonials from API
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/testimonial/publishedtestimonial`);
                setTestimonials(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching testimonials:', err);
                // setError('Failed to load testimonials');
                setTestimonials(testimonialTemp);
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, [testimonialTemp]);


    // Auto-advance testimonials
    useEffect(() => {
        let interval;
        if (isAutoPlaying && testimonials.length > 0) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
            }, 8000);
        }
        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const goToTestimonial = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextTestimonial();
        }

        if (touchStart - touchEnd < -50) {
            prevTestimonial();
        }
    };

    if (loading) {
        return (
            <section className="relative py-16 px-4 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-8 w-64 bg-gray-200 rounded mb-4" />
                        <div className="h-4 w-48 bg-gray-200 rounded mb-8" />
                        <div className="h-64 w-full max-w-4xl bg-gray-200 rounded-xl" />
                    </div>
                </div>
            </section>
        );
    }

    // if (error) {
    //     return (
    //         <section className="relative py-16 px-4 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
    //             <div className="max-w-7xl mx-auto text-center text-red-500">
    //                 <p>{error}</p>
    //             </div>
    //         </section>
    //     );
    // }

    if (testimonials.length === 0) {
        return null; // Don't render anything if no testimonials
    }

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div>

            <section
                id="testimonials"
                className="relative py-16 px-4 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
                itemScope
                itemType="https://schema.org/ItemList"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 lg:mb-16 px-4"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                What Our Clients Say
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover real success stories and client experiences that highlight our commitment to excellence, innovation, and measurable results.
                        </p>

                    </motion.header>

                    {/* Testimonial Carousel */}
                    <div
                        className="relative"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="overflow">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl max-w-4xl mx-auto px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16"
                                    itemScope
                                    itemType="https://schema.org/Review"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
                                        {/* Reviewer Image */}
                                        <div className="w-full md:w-1/3 flex justify-center">
                                            <div className="relative">
                                                <img
                                                    src={currentTestimonial?.image || '/images/default-avatar.jpg'}
                                                    alt={`${currentTestimonial?.name}, ${currentTestimonial?.role}`}
                                                    className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                                                    onError={(e) => {
                                                        e.target.src = '/images/default-avatar.jpg';
                                                    }}
                                                    itemProp="image"
                                                    loading="lazy"
                                                />
                                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md flex items-center">
                                                    <div className="flex mr-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                                                        <meta itemProp="ratingValue" content={currentTestimonial?.rating || 5} />
                                                        <meta itemProp="bestRating" content="5" />
                                                        {[...Array(5)].map((_, i) => (
                                                            <FiStar
                                                                key={i}
                                                                className={`w-4 h-4 ${i < (currentTestimonial?.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-xs font-medium text-gray-700">
                                                        {(currentTestimonial?.rating || 0).toFixed(1)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Testimonial Content */}
                                        <div className="w-full md:w-2/3">
                                            <svg
                                                className="w-8 h-8 sm:w-10 sm:h-10 text-blue-100 opacity-70 mb-4"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>

                                            <blockquote className="mb-6 sm:mb-8">
                                                <p
                                                    className="text-lg sm:text-xl lg:text-xl text-gray-700 leading-relaxed"
                                                    itemProp="reviewBody"
                                                >
                                                    {currentTestimonial?.content}
                                                </p>
                                            </blockquote>

                                            <div className="mt-8">
                                                <h3
                                                    className="font-bold text-gray-900 text-lg sm:text-xl"
                                                    itemProp="author"
                                                >
                                                    {currentTestimonial?.name}
                                                </h3>
                                                <p
                                                    className="text-gray-600 text-sm sm:text-base"
                                                    itemProp="jobTitle"
                                                >
                                                    {currentTestimonial?.role}
                                                </p>
                                                <p
                                                    className="text-blue-600 text-sm sm:text-base mt-1 font-medium"
                                                    itemProp="itemReviewed"
                                                >
                                                    {currentTestimonial?.project}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:scale-110 z-10"
                            aria-label="Previous testimonial"
                        >
                            <FiChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:scale-110 z-10"
                            aria-label="Next testimonial"
                        >
                            <FiChevronRight className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Mobile Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8 sm:hidden">
                            <button
                                onClick={prevTestimonial}
                                className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:scale-110"
                                aria-label="Previous testimonial"
                            >
                                <FiChevronLeft className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:scale-110"
                                aria-label="Next testimonial"
                            >
                                <FiChevronRight className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 sm:mt-10 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 w-6 sm:w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 sm:mt-20 px-4"
                    >
                        <p className="text-center text-gray-500 text-sm sm:text-base mb-6">
                            <span className='text-blue-500 '>Trusted</span>  by forward-thinking brands and businesses across the globe
                        </p>

                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-10">
                            {["Google", "Microsoft", "Amazon", "Adobe", "Netflix"].map((company) => (
                                <motion.div
                                    key={company}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-gray-400 hover:text-gray-600 transition-all text-xl sm:text-2xl font-bold flex items-center"
                                >
                                    <img
                                        src={`/images/logos/${company.toLowerCase()}-logo.svg`}
                                        alt={company}
                                        className="h-8 sm:h-10 object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-blue-100 opacity-20 blur-3xl -z-10" />
                <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-purple-100 opacity-20 blur-3xl -z-10" />
                <div className="absolute top-1/4 -right-10 w-40 h-40 rounded-full bg-green-100 opacity-20 blur-3xl -z-10" />
                <div className="absolute bottom-1/4 -left-10 w-40 h-40 rounded-full bg-pink-100 opacity-20 blur-3xl -z-10" />
            </section>
        </div>
    );
};

export default HomeTestimonials;