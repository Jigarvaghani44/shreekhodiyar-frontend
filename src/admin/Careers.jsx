/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable react/no-danger */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiSearch,
  FiBriefcase,
  FiDollarSign,
  FiMapPin,
  FiUser,
  FiMail,
  FiFileText,
  FiCalendar,
  FiEye,
  FiDownload,
  FiX,
  FiCheck,
  FiClock,
  FiThumbsUp,
  FiThumbsDown
} from 'react-icons/fi';

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'published', 'draft', 'closed', 'applicants'
  const [applicantFilter, setApplicantFilter] = useState('all'); // 'all', 'review', 'interview', 'hired', 'rejected'
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentCareer, setCurrentCareer] = useState(null);
  const [viewingCareer, setViewingCareer] = useState(null);
  const [viewingApplicant, setViewingApplicant] = useState(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // Fetch careers data
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/career`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCareers(response.data?.data || []);
      } catch (err) {
        console.error("Failed to fetch careers:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  // Filter careers based on active tab and search term
  const filteredCareers = careers
    .filter((career) => {
      const matchesSearch =
        career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        activeTab === 'all' ||
        (activeTab === 'applicants' && career.applicants?.length > 0) ||
        career.status === activeTab;

      return matchesSearch && matchesStatus;
    })
    .map(career => {
      if (activeTab === 'applicants') {
        return {
          ...career,
          applicants: career.applicants?.filter(applicant =>
            applicantFilter === 'all' || applicant.status === applicantFilter
          )
        };
      }
      return career;
    })
    .filter(career => {
      if (activeTab === 'applicants') {
        return career.applicants?.length > 0;
      }
      return true;
    });
  console.log("feature", filteredCareers);

  // Delete a career posting
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this career posting?')) {
      try {
        const token = localStorage.getItem('authToken');
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/career/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/career`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCareers(response.data?.data || []);

      } catch (err) {
        console.error("Failed to delete career:", err.response?.data || err.message);
        alert('Failed to delete career posting');
      }
    }
  };

  // Edit a career posting
  const handleEdit = (career) => {
    setCurrentCareer(career);
    setShowModal(true);
  };
  // Quick status update buttons for applicants
  const StatusButton = ({ status, careerId, applicant }) => {
    const isActive = applicant.status === status;
    const icons = {
      review: <FiClock className="mr-1" />,
      interview: <FiCheck className="mr-1" />,
      hired: <FiThumbsUp className="mr-1" />,
      rejected: <FiThumbsDown className="mr-1" />
    };
    const colors = {
      review: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
      interview: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      hired: 'bg-green-100 text-green-800 hover:bg-green-200',
      rejected: 'bg-red-100 text-red-800 hover:bg-red-200'
    };

    return (
      <button
        onClick={() => updateApplicantStatus(careerId, applicant._id, status)}
        disabled={isUpdatingStatus || isActive}
        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${colors[status]} ${isActive ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
        title={`Mark as ${status}`}
      >
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </button>
    );
  };
  // Update applicant status
  const updateApplicantStatus = async (careerId, applicantId, newStatus) => {
    setIsUpdatingStatus(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/applicant/${careerId}`,
        { applicantId, status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/career`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCareers(response.data?.data || []);


      // Update viewing applicant if currently viewing
      if (viewingApplicant && viewingApplicant._id === applicantId) {
        setViewingApplicant({ ...viewingApplicant, status: newStatus });
        // setViewingCareer({ ...viewingCareer, applicants: viewingApplicant });
      }
      // console.log("viewcareer", viewingCareer)
      // console.log("cid", careerId);

    } catch (err) {
      console.error("Failed to update applicant status:", err.response?.data || err.message);
      alert('Failed to update applicant status');
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // console.log("viewcareer", viewingCareer)

  // Submit career form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const token = localStorage.getItem('authToken');
      const careerData = {
        ...data,
        responsibilities: data.responsibilities.split('\n').filter(f => f.trim() !== ''),
        requirements: data.requirements.split('\n').filter(f => f.trim() !== ''),
        perks: data.perks.split('\n').filter(f => f.trim() !== ''),
        applicants: currentCareer?.applicants || []
      };


      if (currentCareer) {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/api/career/${currentCareer._id}`,
          careerData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/career`,
          careerData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );
      }

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/career`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCareers(response.data?.data || []);

      setShowModal(false);
      setCurrentCareer(null);
    } catch (err) {
      console.error("Failed to save career:", err.response?.data || err.message);
      alert('Failed to save career posting');
    }
  };

  // Quick status update for job postings
  const updateJobStatus = async (careerId, newStatus) => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/careers/${careerId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      // Update local state
      setCareers(careers.map(career => {
        if (career._id === careerId) {
          return { ...career, status: newStatus };
        }
        return career;
      }));
    } catch (err) {
      console.error("Failed to update job status:", err.response?.data || err.message);
      alert('Failed to update job status');
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500" />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header and Add New Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Careers Management</h1>
        <button
          onClick={() => {
            setCurrentCareer(null);
            setShowModal(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FiPlus className="mr-2" /> Add New Job
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
            placeholder="Search careers by title or location..."
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2 border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Status Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {['all', 'published', 'draft', 'closed', 'applicants'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {tab === 'all' ? 'All Jobs' :
                tab === 'published' ? 'Published' :
                  tab === 'draft' ? 'Drafts' :
                    tab === 'closed' ? 'Closed' : 'Applicants'}
            </button>
          ))}
        </nav>
      </div>

      {/* Applicant Filter */}
      {activeTab === 'applicants' && (
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Filter by status:</span>
            {['all', 'review', 'interview', 'hired', 'rejected'].map((filter) => (
              <button
                key={filter}
                onClick={() => setApplicantFilter(filter)}
                className={`px-3 py-1 rounded-full text-xs font-medium ${applicantFilter === filter
                  ? filter === 'all' ? 'bg-indigo-100 text-indigo-800' :
                    filter === 'review' ? 'bg-yellow-100 text-yellow-800' :
                      filter === 'interview' ? 'bg-blue-100 text-blue-800' :
                        filter === 'hired' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                  : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {filter === 'all' ? 'All' :
                  filter === 'review' ? 'Under Review' :
                    filter === 'interview' ? 'Interview' :
                      filter === 'hired' ? 'Hired' : 'Rejected'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredCareers.length === 0 || (activeTab === 'applicants' && filteredCareers.every(c => c.applicants?.length === 0)) ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <FiBriefcase className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            {activeTab === 'applicants' ? 'No applicants found' : 'No job postings found'}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {activeTab === 'applicants'
              ? 'Try changing your filters or check back later.'
              : 'Get started by creating a new job posting.'}
          </p>
          {activeTab !== 'applicants' && (
            <div className="mt-6">
              <button
                onClick={() => {
                  setCurrentCareer(null);
                  setShowModal(true);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FiPlus className="mr-2" /> New Job Posting
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Careers List */
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            {activeTab === 'applicants' ? (
              /* Applicants-focused table view */
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied
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
                  {filteredCareers.flatMap(career =>
                    career.applicants?.map(applicant => (
                      <tr key={`${career._id}-${applicant._id}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                              <FiUser className="h-6 w-6 text-gray-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
                              <div className="text-sm text-gray-500">{applicant.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{career.title}</div>
                          <div className="text-sm text-gray-500">{career.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(applicant.appliedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${applicant.status === 'hired' ? 'bg-green-100 text-green-800' :
                            applicant.status === 'rejected' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                            {applicant.status?.charAt(0).toUpperCase() + applicant.status?.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          <button
                            onClick={() => {
                              // setViewingCareer(career);
                              setViewingApplicant({ ...applicant, jobTitle: career.title });
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            ) : (
              /* Regular jobs table view */
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicants
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
                  {filteredCareers.map((career) => (
                    <tr key={career._id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {career.title}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <FiDollarSign className="mr-1" />
                          {career.salary}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <FiBriefcase className="mr-1" />
                          {career.type}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <FiMapPin className="mr-1" />
                          {career.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <FiUser className="mr-1" />
                          {career.applicants?.length || 0}
                          {career.applicants?.some(a => a.status === 'hired') && (
                            <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              {career.applicants.filter(a => a.status === 'hired').length} hired
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={career.status}
                          onChange={(e) => updateJobStatus(career._id, e.target.value)}
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${career.status === 'published' ? 'bg-green-100 text-green-800' :
                            career.status === 'closed' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            } border-none focus:ring-2 focus:ring-indigo-500`}
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <button
                          onClick={() => setViewingCareer(career)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Preview"
                        >
                          <FiEye />
                        </button>
                        <button
                          onClick={() => handleEdit(career)}
                          className="text-indigo-600 hover:text-indigo-900"
                          title="Edit"
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          onClick={() => handleDelete(career._id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {/* Career Preview Modal */}
      {viewingCareer && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                    {viewingCareer.title}
                  </h3>
                  <button
                    onClick={() => setViewingCareer(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <FiBriefcase className="mr-2 text-gray-500" />
                    <span className="text-gray-700">{viewingCareer.type}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="mr-2 text-gray-500" />
                    <span className="text-gray-700">{viewingCareer.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FiDollarSign className="mr-2 text-gray-500" />
                    <span className="text-gray-700">{viewingCareer.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Job Description</h4>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: viewingCareer.description }} />
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {viewingCareer.responsibilities?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {viewingCareer.requirements?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Perks & Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {viewingCareer.perks?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-500">Posted:</span>
                      <p className="text-sm text-gray-700">{new Date(viewingCareer.postedAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Deadline:</span>
                      <p className="text-sm text-gray-700">
                        {viewingCareer.deadline ? new Date(viewingCareer.deadline).toLocaleDateString() : 'No deadline'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Applicants ({viewingCareer.applicants?.length || 0})</h4>
                  {viewingCareer.applicants?.length > 0 ? (
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Applied</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {viewingCareer.applicants.map((applicant) => (
                            <tr key={applicant._id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                                {applicant.name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {applicant.email}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {new Date(applicant.appliedAt).toLocaleDateString()}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${applicant.status === 'hired' ? 'bg-green-100 text-green-800' :
                                  applicant.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                    'bg-yellow-100 text-yellow-800'
                                  }`}>
                                  {applicant.status}
                                </span>
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                                <button
                                  onClick={() => setViewingApplicant({ ...applicant, jobTitle: viewingCareer.title })}
                                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No applicants yet</p>
                  )}
                </div>

                <div className="mt-5 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setViewingCareer(null)}
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Done
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setViewingCareer(null);
                      handleEdit(viewingCareer);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <FiEdit2 className="mr-2" /> Edit Job Posting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Applicant Preview Modal */}
      {viewingApplicant && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    {viewingApplicant.name}
                  </h3>
                  <button
                    onClick={() => setViewingApplicant(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">Applied for: {viewingApplicant.jobTitle}</p>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div>
                    <span className="text-xs text-gray-500">Email</span>
                    <p className="text-sm text-gray-700">{viewingApplicant.email}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Phone</span>
                    <p className="text-sm text-gray-700">{viewingApplicant.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Applied On</span>
                    <p className="text-sm text-gray-700">
                      {new Date(viewingApplicant.appliedAt).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Portfolio</span>
                    <p className="text-sm text-gray-700">
                      {viewingApplicant.portfolioUrl ? (
                        <a href={viewingApplicant.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                          {viewingApplicant.portfolioUrl}
                        </a>
                      ) : 'Not provided'}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Status</span>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <StatusButton status="review" careerId={viewingApplicant?.careerId} applicant={viewingApplicant} />
                      <StatusButton status="interview" careerId={viewingApplicant?.careerId} applicant={viewingApplicant} />
                      <StatusButton status="hired" careerId={viewingApplicant?.careerId} applicant={viewingApplicant} />
                      <StatusButton status="rejected" careerId={viewingApplicant?.careerId} applicant={viewingApplicant} />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-xs text-gray-500">Cover Letter</span>
                  <div className="mt-1 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {viewingApplicant.coverLetter || 'No cover letter provided'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={`${process.env.REACT_APP_API_URL}/uploads/resumes/${viewingApplicant.resume}`}
                    download
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <FiDownload className="mr-2" /> Download Resume
                  </a>
                  <button
                    type="button"
                    onClick={() => setViewingApplicant(null)}
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Career Form Modal */}
      {showModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {currentCareer ? 'Edit Job Posting' : 'Add New Job Posting'}
                </h3>
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Job Title *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          defaultValue={currentCareer?.title || ''}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Job Type *
                      </label>
                      <div className="mt-1">
                        <select
                          id="type"
                          name="type"
                          defaultValue={currentCareer?.type || 'Full-time'}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        >
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Internship">Internship</option>
                          <option value="Freelance">Freelance</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="location"
                          id="location"
                          defaultValue={currentCareer?.location || ''}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                        Salary Range *
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          defaultValue={currentCareer?.salary || ''}
                          placeholder="e.g. $50,000 - $70,000"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="postedAt" className="block text-sm font-medium text-gray-700">
                        Posted Date *
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="postedAt"
                          id="postedAt"
                          defaultValue={
                            currentCareer?.postedAt ||
                            new Date().toISOString().split('T')[0]
                          }
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                        Application Deadline
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="deadline"
                          id="deadline"
                          defaultValue={currentCareer?.deadline || ''}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                          defaultValue={currentCareer?.status || 'draft'}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Job Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        defaultValue={currentCareer?.description || ''}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Describe the job position and what makes it exciting"
                        required
                      />
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700">
                        Key Responsibilities * (one per line)
                      </label>
                      <textarea
                        id="responsibilities"
                        name="responsibilities"
                        rows={4}
                        defaultValue={currentCareer?.responsibilities ? currentCareer.responsibilities.join('\n') : ''}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="List the main responsibilities of this position\nEach item should be on a new line"
                        required
                      />
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                        Requirements & Qualifications * (one per line)
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        rows={4}
                        defaultValue={currentCareer?.requirements ? currentCareer.requirements.join('\n') : ''}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="List the required skills and qualifications\nEach item should be on a new line"
                        required
                      />
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="perks" className="block text-sm font-medium text-gray-700">
                        Perks & Benefits (one per line)
                      </label>
                      <textarea
                        id="perks"
                        name="perks"
                        rows={4}
                        defaultValue={currentCareer?.perks ? currentCareer.perks.join('\n') : ''}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="List any perks or benefits offered\nEach item should be on a new line"
                      />
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    >
                      {currentCareer ? 'Update Job Posting' : 'Create Job Posting'}
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

export default Careers;