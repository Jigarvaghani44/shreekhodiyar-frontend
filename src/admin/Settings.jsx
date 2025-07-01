// /* eslint-disable no-alert */
// // src/pages/admin/Settings.jsx
// import { useState } from 'react';
// import { FiSave, FiGlobe, FiMail, FiLock, FiDollarSign, FiUsers } from 'react-icons/fi';

// const Settings = () => {
//     const [settings, setSettings] = useState({
//         siteTitle: "My Company",
//         siteDescription: "Professional web development services",
//         adminEmail: "admin@example.com",
//         currency: "USD",
//         maintenanceMode: false,
//         googleAnalyticsId: "",
//         recaptchaSiteKey: "",
//         recaptchaSecretKey: ""
//     });

//     const [activeTab, setActiveTab] = useState('general');
//     const [isSaving, setIsSaving] = useState(false);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setSettings(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsSaving(true);
//         // Simulate API call
//         setTimeout(() => {
//             setIsSaving(false);
//             alert('Settings saved successfully!');
//         }, 1000);
//     };

//     return (
//         <div className="space-y-6">
//             <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

//             {/* Tabs */}
//             <div className="border-b border-gray-200">
//                 <nav className="-mb-px flex space-x-8">
//                     <button
//                         onClick={() => setActiveTab('general')}
//                         className={`${activeTab === 'general' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//                     >
//                         <FiGlobe className="inline mr-2" /> General
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('email')}
//                         className={`${activeTab === 'email' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//                     >
//                         <FiMail className="inline mr-2" /> Email
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('security')}
//                         className={`${activeTab === 'security' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//                     >
//                         <FiLock className="inline mr-2" /> Security
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('payment')}
//                         className={`${activeTab === 'payment' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//                     >
//                         <FiDollarSign className="inline mr-2" /> Payment
//                     </button>
//                     <button
//                         onClick={() => setActiveTab('users')}
//                         className={`${activeTab === 'users' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//                     >
//                         <FiUsers className="inline mr-2" /> Users
//                     </button>
//                 </nav>
//             </div>

//             {/* Settings Form */}
//             <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
//                 {activeTab === 'general' && (
//                     <div className="space-y-6">
//                         <div>
//                             <label htmlFor="siteTitle" className="block text-sm font-medium text-gray-700">
//                                 Site Title *
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     type="text"
//                                     id="siteTitle"
//                                     name="siteTitle"
//                                     value={settings.siteTitle}
//                                     onChange={handleChange}
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
//                                 Site Description *
//                             </label>
//                             <div className="mt-1">
//                                 <textarea
//                                     id="siteDescription"
//                                     name="siteDescription"
//                                     rows={3}
//                                     value={settings.siteDescription}
//                                     onChange={handleChange}
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="googleAnalyticsId" className="block text-sm font-medium text-gray-700">
//                                 Google Analytics ID
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     type="text"
//                                     id="googleAnalyticsId"
//                                     name="googleAnalyticsId"
//                                     value={settings.googleAnalyticsId}
//                                     onChange={handleChange}
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                     placeholder="UA-XXXXX-Y"
//                                 />
//                             </div>
//                         </div>

//                         <div className="flex items-center">
//                             <input
//                                 id="maintenanceMode"
//                                 name="maintenanceMode"
//                                 type="checkbox"
//                                 checked={settings.maintenanceMode}
//                                 onChange={handleChange}
//                                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                             />
//                             <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-700">
//                                 Maintenance Mode
//                             </label>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'email' && (
//                     <div className="space-y-6">
//                         <div>
//                             <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
//                                 Admin Email *
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     type="email"
//                                     id="adminEmail"
//                                     name="adminEmail"
//                                     value={settings.adminEmail}
//                                     onChange={handleChange}
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 SMTP Settings
//                             </label>
//                             <div className="mt-1 space-y-4">
//                                 <input
//                                     type="text"
//                                     placeholder="SMTP Host"
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="SMTP Port"
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="SMTP Username"
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                 />
//                                 <input
//                                     type="password"
//                                     placeholder="SMTP Password"
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'security' && (
//                     <div className="space-y-6">
//                         <div>
//                             <label htmlFor="recaptchaSiteKey" className="block text-sm font-medium text-gray-700">
//                                 reCAPTCHA Site Key
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     type="text"
//                                     id="recaptchaSiteKey"
//                                     name="recaptchaSiteKey"
//                                     value={settings.recaptchaSiteKey}
//                                     onChange={handleChange}
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="recaptchaSecretKey" className="block text-sm font-medium text-gray-700">
//                                 reCAPTCHA Secret Key
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     type="password"
//                                     id="recaptchaSecretKey"
//                                     name="recaptchaSecretKey"
//                                     value={settings.recaptchaSecretKey}
//                                     onChange={handleChange}
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'payment' && (
//                     <div className="space-y-6">
//                         <div>
//                             <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
//                                 Currency *
//                             </label>
//                             <div className="mt-1">
//                                 <select
//                                     id="currency"
//                                     name="currency"
//                                     value={settings.currency}
//                                     onChange={handleChange}
//                                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                                 >
//                                     <option value="USD">US Dollar (USD)</option>
//                                     <option value="EUR">Euro (EUR)</option>
//                                     <option value="GBP">British Pound (GBP)</option>
//                                     <option value="JPY">Japanese Yen (JPY)</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 Payment Gateways
//                             </label>
//                             <div className="mt-1 space-y-2">
//                                 <div className="flex items-center">
//                                     <input
//                                         id="stripeEnabled"
//                                         name="stripeEnabled"
//                                         type="checkbox"
//                                         className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="stripeEnabled" className="ml-2 block text-sm text-gray-700">
//                                         Stripe
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <input
//                                         id="paypalEnabled"
//                                         name="paypalEnabled"
//                                         type="checkbox"
//                                         className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="paypalEnabled" className="ml-2 block text-sm text-gray-700">
//                                         PayPal
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'users' && (
//                     <div className="space-y-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 User Registration
//                             </label>
//                             <div className="mt-1 space-y-2">
//                                 <div className="flex items-center">
//                                     <input
//                                         id="allowRegistrations"
//                                         name="allowRegistrations"
//                                         type="checkbox"
//                                         className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="allowRegistrations" className="ml-2 block text-sm text-gray-700">
//                                         Allow new user registrations
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <input
//                                         id="emailVerification"
//                                         name="emailVerification"
//                                         type="checkbox"
//                                         className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="emailVerification" className="ml-2 block text-sm text-gray-700">
//                                         Require email verification
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">
//                                 Default User Role
//                             </label>
//                             <div className="mt-1">
//                                 <select className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
//                                     <option>Subscriber</option>
//                                     <option>Contributor</option>
//                                     <option>Editor</option>
//                                     <option>Administrator</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 <div className="mt-6">
//                     <button
//                         type="submit"
//                         disabled={isSaving}
//                         className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
//                     >
//                         <FiSave className="mr-2" />
//                         {isSaving ? 'Saving...' : 'Save Settings'}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Settings;