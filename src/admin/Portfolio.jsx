/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiFilter, FiEye, FiArchive, FiUpload } from 'react-icons/fi';
import axios from 'axios';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeTab, setActiveTab] = useState('published');
    const [showModal, setShowModal] = useState(false);
    const [showPreviewModal, setShowPreviewModal] = useState(false);
    const [currentPortfolio, setCurrentPortfolio] = useState(null);

    const categories = ['all', 'Web Development', 'Mobile App Development', 'Game Development', 'Shopify Web Development', 'Digital Marketing', 'Social Media Handeling'];
    const statuses = ['published', 'draft', 'archived', 'deleted'];
    const fetchPortfolios = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio`);
            setPortfolios(response.data.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError('Failed to load portfolios');
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPortfolios();
    }, []);
    console.log("port", portfolios);

    const filteredPortfolios = portfolios.filter(portfolio => {
        const matchesSearch = portfolio.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || portfolio.category === selectedCategory;
        const matchesStatus = portfolio.status === activeTab;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    const statusCounts = {
        published: portfolios.filter(portfolio => portfolio.status === 'published').length,
        draft: portfolios.filter(portfolio => portfolio.status === 'draft').length,
        archived: portfolios.filter(portfolio => portfolio.status === 'archived').length,
        deleted: portfolios.filter(portfolio => portfolio.status === 'deleted').length,
    };

    const togglePortfolioStatus = async (portfolio) => {
        const newStatus = portfolio.status === 'published' ? 'archived' : 'published';
        try {
            const token = localStorage.getItem('authToken');
            await axios.put(`${process.env.REACT_APP_API_URL}/api/portfolio/${portfolio._id}`, {
                status: newStatus
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio`);
            setPortfolios(response.data.data);
        } catch (err) {
            console.error('Error updating portfolio status:', err);
            alert('Failed to update portfolio status');
        }
    };

    const handleTempDelete = async (id, newStatus) => {
        if (window.confirm('Are you sure you want to delete this portfolio item?')) {

            try {
                const token = localStorage.getItem('authToken');
                await axios.put(`${process.env.REACT_APP_API_URL}/api/portfolio/${id}`, {
                    status: newStatus
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio`);
                setPortfolios(response.data.data);
            } catch (err) {
                console.error('Error updating portfolio status:', err);
                alert('Failed to update portfolio status');
            }
        }
    };
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to permanent delete this portfolio item?')) {
            try {
                const token = localStorage.getItem('authToken');
                await axios.delete(`${process.env.REACT_APP_API_URL}/api/portfolio/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio`);
                setPortfolios(response.data.data);
            } catch (err) {
                console.error('Error deleting portfolio:', err);
                alert('Failed to delete portfolio item');
            }
        }
    };
    const handleEdit = (portfolio) => {
        setCurrentPortfolio(portfolio);
        setShowModal(true);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const formData = new FormData(e.target);
            const {
                title, category, status, year, client, duration, teamSize,
                description, longDescription, image, alt, liveUrl, codeUrl,
                features, technologies, stats, awards, testimonialText,
                testimonialAuthor, testimonialRole
            } = Object.fromEntries(formData);

            const portfolioData = {
                title,
                category,
                status: status || 'draft',
                year,
                client,
                duration,
                teamSize,
                description,
                longDescription,
                image,
                alt,
                liveUrl,
                codeUrl,
                features: features ? features.split('\n').filter(f => f.trim() !== '') : [],
                technologies: technologies ? technologies.split(',').map(t => t.trim()) : [],
                stats: stats ? JSON.parse(stats) : [],
                awards: awards ? awards.split('\n').filter(a => a.trim() !== '') : [],
                testimonial: testimonialText ? {
                    text: testimonialText,
                    author: testimonialAuthor,
                    role: testimonialRole
                } : null
            };

            if (currentPortfolio) {
                const token = localStorage.getItem('authToken');
                await axios.put(`${process.env.REACT_APP_API_URL}/api/portfolio/${currentPortfolio._id}`, portfolioData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio`);
                // setPortfolios(res.data.data);
            } else {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/portfolio`, portfolioData);
                // const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio`);
                // setPortfolios(res.data.data);
            }
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio`);
            setPortfolios(response.data);
            setShowModal(false);
            setCurrentPortfolio(null);
        } catch (err) {
            console.error('Error saving portfolio:', err);
            setError(err.response?.data?.message || 'Failed to save portfolio');
        } finally {
            setIsSubmitting(false);
        }
    };



    if (loading) return <div className="flex justify-center items-center h-64"><p>Loading portfolios...</p></div>;
    if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

    return (
        <div className="space-y-6 p-4">
            {/* Header and Add New Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Portfolio Management</h1>
                <button
                    onClick={() => {
                        setCurrentPortfolio(null);
                        setShowModal(true);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <FiPlus className="mr-2" /> Add New Portfolio
                </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white shadow rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search portfolios..."
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiFilter className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category === 'all' ? 'All Categories' : category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Status Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    {statuses.map(status => (
                        <button
                            key={status}
                            onClick={() => setActiveTab(status)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === status ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)} ({statusCounts[status]})
                        </button>
                    ))}
                </nav>
            </div>

            {/* Portfolio List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Client
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Year
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredPortfolios.length > 0 ? (
                                filteredPortfolios.map((portfolio) => (
                                    <tr key={portfolio._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-md object-cover" src={portfolio.image} alt={portfolio.alt} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{portfolio.title}</div>
                                                    {/* <div className="text-sm text-gray-500 line-clamp-1">{portfolio.description}</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {portfolio.category}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${portfolio.status === 'published' ? 'bg-green-100 text-green-800' : portfolio.status === 'archived' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {portfolio.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {portfolio.client || '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {portfolio.year || '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                            <button
                                                onClick={() => {
                                                    setCurrentPortfolio(portfolio);
                                                    setShowPreviewModal(true);
                                                }}
                                                className="text-gray-600 hover:text-gray-900"
                                                title="Preview"
                                            >
                                                <FiEye />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(portfolio)}
                                                className="text-indigo-600 hover:text-indigo-900"
                                                title="Edit"
                                            >
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                onClick={() => togglePortfolioStatus(portfolio)}
                                                className={`${portfolio.status === 'published' ? 'text-orange-600 hover:text-orange-900' : 'text-green-600 hover:text-green-900'}`}
                                                title={portfolio.status === 'published' ? 'Archive' : 'Publish'}
                                            >
                                                {portfolio.status === 'published' ? <FiArchive /> : <FiUpload />}
                                            </button>
                                            {portfolio.status !== 'deleted' && (
                                                <button
                                                    onClick={() => handleTempDelete(portfolio._id, 'deleted')}
                                                    className="text-red-600 hover:text-red-900 inline-block"
                                                    title="Delete"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            )}
                                            {portfolio.status == 'deleted' && (
                                                <button
                                                    onClick={() => handleDelete(portfolio._id)}
                                                    className="text-red-600 hover:text-red-900 inline-block"
                                                    title="Delete"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                                        No {activeTab} portfolios found matching your criteria
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Portfolio Form Modal */}
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
                                    {currentPortfolio ? 'Edit Portfolio' : 'Add New Portfolio'}
                                </h3>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        {/* Basic Information */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <h4 className="text-md font-medium text-gray-900 mb-3">Basic Information</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                        Title*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        defaultValue={currentPortfolio?.title || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                                        Category*
                                                    </label>
                                                    <select
                                                        id="category"
                                                        name="category"
                                                        defaultValue={currentPortfolio?.category || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        required
                                                    >
                                                        <option value="">Select a category</option>
                                                        {categories.filter(c => c !== 'all').map(category => (
                                                            <option key={category} value={category}>{category}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                                        Status
                                                    </label>
                                                    <select
                                                        id="status"
                                                        name="status"
                                                        defaultValue={currentPortfolio?.status || 'draft'}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value="draft">Draft</option>
                                                        <option value="published">Published</option>
                                                        <option value="archived">Archived</option>
                                                        <option value="deleted">Deleted</option>

                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                                                        Year
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="year"
                                                        id="year"
                                                        defaultValue={currentPortfolio?.year || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Client & Project Details */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <h4 className="text-md font-medium text-gray-900 mb-3">Client & Project Details</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="client" className="block text-sm font-medium text-gray-700">
                                                        Client Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="client"
                                                        id="client"
                                                        defaultValue={currentPortfolio?.client || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                                                        Project Duration
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="duration"
                                                        id="duration"
                                                        defaultValue={currentPortfolio?.duration || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">
                                                        Team Size
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="teamSize"
                                                        id="teamSize"
                                                        defaultValue={currentPortfolio?.teamSize || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Descriptions */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <div className="grid grid-cols-1 gap-4">
                                                <div>
                                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                        Short Description*
                                                    </label>
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        rows={2}
                                                        defaultValue={currentPortfolio?.description || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700">
                                                        Long Description
                                                    </label>
                                                    <textarea
                                                        id="longDescription"
                                                        name="longDescription"
                                                        rows={4}
                                                        defaultValue={currentPortfolio?.longDescription || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Media */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <h4 className="text-md font-medium text-gray-900 mb-3">Media</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                                        Main Image URL*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="image"
                                                        id="image"
                                                        defaultValue={currentPortfolio?.image || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        required
                                                    />
                                                    {currentPortfolio?.image && (
                                                        <div className="mt-2">
                                                            <img src={currentPortfolio.image} alt="Preview" className="h-20 w-20 object-cover rounded-md" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <label htmlFor="alt" className="block text-sm font-medium text-gray-700">
                                                        Image Alt Text*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="alt"
                                                        id="alt"
                                                        defaultValue={currentPortfolio?.alt || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <label htmlFor="features" className="block text-sm font-medium text-gray-700">
                                                Features (one per line)
                                            </label>
                                            <textarea
                                                id="features"
                                                name="features"
                                                rows={4}
                                                defaultValue={currentPortfolio?.features ? currentPortfolio.features.join('\n') : ''}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        {/* Technologies */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
                                                Technologies (comma separated)
                                            </label>
                                            <input
                                                type="text"
                                                name="technologies"
                                                id="technologies"
                                                defaultValue={currentPortfolio?.technologies ? currentPortfolio.technologies.join(', ') : ''}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        {/* Links */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-700">
                                                Live URL
                                            </label>
                                            <input
                                                type="url"
                                                name="liveUrl"
                                                id="liveUrl"
                                                defaultValue={currentPortfolio?.liveUrl || ''}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            <label htmlFor="codeUrl" className="block text-sm font-medium text-gray-700 mt-3">
                                                Code URL
                                            </label>
                                            <input
                                                type="url"
                                                name="codeUrl"
                                                id="codeUrl"
                                                defaultValue={currentPortfolio?.codeUrl || ''}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        {/* Testimonial */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <h4 className="text-md font-medium text-gray-900 mb-3">Testimonial</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="testimonialText" className="block text-sm font-medium text-gray-700">
                                                        Testimonial Text
                                                    </label>
                                                    <textarea
                                                        id="testimonialText"
                                                        name="testimonialText"
                                                        rows={2}
                                                        defaultValue={currentPortfolio?.testimonial?.text || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="testimonialAuthor" className="block text-sm font-medium text-gray-700">
                                                        Author
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="testimonialAuthor"
                                                        id="testimonialAuthor"
                                                        defaultValue={currentPortfolio?.testimonial?.author || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="testimonialRole" className="block text-sm font-medium text-gray-700">
                                                        Role
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="testimonialRole"
                                                        id="testimonialRole"
                                                        defaultValue={currentPortfolio?.testimonial?.role || ''}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <label htmlFor="stats" className="block text-sm font-medium text-gray-700">
                                                Stats (JSON format)
                                            </label>
                                            <textarea
                                                id="stats"
                                                name="stats"
                                                rows={3}
                                                defaultValue={currentPortfolio?.stats ? JSON.stringify(currentPortfolio.stats, null, 2) : ''}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono text-sm"
                                            />
                                        </div>

                                        {/* Challenges */}
                                        <div className="sm:col-span-6 border-b border-gray-200 pb-4">
                                            <label htmlFor="challenges" className="block text-sm font-medium text-gray-700">
                                                Challenges (one per line)
                                            </label>
                                            <textarea
                                                id="challenges"
                                                name="challenges"
                                                rows={3}
                                                defaultValue={currentPortfolio?.challenges ? currentPortfolio.challenges.join('\n') : ''}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        {/* Awards */}
                                        <div className="sm:col-span-6">
                                            <label htmlFor="awards" className="block text-sm font-medium text-gray-700">
                                                Awards (one per line)
                                            </label>
                                            <textarea
                                                id="awards"
                                                name="awards"
                                                rows={3}
                                                defaultValue={currentPortfolio?.awards ? currentPortfolio.awards.join('\n') : ''}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : (
                                                currentPortfolio ? 'Update' : 'Create'
                                            )}
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

            {/* Preview Modal */}
            {showPreviewModal && currentPortfolio && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                    Portfolio Preview: {currentPortfolio.title}
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2">
                                        <div className="bg-gray-100 rounded-lg overflow-hidden">
                                            <img
                                                src={currentPortfolio.image}
                                                alt={currentPortfolio.alt}
                                                className="w-full h-64 object-cover"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="text-md font-medium text-gray-900 mb-2">Description</h4>
                                            <p className="text-sm text-gray-700">{currentPortfolio.longDescription || currentPortfolio.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-md font-medium text-gray-900 mb-2">Project Details</h4>
                                            <div className="space-y-2">
                                                <div>
                                                    <p className="text-xs font-medium text-gray-500">Category</p>
                                                    <p className="text-sm text-gray-900">{currentPortfolio.category}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-medium text-gray-500">Status</p>
                                                    <p className="text-sm text-gray-900 capitalize">{currentPortfolio.status}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-medium text-gray-500">Client</p>
                                                    <p className="text-sm text-gray-900">{currentPortfolio.client || '-'}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-medium text-gray-500">Year</p>
                                                    <p className="text-sm text-gray-900">{currentPortfolio.year || '-'}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-medium text-gray-500">Duration</p>
                                                    <p className="text-sm text-gray-900">{currentPortfolio.duration || '-'}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-medium text-gray-500">Team Size</p>
                                                    <p className="text-sm text-gray-900">{currentPortfolio.teamSize || '-'}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {currentPortfolio.features && currentPortfolio.features.length > 0 && (
                                            <div>
                                                <h4 className="text-md font-medium text-gray-900 mb-2">Features</h4>
                                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                                    {currentPortfolio.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {currentPortfolio.technologies && currentPortfolio.technologies.length > 0 && (
                                            <div>
                                                <h4 className="text-md font-medium text-gray-900 mb-2">Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {currentPortfolio.technologies.map((tech, index) => (
                                                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {currentPortfolio.testimonial && (
                                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                        <blockquote className="text-sm italic text-gray-700">
                                            &ldquo;{currentPortfolio.testimonial.text}&ldquo;
                                        </blockquote>
                                        <p className="mt-2 text-sm font-medium text-gray-900">
                                            - {currentPortfolio.testimonial.author}, {currentPortfolio.testimonial.role}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setShowPreviewModal(false)}
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        Close Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;