
import DigitalFirst from "./Digitalfirst"
import DigitalForth from "./Digitalforth";
import Digitalsecond from "./Digitalsecond";
import Digitalsevices from "./Digitalthird";
import ToolsTechnologies from "./ToolsTechnologies";
import BusinessStartup from "./businessStartup"
import HomeTestimonials from "./HomeTestimonials";
import OurApproach from "./OurApproach"
import StatsSection from "./StatsSection"

function DigitalMarketingPage() {
    return (
        <div className="digitalmarketingpage">


            <DigitalFirst />
            <Digitalsevices />
            <DigitalForth />
            <ToolsTechnologies />
            <StatsSection />
            <BusinessStartup />
            <OurApproach />
            <HomeTestimonials />
            <Digitalsecond />
        </div>
    );
}


export default DigitalMarketingPage;