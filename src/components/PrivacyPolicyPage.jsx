import React from 'react';
import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';

const PrivacyPolicyPage = () => {
    const sections = [
        {
            title: "Information We Collect",
            content: (
                <>
                    <p className="mb-4">We may collect the following types of information when you use our services:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, billing information when you make a purchase or create an account.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience and analyze site usage.</li>
                    </ul>
                </>
            )
        },
        {
            title: "How We Use Your Information",
            content: (
                <>
                    <p className="mb-4">We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>To provide and maintain our services</li>
                        <li>To notify you about changes to our services</li>
                        <li>To allow you to participate in interactive features</li>
                        <li>To provide customer support</li>
                        <li>To gather analysis or valuable information for improvement</li>
                        <li>To monitor usage of our services</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>
                </>
            )
        },
        {
            title: "Data Sharing and Disclosure",
            content: (
                <>
                    <p className="mb-4">We may share your information in the following situations:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf.</li>
                        <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process.</li>
                    </ul>
                    <p>We do not sell your personal information to third parties.</p>
                </>
            )
        },
        {
            title: "Data Security",
            content: (
                <>
                    <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
                    <p>We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.</p>
                </>
            )
        },
        {
            title: "Your Data Protection Rights",
            content: (
                <>
                    <p className="mb-4">Depending on your location, you may have certain rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Access:</strong> Request copies of your personal data.</li>
                        <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                        <li><strong>Erasure:</strong> Request deletion of your personal data.</li>
                        <li><strong>Restriction:</strong> Request restriction of processing your personal data.</li>
                        <li><strong>Objection:</strong> Object to our processing of your personal data.</li>
                        <li><strong>Data Portability:</strong> Request transfer of your data to another organization.</li>
                        <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent to process your data.</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us using the information below.</p>
                </>
            )
        },
        {
            title: "Third-Party Links",
            content: (
                <p>Our service may contain links to other sites not operated by us. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
            )
        },
        {
            title: "Children's Privacy",
            content: (
                <>
                    <p className="mb-4">Our services are not intended for use by children under the age of 13.</p>
                    <p>We do not knowingly collect personally identifiable information from children under 13. If you become aware that a child has provided us with personal data, please contact us immediately.</p>
                </>
            )
        },
        {
            title: "Changes to This Privacy Policy",
            content: (
                <>
                    <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    <p>We will let you know via email and/or a prominent notice on our service prior to the change becoming effective and update the &ldquo;effective date&ldquo; at the top of this Privacy Policy.</p>
                    <p className="mt-4">You are advised to review this Privacy Policy periodically for any changes.</p>
                </>
            )
        },
        {
            title: "Contact Us",
            content: (
                <>
                    <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul className="space-y-2">
                        <li><strong>By email:</strong> privacy@unitechnostack.com</li>
                        <li><strong>By mail:</strong> 123 Privacy Lane, Compliance City, CA 90210</li>
                        <li><strong>By phone:</strong> (555) 123-4567</li>
                    </ul>
                </>
            )
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
                                <FiShield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                Privacy Policy
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
                            className="prose prose-blue max-w-none"
                        >
                            <p className="text-lg text-gray-600 mb-8">
                                At UniTechnoStack, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>

                            {sections.map((section, index) => (
                                <motion.section
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="mb-12"
                                >
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                        <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                                            {index + 1}
                                        </span>
                                        {section.title}
                                    </h2>
                                    <div className="text-gray-700">
                                        {section.content}
                                    </div>
                                </motion.section>
                            ))}

                            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">Your Consent</h3>
                                <p className="text-blue-700">
                                    By using our website or services, you hereby consent to our Privacy Policy and agree to its terms.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>


        </div>
    );
};

export default PrivacyPolicyPage;