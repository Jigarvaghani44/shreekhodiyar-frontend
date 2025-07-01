/* eslint-disable no-alert */
// src/pages/admin/ShopifyPackages.jsx
import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiDollarSign, FiCheck, FiX, FiEye } from 'react-icons/fi';

const ShopifyPackages = () => {
    const [packages, setPackages] = useState([
        {
            id: 1,
            name: "Starter Package",
            price: 999,
            features: [
                "Basic Shopify setup",
                "5 product listings",
                "Standard theme customization"
            ],
            recommended: false,
            status: "active",
            description: "Perfect for small businesses just starting with Shopify."
        },
        {
            id: 2,
            name: "Professional Package",
            price: 2499,
            features: [
                "Advanced Shopify setup",
                "Unlimited product listings",
                "Premium theme customization",
                "SEO optimization",
                "Payment gateway integration"
            ],
            recommended: true,
            status: "active",
            description: "Comprehensive solution for growing businesses with advanced needs."
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentPackage, setCurrentPackage] = useState(null);
    const [featuresInput, setFeaturesInput] = useState('');
    const [viewingPackage, setViewingPackage] = useState(null);

    const filteredPackages = packages.filter(pkg =>
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this package?')) {
            setPackages(packages.filter(pkg => pkg.id !== id));
        }
    };

    const handleEdit = (pkg) => {
        setCurrentPackage(pkg);
        setFeaturesInput(pkg.features.join('\n'));
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const packageData = {
            ...data,
            price: parseFloat(data.price),
            features: featuresInput.split('\n').filter(f => f.trim() !== ''),
            recommended: data.recommended === 'on',
            status: data.status,
            description: data.description || ''
        };

        if (currentPackage) {
            setPackages(packages.map(pkg =>
                pkg.id === currentPackage.id ? { ...pkg, ...packageData } : pkg
            ));
        } else {
            const newPackage = {
                id: packages.length + 1,
                ...packageData
            };
            setPackages([...packages, newPackage]);
        }

        setShowModal(false);
        setCurrentPackage(null);
        setFeaturesInput('');
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Shopify Packages</h1>
                <button
                    onClick={() => {
                        setCurrentPackage(null);
                        setFeaturesInput('');
                        setShowModal(true);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <FiPlus className="mr-2" /> Add New Package
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
                        placeholder="Search packages..."
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Packages List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.length > 0 ? (
                    filteredPackages.map((pkg) => (
                        <div key={pkg.id} className={`bg-white shadow rounded-lg overflow-hidden ${pkg.recommended ? 'ring-2 ring-indigo-500' : ''}`}>
                            <div className="px-6 py-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                                        {pkg.recommended && (
                                            <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                                Recommended
                                            </span>
                                        )}
                                    </div>
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${pkg.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {pkg.status}
                                    </span>
                                </div>
                                <div className="mt-2 flex items-center">
                                    <FiDollarSign className="text-gray-500" />
                                    <span className="ml-1 text-2xl font-bold">{pkg.price.toLocaleString()}</span>
                                </div>
                                {pkg.description && (
                                    <p className="mt-2 text-gray-600 text-sm">{pkg.description}</p>
                                )}
                                <ul className="mt-4 space-y-2">
                                    {pkg.features.slice(0, 3).map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <FiCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="ml-2 text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                    {pkg.features.length > 3 && (
                                        <li className="text-sm text-gray-500">+ {pkg.features.length - 3} more features</li>
                                    )}
                                </ul>
                            </div>
                            <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
                                <button
                                    onClick={() => setViewingPackage(pkg)}
                                    className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    title="Preview"
                                >
                                    <FiEye className="mr-1" /> View
                                </button>
                                <button
                                    onClick={() => handleEdit(pkg)}
                                    className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <FiEdit2 className="mr-1" /> Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(pkg.id)}
                                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <FiTrash2 className="mr-1" /> Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full bg-white shadow rounded-lg p-6 text-center">
                        <p className="text-gray-500">No packages found</p>
                    </div>
                )}
            </div>

            {/* Package Preview Modal */}
            {viewingPackage && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        {viewingPackage.name}
                                    </h3>
                                    <button
                                        onClick={() => setViewingPackage(null)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <FiX className="h-6 w-6" />
                                    </button>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FiDollarSign className="text-gray-500" />
                                        <span className="ml-1 text-2xl font-bold">{viewingPackage.price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex space-x-2">
                                        {viewingPackage.recommended && (
                                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                                                Recommended
                                            </span>
                                        )}
                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${viewingPackage.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                            {viewingPackage.status}
                                        </span>
                                    </div>
                                </div>

                                {viewingPackage.description && (
                                    <p className="mt-3 text-gray-600">{viewingPackage.description}</p>
                                )}

                                <div className="mt-6">
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">Features</h4>
                                    <ul className="space-y-2">
                                        {viewingPackage.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <FiCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="ml-2 text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setViewingPackage(null);
                                            handleEdit(viewingPackage);
                                        }}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <FiEdit2 className="mr-2" /> Edit Package
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Package Form Modal */}
            {showModal && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {currentPackage ? 'Edit Shopify Package' : 'Add New Shopify Package'}
                                </h3>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Package Name *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    defaultValue={currentPackage?.name || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                Price *
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-500 sm:text-sm">$</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    name="price"
                                                    id="price"
                                                    step="0.01"
                                                    min="0"
                                                    defaultValue={currentPackage?.price || ''}
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="0.00"
                                                    required
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
                                                    defaultValue={currentPackage?.status || 'active'}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                Description
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    rows={3}
                                                    defaultValue={currentPackage?.description || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <div className="flex items-center">
                                                <input
                                                    id="recommended"
                                                    name="recommended"
                                                    type="checkbox"
                                                    defaultChecked={currentPackage?.recommended || false}
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="recommended" className="ml-2 block text-sm text-gray-700">
                                                    Recommended Package
                                                </label>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="features" className="block text-sm font-medium text-gray-700">
                                                Features (one per line) *
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="features"
                                                    name="features"
                                                    rows={5}
                                                    value={featuresInput}
                                                    onChange={(e) => setFeaturesInput(e.target.value)}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        >
                                            {currentPackage ? 'Update' : 'Create'}
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

export default ShopifyPackages;