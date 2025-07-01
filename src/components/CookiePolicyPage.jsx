import React from 'react';
import { motion } from 'framer-motion';
import { FaCookieBite } from "react-icons/fa";

const CookiePolicyPage = () => {
    const cookieTypes = [
        {
            name: "Essential Cookies",
            purpose: "These cookies are necessary for the website to function and cannot be switched off.",
            examples: [
                "User authentication",
                "Security features",
                "Load balancing"
            ],
            duration: "Session or persistent"
        },
        {
            name: "Performance Cookies",
            purpose: "These cookies help us understand how visitors interact with our website.",
            examples: [
                "Page visit analytics",
                "Error tracking",
                "Performance monitoring"
            ],
            duration: "Typically 1-2 years"
        },
        {
            name: "Functional Cookies",
            purpose: "These enable enhanced functionality and personalization.",
            examples: [
                "Language preferences",
                "Region settings",
                "Remembering login details"
            ],
            duration: "Typically up to 1 year"
        },
        {
            name: "Targeting/Advertising Cookies",
            purpose: "These cookies track browsing habits to deliver relevant advertising.",
            examples: [
                "Social media cookies",
                "Retargeting pixels",
                "Ad performance tracking"
            ],
            duration: "Typically up to 2 years"
        }
    ];

    const thirdPartyCookies = [
        {
            provider: "Google Analytics",
            purpose: "Website analytics and performance measurement",
            privacyPolicy: "https://policies.google.com/privacy"
        },
        {
            provider: "Facebook Pixel",
            purpose: "Ad conversion tracking and remarketing",
            privacyPolicy: "https://www.facebook.com/policy.php"
        },
        {
            provider: "Hotjar",
            purpose: "User behavior analytics",
            privacyPolicy: "https://www.hotjar.com/legal/policies/privacy/"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-blue-100 p-3 rounded-full mb-4 mt-10">
                                <FaCookieBite className="h-8 w-8 text-blue-600" />
                            </div>
                            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                Cookie Policy
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className=" mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="prose prose-amber max-w-none"
                        >
                            <p className="text-lg text-gray-600 mb-8">
                                This Cookie Policy explains how UniTechnoStack (&ldquo;we&ldquo;, &ldquo;us&ldquo;, or &ldquo;our&ldquo;) uses cookies and similar tracking technologies when you visit our website or use our services.
                            </p>

                            {/* What Are Cookies */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center  mr-3">
                                        1
                                    </span>
                                    What Are Cookies?
                                </h2>
                                <div className="text-gray-700">
                                    <p className="mb-4">
                                        Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to website owners.
                                    </p>
                                    <p>
                                        Similar technologies include web beacons, pixels, and local storage. For simplicity, we refer to all these technologies as &ldquo;cookies&ldquo; in this policy.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Types of Cookies We Use */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center  mr-3">
                                        2
                                    </span>
                                    Types of Cookies We Use
                                </h2>
                                <div className="space-y-6">
                                    {cookieTypes.map((cookie, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition-colors">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{cookie.name}</h3>
                                            <p className="text-gray-600 mb-3">{cookie.purpose}</p>
                                            <div className="mb-3">
                                                <h4 className="text-sm font-medium text-gray-700 mb-1">Examples:</h4>
                                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                                    {cookie.examples.map((example, i) => (
                                                        <li key={i}>{example}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                <span className="font-medium">Duration:</span> {cookie.duration}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* Third-Party Cookies */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                                        3
                                    </span>
                                    Third-Party Cookies
                                </h2>
                                <div className="text-gray-700">
                                    <p className="mb-4">
                                        We may use various third-party cookies for analytics, advertising, and other services. These are set by domains other than ours.
                                    </p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Privacy Policy</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {thirdPartyCookies.map((cookie, index) => (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cookie.provider}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cookie.purpose}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600 hover:text-amber-500">
                                                            <a href={cookie.privacyPolicy} target="_blank" rel="noopener noreferrer">View Policy</a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.section>

                            {/* Managing Cookies */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center  mr-3">
                                        4
                                    </span>
                                    Managing Cookies
                                </h2>
                                <div className="text-gray-700">
                                    <p className="mb-4">
                                        You can control and/or delete cookies as you wish. Most web browsers allow some control of cookies through browser settings.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-gray-900 mb-2">Browser Settings</h3>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                                <li>To delete cookies: Clear your browsing history</li>
                                                <li>To block cookies: Adjust privacy settings</li>
                                                <li>To get alerts: Enable cookie warnings</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-gray-900 mb-2">Opt-Out Tools</h3>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                                <li><a href="https://optout.aboutads.info" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
                                                <li><a href="https://www.youronlinechoices.com" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
                                                <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-Out</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        Note that disabling cookies may affect your experience on our website and some features may not work properly.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Cookie Consent */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center  mr-3">
                                        5
                                    </span>
                                    Cookie Consent
                                </h2>
                                <div className="text-gray-700">
                                    <p className="mb-4">
                                        When you first visit our website, you&apos;ll see our cookie consent banner where you can:
                                    </p>
                                    <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                                        <li><strong>Accept all cookies:</strong> All cookies will be set</li>
                                        <li><strong>Reject non-essential cookies:</strong> Only strictly necessary cookies will be set</li>
                                        <li><strong>Customize preferences:</strong> Choose which cookie categories to accept</li>
                                    </ul>
                                    <p>
                                        You can change your cookie preferences at any time by clicking the &ldquo;Cookie Settings&ldquo; link in our website footer.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Changes to This Policy */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center  mr-3">
                                        6
                                    </span>
                                    Changes to This Policy
                                </h2>
                                <div className="text-gray-700">
                                    <p className="mb-4">
                                        We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated &ldquo;last updated&ldquo; date.
                                    </p>
                                    <p>
                                        We recommend reviewing this Cookie Policy periodically for any changes.
                                    </p>
                                </div>
                            </motion.section>

                            {/* Contact Information */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="w-8 h-8  rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 mr-3">
                                        7
                                    </span>
                                    Contact Us
                                </h2>
                                <div className="text-gray-700">
                                    <p className="mb-4">
                                        If you have any questions about this Cookie Policy, you can contact us:
                                    </p>
                                    <ul className="space-y-2">
                                        <li><strong>By email:</strong> privacy@unitechnostack.com</li>
                                        <li><strong>By mail:</strong> 123 Cookie Lane, Compliance City, CA 90210</li>
                                    </ul>
                                </div>
                            </motion.section>
                        </motion.div>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default CookiePolicyPage;