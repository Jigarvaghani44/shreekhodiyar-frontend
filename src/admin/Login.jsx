/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-promise-executor-return */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // console.log("response", response.data);

            // Handle successful login
            if (response.data && response.data.token) {
                // Store the token in localStorage or context
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));

                // Redirect to dashboard
                navigate('/admin/dashboard');
            } else {
                throw new Error('Invalid response from server');
            }
            // // Authentication logic here
            // await new Promise(resolve => setTimeout(resolve, 1000));
            // navigate('/admin/dashboard');
        } catch (err) {
            setError('Invalid email or password');
            setLoading(false);
        }
    };

    // Image data
    const leftColumnImages = [
        { id: 1, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/1.jpg', alt: '1' },
        { id: 2, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/2.jpg', alt: '2' },
        { id: 3, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/3.jpg', alt: '3' },
        { id: 4, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/4.jpg', alt: '4' },
        { id: 5, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/5.jpg', alt: '5' },
    ];

    const middleColumnImages = [
        { id: 8, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/8.jpg', alt: '8' },
        { id: 9, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/9.jpg', alt: '9' },
        { id: 10, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/10.jpg', alt: '10' },
        { id: 11, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/11.jpg', alt: '11' },
        { id: 12, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/12.jpg', alt: '12' },
    ];

    const rightColumnImages = [
        { id: 13, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/13.jpg', alt: '13' },
        { id: 14, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/14.jpg', alt: '14' },
        { id: 15, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/15.jpg', alt: '15' },
        { id: 6, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/6.jpg', alt: '6' },
        { id: 7, src: 'https://www.digitalsilk.com/wp-content/uploads/2024/05/7.jpg', alt: '7' },
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            {/* Background image columns */}
            <div className="absolute inset-0 z-0 flex gap-4 md:gap-6">
                {/* Left column */}
                <div className="w-1/4 relative -top-12 h-[1000px] rotate-12 overflow-hidden opacity-70">
                    <div className="absolute gap-3 md:gap-5 inset-0 flex flex-col animate-scroll-up">
                        {[...leftColumnImages, ...leftColumnImages].map((img, index) => (
                            <div key={`left-${img.id}-${index}`} className="h-1/3 flex-shrink-0">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle column */}
                <div className="w-1/4 relative -top-12 h-[1000px] rotate-12 overflow-hidden opacity-70">
                    <div className="absolute inset-0 gap-3 md:gap-5 flex flex-col animate-scroll-down">
                        {[...middleColumnImages, ...middleColumnImages].map((img, index) => (
                            <div key={`middle-${img.id}-${index}`} className="h-1/3 flex-shrink-0">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right column */}
                <div className="w-1/4 relative -top-12 h-[1000px] rotate-12 overflow-hidden opacity-70">
                    <div className="absolute inset-0 gap-3 md:gap-5 flex flex-col animate-scroll-up">
                        {[...rightColumnImages, ...rightColumnImages].map((img, index) => (
                            <div key={`right-${img.id}-${index}`} className="h-1/3 flex-shrink-0">
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
                        {/* Logo and header */}
                        <div className="p-6 text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center shadow-lg">
                                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                Company<span className="text-blue-300">Name</span>
                            </h2>
                            <p className="mt-2 text-sm md:text-base text-blue-100">Admin Dashboard Login</p>
                        </div>

                        {/* Login form */}
                        <div className="px-6 py-6 md:px-8 md:py-6 bg-white/5">
                            {error && (
                                <div className="mb-4 bg-red-500/10 border-l-4 border-red-500 p-4 rounded-lg">
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <p className="ml-3 text-sm text-red-100">{error}</p>
                                    </div>
                                </div>
                            )}

                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-blue-100">
                                        Email address
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg shadow-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="your@email.com"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-blue-100">
                                        Password
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg shadow-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="••••••••"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <svg className="h-5 w-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-white/30 rounded bg-white/10"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-100">
                                            Remember me
                                        </label>
                                    </div>

                                    {/* <div className="text-sm">
                                        <a href="#" className="font-medium text-blue-300 hover:text-blue-200 transition-colors">
                                            Forgot password?
                                        </a>
                                    </div> */}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full flex justify-center items-center py-2 md:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Signing in...
                                            </>
                                        ) : 'Sign in'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;