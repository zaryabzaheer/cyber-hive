import Banner from "./banner/Banner"
import BlockBusters from "./blockbusters/BlockBusters"
import Certifications from "./certifications/Certifications"
import Consultation from "./consultation/Consultation"
import CustomerReviews from "./customer-reviews/CustomerReviews"
import Customer from "./customers/Customer"
import Service from "./services/Service"
import Stats from "./stats/Stats"
import TenExamples from "./text-examples/TenExamples"
import UnprotectedWebsite from "./unprotected-website/UnprotectedWebsite"
import WebsiteProtection from "./website-protection/WebsiteProtection"
import WhatWeDo from "./what-we-do/WhatWeDo"
const Home = () => {
    return (
        <>
            <div className="section-wrapper">
                <Banner />
                <Customer/>
            </div>
            <Service/>
            <WhatWeDo/>
            <Stats/>
            <WebsiteProtection/>
            <Certifications/>
            <CustomerReviews/>
            <UnprotectedWebsite/>
            <TenExamples/>
            <BlockBusters/>
            <Consultation/>
        </>

    )
}

export default Home