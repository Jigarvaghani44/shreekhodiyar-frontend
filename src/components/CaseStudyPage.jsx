import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FiSearch, FiFilter, FiChevronRight, FiArrowRight, FiX, FiCheck, FiAward } from 'react-icons/fi';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Mock data for all case studies
const allCaseStudies = [
    {
        id: 1,
        title: "E-Commerce Platform Redesign",
        client: "FashionHub",
        year: "2023",
        category: "Web Development",
        excerpt: "A complete redesign that increased mobile conversions by 220% and reduced cart abandonment by 62%.",
        thumbnail: "/images/ecommerce-thumbnail.webp",
        tags: ["E-commerce", "UX Design", "Mobile Optimization"],
        stats: [
            { label: "Conversion Rate", value: "+150%" },
            { label: "Mobile Revenue", value: "+220%" },
        ],
    },
    {
        id: 2,
        title: "Healthcare App Development",
        client: "MediCare+",
        year: "2023",
        category: "Mobile App",
        excerpt: "A patient portal app that improved appointment scheduling by 75% and reduced no-shows by 40%.",
        thumbnail: "/images/healthcare-thumbnail.webp",
        tags: ["Healthcare", "iOS", "Android"],
        stats: [
            { label: "User Adoption", value: "85%" },
            { label: "Rating", value: "4.9/5" },
        ],
    },
    {
        id: 3,
        title: "SaaS Dashboard Redesign",
        client: "DataMetrics",
        year: "2022",
        category: "UI/UX Design",
        excerpt: "Redesigned analytics dashboard that improved user engagement by 300% and reduced support tickets.",
        thumbnail: "/images/saas-thumbnail.webp",
        tags: ["SaaS", "Data Visualization", "B2B"],
        stats: [
            { label: "Engagement", value: "+300%" },
            { label: "Retention", value: "+45%" },
        ],
    },
    {
        id: 4,
        title: "Restaurant Loyalty Program",
        client: "UrbanEats",
        year: "2022",
        category: "Mobile App",
        excerpt: "Custom loyalty program that increased repeat customers by 65% and average order value by 28%.",
        thumbnail: "/images/restaurant-thumbnail.webp",
        tags: ["Hospitality", "Loyalty", "POS Integration"],
        stats: [
            { label: "Repeat Customers", value: "+65%" },
            { label: "Order Value", value: "+28%" },
        ],
    },
    {
        id: 5,
        title: "Fintech Mobile Banking",
        client: "NeoBank",
        year: "2021",
        category: "Mobile App",
        excerpt: "Mobile banking app that acquired 250,000 users in the first 6 months with 4.8 star rating.",
        thumbnail: "/images/fintech-thumbnail.webp",
        tags: ["Fintech", "Banking", "Security"],
        stats: [
            { label: "New Users", value: "250K" },
            { label: "Rating", value: "4.8/5" },
        ],
    },
    {
        id: 6,
        title: "Corporate Website Redesign",
        client: "GlobalTech",
        year: "2021",
        category: "Web Development",
        excerpt: "Enterprise website redesign that improved lead generation by 180% and SEO traffic by 150%.",
        thumbnail: "/images/corporate-thumbnail.webp",
        tags: ["Corporate", "SEO", "Lead Generation"],
        stats: [
            { label: "Leads", value: "+180%" },
            { label: "SEO Traffic", value: "+150%" },
        ],
    },
];

// All available categories and tags for filtering
const allCategories = [...new Set(allCaseStudies.map(study => study.category))];
const allTags = [...new Set(allCaseStudies.flatMap(study => study.tags))];

const CaseStudiesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll for header effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Filter case studies
    const filteredCaseStudies = allCaseStudies.filter(study => {
        const matchesSearch =
            study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            study.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategories =
            selectedCategories.length === 0 ||
            selectedCategories.includes(study.category);

        const matchesTags =
            selectedTags.length === 0 ||
            selectedTags.some(tag => study.tags.includes(tag));

        return matchesSearch && matchesCategories && matchesTags;
    });

    // Toggle functions
    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const toggleTag = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategories([]);
        setSelectedTags([]);
    };

    const featuredCaseStudy = allCaseStudies.find(study => study.featured);

    return (
        <>
            <Helmet>
                <title>Case Studies | Our Portfolio of Digital Success Stories</title>
                <meta name="description" content="Explore our collection of case studies showcasing innovative digital solutions that delivered measurable results for our clients." />
                <meta name="keywords" content="digital case studies, portfolio, web development, mobile apps, UX design, success stories" />
                <meta property="og:title" content="Case Studies | Our Digital Portfolio" />
                <meta property="og:description" content="Discover how we've transformed businesses through innovative digital solutions - view our case studies." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/case-studies" />
                <meta property="og:image" content="/images/case-studies-og.webp" />
                <link rel="canonical" href="https://yourdomain.com/case-studies" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": allCaseStudies.map((study, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "CreativeWork",
                                "name": study.title,
                                "description": study.excerpt,
                                "url": `https://yourdomain.com/case-studies/${study.id}`
                            }
                        }))
                    })}
                </script>
            </Helmet>



            {/* Hero Section with Parallax Effect */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
                {/* Background elements */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                x: [0, Math.random() * 100 - 50],
                                rotate: [0, Math.random() * 360],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: 20 + Math.random() * 30,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                            className="absolute rounded-lg bg-white/20 backdrop-blur-sm"
                            style={{
                                width: `${Math.random() * 300 + 100}px`,
                                height: `${Math.random() * 300 + 100}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* <motion.span
                            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-white"
                            whileHover={{ scale: 1.05 }}
                        >
                            Our Portfolio
                        </motion.span> */}
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white">
                            <motion.span
                                className="inline-block"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Transformative
                            </motion.span>{' '}
                            <motion.span
                                className="inline-block text-purple-300"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Digital Solutions
                            </motion.span>
                        </h1>
                        <motion.p
                            className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto text-white/90"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            Discover how we&apos;ve helped brands solve complex challenges through innovative digital experiences.
                        </motion.p>
                        <motion.a
                            href="#case-studies"
                            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Case Studies
                            <FiArrowRight className="ml-2" />
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </section>

            {/* Case Studies Section */}
            <section id="case-studies" className="relative py-20 bg-gray-50">

                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Centered content with max-width */}
                    <div className="max-w-7xl mx-auto">
                        {/* New Animated Title Section */}
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.span
                                className="inline-block mb-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Our Portfolio
                            </motion.span>

                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                    Success Stories
                                </span>{' '}
                                That Speak Volumes
                            </motion.h2>

                            <motion.p
                                className="text-xl text-gray-600 max-w-3xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Explore our collection of transformative case studies that showcase our expertise in delivering exceptional digital solutions.
                            </motion.p>

                            {/* Animated decorative element */}
                            <motion.div
                                className="mx-auto mt-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                viewport={{ once: true }}
                                style={{ originX: 0, width: '100px' }}
                            />
                        </motion.div>

                        {/* Filter Controls - Responsive Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
                            {/* Filter Sidebar - Full width on mobile, then becomes sidebar */}
                            <motion.aside
                                className="w-full lg:w-1/4 lg:sticky lg:top-28 lg:h-fit"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold mb-6 text-gray-800">Filter  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Case Studies</span></h3>

                                        <div className="relative mb-6">
                                            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search case studies..."
                                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-8">
                                            <h4 className="font-medium mb-3 text-gray-700">Categories</h4>
                                            <div className="space-y-2">
                                                {allCategories.map(category => (
                                                    <button
                                                        key={category}
                                                        onClick={() => toggleCategory(category)}
                                                        className={`flex items-center w-full px-4 py-2 rounded-lg transition-colors ${selectedCategories.includes(category)
                                                            ? 'bg-indigo-50 text-indigo-700'
                                                            : 'text-gray-700 hover:bg-gray-50'}`}
                                                    >
                                                        {selectedCategories.includes(category) && (
                                                            <FiCheck className="mr-2 text-indigo-600" />
                                                        )}
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-medium mb-3 text-gray-700">Tags</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {allTags.map(tag => (
                                                    <button
                                                        key={tag}
                                                        onClick={() => toggleTag(tag)}
                                                        className={`px-3 py-1 rounded-full text-sm ${selectedTags.includes(tag)
                                                            ? 'bg-indigo-600 text-white'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                                            <button
                                                onClick={clearFilters}
                                                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                                            >
                                                Clear all filters
                                            </button>
                                        )}
                                    </div>

                                    <div className="border-t border-gray-100 pt-6">
                                        <h4 className="font-medium mb-3 text-gray-700">Need something specific?</h4>
                                        <p className="text-gray-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                                        >
                                            Contact our team
                                            <FiArrowRight className="ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </motion.aside>

                            {/* Case Studies Grid - Proper width adjustments */}
                            <div className="w-full lg:w-3/4">
                                {filteredCaseStudies.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                        <AnimatePresence>
                                            {filteredCaseStudies.map((study, index) => (
                                                <motion.article
                                                    key={study.id}
                                                    className="w-full"
                                                    initial={{ opacity: 0, y: 50 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: index * 0.1,
                                                        type: "spring",
                                                        stiffness: 100
                                                    }}
                                                    whileHover={{
                                                        y: -10,
                                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                                    }}
                                                >
                                                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col">
                                                        <div className="relative h-64 overflow-hidden group">
                                                            <motion.img
                                                                src={study.thumbnail}
                                                                alt={`${study.title} case study thumbnail`}
                                                                className="w-full h-full object-cover"
                                                                initial={{ scale: 1 }}
                                                                whileHover={{ scale: 1.1 }}
                                                                transition={{ duration: 0.5 }}
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-6">
                                                                <div>
                                                                    <motion.span
                                                                        className="inline-block bg-white text-indigo-800 px-3 py-1 rounded-full text-xs font-medium mb-2"
                                                                        whileHover={{ scale: 1.05 }}
                                                                    >
                                                                        {study.category}
                                                                    </motion.span>
                                                                </div>
                                                                <div>
                                                                    <motion.h2
                                                                        className="text-2xl font-bold text-white"
                                                                        whileHover={{ x: 5 }}
                                                                    >
                                                                        {study.title}
                                                                    </motion.h2>
                                                                    <p className="text-white/90 text-sm">{study.client} • {study.year}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="p-6">
                                                            <p className="text-gray-600 mb-4">{study.excerpt}</p>

                                                            <div className="flex flex-wrap gap-2 mb-6">
                                                                {study.tags.map(tag => (
                                                                    <motion.span
                                                                        key={tag}
                                                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                                                                        whileHover={{ scale: 1.05 }}
                                                                    >
                                                                        {tag}
                                                                    </motion.span>
                                                                ))}
                                                            </div>

                                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                                {study.stats.map((stat, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        className="bg-indigo-50 p-3 rounded-lg"
                                                                        whileHover={{ scale: 1.03 }}
                                                                    >
                                                                        <p className="text-xl font-bold text-indigo-700">{stat.value}</p>
                                                                        <p className="text-xs text-gray-600">{stat.label}</p>
                                                                    </motion.div>
                                                                ))}
                                                            </div>

                                                            <motion.a
                                                                href="/casestudyshow"
                                                                className="inline-flex items-center justify-between w-full bg-gradient-to-r from-blue-700 to-purple-800 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors group"
                                                                aria-label={`Read more about ${study.title} case study`}
                                                                whileHover={{
                                                                    scale: 1.02,
                                                                    background: "linear-gradient(to right, #4f46e5, #7c3aed)"
                                                                }}
                                                            >
                                                                <span>View Case Study</span>
                                                                <FiChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                                            </motion.a>
                                                        </div>
                                                    </div>
                                                </motion.article>
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <motion.div
                                        className="w-full text-center py-20 bg-white rounded-2xl shadow-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="bg-indigo-100 inline-flex p-4 rounded-full mb-6">
                                            <FiSearch size={32} className="text-indigo-600" />
                                        </div>
                                        <h3 className="text-2xl font-medium text-gray-800 mb-3">No case studies found</h3>
                                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                            Try adjusting your search or filters to find what you&apos;re looking for.
                                        </p>
                                        <button
                                            onClick={clearFilters}
                                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                                        >
                                            Clear all filters
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 px-6   bg-gray-50 text-white">


                <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to create your success story?</h2>
                        <p className="text-xl opacity-90 mb-10">
                            Let&apos;s collaborate to build something extraordinary. Our team is ready to bring your vision to life.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center bg-white text-indigo-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
                            >
                                Get Started
                                <FiArrowRight className="ml-2" />
                            </motion.a>
                            <motion.a
                                href="/services"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                            >
                                Our Services
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default CaseStudiesPage;