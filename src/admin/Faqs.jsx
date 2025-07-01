/* eslint-disable no-alert */
// src/pages/admin/Faqs.jsx
import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiChevronUp, FiChevronDown, FiEye } from 'react-icons/fi';

const Faqs = () => {
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "How long does it take to build a Shopify store?",
            answer: "The timeline varies based on complexity, but most basic stores take 2-4 weeks.",
            category: "General",
            order: 1,
            status: "published"
        },
        {
            id: 2,
            question: "Do you offer ongoing maintenance?",
            answer: "Yes, we offer monthly maintenance packages to keep your store running smoothly.",
            category: "Support",
            order: 2,
            status: "published"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentFaq, setCurrentFaq] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    const categories = ["General", "Support", "Pricing", "Technical", "Other"];

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this FAQ?')) {
            setFaqs(faqs.filter(faq => faq.id !== id));
        }
    };

    const handleEdit = (faq) => {
        setCurrentFaq(faq);
        setShowModal(true);
    };

    const handleOrderChange = (id, direction) => {
        const index = faqs.findIndex(faq => faq.id === id);
        if (index === -1) return;

        const newOrder = [...faqs];
        if (direction === 'up' && index > 0) {
            [newOrder[index].order, newOrder[index - 1].order] = [newOrder[index - 1].order, newOrder[index].order];
            newOrder.sort((a, b) => a.order - b.order);
            setFaqs(newOrder);
        } else if (direction === 'down' && index < faqs.length - 1) {
            [newOrder[index].order, newOrder[index + 1].order] = [newOrder[index + 1].order, newOrder[index].order];
            newOrder.sort((a, b) => a.order - b.order);
            setFaqs(newOrder);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const faqData = {
            ...data,
            order: parseInt(data.order, 10)
        };

        if (currentFaq) {
            setFaqs(faqs.map(faq =>
                faq.id === currentFaq.id ? { ...faq, ...faqData } : faq
            ));
        } else {
            const newFaq = {
                id: faqs.length + 1,
                ...faqData,
                status: "published"
            };
            setFaqs([...faqs, newFaq]);
        }

        setShowModal(false);
        setCurrentFaq(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">FAQs Management</h1>
                <div className="flex gap-2">
                    <button
                        onClick={() => setShowPreview(!showPreview)}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <FiEye className="mr-2" /> {showPreview ? 'Hide Preview' : 'Show Preview'}
                    </button>
                    <button
                        onClick={() => {
                            setCurrentFaq(null);
                            setShowModal(true);
                        }}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <FiPlus className="mr-2" /> Add New FAQ
                    </button>
                </div>
            </div>

            {/* Preview Mode */}
            {showPreview && (
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">FAQs Preview</h2>
                    <div className="space-y-4">
                        {filteredFaqs
                            .filter(faq => faq.status === 'published')
                            .sort((a, b) => a.order - b.order)
                            .map((faq) => (
                                <div key={faq.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                                    <span className="mt-2 inline-block px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800">
                                        {faq.category}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            {/* Management Mode */}
            {!showPreview && (
                <>
                    {/* Search */}
                    <div className="bg-white shadow rounded-lg p-4">
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search FAQs..."
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* FAQs List */}
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Question
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Order
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredFaqs.length > 0 ? (
                                        filteredFaqs.sort((a, b) => a.order - b.order).map((faq) => (
                                            <tr key={faq.id}>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm font-medium text-gray-900">{faq.question}</div>
                                                    <div className="text-sm text-gray-500 mt-1">{faq.answer}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {faq.category}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${faq.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                        {faq.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center space-x-1">
                                                        <button
                                                            onClick={() => handleOrderChange(faq.id, 'up')}
                                                            className="text-gray-400 hover:text-gray-600"
                                                            disabled={faq.order === 1}
                                                        >
                                                            <FiChevronUp className={`h-4 w-4 ${faq.order === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} />
                                                        </button>
                                                        <span className="text-sm text-gray-500">{faq.order}</span>
                                                        <button
                                                            onClick={() => handleOrderChange(faq.id, 'down')}
                                                            className="text-gray-400 hover:text-gray-600"
                                                            disabled={faq.order === faqs.length}
                                                        >
                                                            <FiChevronDown className={`h-4 w-4 ${faq.order === faqs.length ? 'opacity-50 cursor-not-allowed' : ''}`} />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={() => handleEdit(faq)}
                                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                    >
                                                        <FiEdit2 />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(faq.id)}
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
                                                No FAQs found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}

            {/* FAQ Form Modal */}
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {currentFaq ? 'Edit FAQ' : 'Add New FAQ'}
                                </h3>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                                                Question *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="question"
                                                    id="question"
                                                    defaultValue={currentFaq?.question || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
                                                Answer *
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="answer"
                                                    name="answer"
                                                    rows={3}
                                                    defaultValue={currentFaq?.answer || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                                Category *
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="category"
                                                    name="category"
                                                    defaultValue={currentFaq?.category || 'General'}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                >
                                                    {categories.map(category => (
                                                        <option key={category} value={category}>{category}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="order" className="block text-sm font-medium text-gray-700">
                                                Display Order *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="number"
                                                    name="order"
                                                    id="order"
                                                    min="1"
                                                    defaultValue={currentFaq?.order || faqs.length + 1}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                                Status
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="status"
                                                    name="status"
                                                    defaultValue={currentFaq?.status || 'published'}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option value="published">Published</option>
                                                    <option value="draft">Draft</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        >
                                            {currentFaq ? 'Update' : 'Create'}
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

export default Faqs;