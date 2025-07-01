import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiMessageSquare,
    FiMail,
    FiPhone,
    FiClock,
    FiCheckCircle,
    FiArrowRight,
    FiMapPin,
    FiCalendar
} from 'react-icons/fi';

const SupportPage = () => {
    const [activeContactMethod, setActiveContactMethod] = useState('chat');

    const contactMethods = [
        {
            id: 'chat',
            title: 'Live Chat',
            icon: <FiMessageSquare className="text-2xl" />,
            color: 'from-blue-500 to-blue-600',
            description: 'Instant help from our support team',
            availability: 'Available now',
            action: 'Start Chat',
            features: [
                'Instant responses',
                'Screen sharing available',
                '24/7 availability'
            ]
        },
        {
            id: 'email',
            title: 'Email Us',
            icon: <FiMail className="text-2xl" />,
            color: 'from-purple-500 to-purple-600',
            description: 'Detailed support with attachments',
            availability: 'Typically replies within 2 hours',
            action: 'Send Email',
            features: [
                'Attach files/screenshots',
                'Detailed responses',
                'Ticket tracking'
            ]
        },
        {
            id: 'phone',
            title: 'Call Us',
            icon: <FiPhone className="text-2xl" />,
            color: 'from-green-500 to-green-600',
            description: 'Speak directly with an expert',
            availability: 'Mon-Fri: 8am-8pm (EST)',
            action: 'Call Now',
            features: [
                'Immediate assistance',
                'Technical specialists',
                'Callback service'
            ]
        }
    ];

    const supportTeam = [
        {
            name: 'Sarah Johnson',
            role: 'Senior Support Specialist',
            expertise: 'Technical Issues',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            name: 'Michael Chen',
            role: 'Customer Success Manager',
            expertise: 'Account & Billing',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            name: 'David Wilson',
            role: 'Product Expert',
            expertise: 'Implementation',
            image: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden  py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center py-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl font-bold mb-4 mt-10"
                    >
                        We&apos;re Here to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Help</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl mb-8"
                    >
                        Choose your preferred way to connect with our support team
                    </motion.p>
                </div>
                {/* Floating particles background */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            rotate: [0, 180]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 15,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className="absolute rounded-lg bg-gradient-to-r from-blue-900 to-purple-900"
                        style={{
                            width: `${Math.random() * 200 + 50}px`,
                            height: `${Math.random() * 200 + 50}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.2 + 0.1
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
                {/* Contact Methods Selector */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 overflow-x-auto pb-4">
                    {contactMethods.map((method) => (
                        <motion.button
                            key={method.id}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex-1 min-w-[260px] text-left p-5 rounded-xl transition-all ${activeContactMethod === method.id ? 'bg-white shadow-lg' : 'bg-white/80 hover:bg-white'}`}
                            onClick={() => setActiveContactMethod(method.id)}
                        >
                            <div className="flex items-center mb-3">
                                <div className={`bg-gradient-to-r ${method.color} p-2 rounded-lg mr-3 text-white`}>
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{method.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{method.description}</p>
                        </motion.button>
                    ))}
                </div>

                {/* Contact Content */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Left Side - Contact Form */}
                        <div className="md:w-1/2 p-8 md:p-10">
                            <h2 className="text-2xl font-bold mb-6 ">
                                {contactMethods.find(m => m.id === activeContactMethod).title} Support
                            </h2>

                            <div className="flex items-center text-sm text-gray-500 mb-6">
                                <FiClock className="mr-2" />
                                <span>{contactMethods.find(m => m.id === activeContactMethod).availability}</span>
                            </div>

                            {activeContactMethod === 'chat' && (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">How can we help?</label>
                                        <textarea
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            rows="4"
                                            placeholder="Describe your issue..."
                                        />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-md flex items-center justify-center"
                                    >
                                        Start Live Chat <FiArrowRight className="ml-2" />
                                    </motion.button>
                                </div>
                            )}

                            {activeContactMethod === 'email' && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                                placeholder="Last name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Subject</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                            placeholder="What's this about?"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Message</label>
                                        <textarea
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                            rows="4"
                                            placeholder="Describe your issue in detail..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Attachments (optional)</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                            <p className="text-gray-500">Drag & drop files here or click to browse</p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-md flex items-center justify-center"
                                    >
                                        Send Message <FiArrowRight className="ml-2" />
                                    </motion.button>
                                </div>
                            )}

                            {activeContactMethod === 'phone' && (
                                <div className="space-y-6">
                                    <div className="bg-green-50 rounded-lg p-6 text-center">
                                        <div className="text-3xl font-bold text-green-800 mb-2">+1 (800) 123-4567</div>
                                        <p className="text-gray-600">Our direct support line</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                                placeholder="Full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                                placeholder="+1 (___) ___-____"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Preferred Callback Time</label>
                                        <div className="relative">
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none">
                                                <option>As soon as possible</option>
                                                <option>Morning (8am-12pm)</option>
                                                <option>Afternoon (12pm-5pm)</option>
                                                <option>Evening (5pm-8pm)</option>
                                            </select>
                                            <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">How can we help?</label>
                                        <textarea
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                            rows="3"
                                            placeholder="Brief description of your issue..."
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-md flex items-center justify-center"
                                    >
                                        Request Callback <FiArrowRight className="ml-2" />
                                    </motion.button>
                                </div>
                            )}
                        </div>

                        {/* Right Side - Support Info */}
                        <div className="md:w-1/2 bg-gray-50 p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-200">
                            <h3 className="text-xl font-semibold mb-6">Why choose {contactMethods.find(m => m.id === activeContactMethod).title}?</h3>

                            <ul className="space-y-4 mb-8">
                                {contactMethods.find(m => m.id === activeContactMethod).features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg shadow-sm mb-8 text-white">
                                <h4 className="font-semibold mb-3 flex items-center">
                                    <FiMapPin className="text-blue-500 mr-2" />
                                    Our Support Centers
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-medium">North America</p>
                                        <p className="text-sm ">9am-9pm EST</p>
                                    </div>
                                    <div>
                                        <p className="font-medium">India</p>
                                        <p className="text-sm ">9am-6pm CET</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4">Meet Our Support Team</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {supportTeam.map((member, i) => (
                                        <div key={i} className="text-center">
                                            <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-white shadow-md">
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                            </div>
                                            <p className="font-medium">{member.name}</p>
                                            <p className="text-sm text-gray-600">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="  py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Still have questions?</h2>
                    <p className="text-xl mb-8 opacity-90">Check out our comprehensive FAQ section</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
                    >
                        Visit Help Center
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;