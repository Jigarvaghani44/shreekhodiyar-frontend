// components/FAQSection.jsx
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What does Shree Khodiyar Technostack specialize in?",
            answer:
                "We specialize in end-to-end digital solutions including custom web development, digital marketing, mobile apps, e-commerce platforms, branding, software development, and IT consulting. Our goal is to drive measurable growth for your business."
        },
        {
            question: "Do you offer complete digital marketing services?",
            answer:
                "Yes. We provide full-suite digital marketing services including SEO, social media marketing, Google & Meta ads, content marketing, and performance campaigns—all designed to improve visibility, traffic, and ROI."
        },
        {
            question: "What industries do you serve?",
            answer:
                "We serve startups, SMEs, and enterprises across industries like e-commerce, healthcare, education, finance, real estate, and IT. Our digital solutions are tailored to meet the unique needs of each sector."
        },
        {
            question: "Do you provide custom software and ERP/CRM solutions?",
            answer:
                "Absolutely. We build scalable custom software, ERP systems, and CRM tools using technologies like Python, Django, and Node.js to streamline operations and improve business efficiency."
        },
        {
            question: "Are your websites and apps SEO-friendly and mobile responsive?",
            answer:
                "Yes. We follow SEO best practices and use a mobile-first approach to ensure your digital presence ranks well and performs flawlessly across all devices."
        },
        {
            question: "Do you develop Shopify and e-commerce websites?",
            answer:
                "Yes. We build fast, conversion-optimized e-commerce platforms on Shopify and WooCommerce. We also handle store migration, custom apps, and payment gateway integrations."
        },
        {
            question: "Do you create gaming apps (2D, 3D, AR/VR)?",
            answer:
                "Yes. Our gaming division creates engaging 2D/3D mobile games and immersive AR/VR gaming apps using Unity Games Engine—tailored for global markets."
        },
        {
            question: "Do you offer app development for iOS and Android?",
            answer:
                "We offer cross-platform and native mobile app development using Flutter, React Native, Swift, and Kotlin—delivering seamless performance on iOS and Android devices."
        },
        {
            question: "Can you help with digital transformation and IT consulting?",
            answer:
                "Yes. Our IT consulting services cover tech stack selection, process automation, digital strategy, and cloud migration to support your digital transformation goals."
        },
        {
            question: "What makes Shree Khodiyar Technostack different?",
            answer:
                "We blend creativity, technical expertise, and performance marketing to create digital experiences that drive real impact. Our solutions are result-driven, cost-effective, and globally scalable."
        },
        {
            question: "What is your development process like?",
            answer:
                "We follow a structured process: Discovery → Strategy → Design → Development → Launch → Support. We maintain transparency and collaboration at every stage."
        },
        {
            question: "Can I hire your team for long-term projects?",
            answer:
                "Yes. We offer flexible engagement models—project-based, hourly, and dedicated team hiring—tailored to your business size and needs."
        },
        {
            question: "How do you ensure quality and performance?",
            answer:
                "Every project goes through multi-stage QA testing, performance optimization, and user testing before launch. We also provide post-launch support and maintenance."
        },
        {
            question: "Where is Shree Khodiyar Technostack located?",
            answer:
                "We are headquartered in India and serve clients globally including in the USA, Australia, UK, and Europe through remote collaboration and client success teams."
        },
        {
            question: "How can I get started with your team?",
            answer:
                "You can reach out through our website’s contact form, WhatsApp, or email. We offer a free consultation and will share a custom proposal within 24–48 hours."
        }
    ];


    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white" id="faq">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our services and processes.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'shadow-md' : ''}`}
                        >
                            <button
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-content-${index}`}
                            >
                                <h3 className="text-lg font-medium text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <span className="text-indigo-600">
                                    {activeIndex === index ? (
                                        <FiChevronUp className="h-5 w-5" />
                                    ) : (
                                        <FiChevronDown className="h-5 w-5" />
                                    )}
                                </span>
                            </button>
                            <div
                                id={`faq-content-${index}`}
                                className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out ${activeIndex === index ? 'block' : 'hidden'}`}
                                style={{
                                    maxHeight: activeIndex === index ? '500px' : '0',
                                    overflow: 'hidden'
                                }}
                            >
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">
                        Didn&apos;t find what you&apos;re looking for?
                    </p>

                    <a href="/quickenquiry"> <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg">
                        Contact Our Team
                    </button></a>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;