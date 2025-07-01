/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
    FiTrendingUp,
    FiUsers,
    FiFileText,
    FiMessageSquare,
    FiBriefcase,
    FiDollarSign,
    FiPieChart,
    FiDownload,
    FiCalendar,
    FiBarChart2,
    FiActivity, FiEdit2, FiPlus
} from 'react-icons/fi';
import ChartRenderer from './ChartRenderer';

const Dashboard = () => {
    const [timeRange, setTimeRange] = useState('monthly');
    const [activeTab, setActiveTab] = useState('overview');

    // Stats Data
    const stats = [
        { name: 'Total Revenue', value: '$48,256', icon: <FiDollarSign className="h-6 w-6 text-indigo-600" />, change: '12%', changeType: 'increase' },
        { name: 'Total Portfolio Items', value: '24', icon: <FiBriefcase className="h-6 w-6 text-indigo-600" />, change: '5%', changeType: 'increase' },
        { name: 'Total Blog Posts', value: '56', icon: <FiFileText className="h-6 w-6 text-indigo-600" />, change: '5%', changeType: 'increase' },
        { name: 'Total Testimonials', value: '18', icon: <FiMessageSquare className="h-6 w-6 text-indigo-600" />, change: '2%', changeType: 'increase' },
        { name: 'Total Team Members', value: '8', icon: <FiUsers className="h-6 w-6 text-indigo-600" />, change: '0%', changeType: 'neutral' },
        { name: 'Total Enquiries', value: '142', icon: <FiMessageSquare className="h-6 w-6 text-indigo-600" />, change: '18%', changeType: 'increase' },
    ];

    // Chart Data
    const revenueData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Revenue',
            data: [5000, 8000, 12000, 9000, 15000, 18000, 20000],
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            borderColor: 'rgba(79, 70, 229, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
        }]
    };

    const enquiriesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Enquiries',
            data: [15, 22, 30, 25, 42, 50, 60],
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2,
            tension: 0.4
        }]
    };

    const trafficData = {
        labels: ['Direct', 'Social', 'Referral', 'Organic', 'Email'],
        datasets: [{
            data: [25, 20, 30, 15, 10],
            backgroundColor: [
                'rgba(79, 70, 229, 0.7)',
                'rgba(16, 185, 129, 0.7)',
                'rgba(245, 158, 11, 0.7)',
                'rgba(239, 68, 68, 0.7)',
                'rgba(59, 130, 246, 0.7)'
            ],
            borderWidth: 0
        }]
    };

    // Analytics Data
    const analyticsData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Page Views',
            data: [1200, 1900, 1700, 2100, 2300, 1800, 1500],
            borderColor: 'rgba(79, 70, 229, 1)',
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            tension: 0.4
        }]
    };

    // Recent Activity
    const recentActivity = [
        { id: 1, action: 'Updated Portfolio Item', user: 'John Doe', time: '2 hours ago', type: 'update' },
        { id: 2, action: 'Published New Blog Post', user: 'Jane Smith', time: '5 hours ago', type: 'create' },
        { id: 3, action: 'Added New Testimonial', user: 'John Doe', time: '1 day ago', type: 'create' },
        { id: 4, action: 'Updated Team Member', user: 'Jane Smith', time: '2 days ago', type: 'update' },
        { id: 5, action: 'Responded to Client Enquiry', user: 'Mike Johnson', time: '3 days ago', type: 'response' },
    ];

    // Performance Metrics
    const performanceMetrics = [
        { name: 'Page Load Time', value: '1.2s', target: '1.5s', status: 'good' },
        { name: 'API Response Time', value: '320ms', target: '500ms', status: 'good' },
        { name: 'Error Rate', value: '0.8%', target: '1%', status: 'warning' },
        { name: 'Uptime', value: '99.95%', target: '99.9%', status: 'excellent' },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <>
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                                    <div className="p-5">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                {stat.icon}
                                            </div>
                                            <div className="ml-5 w-0 flex-1">
                                                <dl>
                                                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                                                    <dd>
                                                        <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-5 py-3">
                                        <div className="text-sm">
                                            {stat.changeType === 'increase' ? (
                                                <span className="font-medium text-green-600 flex items-center">
                                                    <FiTrendingUp className="mr-1" /> +{stat.change} from last {timeRange}
                                                </span>
                                            ) : stat.changeType === 'decrease' ? (
                                                <span className="font-medium text-red-600 flex items-center">
                                                    <FiTrendingUp className="mr-1 transform rotate-180" /> -{stat.change} from last {timeRange}
                                                </span>
                                            ) : (
                                                <span className="font-medium text-gray-500">
                                                    No change from last {timeRange}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Charts Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Revenue Chart */}
                            <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium text-gray-900">Revenue Growth</h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <FiActivity className="mr-1 text-indigo-500" />
                                        <span>Last 7 months</span>
                                    </div>
                                </div>
                                <div className="h-80">
                                    <ChartRenderer
                                        type="line"
                                        data={revenueData}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            plugins: {
                                                legend: {
                                                    display: false
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Traffic Sources */}
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium text-gray-900">Traffic Sources</h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <FiPieChart className="mr-1 text-indigo-500" />
                                        <span>This month</span>
                                    </div>
                                </div>
                                <div className="h-80">
                                    <ChartRenderer
                                        type="pie"
                                        data={trafficData}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            plugins: {
                                                legend: {
                                                    position: 'right'
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Second Row of Charts */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Enquiries Chart */}
                            <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium text-gray-900">Enquiries Trend</h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <FiBarChart2 className="mr-1 text-green-500" />
                                        <span>Last 7 months</span>
                                    </div>
                                </div>
                                <div className="h-80">
                                    <ChartRenderer
                                        type="bar"
                                        data={enquiriesData}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            plugins: {
                                                legend: {
                                                    display: false
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white shadow rounded-lg overflow-hidden">
                                <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
                                    <button className="text-sm text-indigo-600 hover:text-indigo-900">View All</button>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {recentActivity.map((activity) => (
                                        <div key={activity.id} className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className={`flex-shrink-0 rounded-md p-2 ${activity.type === 'create' ? 'bg-green-100 text-green-600' :
                                                    activity.type === 'update' ? 'bg-blue-100 text-blue-600' :
                                                        'bg-purple-100 text-purple-600'
                                                    }`}>
                                                    {activity.type === 'create' ? <FiPlus /> :
                                                        activity.type === 'update' ? <FiEdit2 /> : <FiMessageSquare />}
                                                </div>
                                                <div className="ml-4 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                                        <p className="text-sm text-gray-500">{activity.time}</p>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-1">By {activity.user}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                );

            case 'analytics':
                return (
                    <div className="space-y-6">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Website Traffic Analytics</h2>
                            <div className="h-96">
                                <ChartRenderer
                                    type="line"
                                    data={analyticsData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-medium mb-4">Top Pages</h3>
                                <div className="space-y-3">
                                    {['Home', 'Products', 'Blog', 'Contact'].map((page, i) => (
                                        <div key={i} className="flex justify-between items-center">
                                            <span className="text-gray-700">{page}</span>
                                            <span className="font-medium">{Math.floor(Math.random() * 10000).toLocaleString()} views</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-medium mb-4">User Demographics</h3>
                                <div className="h-64">
                                    <ChartRenderer
                                        type="doughnut"
                                        data={{
                                            labels: ['Desktop', 'Mobile', 'Tablet'],
                                            datasets: [{
                                                data: [65, 25, 10],
                                                backgroundColor: [
                                                    'rgba(79, 70, 229, 0.7)',
                                                    'rgba(16, 185, 129, 0.7)',
                                                    'rgba(245, 158, 11, 0.7)'
                                                ]
                                            }]
                                        }}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: false
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'performance':
                return (
                    <div className="space-y-6">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">System Performance Metrics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {performanceMetrics.map((metric, i) => (
                                    <div key={i} className="border rounded-lg p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium text-gray-900">{metric.name}</h3>
                                                <p className="text-sm text-gray-500">Target: {metric.target}</p>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${metric.status === 'good' ? 'bg-green-100 text-green-800' :
                                                metric.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-blue-100 text-blue-800'
                                                }`}>
                                                {metric.value}
                                            </span>
                                        </div>
                                        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${metric.status === 'good' ? 'bg-green-500' :
                                                    metric.status === 'warning' ? 'bg-yellow-500' :
                                                        'bg-blue-500'
                                                    }`}
                                                style={{ width: `${Math.random() * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium mb-4">Server Response Times</h3>
                            <div className="h-80">
                                <ChartRenderer
                                    type="line"
                                    data={{
                                        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                                        datasets: [{
                                            label: 'Response Time (ms)',
                                            data: [120, 190, 150, 210, 180, 160],
                                            borderColor: 'rgba(79, 70, 229, 1)',
                                            backgroundColor: 'rgba(79, 70, 229, 0.1)',
                                            tension: 0.4,
                                            fill: true
                                        }]
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: {
                                            legend: {
                                                display: false
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 'reports':
                return (
                    <div className="space-y-6">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Generate Custom Reports</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                                    <FiFileText className="h-10 w-10 text-indigo-600 mb-2" />
                                    <h3 className="font-medium">Monthly Report</h3>
                                    <p className="text-sm text-gray-500 mt-1">Generate comprehensive monthly report</p>
                                    <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                                        Generate
                                    </button>
                                </div>

                                <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                                    <FiUsers className="h-10 w-10 text-green-600 mb-2" />
                                    <h3 className="font-medium">User Activity</h3>
                                    <p className="text-sm text-gray-500 mt-1">Detailed user engagement metrics</p>
                                    <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                                        Generate
                                    </button>
                                </div>

                                <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                                    <FiDollarSign className="h-10 w-10 text-blue-600 mb-2" />
                                    <h3 className="font-medium">Revenue Analysis</h3>
                                    <p className="text-sm text-gray-500 mt-1">Breakdown of revenue streams</p>
                                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium mb-4">Recent Reports</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            { id: 1, name: 'Monthly Report - June 2023', date: '2 days ago', status: 'Ready' },
                                            { id: 2, name: 'User Activity Analysis', date: '1 week ago', status: 'Ready' },
                                            { id: 3, name: 'Revenue Q2 2023', date: '2 weeks ago', status: 'Ready' }
                                        ].map((report) => (
                                            <tr key={report.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {report.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Download</button>
                                                    <button className="text-gray-600 hover:text-gray-900">Share</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );

            default:
                return <div className="bg-white shadow rounded-lg p-6">Select a tab to view content</div>;
        }
    };

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <div className="flex gap-3">
                    <div className="relative">
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                            className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                        <FiCalendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                    <button
                        onClick={() => alert('PDF export would be implemented here')}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <FiDownload className="mr-2" /> Export PDF
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    {['overview', 'analytics', 'performance', 'reports'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`${activeTab === tab
                                ? 'border-indigo-500 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Dynamic Tab Content */}
            {renderTabContent()}
        </div>
    );
};

export default Dashboard;