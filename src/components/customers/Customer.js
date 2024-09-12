import Image from "next/image"
import { Images } from "@/assets/assets"
const Customer = () => {
    return (
        <section className="customers">
            <div className="container">
                <div className="customers-content">
                    <div className="customers-content-cirle-area position-relative">
                        <div className="customers-content-cirle-imgs position-relative text-center">
                            <div className="customers-green-cirle">
                                <Image src={Images.greenCircle} alt="green circle"
                                    className="img-fluid" />
                            </div>
                            <div className="customers-white-cirle">
                                <Image src={Images.whiteCircle} alt="white circle"
                                    className="img-fluid" />
                            </div>
                            <div className="customers-content-cirle-info">
                                <span>Who are our</span>
                                <h2>Customers</h2>
                            </div>
                        </div>
                        <div
                            className="customers-content-cirle-area-small-imgs manufacturing-companies-wrapper text-center">
                            <div className="manufacturing-companies small-circle-imgs mb-xxl-3 mb-2">
                                <Image src={Images.manufuctruringCompanies} alt="manufacturing companies"
                                    className="img-fluid" />
                            </div>
                            <h6>Manufacturing companies</h6>
                        </div>
                        <div
                            className="customers-content-cirle-area-small-imgs finance-companies-wrapper text-center">
                            <div className="manufacturing-companies large-circle-imgs mb-xxl-3 mb-2">
                                <Image src={Images.financeCompanies}alt="finance companies"
                                    className="img-fluid" />
                            </div>
                            <h6>Finance companies</h6>
                        </div>
                        <div
                            className="customers-content-cirle-area-small-imgs media-resources-wrapper text-center">
                            <div className="manufacturing-companies small-circle-imgs mb-xxl-3 mb-2">
                                <Image src={Images.mediaResource} alt="media resources" className="img-fluid" />
                            </div>
                            <h6>Media resources</h6>
                        </div>
                        <div
                            className="customers-content-cirle-area-small-imgs healthcare-organizations-wrapper text-center">
                            <div className="manufacturing-companies small-circle-imgs mb-xxl-3 mb-2">
                                <Image src={Images.healthcareOrgnaization} alt="healthcare organizations"
                                    className="img-fluid" />
                            </div>
                            <h6>Healthcare organizations</h6>
                        </div>
                        <div
                            className="customers-content-cirle-area-small-imgs construction-companies-wrapper text-center">
                            <div className="manufacturing-companies large-circle-imgs mb-xxl-3 mb-2">
                                <Image src={Images.constructionCompanies} alt="construction companies"
                                    className="img-fluid" />
                            </div>
                            <h6>Construction companies</h6>
                        </div>
                        <div
                            className="customers-content-cirle-area-small-imgs booking-services-wrapper text-center">
                            <div className="manufacturing-companies large-circle-imgs mb-xxl-3 mb-2">
                                <Image src={Images.bookingServices} alt="booking and services"
                                    className="img-fluid" />
                            </div>
                            <h6>Booking and services</h6>
                        </div>
                        <div
                            className="customers-content-cirle-area-small-imgs product-companies-wrapper text-center">
                            <div className="manufacturing-companies large-circle-imgs mb-xxl-3 mb-2">
                                <Image src={Images.productServices} alt="product outsourcing IT companies"
                                    className="img-fluid" />
                            </div>
                            <h6>Product outsourcing IT companies</h6>
                        </div>
                        <div className="customers-content-cirle-area-small-imgs online-stores-wrapper text-center">
                            <div className="manufacturing-companies small-circle-imgs mb-xxl-3 mb-2">
                                <Image src={Images.onlineStores}alt="online stores" className="img-fluid" />
                            </div>
                            <h6>Online stores</h6>
                        </div>
                    </div>
                    <div className="customers-content-last-info text-center">
                        <p>These are companies for which sites are valuable. And their loss, access hacking or
                            data
                            leakage will bring significant losses. Therefore, customers constantly use our
                            services
                            for vulnerability testing (pentest) or round-the-clock protection against hacking.
                        </p>
                        <button className="btn-filled"><span>BECOME OUR CUSTOMER</span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer