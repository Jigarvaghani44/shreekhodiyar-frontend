import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DigitalForth = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* SEO Meta Tags */}
      <title>Digital Marketing Services | Boost Your Online Presence</title>
      <meta name="description" content="Professional digital marketing services including SEO, SEM, SMM, and PPC to grow your business online." />
      <meta name="keywords" content="digital marketing, SEO services, SEM, social media marketing, PPC advertising" />

      {/* First Section - What Digital Marketing Can Do */}
      <motion.section 
        className="mb-20 md:mb-32"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              What Digital Marketing Can Do for Your Business
            </motion.h2>
            <div className="h-8" />
            <motion.p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
              variants={itemVariants}
            >
              Digital marketing encompasses Search Engine Optimization (SEO), Search Engine Marketing (SEM),
              Social Media Marketing (SMM), Pay-Per-Click Advertising (PPC), and much more. It's one of the
              most important services you can invest in for the success and long-term growth of your business.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              variants={itemVariants}
            >
              But it's also an ever-changing landscape that can overwhelm people with its complexity. When done right,
              digital marketing services can generate unbelievable revenue gains, often in a year or less. When done wrong,
              it can cost you thousands of dollars in lost ad spend and bring the wrong people to your website.
            </motion.p>
            
            {/* Animated CTA Button */}
            <motion.button
              className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              Get Your Free Strategy Session
            </motion.button>
          </motion.div>
          
          {/* Image with hover effect */}
          <motion.div 
            className="lg:w-1/2 relative"
            variants={imageVariants}
          >
            <motion.img
              src="team.webp"
              alt="Smiling businessman with gray hair holding a tablet"
              className="rounded-lg shadow-xl w-full h-auto transform transition-all duration-500 hover:scale-101"
              loading="lazy"
              width="1024"
              height="1024"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            />
            {/* Decorative element */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-lg z-0 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 0.2,
                scale: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.6
                }
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Second Section - What Coalition Can Do */}
      <motion.section
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image - Order changes on mobile */}
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1 relative"
            variants={imageVariants}
          >
            <motion.img
              src="team.webp"
              alt="Two business people reviewing charts and graphs on a clipboard"
              className="rounded-lg shadow-xl w-full h-auto transform transition-all duration-500 hover:scale-101"
              loading="lazy"
              width="1024"
              height="1024"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            />
            {/* Decorative element */}
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-lg z-0 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 0.2,
                scale: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.6
                }
              }}
            />
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              What Coalition Technologies Can Do for Your Business
            </motion.h2>
            <div className="h-8" />
            <motion.p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
              variants={itemVariants}
            >
              Coalition Technologies has spent many years developing proprietary digital marketing services
              that focus on driving both short- and long-term growth for our clients. We have amassed an
              elite team of digital marketing professionals from all over the world who create results-driven
              campaigns that generate amazing revenue growth for our clients. And we will get amazing results for you too.
            </motion.p>
            <div className="h-8" />
            <motion.p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
              variants={itemVariants}
            >
              These days, digital marketing agencies are a dime a dozen, and it's hard to know who to trust
              with your business. However, Coalition is a full-service enterprise digital marketing agency
              that can prove our results with over 800 case studies that demonstrate our clients' successes.
              We have generated hundreds of millions of dollars for our clients through our digital marketing
              services and those numbers just keep getting higher.
            </motion.p>
            
            {/* Stats animation */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-3xl font-bold text-blue-800 mb-2">800+</h3>
                <p className="text-gray-600">Case Studies</p>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-3xl font-bold text-blue-800 mb-2">$100M+</h3>
                <p className="text-gray-600">Revenue Generated</p>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500 hidden md:block"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-3xl font-bold text-blue-800 mb-2">Global</h3>
                <p className="text-gray-600">Expert Team</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DigitalForth;