/* eslint-disable no-alert */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-console */
import { useState, useEffect, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    FiCalendar,
    FiClock,
    FiShare2,
    FiBookmark,
    FiHeart,
    FiMessageSquare,
    FiChevronLeft,
    FiArrowRight, FiCheck
} from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import axios from "axios";


const BlogShowPage = ({ post: initialPost }) => {
    const { id } = useParams(); // assumes route like /blog/:id
    // const id = "6850edf780230d4e8b2df7ba"
    console.log("id", id)
    const [post, setPost] = useState(null);
    console.log("post", post)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    // const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [shareOpen, setShareOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    // Track scroll position for parallax effects
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Default post data
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogbyid/${id}`);
                const data = await response.data.data;
                setPost(data); // adjust if response is { post: { ... } }
            } catch (error) {
                console.error("Error fetching blog post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);
    if (loading) return <p>Loading post...</p>;
    if (!post) return <p>Post not found.</p>;
    console.log("post", post)

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

    // const post = initialPost || defaultPost;
    const canonicalUrl = `${window.location.origin}/blog/${post.slug}`;
    // console.log(post.stats.likes);
    // setLikeCount(post.stats?.likes)
    const handleLike = async () => {
        const newLikedState = !isLiked;
        console.log(newLikedState, "newls")

        const newLikeCount = newLikedState
            ? (post.stats?.likes ?? 0) + 1
            : (post.stats?.likes ?? 0) - 1;


        // Optimistic UI update
        setIsLiked(newLikedState);
        setLikeCount(newLikeCount);

        try {
            await fetch(`${process.env.REACT_APP_API_URL}/api/blogsLike/${id}`, {
                method: "Put",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    stats: {
                        likes: newLikeCount
                    }
                })
            });
            setPost(prev => ({
                ...prev,
                stats: {
                    ...prev.stats,
                    likes: newLikeCount
                }
            }));
            console.log(newLikeCount, "newLikeCount")
        } catch (error) {
            console.error("Failed to update likes", error);

            // Revert on error
            setIsLiked(!newLikedState);
            setLikeCount(likeCount);
        }
    };

    // Related posts data
    // const relatedPosts = [
    //     {
    //         id: 2,
    //         title: "CSS Grid vs Flexbox: When to Use Each",
    //         slug: "css-grid-vs-flexbox",
    //         excerpt: "A practical guide to choosing the right layout method for your projects.",
    //         image: "https://source.unsplash.com/random/600x400/?css",
    //         category: "Frontend",
    //         date: "April 28, 2023",
    //         readTime: 5
    //     },
    //     {
    //         id: 3,
    //         title: "Building Accessible Web Applications",
    //         slug: "accessible-web-apps",
    //         excerpt: "Essential techniques to ensure your web apps work for everyone.",
    //         image: "https://source.unsplash.com/random/600x400/?accessibility",
    //         category: "Accessibility",
    //         date: "April 15, 2023",
    //         readTime: 7
    //     }
    // ];

    // Handle social sharing
    const sharePost = (platform) => {
        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonicalUrl)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`,
            linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(post.title)}`
        };

        window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    };

    // Render content blocks safely
    const renderContent = () => {
        return post.content?.map((block, index) => {
            switch (block.type) {
                case 'heading': {
                    const HeadingTag = `h${block.level}`;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <HeadingTag className={`text-${block.level === 2 ? '2xl' : 'xl'} font-bold my-6 text-gray-800`}>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{block.text}</span>
                            </HeadingTag>
                        </motion.div>
                    );
                }

                case 'paragraph': {
                    return (
                        <motion.p
                            key={index}
                            className="text-gray-600 mb-6 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {block.text}
                        </motion.p>
                    );
                }

                case 'image': {
                    return (
                        <motion.figure
                            key={index}
                            className="my-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={block.src}
                                alt={block.alt}
                                className="w-full rounded-xl shadow-lg"
                                loading="lazy"
                            />
                            {block.caption && (
                                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                                    {block.caption}
                                </figcaption>
                            )}
                        </motion.figure>
                    );
                }

                default:
                    return null;
            }

        });
    };

    // Floating background elements


    return (
        <div className=" min-h-screen bg-gray-50">
            {/* Hero Header Section */}
            <header className="relative py-20 max-h-[800px] overflow-hidden bg-gradient-to-br from-blue-700 to-purple-800 text-white">
                {/* Floating background elements */}
                <div className="absolute inset-0 overflow-hidden opacity-50">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, 40, 0],
                                x: [0, Math.random() * 80 - 40, 0],
                                rotate: [0, Math.random() * 360]
                            }}
                            transition={{
                                duration: 15 + Math.random() * 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute rounded-lg bg-white"
                            style={{
                                width: `${Math.random() * 200 + 50}px`,
                                height: `${Math.random() * 200 + 50}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.3 + 0.1
                            }}
                        />
                    ))}
                </div>
                {/* Animated overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Content container */}
                <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* Category badge */}
                        <motion.span
                            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6  "
                            whileHover={{ scale: 1.05 }}
                        >
                            {post.category}
                        </motion.span>

                        {/* Main title */}
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {post.title}
                        </motion.h1>

                        {/* Excerpt */}
                        <motion.p
                            className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {post.excerpt}
                        </motion.p>

                        {/* Author and date */}
                        {/* <motion.div
                            className="flex items-center justify-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        > */}
                        {/* {post.author.avatar && (
                                <img
                                    src={post.author.avatar }
                                    alt={post.author.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            )}
                            <div className="text-left">
                                <p className="font-medium">{post.author.name}</p>
                                <div className="flex items-center gap-3 text-sm opacity-80">
                                    <span className="flex items-center">
                                        <FiCalendar className="mr-1" /> {post.date}
                                    </span>
                                    <span className="flex items-center">
                                        <FiClock className="mr-1" /> {post.readTime} min read
                                    </span>
                                </div>
                            </div>
                        </motion.div> */}


                    </motion.div>
                </div>
            </header>

            {/* Main content container */}
            <div className="relative mt-16 z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    {/* Article card */}
                    <motion.article
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Featured image */}
                        {post.featuredImage && (
                            <motion.div
                                className="w-full h-64 md:h-80 lg:h-96 overflow-hidden"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={post.featuredImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </motion.div>
                        )}

                        {/* Article content */}
                        <div className="p-6 md:p-8 lg:p-10">
                            {renderContent()}

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <motion.div
                                    className="mt-12"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map(tag => (
                                            <motion.a
                                                key={tag}
                                                href={`/tags/${tag.toLowerCase()}`}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                                                rel="tag"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                #{tag}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Engagement buttons */}
                            <motion.div
                                className="mt-12 pt-8 border-t border-gray-200"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    {/* Like Button */}
                                    <motion.button
                                        onClick={handleLike}
                                        className={`flex items-center px-4 py-2 rounded-lg ${isLiked ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-100'}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={isLiked ? 'Unlike this article' : 'Like this article'}
                                    >
                                        <FiHeart className={`mr-2 ${isLiked ? 'fill-current' : ''}`} />
                                        {isLiked ? 'Liked' : 'Like'} • {post.stats?.likes || 0}
                                    </motion.button>

                                    {/* Bookmark Button */}
                                    {/* <motion.button
                                        onClick={() => setIsBookmarked(!isBookmarked)}
                                        className={`flex items-center px-4 py-2 rounded-lg ${isBookmarked ? 'text-blue-500 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this article'}
                                    >
                                        <FiBookmark className={`mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                                        {isBookmarked ? 'Saved' : 'Save'}
                                    </motion.button> */}

                                    {/* Share Button */}
                                    <div className="relative">
                                        <motion.button
                                            onClick={() => setShareOpen(!shareOpen)}
                                            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-expanded={shareOpen}
                                            aria-label="Share options"
                                        >
                                            <FiShare2 className="mr-2" />
                                            Share
                                        </motion.button>

                                        {/* Share Dropdown */}
                                        {shareOpen && (
                                            <motion.div
                                                className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-lg shadow-xl z-10 overflow-hidden"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                            >
                                                <button
                                                    onClick={() => sharePost('twitter')}
                                                    className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                                                >
                                                    <FiShare2 className="mr-2" /> Twitter
                                                </button>
                                                <button
                                                    onClick={() => sharePost('facebook')}
                                                    className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                                                >
                                                    <FiShare2 className="mr-2" /> Facebook
                                                </button>
                                                <button
                                                    onClick={() => sharePost('linkedin')}
                                                    className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                                                >
                                                    <FiShare2 className="mr-2" /> LinkedIn
                                                </button>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.article>

                    {/* Author Bio */}
                    {post.author && (
                        <motion.section
                            className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
                                {post.author.avatar && (
                                    <motion.div
                                        className="flex-shrink-0"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        <img
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                )}
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{post.author.name}</span>
                                    </h3>
                                    {post.author.bio && (
                                        <p className="text-gray-600 mb-4">{post.author.bio}</p>
                                    )}
                                    {post.author.socialLinks && post.author.socialLinks.length > 0 && (
                                        <div className="flex gap-4">
                                            {post.author.socialLinks.map((link, index) => (
                                                <motion.a
                                                    key={index}
                                                    href={link.url}
                                                    className="text-gray-500 hover:text-blue-600 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Follow on ${link.platform}`}
                                                    whileHover={{ y: -3 }}
                                                >
                                                    {link.platform}
                                                </motion.a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    )}
                </div>
            </div>

            {/* Related Articles */}
            {/* <section className="py-16 bg-gray-50">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">More articles</span> you might enjoy
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {relatedPosts.map((relatedPost, index) => (
                            <motion.article
                                key={relatedPost.id}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <a href={`/blog/${relatedPost.slug}`} className="block h-full">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
                                            {relatedPost.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span>{relatedPost.date}</span>
                                            <span className="mx-2">•</span>
                                            <span>{relatedPost.readTime} min read</span>
                                        </div>
                                    </div>
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Newsletter CTA */}
            <section className="py-20 px-6  text-white">
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
                    <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Stay updated with our latest articles
                            </h2>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join our newsletter to receive new content straight to your inbox. No spam ever.
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <motion.input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    className="px-4 py-3 rounded-l-lg text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    aria-label="Email for newsletter subscription"
                                />
                                <motion.button
                                    type="submit"
                                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                            <p className="text-xs text-blue-200 mt-3">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </motion.div>
                    </div>)}
            </section>
        </div>
    );
};

BlogShowPage.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        slug: PropTypes.string,
        metaTitle: PropTypes.string,
        metaDescription: PropTypes.string,
        excerpt: PropTypes.string,
        content: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.oneOf(['heading', 'paragraph', 'image']).isRequired,
                level: PropTypes.number,
                text: PropTypes.string,
                src: PropTypes.string,
                alt: PropTypes.string,
                caption: PropTypes.string
            })
        ),
        featuredImage: PropTypes.string,
        category: PropTypes.string,
        date: PropTypes.string,
        lastUpdated: PropTypes.string,
        readTime: PropTypes.number,
        author: PropTypes.shape({
            name: PropTypes.string,
            role: PropTypes.string,
            avatar: PropTypes.string,
            bio: PropTypes.string,
            socialLinks: PropTypes.arrayOf(
                PropTypes.shape({
                    platform: PropTypes.string,
                    url: PropTypes.string
                })
            )
        }),
        tags: PropTypes.arrayOf(PropTypes.string),
        stats: PropTypes.shape({
            likes: PropTypes.number,
            comments: PropTypes.number,
            shares: PropTypes.number
        })
    })
};

BlogShowPage.defaultProps = {
    post: null
};

export default BlogShowPage;