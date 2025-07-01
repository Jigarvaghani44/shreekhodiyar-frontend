/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { useState, useEffect } from 'react';
import {
    FiEdit2, FiTrash2, FiPlus, FiSearch,
    FiStar, FiEye, FiCheck, FiX, FiCalendar,
    FiImage, FiBriefcase, FiClock, FiMail
} from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(null);
    const [viewingTestimonial, setViewingTestimonial] = useState(null);
    const [activeTab, setActiveTab] = useState('pending'); // 'pending', 'published', 'rejected'
    const [previewImage, setPreviewImage] = useState(null);

    // Fetch testimonials from API
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/testimonial`);
                setTestimonials(response.data.data);
            } catch (error) {
                toast.error('Failed to fetch testimonials');
                console.error('Error fetching testimonials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    // Filter testimonials based on search and status
    const filteredTestimonials = testimonials.filter(testimonial => {
        const matchesSearch =
            testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            testimonial.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            testimonial.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            testimonial.project?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = testimonial.status === activeTab;

        return matchesSearch && matchesStatus;
    });

    // Count testimonials by status
    const statusCounts = testimonials.reduce((acc, testimonial) => {
        acc[testimonial.status] = (acc[testimonial.status] || 0) + 1;
        return acc;
    }, { pending: 0, published: 0, rejected: 0 });

    // const handleDelete = async (id) => {
    //     if (window.confirm('Are you sure you want to delete this testimonial?')) {
    //         try {
    //             await axios.delete(`${process.env.REACT_APP_API_URL}/api/testimonials/${id}`);
    //             setTestimonials(testimonials.filter(t => t._id !== id));
    //             toast.success('Testimonial deleted successfully');
    //         } catch (error) {
    //             toast.error('Failed to delete testimonial');
    //             console.error('Error deleting testimonial:', error);
    //         }
    //     }
    // };

    const updateStatus = async (id, newStatus) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.put(`${process.env.REACT_APP_API_URL}/api/testimonials/${id}`, { status: newStatus }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/testimonial`);
            setTestimonials(response.data.data);
            toast.success(`Testimonial ${newStatus} successfully`);
        } catch (error) {
            toast.error(`Failed to ${newStatus} testimonial`);
            console.error(`Error ${newStatus} testimonial:`, error);
        }
    };

    const handleEdit = (testimonial) => {
        setCurrentTestimonial(testimonial);
        setShowModal(true);
        setPreviewImage(testimonial.image || null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const testimonialData = {
            name: data.name,
            email: data.email,
            role: data.role,
            company: data.company,
            companyLogo: data.companyLogo,
            content: data.content,
            rating: parseInt(data.rating, 10),
            project: data.project,
            date: data.date,
            image: data.image,
            featured: data.featured === 'on',
            status: data.status || 'pending'
        };

        try {
            if (currentTestimonial) {
                const token = localStorage.getItem('authToken');
                await axios.put(`${process.env.REACT_APP_API_URL}/api/testimonials/${currentTestimonial._id}`, testimonialData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } else {
                await axios.post(`${process.env.REACT_APP_API_URL}/api/testimonials`, testimonialData);
            }

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/testimonial`);
            setTestimonials(response.data.data);

            setShowModal(false);
            setCurrentTestimonial(null);
            setPreviewImage(null);
            toast.success(`Testimonial ${currentTestimonial ? 'updated' : 'created'} successfully`);
        } catch (error) {
            toast.error(`Failed to ${currentTestimonial ? 'update' : 'create'} testimonial`);
            console.error(`Error ${currentTestimonial ? 'updating' : 'creating'} testimonial:`, error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const renderStars = (rating) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <FiStar
                        key={i}
                        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        );
    };

    if (loading) return <div className="flex justify-center items-center h-64"><p>Loading testimonials...</p></div>;

    return (
        <div className="space-y-6 p-4">
            {/* Header and Add New Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Testimonial Management</h1>
                <button
                    onClick={() => {
                        setCurrentTestimonial(null);
                        setShowModal(true);
                        setPreviewImage(null);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <FiPlus className="mr-2" /> Add New Testimonial
                </button>
            </div>

            {/* Status Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'pending' ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        Pending ({statusCounts.pending})
                    </button>
                    <button
                        onClick={() => setActiveTab('published')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'published' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        Published ({statusCounts.published})
                    </button>
                    <button
                        onClick={() => setActiveTab('rejected')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'rejected' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        Rejected ({statusCounts.rejected})
                    </button>
                </nav>
            </div>

            {/* Search */}
            <div className="bg-white shadow rounded-lg p-4">
                <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search testimonials..."
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Testimonials List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Person & Company
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Project
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rating
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
                            {filteredTestimonials.length > 0 ? (
                                filteredTestimonials.map((testimonial) => (
                                    <tr key={testimonial._id} className={testimonial.status === 'pending' ? 'bg-yellow-50' : testimonial.status === 'rejected' ? 'bg-red-50' : ''}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                                    <div className="text-xs text-gray-400 mt-1">{testimonial.company}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {testimonial.project}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {renderStars(testimonial.rating)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${testimonial.status === 'published' ? 'bg-green-100 text-green-800' :
                                                testimonial.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                {testimonial.status}
                                            </span>
                                            {testimonial.featured && (
                                                <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    Featured
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <FiCalendar className="mr-1" />
                                                {testimonial.date || new Date(testimonial.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                            <button
                                                onClick={() => handleEdit(testimonial)}
                                                className="text-indigo-600 hover:text-indigo-900 inline-block"
                                                title="Edit"
                                            >
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                onClick={() => setViewingTestimonial(testimonial)}
                                                className="text-blue-600 hover:text-blue-900 inline-block"
                                                title="View"
                                            >
                                                <FiEye />
                                            </button>
                                            {testimonial.status !== 'published' && (
                                                <button
                                                    onClick={() => updateStatus(testimonial._id, 'published')}
                                                    className="text-green-600 hover:text-green-900 inline-block"
                                                    title="Publish"
                                                >
                                                    <FiCheck />
                                                </button>
                                            )}
                                            {testimonial.status !== 'rejected' && (
                                                <button
                                                    onClick={() => updateStatus(testimonial._id, 'rejected')}
                                                    className="text-red-600 hover:text-red-900 inline-block"
                                                    title="Reject"
                                                >
                                                    <FiX />
                                                </button>
                                            )}
                                            {/* <button
                                                onClick={() => handleDelete(testimonial._id)}
                                                className="text-red-600 hover:text-red-900 inline-block"
                                                title="Delete"
                                            >
                                                <FiTrash2 />
                                            </button> */}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                                        No {activeTab} testimonials found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Testimonial Preview Modal */}
            {viewingTestimonial && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                        Testimonial Preview
                                    </h3>
                                    <button
                                        onClick={() => setViewingTestimonial(null)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <FiX className="h-6 w-6" />
                                    </button>
                                </div>

                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 h-16 w-16">
                                        <img
                                            className="h-16 w-16 rounded-full object-cover"
                                            src={viewingTestimonial.image}
                                            alt={viewingTestimonial.name}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">{viewingTestimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{viewingTestimonial.role}</p>
                                        <div className="mt-1">
                                            {renderStars(viewingTestimonial.rating)}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Email:</p>
                                        <p className="text-gray-900 flex items-center">
                                            <FiMail className="mr-1" />
                                            {viewingTestimonial.email || 'Not provided'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Company:</p>
                                        <p className="text-gray-900 flex items-center">
                                            <FiBriefcase className="mr-1" />
                                            {viewingTestimonial.company || 'Not provided'}
                                        </p>
                                    </div>
                                </div>

                                {viewingTestimonial.companyLogo && (
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-500 mb-1">Company Logo:</p>
                                        <img src={viewingTestimonial.companyLogo} alt="Company logo" className="h-12 object-contain" />
                                    </div>
                                )}

                                <div className="mb-4">
                                    <p className="text-sm font-medium text-gray-700">Project:</p>
                                    <p className="text-gray-900">{viewingTestimonial.project}</p>
                                </div>

                                <div className="mb-4">
                                    <p className="text-sm font-medium text-gray-700">Date:</p>
                                    <p className="text-gray-900 flex items-center">
                                        <FiCalendar className="mr-1" />
                                        {viewingTestimonial.date || new Date(viewingTestimonial.createdAt).toLocaleDateString()}
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <blockquote className="text-gray-700 italic">
                                        &ldquo;{viewingTestimonial.content}&rdquo;
                                    </blockquote>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-2">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${viewingTestimonial.status === 'published' ? 'bg-green-100 text-green-800' :
                                            viewingTestimonial.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                            {viewingTestimonial.status}
                                        </span>
                                        {viewingTestimonial.featured && (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-x-2">
                                        {viewingTestimonial.status !== 'published' && (
                                            <button
                                                onClick={() => {
                                                    updateStatus(viewingTestimonial._id, 'published');
                                                    setViewingTestimonial(null);
                                                }}
                                                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700"
                                            >
                                                <FiCheck className="mr-1" /> Publish
                                            </button>
                                        )}
                                        {viewingTestimonial.status !== 'rejected' && (
                                            <button
                                                onClick={() => {
                                                    updateStatus(viewingTestimonial._id, 'rejected');
                                                    setViewingTestimonial(null);
                                                }}
                                                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700"
                                            >
                                                <FiX className="mr-1" /> Reject
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Testimonial Form Modal */}
            {showModal && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {currentTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
                                </h3>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Name *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    defaultValue={currentTestimonial?.name || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email *
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiMail className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    defaultValue={currentTestimonial?.email || ''}
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                                Role/Position *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="role"
                                                    id="role"
                                                    defaultValue={currentTestimonial?.role || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                                Company *
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiBriefcase className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    id="company"
                                                    defaultValue={currentTestimonial?.company || ''}
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="project" className="block text-sm font-medium text-gray-700">
                                                Project Name *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="project"
                                                    id="project"
                                                    defaultValue={currentTestimonial?.project || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                                Date *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    id="date"
                                                    defaultValue={currentTestimonial?.date || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                                Testimonial Content *
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="content"
                                                    name="content"
                                                    rows={3}
                                                    defaultValue={currentTestimonial?.content || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                                                Rating (1-5) *
                                            </label>
                                            <div className="mt-1">
                                                <select
                                                    id="rating"
                                                    name="rating"
                                                    defaultValue={currentTestimonial?.rating || 5}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                >
                                                    {[1, 2, 3, 4, 5].map(num => (
                                                        <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                                                    ))}
                                                </select>
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
                                                    defaultValue={currentTestimonial?.status || 'pending'}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="published">Published</option>
                                                    <option value="rejected">Rejected</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                                Person Image URL
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="image"
                                                    id="image"
                                                    defaultValue={currentTestimonial?.image || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            {previewImage && (
                                                <div className="mt-2">
                                                    <img src={previewImage} alt="Preview" className="h-20 w-20 rounded-full object-cover" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="companyLogo" className="block text-sm font-medium text-gray-700">
                                                Company Logo URL
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="companyLogo"
                                                    id="companyLogo"
                                                    defaultValue={currentTestimonial?.companyLogo || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            {currentTestimonial?.companyLogo && (
                                                <div className="mt-2">
                                                    <img src={currentTestimonial.companyLogo} alt="Company logo preview" className="h-12 object-contain" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="sm:col-span-6">
                                            <div className="flex items-center">
                                                <input
                                                    id="featured"
                                                    name="featured"
                                                    type="checkbox"
                                                    defaultChecked={currentTestimonial?.featured || false}
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                                                    Featured Testimonial
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        >
                                            {currentTestimonial ? 'Update' : 'Create'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowModal(false);
                                                setPreviewImage(null);
                                            }}
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

export default Testimonials;