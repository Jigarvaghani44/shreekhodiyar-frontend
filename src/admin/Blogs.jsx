/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/no-danger */
/* eslint-disable no-alert */
import { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiCalendar, FiEye, FiArchive, FiUpload } from 'react-icons/fi';
import axios from 'axios';
// import TiptapEditor from './TiptapEditor';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);
    const [content, setContent] = useState([]);
    const [viewingBlog, setViewingBlog] = useState(null);
    const [activeTab, setActiveTab] = useState('published');
    const [socialLinks, setSocialLinks] = useState([]);
    const [newSocialLink, setNewSocialLink] = useState({ platform: '', url: '' });
    const [date, setDate] = useState(
        currentBlog?.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0]
    );
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`);
                setBlogs(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to load blogs');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <div className="flex justify-center items-center h-64"><p>Loading blogs...</p></div>;
    if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
    // console.log("blogs", blogs);

    const filteredBlogs = blogs.filter(blog => {
        const title = blog.title?.toLowerCase() || "";
        const author = typeof blog.author === "string"
            ? blog.author.toLowerCase()
            : blog.author?.name?.toLowerCase() || "";

        const matchesSearch = title.includes(searchTerm.toLowerCase()) ||
            author.includes(searchTerm.toLowerCase());

        const matchesStatus = blog.status === activeTab;

        return matchesSearch && matchesStatus;
    });


    const statusCounts = {
        published: blogs.filter(blog => blog.status === 'published').length,
        draft: blogs.filter(blog => blog.status === 'draft').length,
        archived: blogs.filter(blog => blog.status === 'archived').length,
        deleted: blogs.filter(blog => blog.status === 'deleted').length,

    };

    const toggleBlogStatus = async (blog) => {
        const newStatus = blog.status === 'published' ? 'archived' : 'published';
        try {
            const token = localStorage.getItem('authToken');
            await axios.put(`${process.env.REACT_APP_API_URL}/api/blogs/${blog._id}`, {
                status: newStatus
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`);
            setBlogs(res.data.data);

        } catch (err) {
            console.error('Error updating blog status:', err);
            alert('Failed to update blog status');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to permanant delete this blog post?')) {
            try {
                const token = localStorage.getItem('authToken');
                await axios.delete(`${process.env.REACT_APP_API_URL}/api/blogs/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`);
                setBlogs(res.data.data);


            } catch (err) {
                console.error('Error deleting blog:', err);
                alert('Failed to delete blog post');
            }
        }
    };
    const handleTempDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            try {
                const token = localStorage.getItem('authToken');
                await axios.put(`${process.env.REACT_APP_API_URL}/api/blogs/${id}`, {
                    status: "deleted"
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`);
                setBlogs(res.data.data);

            } catch (err) {
                console.error('Error updating blog status:', err);
                alert('Failed to update blog status');
            }
        }
    };

    const handleEdit = (blog) => {
        setCurrentBlog(blog);
        setContent(Array.isArray(blog.content) ? blog.content : []);
        setSocialLinks(blog.author?.socialLinks || []);
        setShowModal(true);
    };

    const generateSlug = (title) => {
        return title.toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, '-');
    };

    const addSocialLink = () => {
        if (newSocialLink.platform && newSocialLink.url) {
            setSocialLinks([...socialLinks, newSocialLink]);
            setNewSocialLink({ platform: '', url: '' });
        }
    };

    const removeSocialLink = (index) => {
        setSocialLinks(socialLinks.filter((_, i) => i !== index));
    };

    const addContentBlock = (type) => {
        const newBlock = { type };
        if (type === 'heading') newBlock.level = 2;
        if (type === 'image') newBlock.src = '';
        setContent([...content, newBlock]);
    };

    const updateContentBlock = (index, field, value) => {
        const updatedContent = [...content];
        updatedContent[index] = { ...updatedContent[index], [field]: value };
        setContent(updatedContent);
    };

    const removeContentBlock = (index) => {
        setContent(content.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const token = localStorage.getItem('authToken');

        const blogData = {
            title: data.title,
            slug: data.slug || generateSlug(data.title),
            excerpt: data.excerpt,
            featuredImage: data.featuredImage,
            category: data.category,
            tags: data.tags.split(',').map(t => t.trim()),
            status: data.status,
            metaTitle: data.metaTitle,
            metaDescription: data.metaDescription,
            publishedAt: data.publishedAt,
            content,
            author: {
                name: data.authorName,
                role: data.authorRole,
                avatar: data.authorAvatar,
                bio: data.authorBio,
                socialLinks
            }
        };

        try {
            if (currentBlog) {
                console.log(currentBlog);

                await axios.put(`${process.env.REACT_APP_API_URL}/api/blogs/${currentBlog._id}`, blogData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // ✅ Ensure correct replacement logic here
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`);
                setBlogs(res.data.data);
            } else {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/blogs`, blogData);
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`);
                setBlogs(res.data.data);
            }
            setShowModal(false);
            setCurrentBlog(null);
            setContent([]);
            setSocialLinks([]);
        } catch (err) {
            console.error('Error saving blog:', err);
            alert('Failed to save blog post');
        }
    };



    return (
        <div className="space-y-6 p-4">
            {/* Header and Add New Blog Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
                <button
                    onClick={() => {
                        setCurrentBlog(null);
                        setContent([]);
                        setSocialLinks([]);
                        setShowModal(true);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <FiPlus className="mr-2" /> Add New Blog Post
                </button>
            </div>

            {/* Search */}
            <div className="bg-white shadow rounded-lg p-4">
                <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Status Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    <button
                        onClick={() => setActiveTab('published')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'published' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        Published ({statusCounts.published})
                    </button>
                    <button
                        onClick={() => setActiveTab('draft')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'draft' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        Drafts ({statusCounts.draft})
                    </button>
                    <button
                        onClick={() => setActiveTab('archived')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'archived' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        Archived ({statusCounts.archived})
                    </button>
                    <button
                        onClick={() => setActiveTab('deleted')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'deleted' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        Deleted ({statusCounts.deleted})
                    </button>
                </nav>
            </div>

            {/* Blogs List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Published
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredBlogs.length > 0 ? (
                                filteredBlogs.map((blog) => (
                                    <tr key={blog.id}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-md object-cover" src={blog.featuredImage} alt={blog.title} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                                    <div className="text-sm text-gray-500">{blog.categories?.join(', ')}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {blog.author?.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${blog.status === 'published' ? 'bg-green-100 text-green-800' : blog.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {blog.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <FiCalendar className="mr-1" />
                                                {new Date(blog.publishedAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => setViewingBlog(blog)}
                                                className="text-blue-600 hover:text-blue-900 mr-4 inline-block"
                                                title="View"
                                            >
                                                <FiEye />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                onClick={() => toggleBlogStatus(blog)}
                                                className={`mr-4 ${blog.status === 'published' ? 'text-orange-600 hover:text-orange-900' : 'text-green-600 hover:text-green-900'}`}
                                                title={blog.status === 'published' ? 'Archive' : 'Publish'}
                                            >
                                                {blog.status === 'published' ? <FiArchive /> : <FiUpload />}
                                            </button>
                                            {blog.status !== 'deleted' && (
                                                <button
                                                    onClick={() => handleTempDelete(blog._id, 'deleted')}
                                                    className="text-red-600 hover:text-red-900 inline-block"
                                                    title="Delete"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            )}
                                            {blog.status == 'deleted' && (
                                                <button
                                                    onClick={() => handleDelete(blog._id, 'deleted')}
                                                    className="text-red-600 hover:text-red-900 inline-block"
                                                    title="Delete"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            )}
                                            {/* <button
                                                onClick={() => handleDelete(blog._id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <FiTrash2 />
                                            </button> */}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                                        No {activeTab} blog posts found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* View Blog Modal */}
            {viewingBlog && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                    {viewingBlog.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span className="mr-4">By {viewingBlog.author?.name}</span>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${viewingBlog.status === 'published' ? 'bg-green-100 text-green-800' : viewingBlog.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {viewingBlog.status}
                                    </span>
                                    <span className="ml-4 flex items-center">
                                        <FiCalendar className="mr-1" />
                                        {new Date(viewingBlog.publishedAt).toLocaleDateString()}
                                    </span>
                                </div>

                                {viewingBlog.featuredImage && (
                                    <img
                                        src={viewingBlog.featuredImage}
                                        alt={viewingBlog.title}
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                )}

                                {viewingBlog?.content && (
                                    <div className="prose max-w-none">
                                        {Array.isArray(viewingBlog.content)
                                            ? viewingBlog.content.map((block, index) => {
                                                if (block.type === 'heading') {
                                                    const HeadingTag = `h${block.level || 2}`;
                                                    return <HeadingTag key={index}>{block.text}</HeadingTag>;
                                                }
                                                if (block.type === 'paragraph') {
                                                    return <p key={index}>{block.text}</p>;
                                                }
                                                if (block.type === 'image') {
                                                    return (
                                                        <figure key={index} className="my-4">
                                                            <img src={block.src} alt={block.alt} className="w-full rounded-lg" />
                                                            {block.caption && <figcaption className="text-center text-sm text-gray-500 mt-2">{block.caption}</figcaption>}
                                                        </figure>
                                                    );
                                                }
                                                return null;
                                            })
                                            : <div dangerouslySetInnerHTML={{ __html: viewingBlog.content }} />
                                        }
                                    </div>
                                )}

                                <div className="mt-5">
                                    <button
                                        type="button"
                                        onClick={() => setViewingBlog(null)}
                                        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Blog Form Modal */}
            {showModal && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {currentBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
                                </h3>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                Title *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    defaultValue={currentBlog?.title || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                    minLength={3}
                                                    maxLength={100}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                                                Slug (URL) *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="slug"
                                                    id="slug"
                                                    defaultValue={currentBlog?.slug || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Author Section */}
                                        <div className="sm:col-span-6 border-t border-gray-200 pt-4">
                                            <h4 className="text-md font-medium text-gray-900">Author Information</h4>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
                                                Author Name *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="authorName"
                                                    id="authorName"
                                                    defaultValue={currentBlog?.author?.name || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="authorRole" className="block text-sm font-medium text-gray-700">
                                                Author Role
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="authorRole"
                                                    id="authorRole"
                                                    defaultValue={currentBlog?.author?.role || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="authorAvatar" className="block text-sm font-medium text-gray-700">
                                                Author Avatar URL
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="url"
                                                    name="authorAvatar"
                                                    id="authorAvatar"
                                                    defaultValue={currentBlog?.author?.avatar || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            {currentBlog?.author?.avatar && (
                                                <div className="mt-2">
                                                    <img src={currentBlog.author.avatar} alt="Author avatar preview" className="h-16 w-16 rounded-full object-cover" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="authorBio" className="block text-sm font-medium text-gray-700">
                                                Author Bio
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="authorBio"
                                                    name="authorBio"
                                                    rows={3}
                                                    defaultValue={currentBlog?.author?.bio || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Social Links
                                            </label>
                                            <div className="mt-1 space-y-2">
                                                {socialLinks.map((link, index) => (
                                                    <div key={index} className="flex items-center space-x-2">
                                                        <input
                                                            type="text"
                                                            value={link.platform}
                                                            onChange={(e) => {
                                                                const updatedLinks = [...socialLinks];
                                                                updatedLinks[index].platform = e.target.value;
                                                                setSocialLinks(updatedLinks);
                                                            }}
                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/3 sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Platform"

                                                        />
                                                        <input
                                                            type="url"
                                                            value={link.url}
                                                            onChange={(e) => {
                                                                const updatedLinks = [...socialLinks];
                                                                updatedLinks[index].url = e.target.value;
                                                                setSocialLinks(updatedLinks);
                                                            }}
                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="URL"

                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => removeSocialLink(index)}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <FiTrash2 />
                                                        </button>
                                                    </div>
                                                ))}
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        value={newSocialLink.platform}
                                                        onChange={(e) => setNewSocialLink({ ...newSocialLink, platform: e.target.value })}
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/3 sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Platform"
                                                    />
                                                    <input
                                                        type="url"
                                                        value={newSocialLink.url}
                                                        onChange={(e) => setNewSocialLink({ ...newSocialLink, url: e.target.value })}
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="URL"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={addSocialLink}
                                                        className="text-green-500 hover:text-green-700"
                                                    >
                                                        <FiPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="sm:col-span-6 border-t border-gray-200 pt-4">
                                            <h4 className="text-md font-medium text-gray-900">Content</h4>
                                            <div className="mt-2 flex space-x-2">
                                                <button
                                                    type="button"
                                                    onClick={() => addContentBlock('heading')}
                                                    className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Add Heading
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => addContentBlock('paragraph')}
                                                    className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Add Paragraph
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => addContentBlock('image')}
                                                    className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Add Image
                                                </button>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6 space-y-4">
                                            {content.map((block, index) => (
                                                <div key={index} className="border border-gray-200 rounded-md p-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-sm font-medium text-gray-700 capitalize">{block.type}</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeContentBlock(index)}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <FiTrash2 />
                                                        </button>
                                                    </div>

                                                    {block.type === 'heading' && (
                                                        <div className="space-y-2">
                                                            <select
                                                                value={block.level || 2}
                                                                onChange={(e) => updateContentBlock(index, 'level', parseInt(e.target.value, 10))}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                            >
                                                                <option value={1}>Heading 1</option>
                                                                <option value={2}>Heading 2</option>
                                                                <option value={3}>Heading 3</option>
                                                                <option value={4}>Heading 4</option>
                                                            </select>
                                                            <input
                                                                type="text"
                                                                value={block.text || ''}
                                                                onChange={(e) => updateContentBlock(index, 'text', e.target.value)}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="Heading text"
                                                                required
                                                            />
                                                        </div>
                                                    )}

                                                    {block.type === 'paragraph' && (
                                                        <textarea
                                                            value={block.text || ''}
                                                            onChange={(e) => updateContentBlock(index, 'text', e.target.value)}
                                                            rows={3}
                                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Paragraph text"
                                                            required
                                                        />
                                                    )}

                                                    {block.type === 'image' && (
                                                        <div className="space-y-2">
                                                            <input
                                                                type="url"
                                                                value={block.src || ''}
                                                                onChange={(e) => updateContentBlock(index, 'src', e.target.value)}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="Image URL"
                                                                required
                                                            />
                                                            <input
                                                                type="text"
                                                                value={block.alt || ''}
                                                                onChange={(e) => updateContentBlock(index, 'alt', e.target.value)}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="Alt text"
                                                            />
                                                            <input
                                                                type="text"
                                                                value={block.caption || ''}
                                                                onChange={(e) => updateContentBlock(index, 'caption', e.target.value)}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                                placeholder="Caption (optional)"
                                                            />
                                                            {block.src && (
                                                                <div className="mt-2">
                                                                    <img src={block.src} alt={block.alt || ''} className="max-h-32 object-contain rounded-md" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700">
                                                Featured Image URL *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="url"
                                                    name="featuredImage"
                                                    id="featuredImage"
                                                    defaultValue={currentBlog?.featuredImage || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                            {currentBlog?.featuredImage && (
                                                <div className="mt-2">
                                                    <img src={currentBlog.featuredImage} alt="Featured preview" className="h-32 object-contain rounded-md" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="categories" className="block text-sm font-medium text-gray-700">
                                                Categories
                                            </label>
                                            <select
                                                id="category"
                                                name="category"
                                                defaultValue={currentBlog?.categories?.join(', ') || ''}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            >
                                                <option value="Web Development">Web Development</option>
                                                <option value="Game Development">Game Development</option>
                                                <option value="Shopipy Web Development">Shopipy Web Development</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="AI">AI</option>
                                            </select>

                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                                                Tags (comma separated)
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="tags"
                                                    id="tags"
                                                    defaultValue={currentBlog?.tags?.join(', ') || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                                                Excerpt
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="excerpt"
                                                    name="excerpt"
                                                    rows={3}
                                                    defaultValue={currentBlog?.excerpt || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    maxLength={300}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                                Status
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="status"
                                                    name="status"
                                                    defaultValue={currentBlog?.status || 'draft'}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option value="draft">Draft</option>
                                                    <option value="published">Published</option>
                                                    <option value="archived">Archived</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700">
                                                Publish Date
                                            </label>
                                            <input
                                                type="date"
                                                name="publishedAt"
                                                id="publishedAt"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700">
                                                Meta Title
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="metaTitle"
                                                    id="metaTitle"
                                                    defaultValue={currentBlog?.metaTitle || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700">
                                                Meta Description
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="metaDescription"
                                                    name="metaDescription"
                                                    rows={3}
                                                    defaultValue={currentBlog?.metaDescription || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        >
                                            {currentBlog ? 'Update' : 'Create'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;