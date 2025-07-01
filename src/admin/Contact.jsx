/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-alert */
// src/pages/admin/Contact.jsx
import { useState, useEffect } from 'react';
import {
    FiSearch, FiMail, FiUser, FiMessageSquare,
    FiClock, FiTrash2, FiEye, FiCheck, FiX, FiInbox
} from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [viewingSubmission, setViewingSubmission] = useState(null);
    const [activeStatus, setActiveStatus] = useState('pending'); // 'all', 'pending', 'done', 'deleted'

    // Fetch submissions from API
    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`);
                setSubmissions(response.data.data);
            } catch (error) {
                toast.error('Failed to fetch submissions');
                console.error('Error fetching submissions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    // Filter submissions based on search and status
    const filteredSubmissions = submissions.filter(sub => {
        const matchesSearch =
            sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.subject.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            activeStatus === 'all' ||
            sub.status === activeStatus;

        return matchesSearch && matchesStatus;
    });

    // const handleDelete = async (id, newStatus) => {
    //     if (window.confirm('Are you sure you want to delete this submission?')) {
    //         try {
    //             await axios.put(`${process.env.REACT_APP_API_URL}/api/contacts/${id}`, { status: newStatus });
    //             const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`);
    //             setSubmissions(response.data.data);
    //             toast.success('Status updated successfully');
    //         } catch (error) {
    //             toast.error('Failed to update status');
    //             console.error('Error updating status:', error);
    //         }
    //     }
    // };
    const handlePermanantDelete = async (id) => {
        if (window.confirm('Are you sure you want to permanent delete this submission?')) {
            try {
                const token = localStorage.getItem('authToken');
                await axios.delete(`${process.env.REACT_APP_API_URL}/api/contact/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`);
                setSubmissions(response.data.data);
                toast.success('Submission deleted successfully');
            } catch (error) {
                toast.error('Failed to delete submission');
                console.error('Error deleting submission:', error);
            }
        }
    };

    const updateStatus = async (id, newStatus) => {
        if (newStatus == "deleted") {
            if (window.confirm('Are you sure you want to delete this submission?')) {
                try {
                    const token = localStorage.getItem('authToken');
                    await axios.put(`${process.env.REACT_APP_API_URL}/api/contacts/${id}`, { status: newStatus }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`);
                    setSubmissions(response.data.data);
                    toast.success('Status updated successfully');
                } catch (error) {
                    toast.error('Failed to update status');
                    console.error('Error updating status:', error);
                }
            }
        } else {
            try {
                const token = localStorage.getItem('authToken');
                await axios.put(`${process.env.REACT_APP_API_URL}/api/contacts/${id}`, { status: newStatus }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/contact`);
                setSubmissions(response.data.data);
                toast.success('Status updated successfully');
            } catch (error) {
                toast.error('Failed to update status');
                console.error('Error updating status:', error);
            }
        }

    };

    // Count submissions by status
    const statusCounts = submissions.reduce((acc, sub) => {
        acc[sub.status] = (acc[sub.status] || 0) + 1;
        acc.all++;
        return acc;
    }, { all: 0 });

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Contact Form Submissions</h1>

            {/* Status Navigation Bar */}
            <div className="bg-white shadow rounded-lg">
                <nav className="flex overflow-x-auto">
                    <button
                        onClick={() => setActiveStatus('all')}
                        className={`px-4 py-3 text-sm font-medium flex items-center space-x-2 ${activeStatus === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <FiInbox className="h-4 w-4" />
                        <span>All</span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {statusCounts.all}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveStatus('pending')}
                        className={`px-4 py-3 text-sm font-medium flex items-center space-x-2 ${activeStatus === 'pending' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <FiClock className="h-4 w-4" />
                        <span>Pending</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {statusCounts.pending || 0}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveStatus('done')}
                        className={`px-4 py-3 text-sm font-medium flex items-center space-x-2 ${activeStatus === 'done' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <FiCheck className="h-4 w-4" />
                        <span>Done</span>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {statusCounts.done || 0}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveStatus('deleted')}
                        className={`px-4 py-3 text-sm font-medium flex items-center space-x-2 ${activeStatus === 'deleted' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <FiTrash2 className="h-4 w-4" />
                        <span>Deleted</span>
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                            {statusCounts.deleted || 0}
                        </span>
                    </button>
                </nav>
            </div>

            {/* Search Bar */}
            <div className="bg-white shadow rounded-lg p-4">
                <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search submissions..."
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="bg-white shadow rounded-lg p-8 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto" />
                    <p className="mt-4 text-gray-600">Loading submissions...</p>
                </div>
            )}

            {/* Submissions List */}
            {!loading && (
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        From
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredSubmissions.length > 0 ? (
                                    filteredSubmissions.map((sub) => (
                                        <tr key={sub._id} className={sub.status === 'pending' ? 'bg-blue-50' : sub.status === 'deleted' ? 'bg-red-50' : ''}>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <FiUser className="h-5 w-5 text-blue-500" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{sub.name}</div>
                                                        <div className="text-sm text-gray-500 flex items-center">
                                                            <FiMail className="mr-1" /> {sub.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${sub.status === 'done' ? 'bg-green-100 text-green-800' :
                                                    sub.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        sub.status === 'deleted' ? 'bg-red-100 text-red-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <FiClock className="mr-1" />
                                                    {new Date(sub.createdAt).toLocaleString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <button
                                                    onClick={() => setViewingSubmission(sub)}
                                                    className="text-blue-600 hover:text-blue-900 inline-block"
                                                    title="View"
                                                >
                                                    <FiEye />
                                                </button>
                                                {sub.status !== 'done' && (
                                                    <button
                                                        onClick={() => updateStatus(sub._id, 'done')}
                                                        className="text-green-600 hover:text-green-900 inline-block"
                                                        title="Mark as Done"
                                                    >
                                                        <FiCheck />
                                                    </button>
                                                )}
                                                {sub.status !== 'pending' && sub.status !== 'deleted' && (
                                                    <button
                                                        onClick={() => updateStatus(sub._id, 'pending')}
                                                        className="text-yellow-600 hover:text-yellow-900 inline-block"
                                                        title="Mark as Pending"
                                                    >
                                                        <FiClock />
                                                    </button>
                                                )}
                                                {sub.status !== 'deleted' && (
                                                    <button
                                                        onClick={() => updateStatus(sub._id, 'deleted')}
                                                        className="text-red-600 hover:text-red-900 inline-block"
                                                        title="Delete"
                                                    >
                                                        <FiTrash2 />
                                                    </button>
                                                )}
                                                {sub.status == 'deleted' && (
                                                    <button
                                                        onClick={() => handlePermanantDelete(sub._id, 'deleted')}
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
                                        <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                                            No submissions found matching your criteria
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Submission Preview Modal */}
            {viewingSubmission && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                                    {viewingSubmission.subject}
                                </h3>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <FiUser className="h-5 w-5 text-blue-500" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">{viewingSubmission.name}</p>
                                            <p className="text-sm text-gray-500 flex items-center">
                                                <FiMail className="mr-1" /> {viewingSubmission.email}
                                            </p>
                                        </div>
                                    </div>

                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${viewingSubmission.status === 'done' ? 'bg-green-100 text-green-800' :
                                        viewingSubmission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            viewingSubmission.status === 'deleted' ? 'bg-red-100 text-red-800' :
                                                'bg-gray-100 text-gray-800'
                                        }`}>
                                        {viewingSubmission.status.charAt(0).toUpperCase() + viewingSubmission.status.slice(1)}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <FiClock className="mr-1" />
                                        {new Date(viewingSubmission.createdAt).toLocaleString()}
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4">
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">Message:</h4>
                                    <div className="prose max-w-none text-sm text-gray-700">
                                        {viewingSubmission.message}
                                    </div>
                                </div>

                                <div className="mt-5 flex justify-between">
                                    <div className="space-x-2">
                                        {viewingSubmission.status !== 'done' && (
                                            <button
                                                onClick={() => {
                                                    updateStatus(viewingSubmission._id, 'done');
                                                    setViewingSubmission(null);
                                                }}
                                                className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-500 hover:bg-green-600"
                                            >
                                                <FiCheck className="mr-1" /> Mark as Done
                                            </button>
                                        )}
                                        {viewingSubmission.status !== 'pending' && viewingSubmission.status !== 'deleted' && (
                                            <button
                                                onClick={() => {
                                                    updateStatus(viewingSubmission._id, 'pending');
                                                    setViewingSubmission(null);
                                                }}
                                                className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-yellow-500 hover:bg-yellow-600"
                                            >
                                                <FiClock className="mr-1" /> Mark as Pending
                                            </button>
                                        )}
                                        {viewingSubmission.status !== 'deleted' && (
                                            <button
                                                onClick={() => {
                                                    updateStatus(viewingSubmission._id, 'deleted');
                                                    setViewingSubmission(null);
                                                }}
                                                className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-500 hover:bg-red-600"
                                            >
                                                <FiTrash2 className="mr-1" /> Mark as Deleted
                                            </button>
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setViewingSubmission(null)}
                                        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Close
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

export default Contact;