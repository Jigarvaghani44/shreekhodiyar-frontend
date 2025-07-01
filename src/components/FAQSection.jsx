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
            question: "What services does UniTechnoStack offer?",
            answer: "We provide comprehensive digital solutions including web development, mobile app development, game development, Shopify e-commerce solutions, and full-service digital marketing strategies."
        },
        {
            question: "How long does a typical website project take?",
            answer: "Our standard website projects take 4-8 weeks depending on complexity. We provide a detailed timeline during our initial consultation after understanding your requirements."
        },
        {
            question: "Do you offer ongoing maintenance after launch?",
            answer: "Yes, we provide flexible maintenance packages including security updates, content changes, performance optimization, and technical support."
        },
        {
            question: "What platforms do you use for web development?",
            answer: "We work with various technologies including React, Next.js, WordPress, Shopify, and custom PHP/Node.js solutions based on project requirements."
        },
        {
            question: "Can you help with mobile app development?",
            answer: "Absolutely! We develop both iOS and Android apps using native (Swift/Kotlin) and cross-platform (React Native/Flutter) technologies."
        },
        {
            question: "Do you create custom game designs?",
            answer: "Yes, our game development team specializes in both 2D and 3D games using Unity and Unreal Engine, with expertise in AR/VR experiences."
        },
        // {
        //     question: "What's included in your digital marketing services?",
        //     answer: "Our marketing services cover SEO, PPC advertising, social media management, content marketing, email campaigns, and comprehensive analytics."
        // },
        {
            question: "How do you ensure websites are SEO-friendly?",
            answer: "We implement SEO best practices from the ground up including proper site architecture, optimized content, fast loading speeds, and mobile responsiveness."
        },
        // {
        //     question: "Can you migrate my existing site to Shopify?",
        //     answer: "Yes, we specialize in Shopify migrations with zero downtime, including product/data transfer, theme customization, and app integration."
        // },
        {
            question: "What's your pricing structure?",
            answer: "We offer both project-based pricing and retainer models, tailored to your specific needs. All projects begin with a free consultation and transparent quote."
        },
        {
            question: "Do you provide design mockups before development?",
            answer: "Yes, we create detailed wireframes and design prototypes for client approval before any development begins."
        },
        {
            question: "How do you handle project communication?",
            answer: "We assign a dedicated project manager, use collaborative tools like Slack/Asana, and provide weekly progress reports with demos."
        },
        {
            question: "What industries have you worked with?",
            answer: "We've served clients across e-commerce, healthcare, education, real estate, SaaS, entertainment, and non-profit sectors."
        },
        {
            question: "Can you integrate third-party APIs?",
            answer: "Yes, we regularly integrate payment gateways, CRM systems, marketing tools, and other third-party services."
        },
        {
            question: "Do you offer hosting services?",
            answer: "We provide managed hosting solutions with 99.9% uptime, automatic backups, and security monitoring."
        },
        {
            question: "What makes your approach different?",
            answer: "We combine technical expertise with business strategy, focusing on measurable results rather than just deliverables."
        },
        {
            question: "How do you ensure mobile responsiveness?",
            answer: "We use a mobile-first development approach with rigorous testing across all device sizes before launch."
        },
        {
            question: "Can you work with our existing design team?",
            answer: "Absolutely! We frequently collaborate with in-house teams, providing development expertise to bring designs to life."
        },
        {
            question: "What's your revision policy?",
            answer: "We include reasonable revisions in all projects and have clear change order processes for significant scope changes."
        },
        {
            question: "How do I get started?",
            answer: "Simply contact us for a free consultation. We'll discuss your goals and provide a customized proposal within 24 hours."
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
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg">
                        <a href="/quickenquiry">Contact Our Team</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;