// import Footer from "./Footer";
import BlogSection from "./BlogSection";
import HomeTestimonials from "./HomeTestimonials";
import PortfolioGallery from "./PortfolioGallery";
import ScrollAnimationGallery from "./ScrollAnimationGallery";
import SkillsSection from "./SkillsSection";
import WhatCanWeDoForYouSection from "./WhatCanWeDoForYouSection";
import WhyChooseUs from "./WhyChooseUs";
import CreativeAgenc from "./CreativeAgenc";
import InfiniteLogoCarousel from "./InfiniteLogoCarousel";
import StatsSection from "./StatsSection";
// import DesignProcess from "./DesignProcess";
import ServicesSection from "./ServicesSection";
import WebDesignAgencySection from "./WebDesignAgencySection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import GamingHeroSection from "./GamingHeroSection";
import OurServices from "./OurServices";
import BusinessStarterGuide from "./businessStartup";
import OurApproach from "./OurApproach";

function Homepage() {
    return (
        <div className="Homepage">
            {/* <HeroSection /> */}
            <OurServices />
            <BusinessStarterGuide />
            <OurApproach />
            <GamingHeroSection />
            <ScrollAnimationGallery />
            <WhatCanWeDoForYouSection />
            <SkillsSection />
            <CreativeAgenc />
            <ServicesSection />
            <WebDesignAgencySection />
            <StatsSection />
            <InfiniteLogoCarousel />
            {/* <DesignProcess /> */}
            <WhyChooseUs />
            <HomeTestimonials />
            {/* <PortfolioGallery /> */}
            <BlogSection />
            <FAQSection />

        </div>
    );
}

export default Homepage;
