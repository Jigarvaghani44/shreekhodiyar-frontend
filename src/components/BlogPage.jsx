/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiClock, FiSearch, FiTag, FiCheck } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import axios from "axios";

const BlogPage = () => {
    // State management
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categories, setCategories] = useState(["All"]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    // Constants
    const blogsPerPage = 6;

    // Fetch blogs from API
    const fetchBlogs = async (page = 1, category = "All", search = "") => {
        setIsLoading(true);
        try {
            let url = `${process.env.REACT_APP_API_URL}/api/publishedblogs?page=${page}&limit=${blogsPerPage}`;

            // Add filters to API call if they exist
            if (category !== "All") url += `&category=${category}`;
            if (search) url += `&search=${search}`;

            const response = await axios.get(url);
            const { data } = response.data;
            const totalCount = response.data.pagination.total || 0;
            console.log("totalc", totalCount);

            const formattedBlogs = data.map((blog) => ({
                // eslint-disable-next-line no-underscore-dangle
                id: blog._id,
                title: blog.title,
                excerpt: blog.excerpt,
                author: blog.author?.name || "Unknown",
                date: new Date(blog.publishedAt || blog.createdAt).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                ),
                category: blog.categories?.[0] || "Uncategorized",
                readTime: blog.readTime || "6 min Read",
                tags: blog.tags || [],
                image: blog.image,
                slug: blog.slug,
            }));

            // Extract unique categories from first page
            if (page === 1) {
                const allCategories = ["All"];
                data.forEach(blog => {
                    if (blog.categories?.length > 0) {
                        blog.categories.forEach(cat => {
                            if (!allCategories.includes(cat)) allCategories.push(cat);
                        });
                    }
                });
                setCategories(allCategories);
            }

            setBlogs(formattedBlogs);
            setFilteredBlogs(formattedBlogs);
            setTotalPages(Math.ceil(totalCount / blogsPerPage));
            setTotalBlogs(totalCount);
        } catch (error) {
            console.error("Error fetching blog articles:", error);
        } finally {
            setIsLoading(false);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const dataForm = new FormData(e.target);
        const data = Object.fromEntries(dataForm);

        const contactPayload = {
            email: data.email,
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactPayload),
            });

            if (!response.ok) {
                throw new Error("Failed to submit contact form");
            }

            setIsSubmitted(true);
        } catch (err) {
            console.error("Submission error:", err);
            alert("Failed to submit form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    // Initial load and when filters change
    useEffect(() => {
        fetchBlogs(currentPage, selectedCategory, searchTerm);
    }, [currentPage, selectedCategory, searchTerm]);

    // Handle search with debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm || selectedCategory !== "All") {
                setCurrentPage(1); // Reset to first page when filters change
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm, selectedCategory]);

    // Event handlers
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleCategoryChange = (category) => setSelectedCategory(category);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Generate pagination buttons
    const renderPagination = () => {
        console.log("total", totalPages)
        if (totalPages <= 1) return null;

        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages - 1, currentPage + Math.floor(maxVisiblePages / 2));

        // Adjust if near start
        if (currentPage <= Math.floor(maxVisiblePages / 2) + 1) {
            endPage = Math.min(maxVisiblePages, totalPages - 1);
        }
        // Adjust if near end
        else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
            startPage = Math.max(totalPages - maxVisiblePages + 1, 2);
        }

        // First page
        pages.push(
            <li key={1}>
                <button
                    onClick={() => handlePageChange(1)}
                    className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    1
                </button>
            </li>
        );

        // Left ellipsis if needed
        if (startPage > 2) {
            pages.push(
                <li key="left-ellipsis">
                    <span className="px-4 py-2">...</span>
                </li>
            );
        }

        // Middle pages
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li key={i}>
                    <button
                        onClick={() => handlePageChange(i)}
                        className={`px-4 py-2 rounded-md ${currentPage === i ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                        {i}
                    </button>
                </li>
            );
        }

        // Right ellipsis if needed
        if (endPage < totalPages - 1) {
            pages.push(
                <li key="right-ellipsis">
                    <span className="px-4 py-2">...</span>
                </li>
            );
        }

        // Last page if more than one page
        if (totalPages > 1) {
            pages.push(
                <li key={totalPages}>
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                        {totalPages}
                    </button>
                </li>
            );
        }

        return (
            <nav className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-4">
                <div className="text-sm text-gray-600">
                    Showing {(currentPage - 1) * blogsPerPage + 1} to {Math.min(currentPage * blogsPerPage, totalBlogs)} of {totalBlogs} articles
                </div>
                <ul className="flex items-center gap-1">
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-md disabled:opacity-50 hover:bg-gray-100"
                            aria-label="Previous page"
                        >
                            &laquo;
                        </button>
                    </li>
                    {pages}
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-md disabled:opacity-50 hover:bg-gray-100"
                            aria-label="Next page"
                        >
                            &raquo;
                        </button>
                    </li>
                </ul>
            </nav>
        );
    };

    return (
        <>
            <Helmet>
                <title>Blog Posts | Your Company</title>
                <meta name="description" content="Explore our latest blog posts and articles" />
            </Helmet>

            <div className="min-h-screen bg-gray-50">
                {/* Hero Header */}
                <header className="bg-gradient-to-r from-blue-800 to-purple-800 text-white">
                    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
                        {/* Floating particles background */}
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
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-bold mb-6 mt-20"
                        >
                            Insights & <span className="text-blue-300">Articles</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-xl max-w-3xl mx-auto mb-8 text-blue-100"
                        >
                            Discover the latest trends and perspectives in technology and business
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="max-w-2xl mx-auto relative"
                        >
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </motion.div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Blog Posts */}
                        <div className="lg:w-2/3">
                            {/* Mobile Filters */}
                            <div className="lg:hidden mb-6 flex gap-4">
                                <select
                                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={selectedCategory}
                                    onChange={(e) => handleCategoryChange(e.target.value)}
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Loading State */}
                            {isLoading && (
                                <div className="flex justify-center py-20">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
                                </div>
                            )}

                            {/* Blog Grid */}
                            {!isLoading && filteredBlogs.length > 0 ? (
                                <>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {filteredBlogs.map((post, index) => (
                                            <motion.article
                                                key={post.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative z-0"
                                                whileHover={{ y: -5 }} // Optional: Add hover effect
                                            >
                                                <div className="h-48 relative overflow-hidden">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                                                        <span className="flex items-center">
                                                            <FiCalendar className="mr-1.5" />
                                                            {post.date}
                                                        </span>
                                                        <span className="flex items-center">
                                                            <FiClock className="mr-1.5" />
                                                            {post.readTime}
                                                        </span>
                                                    </div>
                                                    <h2 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                                                        <a href={`/blogs/${post.id}`}>{post.title}</a>
                                                    </h2>
                                                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                                                    {/* <div className="flex justify-between items-center"> */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {post.tags?.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <a
                                                        href={`/blogs/${post.id}`}
                                                        className="flex items-center text-blue-600 font-medium hover:text-blue-800 group"
                                                    >
                                                        Read more
                                                        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                                    </a>
                                                </div>
                                                {/* </div> */}
                                            </motion.article>
                                        ))}
                                    </div>
                                    {renderPagination()}
                                </>
                            ) : !isLoading && (
                                <div className="text-center py-20">
                                    <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
                                    <p className="text-gray-500">
                                        {searchTerm || selectedCategory !== "All"
                                            ? "Try different search or filter criteria"
                                            : "No articles available yet"}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3">
                            <div className="space-y-6 sticky top-6">
                                {/* Desktop Categories */}
                                <div className="bg-white rounded-xl shadow-md p-6 hidden lg:block">
                                    <h2 className="text-xl font-bold mb-4 flex items-center">
                                        <FiTag className="mr-2 text-blue-600" />
                                        Categories
                                    </h2>
                                    <ul className="space-y-2">
                                        {categories.map((category) => (
                                            <li key={category}>
                                                <button
                                                    onClick={() => handleCategoryChange(category)}
                                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${selectedCategory === category
                                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                                        : 'hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {category}
                                                    {selectedCategory === category && (
                                                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                                            {blogs.filter(b => b.category === category).length}
                                                        </span>
                                                    )}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Newsletter */}
                                {isSubmitted ? (
                                    <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 text-center">
                                        <motion.div
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring" }}
                                            className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
                                        >
                                            <FiCheck className="text-green-500 text-4xl" />
                                        </motion.div>
                                        <h2 className="text-2xl font-bold mb-3 text-gray-800">Thank You!</h2>
                                        <p className="text-gray-600 mb-6">
                                            You&apos;ve successfully subscribed to our newsletter. Stay tuned for updates and offers!.
                                        </p>

                                    </div>
                                ) : (
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
                                        <h2 className="text-xl font-bold mb-3">Stay Updated</h2>
                                        <p className="mb-5 text-blue-100">
                                            Get the latest articles delivered to your inbox.
                                        </p>
                                        <form onSubmit={handleSubmit} className="space-y-3">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your email"
                                                className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                required
                                            />
                                            <button
                                                type="submit"
                                                className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                )}

                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    );
};

export default BlogPage;