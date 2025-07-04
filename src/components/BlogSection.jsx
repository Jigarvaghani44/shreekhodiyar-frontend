/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const accentColors = [
    "from-purple-500 to-blue-500",
    "from-orange-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-yellow-500 to-red-500",
    "from-indigo-500 to-cyan-500"
];

const BlogSection = () => {
    const [articles, setArticles] = useState([]);
    const [articlesTemp, setArticlesTemp] = useState([{
        _id: "6850edf780230d4e8b2df7ba",
        title: "How Machine Learning Is Powering Healthcare Innovation",
        excerpt:
            "Discover how ML algorithms are transforming patient diagnostics, drug discovery, and personalized treatment plans in modern healthcare systems.",
        author: "Alex Johnson",
        date: "2025-05-11T18:30:00.000Z",
        readTime: "8 min read",
        category: "Web Development",
        image: "/images/blog/healthcare-ai.jpg",
        accentColor: "from-purple-500 to-blue-500",
        slug: "future-of-responsive-web-design",
        metaTitle: "The Future of Responsive Web Design | Trends & Predictions",
        metaDescription:
            "Explore the latest trends and future predictions in responsive web design that will shape digital experiences in 2023 and beyond.",
        content: [
            {
                type: "heading",
                level: 2,
                text: "Introduction to Modern Responsive Design",
            },
            {
                type: "paragraph",
                text: "The landscape of responsive web design continues to evolve rapidly with new technologies and user expectations.",
            },
            {
                type: "heading",
                level: 2,
                text: "Key Trends for 2023",
            },
            {
                type: "paragraph",
                text: "Several exciting trends are emerging in responsive design that will shape how we build digital experiences.",
            },
            {
                type: "image",
                src: "https://source.unsplash.com/random/800x400/?tech",
                alt: "Technology illustration",
                caption:
                    "Modern web design tools have revolutionized how we build interfaces",
            },
        ],
        featuredImage: "https://source.unsplash.com/random/1200x600/?webdesign",
        lastUpdated: "2023-05-19T18:30:00.000Z",
        tags: ["Design", "Responsive", "UI/UX", "Development"],
        status: "published",
        stats: {
            likes: 0,
        },
        createdAt: "2025-06-17T04:24:23.911Z",
        updatedAt: "2025-06-28T06:08:39.542Z",
        publishedAt: "2025-06-25T00:00:00.000Z"
    }]);

    // 🧠 Simple read time calculator based on word count
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/publishedblogs?limit=3`);

                const data = await response.data.data;
                // console.log("respo", data);
                const formattedArticles = data.map((blog, i) => ({
                    id: blog._id,
                    title: blog.title,
                    excerpt: blog.excerpt,
                    author: blog.author?.name || "Unknown",
                    date: new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric", month: "long", day: "numeric"
                    }),
                    category: blog.categories?.[0] || "Web Development",
                    readTime: blog.readTime || "6 min Read",
                    accentColor: accentColors[i % accentColors.length]
                }));
                // console.log("formattedArticles", formattedArticles);
                setArticles(formattedArticles);
            } catch (error) {
                console.error("Error fetching blog articles:", error);
                setArticles(articlesTemp);
            }
        };

        fetchArticles();
    }, [articlesTemp]);
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate(`/blogs/${blog.id}`); // Navigate to /about
    // };
    // console.log("articles", articles);

    return (
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Animated header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold tracking-wider text-blue-600 mb-2 block">
                        INSIGHTS & PERSPECTIVES
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Thinking</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Cutting-edge research and industry perspectives from our team
                    </p>
                </motion.div>

                {/* Floating 3D grid background */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.03 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 overflow-hidden pointer-events-none"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-3xl" />
                    </motion.div>

                    {/* Articles grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {articles.map((article, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                {/* Category label */}
                                <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${article.accentColor} z-10`}>
                                    {article.category}
                                </div>

                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${article.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="h-full flex flex-col">
                                    {/* Featured image placeholder */}
                                    <div className="h-48 bg-gray-100 relative overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${article.accentColor} opacity-20`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center text-sm text-gray-500 mb-3">
                                            <FiCalendar className="mr-1.5" />
                                            <span className="mr-4">{article.date}</span>
                                            <FiUser className="mr-1.5" />
                                            <span>{article.author}</span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 flex-1">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500">{article.readTime}</span>
                                            <a href={`/blogbyid/${article.id}`} className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors" aria-label={`Read full blog: ${article.title}`}>
                                                Read Full Article  <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>



                    {/* View all button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-105">
                            <a href="/blogs">View All Articles</a>
                            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;