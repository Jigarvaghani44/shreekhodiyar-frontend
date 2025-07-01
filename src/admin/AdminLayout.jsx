// src/layouts/AdminLayout.jsx
import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
    FiMenu, FiX, FiHome, FiBriefcase, FiFileText, FiUsers,
    FiMessageSquare, FiSettings, FiLogOut, FiLayers,
    FiShoppingBag, FiHelpCircle, FiBook, FiBell, FiUser
} from 'react-icons/fi';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: <FiHome /> },
        { name: 'Contact for Service', path: '/admin/contact', icon: <FiMessageSquare /> },
        { name: 'Portfolio', path: '/admin/portfolio', icon: <FiBriefcase /> },
        // { name: 'Services', path: '/admin/services', icon: <FiLayers /> },
        { name: 'Blogs', path: '/admin/blogs', icon: <FiFileText /> },
        { name: 'Testimonials', path: '/admin/testimonials', icon: <FiMessageSquare /> },
        { name: 'Team', path: '/admin/team', icon: <FiUsers /> },
        { name: 'Careers', path: '/admin/careers', icon: <FiBriefcase /> },
        // { name: 'Shopify Packages', path: '/admin/shopify-packages', icon: <FiShoppingBag /> },
        { name: 'Case Studies', path: '/admin/case-studies', icon: <FiBook /> },
        { name: 'email latter updated comunity', path: '/admin/email-updeted', icon: <FiBook /> },
        // { name: 'FAQs', path: '/admin/faqs', icon: <FiHelpCircle /> },
        // { name: 'Legal Pages', path: '/admin/legal', icon: <FiFileText /> },
        // { name: 'Settings', path: '/admin/settings', icon: <FiSettings /> },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleLogout = () => {
        confirmAlert({
            title: 'Confirm Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        // Add your logout logic here (clear tokens, etc.)
                        // console.log('User logged out');
                        navigate('/admin/login'); // Redirect to login page
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
            overlayClassName: 'bg-black bg-opacity-50'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
            {/* Mobile sidebar */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
                <div className="relative flex flex-col w-72 bg-gradient-to-b from-indigo-700 to-blue-800 shadow-xl">
                    <div className="flex items-center justify-between h-16 px-4 bg-indigo-900">
                        <span className="text-white font-bold text-xl">Admin Panel</span>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="text-white hover:text-indigo-200 focus:outline-none transition-colors"
                        >
                            <FiX className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-all ${isActive(item.path)
                                    ? 'bg-white text-indigo-700 shadow-md'
                                    : 'text-indigo-100 hover:bg-indigo-600 hover:text-white'}`}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="mr-3 text-lg">{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="p-4 border-t border-indigo-600">
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-3 text-sm font-medium text-indigo-100 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
                        >
                            <FiLogOut className="mr-3 text-lg" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                <div className="flex flex-col flex-1 min-h-0 bg-gradient-to-b from-indigo-700 to-blue-800 shadow-xl">
                    <div className="flex items-center h-16 px-4 bg-indigo-900">
                        <span className="text-white font-bold text-xl">Admin Panel</span>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <nav className="px-2 py-4 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-all ${isActive(item.path)
                                        ? 'bg-white text-indigo-700 shadow-md'
                                        : 'text-indigo-100 hover:bg-indigo-600 hover:text-white'}`}
                                >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="p-4 border-t border-indigo-600">
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-3 text-sm font-medium text-indigo-100 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
                        >
                            <FiLogOut className="mr-3 text-lg" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="lg:pl-64">
                {/* Mobile top navigation */}
                <div className="sticky top-0 z-10 flex items-center h-16 bg-white shadow-sm lg:hidden">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="px-4 text-indigo-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md transition-colors"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <FiMenu className="h-6 w-6" />
                    </button>
                    <div className="flex-1 px-4 flex justify-between">
                        <div className="flex-1 flex" />
                        <div className="ml-4 flex items-center space-x-4">
                            <button className="p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors relative">
                                <span className="sr-only">View notifications</span>
                                <FiBell className="h-6 w-6" />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                            </button>
                            <div className="relative">
                                <button className="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <span className="sr-only">Open user menu</span>
                                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                        <FiUser className="h-5 w-5" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop top navigation */}
                <div className="hidden md:flex sticky top-0 z-10 flex-shrink-0 h-16 bg-white shadow-sm">
                    <div className="flex-1 px-4 flex justify-between">
                        <div className="flex-1 flex" />
                        <div className="ml-4 flex items-center space-x-6">
                            <button className="p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors relative">
                                <span className="sr-only">View notifications</span>
                                <FiBell className="h-6 w-6" />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                            </button>
                            <div className="relative">
                                <button className="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <span className="sr-only">Open user menu</span>
                                    <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                        <FiUser className="h-5 w-5" />
                                    </div>
                                    <span className="ml-2 text-sm font-medium text-gray-700 hidden md:inline">Admin User</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content area */}
                <main className="flex-1 pb-8">
                    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="py-6">

                            <Outlet />

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;