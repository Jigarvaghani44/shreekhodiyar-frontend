import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

const LocationFooter = () => {
    const locations = [
        {
            id: 1,
            country: "India",
            status: "active",
            image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            details: {
                address: "Blue Stone, 409, Surat, Gujarat",
                hours: "Mon-Fri: 9AM - 6PM",
                phone: "+91 9574160974",
                email: "business@shreekhodiyartech.com"
            }
        },
        {
            id: 2,
            country: "Australia",
            status: "coming",
            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            country: "USA",
            status: "coming",
            image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            country: "Europe",
            status: "coming",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <div className="bg--gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Our Global Presence
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {locations.map((location) => (
                        <motion.div
                            key={location.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: location.id * 0.1 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Location Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={location.image}
                                    alt={location.country}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{location.country}</h3>

                                {location.status === "active" ? (
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <FaMapMarkerAlt className="text-blue-400 mr-2" />
                                            <span className="text-gray-200 text-sm">{location.details.address}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaClock className="text-blue-400 mr-2" />
                                            <span className="text-gray-200 text-sm">{location.details.hours}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaPhone className="text-blue-400 mr-2" />
                                            <span className="text-gray-200 text-sm">{location.details.phone}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaEnvelope className="text-blue-400 mr-2" />
                                            <span className="text-gray-200 text-sm">{location.details.email}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="bg-black/70 backdrop-blur-sm rounded-full px-6 py-3 text-center">
                                            <span className="text-xl font-bold text-blue-400">Coming Soon</span>
                                            <p className="text-gray-300 text-sm mt-1">We're expanding to {location.country}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Status Badge */}
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${location.status === "active" ? "bg-green-500" : "bg-purple-500"}`}>
                                {location.status === "active" ? "Active" : "Coming Soon"}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">Ready to work with us?</h3>
                    <a href="/quickenquiry">  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center shadow-lg hover:shadow-xl transition-all">
                        <FaEnvelope className="mr-2" />
                        Get in Touch
                    </button></a>
                </motion.div>
            </div>
        </div>
    );
};

export default LocationFooter;