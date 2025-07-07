
import DigitalFirst from "./Digitalfirst"
import DigitalForth from "./Digitalforth";
import Digitalsecond from "./Digitalsecond";
import Digitalsevices from "./Digitalthird";
import Digitalfive from "./Digitalfive";
import ToolsTechnologies from "./ToolsTechnologies";
import BusinessStartup from "./businessStartup"
import HomeTestimonials from "./HomeTestimonials";
import OurApproach from "./OurApproach"

function DigitalMarketingPage() {
    return (
        <div className="digitalmarketingpage">


            <DigitalFirst />
            <Digitalsevices />
            <DigitalForth />
            <Digitalfive />
            <ToolsTechnologies />
            <BusinessStartup />
            <OurApproach />
            <HomeTestimonials />
            <Digitalsecond />
        </div>
    );
}


export default DigitalMarketingPage;