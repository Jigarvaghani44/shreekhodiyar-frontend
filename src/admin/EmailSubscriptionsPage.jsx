/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
    FiMail,
    FiUser,
    FiCalendar,
    FiSearch,
    FiTrash2,
    FiEdit,
    FiCheck,
    FiX,
    FiChevronLeft,
    FiChevronRight,
    FiToggleLeft,
    FiToggleRight
} from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailSubscriptionsPage = () => {
    // State management
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selected, setSelected] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [statusFilter, setStatusFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);

    // Fetch subscriptions
    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem('authToken');

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/subscribe`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setSubscriptions(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to load subscriptions');
                toast.error('Failed to load subscriptions');
                setLoading(false);
            }
        };

        fetchSubscriptions();
    }, []);

    // Calculate stats
    const stats = {
        total: subscriptions.length,
        active: subscriptions.filter(s => s.status === 'active').length,
        inactive: subscriptions.filter(s => s.status === 'inactive').length
    };

    // Filter subscriptions
    const filteredSubscriptions = subscriptions.filter(sub => {
        const matchesSearch = sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (sub.name && sub.name.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesStatus = statusFilter === 'all' || sub.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredSubscriptions.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredSubscriptions.length / itemsPerPage);

    // Handlers
    const toggleSelect = (id) => {
        setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const startEditing = (subscription) => {
        setEditingId(subscription._id);
        setEditData({
            email: subscription.email,
            status: subscription.status
        });
    };
    // console.log(editingId, "editdata");

    const saveEdit = async (id) => {
        try {
            console.log(editingId, "editdata");
            const token = localStorage.getItem('authToken');
            await axios.put(`${process.env.REACT_APP_API_URL}/api/subscribe/${editingId}`, editData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/subscribe`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSubscriptions(response.data.data);
            setEditingId(null);
            toast.success('Subscription updated successfully');
        } catch (err) {
            console.error(err);
            toast.error('Failed to update subscription');
        }
    };

    const deleteSubscriptions = async () => {
        if (!window.confirm('Are you sure you want to delete the selected subscriptions?')) return;

        try {
            await Promise.all(selected.map(id =>
                axios.delete(`${process.env.REACT_APP_API_URL}/api/subscribe/${id}`)
            ));
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/subscribe`);
            setSubscriptions(response.data.data);
            setSelected([]);
            toast.success('Selected subscriptions deleted');
        } catch (err) {
            console.error(err);
            toast.error('Failed to delete subscriptions');
        }
    };

    const toggleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
        try {
            const token = localStorage.getItem('authToken');
            await axios.put(`${process.env.REACT_APP_API_URL}/api/subscribe/${id}`, {
                status: newStatus
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/subscribe`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setSubscriptions(response.data.data);
            toast.success(`Subscription ${newStatus === 'active' ? 'activated' : 'deactivated'}`);
        } catch (err) {
            console.error(err);
            toast.error('Failed to update subscription status');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            <FiMail className="inline mr-2" />
                            Email Subscriptions
                        </h1>
                        <p className="text-gray-600">
                            Manage your email subscribers and their preferences
                        </p>
                    </div>

                    {selected.length > 0 && (
                        <button
                            onClick={deleteSubscriptions}
                            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition mt-4 md:mt-0"
                        >
                            <FiTrash2 className="mr-2" />
                            Delete Selected ({selected.length})
                        </button>
                    )}
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                        <h3 className="text-gray-500 text-sm">Total Subscribers</h3>
                        <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                        <h3 className="text-gray-500 text-sm">Active</h3>
                        <p className="text-2xl font-bold text-green-600">{stats.active}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                        <h3 className="text-gray-500 text-sm">Inactive</h3>
                        <p className="text-2xl font-bold text-red-600">{stats.inactive}</p>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <div className="relative flex-grow">
                            <FiSearch className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by email or name..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Statuses</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Subscriptions Table */}
                {!loading && !error && (
                    <>
                        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden mb-4">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Subscribed On
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
                                        {currentItems.length > 0 ? (
                                            currentItems.map((subscription) => (
                                                <tr key={subscription._id} className="hover:bg-gray-50">

                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {editingId === subscription._id ? (
                                                            <input
                                                                type="email"
                                                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                                                value={editData.email}
                                                                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                                            />
                                                        ) : (
                                                            <div className="text-sm font-medium text-gray-900">{subscription.email}</div>
                                                        )}
                                                    </td>

                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {new Date(subscription.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <button
                                                            onClick={() => toggleStatus(subscription._id, subscription.status)}
                                                            className={`relative inline-flex items-center rounded-full h-6 w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${subscription.status === 'active' ? 'bg-green-500' : 'bg-gray-200'
                                                                }`}
                                                        >
                                                            <span className={`inline-block h-4 w-4 transform transition-transform rounded-full bg-white ${subscription.status === 'active' ? 'translate-x-6' : 'translate-x-1'
                                                                }`} />
                                                            <span className="sr-only">
                                                                {subscription.status === 'active' ? 'Active' : 'Inactive'}
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        {editingId === subscription._id ? (
                                                            <div className="flex space-x-2 justify-end">
                                                                <button
                                                                    onClick={saveEdit}
                                                                    className="text-green-600 hover:text-green-900"
                                                                    title="Save"
                                                                >
                                                                    <FiCheck className="h-5 w-5" />
                                                                </button>
                                                                <button
                                                                    onClick={() => setEditingId(null)}
                                                                    className="text-red-600 hover:text-red-900"
                                                                    title="Cancel"
                                                                >
                                                                    <FiX className="h-5 w-5" />
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <button
                                                                onClick={() => startEditing(subscription)}
                                                                className="text-blue-600 hover:text-blue-900"
                                                                title="Edit"
                                                            >
                                                                <FiEdit className="h-5 w-5" />
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                                                    No subscriptions found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
                            <div className="text-sm text-gray-700 mb-4 md:mb-0">
                                Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                                <span className="font-medium">
                                    {Math.min(indexOfLastItem, filteredSubscriptions.length)}
                                </span> of{' '}
                                <span className="font-medium">{filteredSubscriptions.length}</span> results
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-3 py-1 border rounded text-sm font-medium ${currentPage === 1
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <FiChevronLeft className="inline mr-1" /> Previous
                                </button>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages || totalPages === 0}
                                    className={`px-3 py-1 border rounded text-sm font-medium ${currentPage === totalPages || totalPages === 0
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    Next <FiChevronRight className="inline ml-1" />
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* Export Modal */}
                {showModal && (
                    <div className="fixed z-50 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75" />
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                        Export Subscribers
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Export Format
                                            </label>
                                            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                                <option>CSV</option>
                                                <option>Excel</option>
                                                <option>JSON</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Status Filter
                                            </label>
                                            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                                <option>All Subscribers</option>
                                                <option>Active Only</option>
                                                <option>Inactive Only</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                                    >
                                        Export
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmailSubscriptionsPage;