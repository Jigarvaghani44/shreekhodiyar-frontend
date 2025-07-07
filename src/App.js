import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import CareersPage from './components/CareersPage';
import AboutUsPage from './components/AboutUsPage';
import BlogPage from './components/BlogPage';
import QuickEnquiryPage from './components/QuickEnquiryPage';
import WebDevelopmentPage from './components/WebDevelopmentPage';
import MobileAppsPage from './components/MobileAppsPage';
import GameDevelopmentPage from './components/GameDevelopmentPage';
import UIDesignPage from './components/UIDesignPage';
import SupportPage from './components/SupportPage';
import CaseStudyPage from './components/CaseStudyPage';
import BlogShowPage from './components/BlogShowPage';
import ProjectShowPage from './components/ProjectShowPage';
import TestimonialsPage from './components/Testimonials';
// import ContactPopup from './components/ContactPopup';
import CaseStudyShowPage from './components/CaseStudyShowPage';
import DigitalMarketingPage from './components/DigitalMarketingPage';
import ShopifyDevelopmentPage from './components/ShopifyDevelopmentPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CookiePolicyPage from './components/CookiePolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import FAQPage from './components/FAQPage';
import CookieConsent from './components/CookieConsent';
import Login from './admin/Login';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import AdminPortfolio from './admin/Portfolio';
import AdminServices from './admin/Services';
import AdminBlogs from './admin/Blogs';
import AdminCareers from './admin/Careers';
import AdminTeam from './admin/Team';
import AdminTestimonials from './admin/Testimonials';
import AdminShopifypackages from './admin/ShopifyPackages';
import AdminCaseStudies from './admin/CaseStudies';
import AdminFaqs from './admin/Faqs';
import AdminContact from './admin/Contact';
import AdminLegal from './admin/Legal';
import ScrollToTop from './components/ScrollToTop';
import EmailSubscriptionsPage from './admin/EmailSubscriptionsPage';
import WhatsAppButton from './components/WhatsappButtonDesign';
// import AdminSetting from './admin/Settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Check authentication status on initial load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Optionally verify token validity with your backend
      setIsAuthenticated(true);
    }
  }, []);
  return (
    <div className="App">
      <Router>
        {/* <ContactPopup /> */}
        <ScrollToTop />
        <CookieConsent />
        <WhatsAppButton />
        <Routes>
          <Route
            path="/admin/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/admin/*"
            element={
              isAuthenticated ? (
                <AdminLayout setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="portfolio" element={<AdminPortfolio />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="careers" element={<AdminCareers />} />
            <Route path="team" element={<AdminTeam />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="shopify-packages" element={<AdminShopifypackages />} />
            <Route path="case-studies" element={<AdminCaseStudies />} />
            <Route path="faqs" element={<AdminFaqs />} />
            <Route path="contact" element={<AdminContact />} />
            <Route path="legal" element={<AdminLegal />} />
            <Route path="email-updeted" element={<EmailSubscriptionsPage />} />

            {/* <Route path="settings" element={<AdminSetting />} /> */}
            {/* Add other routes for portfolio, services, etc. */}
          </Route>
          <Route path="*" element={<MainLayout />} />
          {/* <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/carrer" element={<CareersPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/quickenquiry" element={<QuickEnquiryPage />} />
          <Route path="/webdev" element={<WebDevelopmentPage />} />
          <Route path="/mobileapp" element={<MobileAppsPage />} />
          <Route path="/gamedev" element={<GameDevelopmentPage />} />
          <Route path="/uiux" element={<UIDesignPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/casestudy" element={<CaseStudyPage />} />
          <Route path="/blogshow" element={<BlogShowPage />} />
          <Route path="/projectshow" element={<ProjectShowPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/casestudyshow" element={<CaseStudyShowPage />} />
          <Route path="/digmarket" element={<DigitalMarketingPage />} />
          <Route path="/shopdev" element={<ShopifyDevelopmentPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/cookiepolicy" element={<CookiePolicyPage />} />
          <Route path="/termsconditions" element={<TermsOfServicePage />} />
          <Route path="/faqspage" element={<FAQPage />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
// New component to handle the main layout with Navbar and Footer
function MainLayout() {
  const location = useLocation();

  // Don't show Navbar and Footer for admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/carrer" element={<CareersPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/quickenquiry" element={<QuickEnquiryPage />} />
        <Route path="/webdev" element={<WebDevelopmentPage />} />
        <Route path="/mobileapp" element={<MobileAppsPage />} />
        <Route path="/gamedev" element={<GameDevelopmentPage />} />
        <Route path="/uiux" element={<UIDesignPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/casestudy" element={<CaseStudyPage />} />
        <Route path="/blogbyid/:id" element={<BlogShowPage />} />
        <Route path="/projectshow/:id" element={<ProjectShowPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/casestudyshow" element={<CaseStudyShowPage />} />
        <Route path="/digmarket" element={<DigitalMarketingPage />} />
        <Route path="/shopdev" element={<ShopifyDevelopmentPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/cookiepolicy" element={<CookiePolicyPage />} />
        <Route path="/termsconditions" element={<TermsOfServicePage />} />
        <Route path="/faqspage" element={<FAQPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}
export default App;
