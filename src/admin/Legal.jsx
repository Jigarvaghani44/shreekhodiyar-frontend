/* eslint-disable react/no-danger */
/* eslint-disable no-alert */
// src/pages/admin/Legal.jsx
import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiFileText, FiEye, FiX } from 'react-icons/fi';
import TiptapEditor from './TiptapEditor';

const Legal = () => {
    const [legalPages, setLegalPages] = useState([
        {
            id: 1,
            title: "Terms of Service",
            slug: "terms-of-service",
            content: "<h1>Terms of Service</h1><p>Welcome to our website...</p>",
            lastUpdated: "2023-06-01",
            status: "published"
        },
        {
            id: 2,
            title: "Privacy Policy",
            slug: "privacy-policy",
            content: "<h1>Privacy Policy</h1><p>We respect your privacy...</p>",
            lastUpdated: "2023-06-10",
            status: "published"
        },
        {
            id: 3,
            title: "Cookie Policy",
            slug: "cookie-policy",
            content: "<h1>Cookie Policy</h1><p>We use cookies to improve...</p>",
            lastUpdated: "2023-06-15",
            status: "draft"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(null);
    const [content, setContent] = useState('');
    const [viewingPage, setViewingPage] = useState(null);

    const filteredPages = legalPages.filter(page =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this legal page?')) {
            setLegalPages(legalPages.filter(page => page.id !== id));
        }
    };

    const handleEdit = (page) => {
        setCurrentPage(page);
        setContent(page.content);
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const pageData = {
            ...data,
            content,
            lastUpdated: new Date().toISOString().split('T')[0]
        };

        if (currentPage) {
            setLegalPages(legalPages.map(page =>
                page.id === currentPage.id ? { ...page, ...pageData } : page
            ));
        } else {
            const newPage = {
                id: legalPages.length + 1,
                ...pageData,
                status: "draft"
            };
            setLegalPages([...legalPages, newPage]);
        }

        setShowModal(false);
        setCurrentPage(null);
        setContent('');
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Legal Pages</h1>
                <button
                    onClick={() => {
                        setCurrentPage(null);
                        setContent('');
                        setShowModal(true);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <FiPlus className="mr-2" /> Add New Page
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
                        placeholder="Search legal pages..."
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Legal Pages List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    URL
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Last Updated
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredPages.length > 0 ? (
                                filteredPages.map((page) => (
                                    <tr key={page.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center">
                                                    <FiFileText className="h-5 w-5 text-gray-500" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{page.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            /{page.slug}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${page.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {page.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {page.lastUpdated}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => setViewingPage(page)}
                                                className="text-blue-600 hover:text-blue-900 mr-4"
                                                title="Preview"
                                            >
                                                <FiEye />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(page)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(page.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                                        No legal pages found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Legal Page Preview Modal */}
            {viewingPage && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                        {viewingPage.title}
                                    </h3>
                                    <button
                                        onClick={() => setViewingPage(null)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <FiX className="h-6 w-6" />
                                    </button>
                                </div>

                                <div className="flex items-center space-x-4 mb-4">
                                    <span className="text-sm text-gray-500">URL: /{viewingPage.slug}</span>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${viewingPage.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {viewingPage.status}
                                    </span>
                                    <span className="text-sm text-gray-500">Last Updated: {viewingPage.lastUpdated}</span>
                                </div>

                                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: viewingPage.content }} />

                                <div className="mt-5 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setViewingPage(null);
                                            handleEdit(viewingPage);
                                        }}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <FiEdit2 className="mr-2" /> Edit Page
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Legal Page Form Modal */}
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
                                    {currentPage ? 'Edit Legal Page' : 'Add New Legal Page'}
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
                                                    defaultValue={currentPage?.title || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                                                URL Slug *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="slug"
                                                    id="slug"
                                                    defaultValue={currentPage?.slug || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                                Status
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="status"
                                                    name="status"
                                                    defaultValue={currentPage?.status || 'draft'}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option value="draft">Draft</option>
                                                    <option value="published">Published</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                                Content *
                                            </label>
                                            <div className="mt-1">
                                                <TiptapEditor content={content} setContent={setContent} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        >
                                            {currentPage ? 'Update' : 'Create'}
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

export default Legal;