/* eslint-disable import/no-unresolved */
import { useState } from 'react';
// With these:
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ContactPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '+91',
        message: '',
        service: '',
        company: '',
        country: '',
        securityBudget: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);
        // Add your form submission logic here
        onClose();
    };

    if (!isOpen) return null;

    const testimonials = [
        {
            quote: "Vasundhara Infotech LLP has boosted our productivity and expanded our development capabilities. Their consistently high-quality work has truly impressed us.",
            name: "Oreen & Nitzan",
            role: "Mobile Brain LTD, Israel",
            rating: 5
        },
        {
            quote: "It is always a pleasure working with Vasudhara Infotech. They are a responsive, skilled, and reliable team!!",
            name: "Steve Karigo",
            role: "Author, Speaker, Consultant Optima Branding, US",
            rating: 5
        },
        {
            quote: "Ronak & Harsh & Vimal & the Vasundhara team are truely trailblazing backend & web portal developers...",
            name: "Dr. Niels Beisinghoff",
            role: "lawyer",
            rating: 5
        }
    ];

    const clients = [
        "/images/webp/our_clients/churchspring.webp",
        "/images/webp/our_clients/clubmall.webp",
        "/images/webp/our_clients/das.webp",
        "/images/webp/our_clients/freefuse.webp",
        "/images/webp/our_clients/optima.webp",
        "/images/webp/our_clients/welspun.webp"
    ];

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative bg-white rounded-lg max-w-6xl w-full mx-4 overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <img src="/images/svg/close.svg" alt="close" className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Form Section */}
                    <div className="w-full md:w-7/12 p-6 lg:p-8">
                        <div className="mb-6">
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Let&apos;s build something great together.
                                <img src="/images/png/modal-arrow.png" className="ml-2 w-8 h-8 inline" alt="arrow" />
                            </h4>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company (Optional)"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <div className="text-sm text-gray-500 mb-1">Phone</div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="1 (702) 123-4567"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <div className="absolute right-3 top-9 flex items-center">
                                    <div className="flag-dropdown">
                                        <div className="selected-flag" title="India: + 91">
                                            <div className="flag in" />
                                            <div className="arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <select
                                    name="service"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>I am interested in</option>
                                    <option value="application_development">Application Development</option>
                                    <option value="website_development">Website Development</option>
                                    <option value="game_development">Game Development</option>
                                    <option value="billing">Billing</option>
                                    <option value="about_services">About Services</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <select
                                        name="country"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white"
                                        value={formData.country}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Select Country</option>
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="UAE">UAE</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <select
                                        name="securityBudget"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none bg-white"
                                        value={formData.securityBudget}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Do you have an IT/security budget?</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Contact Us
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="ml-2">
                                        <path d="M8.33621 2.84025L1.17647 10L0 8.82354L7.15975 1.66378H0.849211V0H9.99999V9.15081H8.33621V2.84025Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Clients Section */}
                    <div className="w-full md:w-5/12 bg-gray-50 p-6 lg:p-8">
                        <h5 className="text-xl font-semibold mb-6">Our Clients</h5>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {clients.map((client, index) => (
                                <div key={index} className="p-2 bg-white rounded-lg flex items-center justify-center">
                                    <img src={client} alt="company" className="h-10 object-contain" />
                                </div>
                            ))}
                        </div>

                        <div className="mb-6">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                loop
                                className="testimonial-slider"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                            <img src="/images/svg/quote.svg" alt="quote" className="w-6 h-6 mb-4" />
                                            <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                                                    <div>
                                                        <h6 className="font-medium">{testimonial.name}</h6>
                                                        <span className="text-sm text-gray-500">{testimonial.role}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <img key={i} src="/images/svg/star-icon.svg" className="w-4 h-4" alt="star" />
                                                        ))}
                                                    </div>
                                                    <h6 className="font-medium">{testimonial.rating}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;