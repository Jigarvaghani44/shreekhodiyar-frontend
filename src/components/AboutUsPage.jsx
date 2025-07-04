/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiUsers,
    FiAward,
    FiTrendingUp,
    FiGlobe,
    FiBriefcase,
    FiHeart,
    FiZap,
    FiClock,
    FiCheck, FiBarChart2, FiHome, FiMap
} from 'react-icons/fi';
import SecretInvestorsSection from './SecretInvestorsSection';

// Real company data
const companyData = {
    founded: "2022",
    teamSize: "15+",
    clients: "50+",
    satisfaction: "100%",
    mission: "To revolutionize digital experiences through innovative solutions that drive business growth and customer satisfaction.",
    vision: "To be the most trusted digital partner for businesses worldwide by 2030."
};

// Memoized components
const StatCard = ({ stat }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all border border-gray-100"
    >
        <div className="text-blue-600 text-2xl mb-3 flex justify-center">
            {stat.icon}
        </div>
        <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
        <p className="text-gray-600">{stat.label}</p>
    </motion.div>
);

const TeamMemberCard = ({ member }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100"
    >
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
            <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 mb-3">{member.bio}</p>
            <div className="flex space-x-3">
                {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                )}
                {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const AboutUsPage = () => {
    const [activeSection, setActiveSection] = useState('story');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const timeline = useMemo(() => [
        {
            year: "2022",
            event: "Company Founded",
            description: "Launched our operations with 5 passionate team members working remotely from India",
            icon: <FiBriefcase className="text-white" />
        },
        {
            year: "2022 Q3",
            event: "First Clients",
            description: "Onboarded our first 10 paying clients within 3 months of operation",
            icon: <FiAward className="text-white" />
        },
        {
            year: "2023",
            event: "Team Expansion",
            description: "Expanded to 15 full-time employees and established our first physical office in Bangalore",
            icon: <FiUsers className="text-white" />
        },
        {
            year: "2024 Q1",
            event: "Client Milestone",
            description: "Achieved 30+ active clients across various industries",
            icon: <FiBarChart2 className="text-white" />
        },
        {
            year: "2024 Q3",
            event: "First International Client",
            description: "Secured our first client in the United States, marking global expansion",
            icon: <FiGlobe className="text-white" />
        },
        {
            year: "2025",
            event: "Global Expansion",
            description: "Established operations in 3+ countries with 50+ international clients",
            icon: <FiMap className="text-white" />
        },
        {
            year: "2026",
            event: "Physical Presence",
            description: "Opened regional offices in USA, Australia, and Europe to serve clients locally",
            icon: <FiHome className="text-white" />
        }
    ], []);

    // const teamMembers = useMemo(() => [
    //     {
    //         name: "Alex Johnson",
    //         role: "CEO & Founder",
    //         bio: "Serial entrepreneur with 10+ years in tech startups. Passionate about building products that matter.",
    //         image: "https://randomuser.me/api/portraits/men/32.jpg",
    //         social: {
    //             linkedin: "#",
    //             twitter: "#"
    //         }
    //     },
    //     {
    //         name: "Sarah Chen",
    //         role: "CTO",
    //         bio: "Former Google engineer specializing in scalable architecture and AI solutions.",
    //         image: "https://randomuser.me/api/portraits/women/44.jpg",
    //         social: {
    //             linkedin: "#",
    //             twitter: "#"
    //         }
    //     },
    //     {
    //         name: "Michael Brown",
    //         role: "Head of Design",
    //         bio: "Award-winning designer focused on creating intuitive user experiences.",
    //         image: "https://randomuser.me/api/portraits/men/75.jpg",
    //         social: {
    //             linkedin: "#"
    //         }
    //     }
    // ], []);

    const values = useMemo(() => [
        {
            title: "Innovation",
            description: "We challenge the status quo and push boundaries to create breakthrough solutions.",
            icon: <FiZap className="text-white text-2xl" />,
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Integrity",
            description: "We do what's right, not what's easy. Honesty and transparency guide every decision.",
            icon: <FiHeart className="text-white text-2xl" />,
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Impact",
            description: "We measure success by the positive change we create for our clients and community.",
            icon: <FiAward className="text-white text-2xl" />,
            color: "from-green-500 to-green-600"
        }
    ], []);

    const sections = {
        story: {
            title: "Our Story",
            content: (
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-gray-800">From Vision to Reality</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Founded in {companyData.founded}, we began as a small team of passionate technologists with a shared vision: to create digital solutions that make a real difference.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                What started as late-night coding sessions and coffee-fueled brainstorming has grown into a thriving company serving clients across multiple industries.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-gray-800">Our Mission</h4>
                                    <p className="text-gray-600">{companyData.mission}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Our Vision</h4>
                                    <p className="text-gray-600">{companyData.vision}</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-100 shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Our team working together"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                <p className="text-white">Our founding team in 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard stat={{
                            value: companyData.founded,
                            label: "Founded",
                            icon: <FiBriefcase className="text-blue-600" />
                        }} />
                        <StatCard stat={{
                            value: companyData.teamSize,
                            label: "Team Members",
                            icon: <FiUsers className="text-blue-600" />
                        }} />
                        <StatCard stat={{
                            value: companyData.clients,
                            label: "Happy Clients",
                            icon: <FiHeart className="text-blue-600" />
                        }} />
                        <StatCard stat={{
                            value: companyData.satisfaction,
                            label: "Satisfaction Rate",
                            icon: <FiCheck className="text-blue-600" />
                        }} />
                    </div>
                </div>
            )
        },
        // team: {
        //     title: "Our Team",
        //     content: (
        //         <div className="space-y-12">
        //             <motion.div
        //                 initial={{ opacity: 0 }}
        //                 whileInView={{ opacity: 1 }}
        //                 transition={{ duration: 0.6 }}
        //                 viewport={{ once: true }}
        //                 className="text-center max-w-2xl mx-auto"
        //             >
        //                 <h3 className="text-2xl font-bold text-gray-800 mb-4">The Brilliant Minds Behind Our Success</h3>
        //                 <p className="text-gray-600">
        //                     We've assembled a world-class team of innovators, creators, and problem-solvers who are passionate about delivering exceptional results.
        //                 </p>
        //             </motion.div>

        //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        //                 {teamMembers.map((member, index) => (
        //                     <TeamMemberCard
        //                         key={index}
        //                         member={member}
        //                     />
        //                 ))}
        //             </div>
        //         </div>
        //     )
        // },
        values: {
            title: "Our Values",
            content: (
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">What Guides Us Every Day</h3>
                        <p className="text-gray-600">
                            These principles shape our culture, inform our decisions, and define how we work with each other and our clients.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100"
                            >
                                <div className={`bg-gradient-to-r ${value.color} p-8`}>
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                        {value.icon}
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 text-white">
                <div className="absolute inset-0 overflow-hidden opacity-30">
                    {[...Array(100)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -20, 0],
                                x: [0, Math.random() * 40 - 20, 0],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 5 + Math.random() * 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('https://example.com/noise.png')] opacity-20" />
                </div>

                <div className="relative max-w-6xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 mt-20"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Our Company</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl sm:text-2xl max-w-3xl mx-auto text-blue-100"
                    >
                        Discover our journey, meet our team, and learn what makes us different
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-white rounded-full shadow-sm p-1 border border-gray-200">
                        {Object.entries(sections).map(([key, section]) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={`px-4 py-2 rounded-full text-sm sm:text-base transition-colors duration-200 ${activeSection === key
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content with simple fade effect using CSS only */}
                <div className="relative">
                    {Object.entries(sections).map(([key, section]) => (
                        <div
                            key={key}
                            className={`transition-opacity duration-200 ${activeSection === key ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                        >
                            {activeSection === key && section.content}
                        </div>
                    ))}
                </div>
                {/* Timeline Section */}
                <section className="py-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-3">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Key milestones in our company's growth and development
                        </p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="inline-flex items-center mb-3">
                                        <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-purple-600' : 'from-purple-600 to-blue-600'
                                            } w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md`}>
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-gray-800">{item.year}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.event}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>

                                <div className="w-1/2 flex justify-center">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md mt-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
                <SecretInvestorsSection />
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 sm:p-12 text-center shadow-xl"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to be part of our story?</h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Whether you're looking for digital solutions or want to join our team, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/quickenquiry"
                            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-sm"
                        >
                            Contact Us
                        </a>
                        <a
                            href="/carrer"
                            className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                        >
                            View Careers
                        </a>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default AboutUsPage;