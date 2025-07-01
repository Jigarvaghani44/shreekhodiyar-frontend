/* eslint-disable no-alert */
// src/pages/admin/Team.jsx
import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiSearch, FiLinkedin, FiTwitter, FiGithub, FiEye, FiX } from 'react-icons/fi';

const Team = () => {
    const [team, setTeam] = useState([
        {
            id: 1,
            name: "John Doe",
            role: "CEO",
            bio: "Founder and CEO of the company",
            image: "https://via.placeholder.com/150",
            social: {
                linkedin: "johndoe",
                twitter: "johndoe",
                github: "johndoe"
            },
            order: 1,
            status: "active"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentMember, setCurrentMember] = useState(null);
    const [viewingMember, setViewingMember] = useState(null);

    const filteredTeam = team.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this team member?')) {
            setTeam(team.filter(member => member.id !== id));
        }
    };

    const handleEdit = (member) => {
        setCurrentMember(member);
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const memberData = {
            ...data,
            social: {
                linkedin: data.linkedin,
                twitter: data.twitter,
                github: data.github
            },
            order: parseInt(data.order, 10),
            status: data.status
        };

        if (currentMember) {
            setTeam(team.map(member =>
                member.id === currentMember.id ? { ...member, ...memberData } : member
            ));
        } else {
            const newMember = {
                id: team.length + 1,
                ...memberData
            };
            setTeam([...team, newMember]);
        }

        setShowModal(false);
        setCurrentMember(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
                <button
                    onClick={() => {
                        setCurrentMember(null);
                        setShowModal(true);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <FiPlus className="mr-2" /> Add New Member
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
                        placeholder="Search team members..."
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Team List */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Member
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Role
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
                            {filteredTeam.length > 0 ? (
                                filteredTeam.map((member) => (
                                    <tr key={member.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full object-cover" src={member.image} alt={member.name} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {member.role}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {member.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {member.order}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => setViewingMember(member)}
                                                className="text-blue-600 hover:text-blue-900 mr-4"
                                                title="Preview"
                                            >
                                                <FiEye />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(member)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                                title="Edit"
                                            >
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(member.id)}
                                                className="text-red-600 hover:text-red-900"
                                                title="Delete"
                                            >
                                                <FiTrash2 />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                                        No team members found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Team Member Preview Modal */}
            {viewingMember && (
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                        Team Member Preview
                                    </h3>
                                    <button
                                        onClick={() => setViewingMember(null)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <FiX className="h-6 w-6" />
                                    </button>
                                </div>

                                <div className="flex flex-col items-center mb-6">
                                    <div className="flex-shrink-0 h-32 w-32 mb-4">
                                        <img
                                            className="h-32 w-32 rounded-full object-cover"
                                            src={viewingMember.image}
                                            alt={viewingMember.name}
                                        />
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900">{viewingMember.name}</h2>
                                    <p className="text-lg text-indigo-600">{viewingMember.role}</p>
                                    <span className={`mt-2 px-3 py-1 text-xs font-medium rounded-full ${viewingMember.status === 'active'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {viewingMember.status}
                                    </span>
                                </div>

                                {viewingMember.bio && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-medium text-gray-900 mb-2">About</h4>
                                        <p className="text-gray-700">{viewingMember.bio}</p>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">Social Links</h4>
                                    <div className="flex space-x-4">
                                        {viewingMember.social.linkedin && (
                                            <a
                                                href={`https://linkedin.com/in/${viewingMember.social.linkedin}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                                title="LinkedIn"
                                            >
                                                <FiLinkedin className="h-5 w-5" />
                                            </a>
                                        )}
                                        {viewingMember.social.twitter && (
                                            <a
                                                href={`https://twitter.com/${viewingMember.social.twitter}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-600"
                                                title="Twitter"
                                            >
                                                <FiTwitter className="h-5 w-5" />
                                            </a>
                                        )}
                                        {viewingMember.social.github && (
                                            <a
                                                href={`https://github.com/${viewingMember.social.github}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-700 hover:text-gray-900"
                                                title="GitHub"
                                            >
                                                <FiGithub className="h-5 w-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500">
                                        Display Order: {viewingMember.order}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setViewingMember(null);
                                            handleEdit(viewingMember);
                                        }}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <FiEdit2 className="mr-2" /> Edit Member
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Team Member Form Modal */}
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75" />
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {currentMember ? 'Edit Team Member' : 'Add New Team Member'}
                                </h3>
                                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                        <div className="sm:col-span-6">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Full Name *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    defaultValue={currentMember?.name || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                                    defaultValue={currentMember?.role || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                                                Bio/Description
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="bio"
                                                    name="bio"
                                                    rows={3}
                                                    defaultValue={currentMember?.bio || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                                Image URL *
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="image"
                                                    id="image"
                                                    defaultValue={currentMember?.image || ''}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    required
                                                />
                                            </div>
                                            {currentMember?.image && (
                                                <div className="mt-2">
                                                    <img src={currentMember.image} alt="Preview" className="h-20 w-20 rounded-full object-cover" />
                                                </div>
                                            )}
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
                                                    defaultValue={currentMember?.order || team.length + 1}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    min="1"
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
                                                    defaultValue={currentMember?.status || 'active'}
                                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                >
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <h4 className="text-sm font-medium text-gray-700 mb-2">Social Links</h4>
                                            <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-3">
                                                <div>
                                                    <label htmlFor="linkedin" className="block text-xs font-medium text-gray-500">
                                                        LinkedIn Username
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                            <FiLinkedin />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            name="linkedin"
                                                            id="linkedin"
                                                            defaultValue={currentMember?.social?.linkedin || ''}
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="twitter" className="block text-xs font-medium text-gray-500">
                                                        Twitter Username
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                            <FiTwitter />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            name="twitter"
                                                            id="twitter"
                                                            defaultValue={currentMember?.social?.twitter || ''}
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="github" className="block text-xs font-medium text-gray-500">
                                                        GitHub Username
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                            <FiGithub />
                                                        </span>
                                                        <input
                                                            type="text"
                                                            name="github"
                                                            id="github"
                                                            defaultValue={currentMember?.social?.github || ''}
                                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                                        >
                                            {currentMember ? 'Update' : 'Create'}
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

export default Team;