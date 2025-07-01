/* eslint-disable react/no-danger */
/* eslint-disable no-alert */
// src/pages/admin/CaseStudies.jsx
import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiExternalLink, FiEye } from 'react-icons/fi';
import TiptapEditor from './TiptapEditor';

const CaseStudies = () => {
    const [caseStudies, setCaseStudies] = useState([
        {
            id: 1,
            title: "E-commerce Transformation for Fashion Brand",
            client: "FashionCo",
            industry: "Retail",
            challenge: "Low conversion rates and outdated design",
            solution: "Complete Shopify redesign with custom features",
            results: "Increased conversions by 120%",
            featuredImage: "https://via.placeholder.com/800x500",
            content: "<p>Detailed case study content goes here...</p>",
            status: "published",
            date: "2023-03-15",
            url: "fashionco-ecommerce-transformation"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentCaseStudy, setCurrentCaseStudy] = useState(null);
    const [content, setContent] = useState('');
    const [viewingCaseStudy, setViewingCaseStudy] = useState(null);

    const filteredCaseStudies = caseStudies.filter(cs =>
        cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cs.client.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this case study?')) {
            setCaseStudies(caseStudies.filter(cs => cs.id !== id));
        }
    };

    const handleEdit = (caseStudy) => {
        setCurrentCaseStudy(caseStudy);
        setContent(caseStudy.content);
        setShowModal(true);
    };

    const generateSlug = (title) => {
        return title.toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, '-');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const caseStudyData = {
            ...data,
            content,
            url: data.url || generateSlug(data.title)
        };

        if (currentCaseStudy) {
            setCaseStudies(caseStudies.map(cs =>
                cs.id === currentCaseStudy.id ? { ...cs, ...caseStudyData } : cs
            ));
        } else {
            const newCaseStudy = {
                id: caseStudies.length + 1,
                ...caseStudyData,
                status: "draft",
                date: new Date().toISOString().split('T')[0]
            };
            setCaseStudies([...caseStudies, newCaseStudy]);
        }

        setShowModal(false);
        setCurrentCaseStudy(null);
        setContent('');
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Case Studies</h1>
                <button
                    onClick={() => {
                        setCurrentCaseStudy(null);
                        setContent('');
                        setShowModal(true);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <FiPlus className="mr-2" /> Add New Case Study
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
                        placeholder="Search case studies..."
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Case Studies List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Client
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Results
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredCaseStudies.length > 0 ? (
                                filteredCaseStudies.map((cs) => (
                                    <tr key={cs.id}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-md object-cover" src={cs.featuredImage} alt={cs.title} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{cs.title}</div>
                                                    <div className="text-sm text-gray-500">{cs.industry}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {cs.client}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900 max-w-xs truncate">{cs.results}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${cs.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {cs.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => setViewingCaseStudy(cs)}
                                                className="text-blue-600 hover:text-blue-900 mr-4 inline-block"
                                                title="View"
                                            >
                                                <FiEye />
                                            </button>
                                            <a
                                                href={`/case-studies/${cs.url}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-600 hover:text-indigo-900 mr-4 inline-block"
                                                title="View"
                                            >
                                                <FiExternalLink />
                                            </a>
                                            <button
                                                onClick={() => handleEdit(cs)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(cs.id)}
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
                                        No case studies found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* // Add this preview modal component near the other modal in the return statement */}
            {viewingCaseStudy && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                    {viewingCaseStudy.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                                    <span>Client: {viewingCaseStudy.client}</span>
                                    <span>Industry: {viewingCaseStudy.industry}</span>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${viewingCaseStudy.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {viewingCaseStudy.status}
                                    </span>
                                </div>

                                {viewingCaseStudy.featuredImage && (
                                    <img
                                        src={viewingCaseStudy.featuredImage}
                                        alt={viewingCaseStudy.title}
                                        className="w-full h-64 object-cover rounded-md mb-4"
                                    />
                                )}

                                <div className="space-y-4 mb-4">
                                    <div>
                                        <h4 className="font-medium text-gray-900">The Challenge</h4>
                                        <p className="text-gray-700">{viewingCaseStudy.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Our Solution</h4>
                                        <p className="text-gray-700">{viewingCaseStudy.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Results Achieved</h4>
                                        <p className="text-gray-700">{viewingCaseStudy.results}</p>
                                    </div>
                                </div>

                                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: viewingCaseStudy.content }} />

                                <div className="mt-5">
                                    <button
                                        type="button"
                                        onClick={() => setViewingCaseStudy(null)}
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

            {/* Case Study Form Modal */}
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
                                    {currentCaseStudy ? 'Edit Case Study' : 'Add New Case Study'}
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
                                                    defaultValue={currentCaseStudy?.title || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="client" className="block text-sm font-medium text-gray-700">
                                                Client Name *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="client"
                                                    id="client"
                                                    defaultValue={currentCaseStudy?.client || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                                                Industry *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="industry"
                                                    id="industry"
                                                    defaultValue={currentCaseStudy?.industry || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700">
                                                Featured Image URL *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="featuredImage"
                                                    id="featuredImage"
                                                    defaultValue={currentCaseStudy?.featuredImage || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                            {currentCaseStudy?.featuredImage && (
                                                <div className="mt-2">
                                                    <img src={currentCaseStudy.featuredImage} alt="Preview" className="h-32 object-contain rounded-md" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="challenge" className="block text-sm font-medium text-gray-700">
                                                Client Challenge *
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="challenge"
                                                    name="challenge"
                                                    rows={2}
                                                    defaultValue={currentCaseStudy?.challenge || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="solution" className="block text-sm font-medium text-gray-700">
                                                Our Solution *
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="solution"
                                                    name="solution"
                                                    rows={3}
                                                    defaultValue={currentCaseStudy?.solution || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="results" className="block text-sm font-medium text-gray-700">
                                                Results Achieved *
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="results"
                                                    name="results"
                                                    rows={2}
                                                    defaultValue={currentCaseStudy?.results || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                                Detailed Content *
                                            </label>
                                            <div className="mt-1">
                                                <TiptapEditor content={content} setContent={setContent} />

                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                                                URL Slug
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="url"
                                                    id="url"
                                                    defaultValue={currentCaseStudy?.url || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Will be generated from title if empty"
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
                                                    defaultValue={currentCaseStudy?.status || 'draft'}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option value="draft">Draft</option>
                                                    <option value="published">Published</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        >
                                            {currentCaseStudy ? 'Update' : 'Create'}
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

export default CaseStudies;