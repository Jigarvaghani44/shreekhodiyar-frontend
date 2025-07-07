import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaMobileAlt, FaPaintBrush, FaRocket, FaShieldAlt, FaChartLine, FaCogs, FaHeadset } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import HomeTestimonials from './HomeTestimonials';
import BusinessStartup from "./businessStartup";
import OurApproch from "./OurApproach";

const ShopifyDevelopmentPage = () => {
    // Meta data for SEO
    const pageTitle = "Shopify Development Agency | eCommerce Design & SEO | ShreeKhodiyar Technostack";
    const pageDescription = "Launch or scale your eCommerce brand with our Shopify agency. Get store setup, custom themes, integrations, and SEO.";

    const features = [
        {
            icon: <FaMobileAlt className="text-2xl" />,
            title: "Mobile-Optimized",
            description: "Flawless shopping experience on all devices"
        },
        {
            icon: <FaPaintBrush className="text-2xl" />,
            title: "Custom Design",
            description: "Unique storefront that reflects your brand"
        },
        {
            icon: <FaRocket className="text-2xl" />,
            title: "Fast Loading",
            description: "Optimized for speed and performance"
        },
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Secure",
            description: "Enterprise-grade security for your store"
        },
        {
            icon: <FaChartLine className="text-2xl" />,
            title: "SEO Optimized",
            description: "Built to rank higher in search results"
        },
        {
            icon: <FaCogs className="text-2xl" />,
            title: "Easy Management",
            description: "Intuitive admin interface"
        }
    ];

    const processSteps = [
        {
            title: "Discovery",
            description: "Understand your business goals and requirements"
        },
        {
            title: "Design",
            description: "Create custom UI/UX mockups for approval"
        },
        {
            title: "Development",
            description: "Build your store with best practices"
        },
        {
            title: "Testing",
            description: "Rigorous quality assurance process"
        },
        {
            title: "Launch",
            description: "Go live with complete documentation"
        },
        {
            title: "Support",
            description: "Ongoing maintenance and updates"
        }
    ];

    // const packages = [
    //     {
    //         name: "Starter",
    //         price: "$1,999",
    //         bestFor: "New businesses with basic needs",
    //         features: [
    //             "Custom Shopify theme development",
    //             "10 product pages setup",
    //             "Basic SEO configuration",
    //             "Mobile-responsive design",
    //             "1 revision round",
    //             "30-day support"
    //         ],
    //         cta: "Get Started"
    //     },
    //     {
    //         name: "Professional",
    //         price: "$3,999",
    //         bestFor: "Growing businesses",
    //         features: [
    //             "Everything in Starter",
    //             "Custom functionality development",
    //             "Up to 50 product pages",
    //             "Advanced SEO setup",
    //             "Conversion optimization",
    //             "3 revision rounds",
    //             "90-day support",
    //             "Basic training"
    //         ],
    //         cta: "Get Professional",
    //         popular: true
    //     },
    //     {
    //         name: "Enterprise",
    //         price: "Custom",
    //         bestFor: "High-volume stores",
    //         features: [
    //             "Everything in Professional",
    //             "Complete custom solution",
    //             "Unlimited products",
    //             "ERP/CRM integration",
    //             "Custom checkout experience",
    //             "Priority support",
    //             "Dedicated account manager",
    //             "Comprehensive training"
    //         ],
    //         cta: "Contact Us"
    //     }
    // ]
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://yourdomain.com/shopify-development" />
            </Helmet>

            <div className="min-h-screen flex flex-col overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center">
                            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
                                >
                                    Premium Shopify Development Services
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-lg md:text-xl mb-8 text-blue-200"
                                >
                                    Custom-built Shopify stores that convert visitors into customers
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <a href="/quickenquiry"> <button className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-300 text-sm sm:text-base">
                                        Get a Free Quote
                                    </button></a>
                                    <a href="/portfolio"> <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-300 text-sm sm:text-base">
                                        View Our Work
                                    </button></a>

                                </motion.div>
                            </div>
                            <div className="lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative max-w-md mx-auto"
                                >
                                    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                                        <div className="bg-gray-800 p-3 flex items-center">
                                            <div className="flex space-x-2">
                                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                            </div>
                                            <div className="flex-1 text-center text-gray-300 text-xs sm:text-sm font-medium">
                                                www.yourshopifystore.com
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 aspect-video flex items-center justify-center">
                                                <FaShoppingCart className="text-5xl sm:text-6xl text-blue-600 opacity-30" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Badges */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { value: "50+", label: "Stores Built" },
                                { value: "4.9/5", label: "Client Satisfaction" },
                                { value: "24/7", label: "Support" },
                                { value: "$1M+", label: "Revenue Generated" }
                            ].map((item, index) => (
                                <div key={index} className="text-center p-4">
                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">{item.value}</div>
                                    <div className="text-gray-600 mt-2">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Choose Our Shopify Services
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We build Shopify stores that are not just beautiful, but engineered to drive sales and grow your business.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Process */}
                <section className="py-20 bg-gray-100">
                    <div className=" mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Our Shopify Development Process</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A transparent, step-by-step approach to building your perfect eCommerce store
                            </p>
                        </div>

                        <div className="relative">
                            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

                            <div className="space-y-12 lg:space-y-0">
                                {processSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                    >
                                        <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                                                        {index + 1}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                                </div>
                                                <p className="text-gray-600">{step.description}</p>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2 flex justify-center">
                                            <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                                                <div className="text-6xl text-blue-600 opacity-30">
                                                    {index === 0 && <FaHeadset />}
                                                    {index === 1 && <FaPaintBrush />}
                                                    {index === 2 && <FaCogs />}
                                                    {index === 3 && <FaShieldAlt />}
                                                    {index === 4 && <FaRocket />}
                                                    {index === 5 && <FaHeadset />}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <BusinessStartup />
                <OurApproch />



                <HomeTestimonials />
                {/* Pricing Packages */}
                {/* <section className="py-20 bg-white">
                    <div className=" mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Shopify Development Packages</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Flexible solutions tailored to your business needs and budget
                            </p>
                        </div> */}

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {packages.map((pkg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative rounded-xl border-2 overflow-hidden ${pkg.popular ? 'border-blue-500' : 'border-gray-200'}`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                                            MOST POPULAR
                                        </div>
                                    )}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                        <div className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                                        <p className="text-gray-600 mb-6">{pkg.bestFor}</p>

                                        <ul className="space-y-3 mb-8">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FiCheckCircle className="text-green-500 mt-1 mr-2" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button className={`w-full py-3 px-6 rounded-lg font-bold transition duration-300 ${pkg.popular
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                                            }`}>
                                            {pkg.cta}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div> */}
                {/* </div>
                </section> */}

                {/* CTA Section */}
                <section className="py-20 px-6  text-white">
                    <div className=" bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Shopify Store?</h2>
                        <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                            Let&apos;s discuss how we can create a high-converting eCommerce experience for your business
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/quickenquiry">  <button className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-20 rounded-lg transition duration-300">
                                Get Started Today
                            </button></a>


                        </div>
                    </div>
                </section>


            </div>
        </>
    );
};

export default ShopifyDevelopmentPage;