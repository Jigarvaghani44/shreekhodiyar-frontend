// components/CookieConsent.js
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const isAccepted = localStorage.getItem("cookie-consent");
        if (!isAccepted) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "true");
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 left-6 right-6 md:right-auto md:left-6 z-50 max-w-md bg-white text-gray-800 shadow-lg rounded-lg p-6 border border-gray-200"
                >
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-1">We use cookies 🍪</h3>
                            <p className="text-sm text-gray-600">
                                We use cookies to enhance your experience, analyze traffic, and serve personalized content.
                            </p>
                            <button
                                onClick={acceptCookies}
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm rounded-lg transition-colors"
                            >
                                Accept & Continue
                            </button>
                        </div>
                        <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-gray-600">
                            <FiX className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
