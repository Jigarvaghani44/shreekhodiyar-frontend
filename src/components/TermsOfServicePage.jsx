import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

const TermsOfServicePage = () => {
    const sections = [
        {
            title: "Introduction",
            icon: "📜",
            content: (
                <>
                    <p className="mb-4">Welcome to <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">ShreeKhodiyar TechnoStack</span> (&ldquo;Company&ldquo;, &ldquo;we&ldquo;, &ldquo;our&ldquo;, &ldquo;us&ldquo;). These Terms of Service (&ldquo;Terms&ldquo;) govern your use of our website and services.</p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <p className="text-blue-700">By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part, you may not access the service.</p>
                    </div>
                </>
            )
        },
        {
            title: "Key Definitions",
            icon: "📖",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                            <FiCheckCircle className="text-green-500 mr-2" />
                            Services
                        </h4>
                        <p className="text-gray-600">All products, services, content, features, technologies, or functions offered by us.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                            <FiCheckCircle className="text-green-500 mr-2" />
                            User
                        </h4>
                        <p className="text-gray-600">Anyone who accesses or uses our Services.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                            <FiCheckCircle className="text-green-500 mr-2" />
                            Content
                        </h4>
                        <p className="text-gray-600">Text, graphics, images, music, software, code, and other materials.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                            <FiCheckCircle className="text-green-500 mr-2" />
                            Account
                        </h4>
                        <p className="text-gray-600">Your personalized access to our Services.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Account Responsibilities",
            icon: "🔐",
            content: (
                <>
                    <p className="mb-4">To access certain features, you must register for an account. You agree to:</p>
                    <ul className="space-y-3 mb-6">
                        {[
                            "Provide accurate, current, and complete information",
                            "Maintain security of your password",
                            "Accept all risks of unauthorized access",
                            "Notify us immediately of any breach"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                                    <FiCheckCircle className="h-4 w-4" />
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <FiAlertTriangle className="h-5 w-5 text-yellow-400" />
                            </div>
                            <div className="ml-3">
                                <p className="text-yellow-700">We reserve the right to refuse service, suspend, or terminate accounts at our discretion.</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "Prohibited Activities",
            icon: "🚫",
            content: (
                <>
                    <p className="mb-4">You agree not to:</p>
                    <ul className="space-y-3 mb-6">
                        {[
                            "Use our Services for any illegal purpose",
                            "Violate any laws in your jurisdiction",
                            "Infringe upon intellectual property rights",
                            "Transmit viruses or malicious code",
                            "Attempt unauthorized access to our systems",
                            "Harass, abuse, or harm others",
                            "Use our Services to compete with us"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="flex-shrink-0 bg-red-100 text-red-600 rounded-full p-1 mr-3">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <FiAlertTriangle className="h-5 w-5 text-red-400" />
                            </div>
                            <div className="ml-3">
                                <p className="text-red-700">Violations may result in immediate termination of your access without notice.</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "Intellectual Property",
            icon: "©️",
            content: (
                <>
                    <p className="mb-4">All content, features, and functionality are owned by us or our licensors and protected by international copyright, trademark, and other laws.</p>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                        <h4 className="font-medium text-purple-800 mb-2">You may not:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-purple-700">
                            <li>Modify, copy, or create derivative works</li>
                            <li>Use our content for commercial purposes</li>
                            <li>Remove any copyright notices</li>
                            <li>Transfer content to another person</li>
                        </ul>
                    </div>

                    <p className="text-gray-600">Limited personal, non-commercial use is permitted with proper attribution.</p>
                </>
            )
        },
        {
            title: "Payments & Subscriptions",
            icon: "💳",
            content: (
                <>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 className="font-medium text-green-800 mb-2">For paid services:</h4>
                        <ul className="space-y-3">
                            {[
                                "You agree to pay all fees and charges",
                                "Taxes are your responsibility unless stated",
                                "Recurring payments continue until canceled",
                                "Refunds are at our discretion unless required by law",
                                "We may change prices with 30 days notice"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="flex-shrink-0 bg-green-100 text-green-600 rounded-full p-1 mr-3">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-green-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <p className="text-yellow-700">Late payments may result in service suspension or termination.</p>
                    </div>
                </>
            )
        },
        {
            title: "Termination",
            icon: "⏹️",
            content: (
                <>
                    <p className="mb-4">We may terminate or suspend your account immediately without notice for:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {[
                            { text: "Breach of these Terms", color: "red" },
                            { text: "Requests by law enforcement", color: "blue" },
                            { text: "Unexpected technical issues", color: "purple" },
                            { text: "Extended periods of inactivity", color: "yellow" }
                        ].map((item, i) => (
                            <li key={i} className={`bg-${item.color}-50 border-l-4 border-${item.color}-500 p-3 rounded`}>
                                <p className={`text-${item.color}-700`}>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="font-medium text-gray-700">Upon termination, your right to use our Services will immediately cease.</p>
                </>
            )
        },
        {
            title: "Limitation of Liability",
            icon: "⚖️",
            content: (
                <>
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <p className="text-gray-700 mb-4">To the maximum extent permitted by law:</p>
                        <ul className="space-y-3">
                            {[
                                "We are not liable for any indirect, incidental damages",
                                "Our total liability is limited to amounts you've paid us",
                                "We make no warranties about accuracy or reliability",
                                "We don't guarantee uninterrupted or error-free service"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="flex-shrink-0 bg-gray-200 text-gray-600 rounded-full p-1 mr-3">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-sm text-gray-500">* Some jurisdictions don&apos;t allow limitations on liability, so these may not apply to you.</p>
                </>
            )
        },
        {
            title: "Governing Law",
            icon: "🏛️",
            content: (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-700 mb-2">These Terms shall be governed by the laws of <span className="font-semibold">[Your Country/State]</span> without regard to conflict of law principles.</p>
                    <p className="text-blue-700">Any disputes shall be resolved in the courts located in <span className="font-semibold">[Your Jurisdiction]</span>.</p>
                </div>
            )
        },
        {
            title: "Changes to Terms",
            icon: "🔄",
            content: (
                <>
                    <p className="mb-4">We reserve the right to modify these Terms at any time. We will:</p>
                    <ul className="space-y-3 mb-6">
                        {[
                            "Post the revised Terms on this page",
                            "Update the 'last updated' date",
                            "Notify users of material changes via email"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                        <p className="text-indigo-700 font-medium">Your continued use after changes constitutes acceptance of the modified Terms.</p>
                    </div>
                </>
            )
        },
        {
            title: "Contact Us",
            icon: "📧",
            content: (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">For questions about these Terms:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email
                            </h4>
                            <p className="text-blue-600">legal@shreekhodiyartech.com</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Phone
                            </h4>
                            <p className="text-green-600">+91 9574160974</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Mail
                            </h4>
                            <p className="text-purple-600">Blue Stone, 409, Surat, Gujarat</p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
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
                                <FiFileText className="h-8 w-8 text-blue-600" />
                            </div>
                            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                Terms of Service
                            </h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-8 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="prose prose-blue max-w-none">
                                <div className="bg-blue-50 rounded-lg p-6 mb-10 border border-blue-200">
                                    <h2 className="text-2xl font-bold text-blue-800 mb-3">Important Notice</h2>
                                    <p className="text-blue-700">
                                        Please read these Terms of Service (&ldquo;Terms&ldquo;) carefully before using the UniTechnoStack website and services.
                                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
                                    </p>
                                </div>

                                {sections.map((section, index) => (
                                    <motion.section
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="mb-12 scroll-mt-16"
                                        id={`section-${index}`}
                                    >
                                        <div className="flex items-center mb-6">
                                            <span className="text-2xl mr-3">{section.icon}</span>
                                            <h2 className="text-2xl font-bold text-gray-900">
                                                {section.title}
                                            </h2>
                                        </div>
                                        <div className="text-gray-700">
                                            {section.content}
                                        </div>
                                    </motion.section>
                                ))}

                                <div className="mt-16 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                                    <h3 className="text-xl font-bold mb-3">Acceptance of Terms</h3>
                                    <p className="mb-4">
                                        By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                                    </p>
                                    <p>
                                        If you do not agree to these Terms, please do not access or use our Services.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default TermsOfServicePage;